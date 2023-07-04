import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';
import { BaseRepository } from 'src/interfaces/BaseRepository';
import { IUsersRepository } from 'src/interfaces/IUsersRepository';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository
  extends BaseRepository<User, Repository<User>>
  implements IUsersRepository
{ 
  constructor(
    @InjectRepository(User)
    protected readonly repository: Repository<User>
  ) {
    super(repository);
  }

  async findRelationById(id: number): Promise<User> {
    return await this.repository.findOne({ where: { id }, relations: ['users']});
  }
}
