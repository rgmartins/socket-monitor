import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadFileFromQueueModule } from './load-file-from-queue/load-file-from-queue.module';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    LoadFileFromQueueModule
  ],
  controllers: [AppController],
  providers: [AppService, RabbitmqService],
})
export class AppModule { }
