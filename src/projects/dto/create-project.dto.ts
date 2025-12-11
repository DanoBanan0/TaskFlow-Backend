import { IsNotEmpty, IsString, MinLength, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto {
    @ApiProperty({ example: 'Campaña de Marketing', description: 'El titulo del proyecto'})
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string;

    @ApiProperty({ example: 'Descripcion detallada...', description: 'La descripcion opcional', required: false })
    @IsString()
    @IsOptional()
    description?: string
}
