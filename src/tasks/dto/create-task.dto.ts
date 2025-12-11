import { IsString, IsNotEmpty, IsOptional, IsBoolean} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({ example: 'Implementar algo al codigo', description: 'El titulo de la tarea' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: false, description: 'Indica si la tarea esta completa', required: false })
    @IsOptional()
    @IsBoolean()
    isComplete: boolean
}
