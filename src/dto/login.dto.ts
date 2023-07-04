import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    name?: string;

    @IsNotEmpty()
    password?: string;

};