import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty({message: "Product can't be empty!"})
    @IsNumber({}, {message: "Product should be number!"})
    productId: number;
    @IsNotEmpty({message: "Ratings can't be empty!"})
    @IsNumber({}, {message: "Ratings should be number!"})
    ratings: number;
    @IsNotEmpty({message: "Comment can't be empty!"})
    @IsString({message: "Comment should be string!"})
    comment: string;
}

