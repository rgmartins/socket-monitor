import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './../rabbitmq/rabbitmq.service';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class LoadFileFromQueueService {

    constructor(private readonly rabbitmqService: RabbitmqService, private readonly prismaService: PrismaService) {
        console.log('inicio LoadFile')
    }

    async onModuleInit(): Promise<void> {
        console.log('LoadFileFromQueueService onModuleInit');
        this.loadFileFromQueue();

    }

    async loadFileFromQueue() {
        console.log('LoadFileFromQueueService loadFileFromQueue', process.env.QUEUE_MONITOR);

        this.rabbitmqService.consume(process.env.QUEUE_MONITOR, (msg) => {
            if (msg) {
                const json = JSON.parse(msg.content.toString());
                json.forEach(element => {
                    this.updateMonitor(element)
                });
                this.rabbitmqService.ack(msg);
            }
        });

    }

    async updateMonitor(reg: any) {
        console.log('*----------------------------------------------------------------*')
        console.log(reg.socketMonitor)
        const monitor = {
            connectionId: reg.socketConexaoDados.id,
            description: reg.socketConexaoDados.description,
            queueName: reg.socketConexaoDados.queueName,
            host: reg.socketConexaoDados.host,
            port: reg.socketConexaoDados.port,
            role: reg.socketConexaoDados.role,
            numConnections: reg.socketConexaoDados.numConnections,
            header: reg.socketConexaoDados.header,
            probe: reg.socketConexaoDados.probe,
            memo: reg.socketConexaoDados.memo,
            dateTimeStart: new Date(reg.socketMonitor.dateTimeStart),
            dateTimeLastMessageInp: new Date(reg.socketMonitor.dateTimeLastMessageInp),
            numberMessagesInp: reg.socketMonitor.numberMessagesInp,
            numberBytesInp: reg.socketMonitor.numberBytesInp,
            numberMessagesOut: reg.socketMonitor.numberMessagesOut,
            numberBytesOut: reg.socketMonitor.numberBytesOut,
        }

        //const results = await this.prismaService.connectionMonitor.create({ data: monitor });
        //console.log(results)
    }

}
