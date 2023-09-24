import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './../rabbitmq/rabbitmq.service';
import { ConnectionsService } from 'src/connections/connections.service';
import { CreateConnectionDto } from 'src/connections/dto/create-connection.dto';

@Injectable()
export class LoadFileFromQueueService {

    constructor(private readonly rabbitmqService: RabbitmqService, private readonly connectionsService: ConnectionsService) {
        console.log('inicio LoadFile')
    }

    async onModuleInit(): Promise<void> {
        console.log('LoadFileFromQueueService onModuleInit');
        this.loadFileFromQueue();

    }

    async loadFileFromQueue() {
        console.log('LoadFileFromQueueService loadFileFromQueue', process.env.QUEUE_MONITOR);

        const dto: CreateConnectionDto = {
            connectionId: Math.round(1).toString(),
            description: 'string description',
            queueName: 'string queue name',
            ip: 'string ip address',
            port: Math.round(2),
            role: 'string role',
            numConnections: Math.round(3),
            header: 'string header',
            probe: 'string probe'
        }

        console.log(this.connectionsService.create(dto))

        this.rabbitmqService.consume(process.env.QUEUE_MONITOR, (msg) => {
            if (msg) {
                const json = JSON.parse(msg.content.toString());
                console.log(json);
                this.rabbitmqService.ack(msg);
                //preciso usar o 
            }
        });

    }

}
