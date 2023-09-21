import { Module } from '@nestjs/common';
import { LoadFileFromQueueController } from './load-file-from-queue.controller';
import { LoadFileFromQueueService } from './load-file-from-queue.service';

@Module({
  controllers: [LoadFileFromQueueController],
  providers: [LoadFileFromQueueService]
})
export class LoadFileFromQueueModule {}
