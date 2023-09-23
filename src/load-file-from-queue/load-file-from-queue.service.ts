import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './../rabbitmq/rabbitmq.service';
import { ConnectionsService } from 'src/connections/connections.service';

@Injectable()
export class LoadFileFromQueueService {
    
    constructor(private readonly rabbitmqService: RabbitmqService) {
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
                console.log(json);
                this.rabbitmqService.ack(msg);
                //preciso usar o 
            }
        });

    }

}
