import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserLoginDto{
    @IsNotEmpty({message: "Email can't be empty!"})
    @IsEmail( {}, {message: "Please provide a valid email!"})
    email: string;
    @IsNotEmpty({message: "Password can't be empty!"})
    @MinLength( 6, {message: "Password minimum character should be 6!"})
    password: string;
}