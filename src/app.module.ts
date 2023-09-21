import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RabbitmqService],
})
export class AppModule {}
