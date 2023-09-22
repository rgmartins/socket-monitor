import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConnectionsService } from './connections.service';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';

@Controller()
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}

  @MessagePattern('createConnection')
  create(@Payload() createConnectionDto: CreateConnectionDto) {
    return this.connectionsService.create(createConnectionDto);
  }

  @MessagePattern('findAllConnections')
  findAll() {
    return this.connectionsService.findAll();
  }

  @MessagePattern('findOneConnection')
  findOne(@Payload() id: number) {
    return this.connectionsService.findOne(id);
  }

  @MessagePattern('updateConnection')
  update(@Payload() updateConnectionDto: UpdateConnectionDto) {
    return this.connectionsService.update(updateConnectionDto.id, updateConnectionDto);
  }

  @MessagePattern('removeConnection')
  remove(@Payload() id: number) {
    return this.connectionsService.remove(id);
  }
}
