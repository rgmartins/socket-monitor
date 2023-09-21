import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadFileFromQueueModule } from './load-file-from-queue/load-file-from-queue.module';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Module({
  imports: [
    LoadFileFromQueueModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RabbitmqService],
})
export class AppModule { }
