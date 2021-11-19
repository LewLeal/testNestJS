import { IsString, IsNumber, IsNotEmpty, IsPositive, Min, Max } from "class-validator";
export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    autor: string;

    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(1200)
    @IsNotEmpty()
    pags: number;
}