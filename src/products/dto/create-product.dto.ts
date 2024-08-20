import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({message: "Title can't be empty!"})
    @IsString({message: "Title should be string!"})
    title: string;

    @IsNotEmpty({message: "Description can't be empty!"})
    @IsString({message: "Description should be string!"})
    description: string;

    @IsNotEmpty({message: "Price can't be empty!"})
    @IsNumber({maxDecimalPlaces: 2}, {message: "Price should be number and max decimal precission 2!"})
    @IsPositive({message: "Price should be positive number!"})
    price: number;

    @IsNotEmpty({message: "Stock can't be empty!"})
    @IsNumber({}, {message: "Stock should be number!"})
    @Min(0, {message: "Stock can't be negative"})
    stock: number;

    @IsNotEmpty({message: "Images can't be empty!"})
    @IsArray({message: "Images should be in array format!"})
    images: string[];

    @IsNotEmpty({message: "Category can't be empty!"})
    @IsNumber({}, {message: "Category id should be number!"})
    categoryId: number;
}
