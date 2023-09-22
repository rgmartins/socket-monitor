import { Module } from '@nestjs/common';
import { ConnectionsService } from './connections.service';
import { ConnectionsController } from './connections.controller';
import { ConnectionsRepository } from './repositories/connections.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ConnectionsController],
  providers: [ConnectionsService , ConnectionsRepository, PrismaService],
})
export class ConnectionsModule {}
