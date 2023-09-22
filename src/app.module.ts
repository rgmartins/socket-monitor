import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadFileFromQueueModule } from './load-file-from-queue/load-file-from-queue.module';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';
import { PrismaService } from './prisma/prisma.service';
import { ConnectionsModule } from './connections/connections.module';

@Module({
  imports: [
    LoadFileFromQueueModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConnectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, RabbitmqService, PrismaService],
})
export class AppModule { }
