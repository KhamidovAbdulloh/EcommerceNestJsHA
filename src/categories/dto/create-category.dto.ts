import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message: "Title can't be empty!"})
    @IsString({message: "Title should be string!"})
    title: string;

    @IsNotEmpty({message: "Description can't be empty!"})
    @IsString({message: "Description should be string!"})
    description: string;
}
