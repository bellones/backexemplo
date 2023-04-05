import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
  idTipo: string | undefined;
}
