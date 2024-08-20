import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateShippingDto {
    @IsNotEmpty({message: "Phone can't be empty!"})
    @IsString({message: "Phone format should be string!"})
    phone: string;
    @IsOptional()
    @IsString({message: "Name should be string!"})
    name: string;
    @IsNotEmpty({message: "Address can't be empty!"})
    @IsString({message: "Address should be string!"})
    address: string;
    @IsNotEmpty({message: "City can't be empty!"})
    @IsString({message: "City should be string!"})
    city: string;
    @IsNotEmpty({message: "postCode can't be empty!"})
    @IsString({message: "postCode should be string!"})
    postCode: string;
    @IsNotEmpty({message: "State can't be empty!"})
    @IsString({message: "State should be string!"})
    state: string;
    @IsNotEmpty({message: "Country can't be empty!"})
    @IsString({message: "Country should be string!"})
    country: string;
}
