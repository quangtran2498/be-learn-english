import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Res, ValidationPipe } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { UsersService } from './users.service';
import { User } from 'src/models/user.model';
import { Response } from 'express';
import { ResponseType } from 'src/global/globalType';
import { UserDto } from 'src/dto/user.dto';
import { UpdateUserParams } from 'src/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(@Res() res: Response): Promise<ResponseType<User>> {
    try {
      return res.json(new ResponseData<User[]>( await this.usersService.getUsers(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)) 
    } catch (error) {
        return res.json( new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR), );
    }
  }

  @Post()
  createUser(@Body() createUserDto: UserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserParams,
  ) {
    await this.usersService.updateUser(id, updateUserDto);
  }
  
  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.usersService.deleteUser(id);
  }

}
