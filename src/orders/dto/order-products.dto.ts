import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class OrderedProductsDto {
    @IsNotEmpty({message: "Product can't be empty!"})
    @IsNumber({}, {message: "Product should be number!"})
    id: number;
    @IsNumber({maxDecimalPlaces: 2}, {message: "Price should be number and max decimal precission 2!"})
    @IsPositive({message: "Price can't be negative!"})
    product_unit_price: number;
    @IsNumber({}, {message: "Quantity should be number!"})
    @IsPositive({message: "Quantity can't be negative!"})
    product_quantity: number;
}