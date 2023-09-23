import { Injectable } from '@nestjs/common';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
import { ConnectionsRepository } from './repositories/connections.repository';

@Injectable()
export class ConnectionsService {

  constructor(private readonly repository: ConnectionsRepository) { }


  async create(createConnectionDto: CreateConnectionDto) {
    return await this.repository.create(createConnectionDto);
  }

  findAll() {
    return `This action returns all connections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} connection`;
  }

  update(id: number, updateConnectionDto: UpdateConnectionDto) {
    return `This action updates a #${id} connection`;
  }

  remove(id: number) {
    return `This action removes a #${id} connection`;
  }
}
