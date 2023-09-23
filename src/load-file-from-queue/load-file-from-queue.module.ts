import { Module } from '@nestjs/common';
import { LoadFileFromQueueController } from './load-file-from-queue.controller';
import { LoadFileFromQueueService } from './load-file-from-queue.service';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { ConnectionsModule } from 'src/connections/connections.module';
import { ConnectionsService } from 'src/connections/connections.service';
import { ConnectionsRepository } from 'src/connections/repositories/connections.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [ConnectionsModule],
  controllers: [LoadFileFromQueueController],
  providers: [LoadFileFromQueueService, RabbitmqService, ConnectionsService, ConnectionsRepository, PrismaService]
})
export class LoadFileFromQueueModule {}
