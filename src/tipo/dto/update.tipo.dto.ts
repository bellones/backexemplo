import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTipoDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  nome: string;
}
