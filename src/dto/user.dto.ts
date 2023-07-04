import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    name?: string;

    @IsNotEmpty()
    password?: string;

    @IsNotEmpty()
    email?: string;
};