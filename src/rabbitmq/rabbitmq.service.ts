import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib/callback_api';

@Injectable()
export class RabbitmqService {
    constructor() { }

    private channel: amqp.Channel;
    private isConnected: boolean = false;

    async onModuleInit(): Promise<void> {
        await this.conectaRabbitMQ(channel => {
            this.channel = channel;
        });
    }

    private async ensureConnection() {
        if (!this.isConnected) {
            await new Promise<void>((resolve) => {
                const checkConnection = () => {
                    if (this.isConnected) {
                        resolve();
                    } else {
                        setTimeout(checkConnection, 100);
                    }
                };
                checkConnection();
            });
        }
    }

    async consume(queue: string, callback) {
        try {
            await this.ensureConnection(); // Aguarde a conexão
            await this.channel.assertQueue(queue, { durable: true }); // Verifique se a fila existe; se não existir, crie-a
            this.channel.consume(queue, msg => { callback(msg) })
        } catch (error) {
            console.log('erro no consume')
        }
    }

    async sendToQueue(queue: string, message: string) {
        try {
            await this.ensureConnection(); // Aguarde a conexão
            this.channel.sendToQueue(queue, Buffer.from(message));
        } catch (error) {
            console.log('erro no sendToQueue')
            console.log(error)
        }

    }

    async publish(exchange: string, queue: string, message: string) {
        try {
            await this.ensureConnection(); // Aguarde a conexão
            this.channel.publish(exchange, queue, Buffer.from(message));
        } catch (error) {
            console.log('erro no sendToQueue')
            console.log(error)
        }

    }

    async ack(msg) {
        this.channel.ack(msg)
    }

    async createQueue(queueName: string) {
        try {
            await this.ensureConnection(); // Aguarde a
            await this.channel.assertQueue(queueName, { durable: true })
        } catch (error) {
            console.log('erro no createQueue')
            console.log(error)
        }
    }

    async bindQueue(queueName: string, exchangeName: string, routingPattern: string) {
        await this.channel.bindQueue(queueName, exchangeName, routingPattern);
    }

    async deleteQueue(queueName: string) {
        await this.channel.deleteQueue(queueName);
    }

    conectaRabbitMQ(callback) {
        const amqpURL = "amqp://rgm1301:rogama@localhost";

        return new Promise<void>((resolve, reject) => {
            try {
                amqp.connect(amqpURL, (error, connection) => {
                    if (error) {
                        console.log('conectarRabbitmq erro 1')
                    }
                    try {
                        connection.createChannel((error, channel) => {
                            if (error) {
                                console.log('conectarRabbitmq erro 2')
                            }
                            this.isConnected = true; // Marque a conexão como estabelecida
                            callback(channel);
                            resolve();
                        });
                    } catch (error) {
                        console.log('erro no connection.createChannel')
                    }
                });
            } catch (error) {
                console.log('erro no amqp.connect')
            }
        });
    }
}
