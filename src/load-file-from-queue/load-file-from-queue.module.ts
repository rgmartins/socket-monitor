import { Module } from '@nestjs/common';
import { LoadFileFromQueueService } from './load-file-from-queue.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [LoadFileFromQueueService, RabbitmqService, PrismaService]
})
export class LoadFileFromQueueModule { }
