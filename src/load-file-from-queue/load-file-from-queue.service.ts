import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './../rabbitmq/rabbitmq.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoadFileFromQueueService {
    constructor(private readonly rabbitmqService: RabbitmqService, private readonly prisma: PrismaService) {
        console.log('inicio LoadFile')
    }

    async onModuleInit(): Promise<void> {
        console.log('LoadFileFromQueueService onModuleInit');
        this.loadFileFromQueue();

    }

    loadFileFromQueue() {
        console.log('LoadFileFromQueueService loadFileFromQueue', process.env.QUEUE_MONITOR);

        this.rabbitmqService.consume(process.env.QUEUE_MONITOR, (msg) => {
            if (msg) {
                const json = JSON.parse(msg.content.toString());
                console.log(json);
                this.rabbitmqService.ack(msg);
            }
        });
    }

}
