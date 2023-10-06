import { Module } from '@nestjs/common';
import { LoadFileFromQueueController } from './load-file-from-queue.controller';
import { LoadFileFromQueueService } from './load-file-from-queue.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [LoadFileFromQueueController],
  providers: [LoadFileFromQueueService, RabbitmqService, PrismaService]
})
export class LoadFileFromQueueModule { }
