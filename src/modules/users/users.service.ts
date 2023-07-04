import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { Users } from 'src/entities/users.entity';
import { IUsersRepository } from 'src/interfaces/IUsersRepository';
import { User } from 'src/models/user.model';
import { UpdateUserParams } from 'src/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  createUser(userDetails: UserDto) {
    const newUser = this.userRepository.create({
      ...userDetails
    });
    return this.userRepository.save(newUser);
  }

  updateUser(userId: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ userId }, { ...updateUserDetails });
  }

  deleteUser(userId: number) {
    return this.userRepository.delete({ userId });
  }
  
}