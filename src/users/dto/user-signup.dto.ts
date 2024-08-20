import { IsNotEmpty, IsString } from "class-validator";
import { UserLoginDto } from "./user-login.dto";

export class UserSignUpDto extends UserLoginDto{
    @IsNotEmpty({message: "Name can't be empty!"})
    @IsString({message: "Name should be string!"})
    name: string;
}