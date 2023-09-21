import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './../rabbitmq/rabbitmq.service';

@Injectable()
export class LoadFileFromQueueService {
    constructor(private readonly rabbitmqService: RabbitmqService) { 
        console.log('inicio LoadFile')
    }

    async onModuleInit(): Promise<void> {
        console.log('LoadFileFromQueueService onModuleInit');
        this.loadFileFromQueue();

    }

    loadFileFromQueue() {
        this.rabbitmqService.consume(process.env.QUEUE_MONITOR, (msg) => {
            console.log(msg.content.toString());
        });
    }

}
