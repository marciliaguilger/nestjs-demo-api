import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    name: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}