import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContatoDto {
  @IsString()
  @IsNotEmpty()
  idTipo: string;
  @IsString()
  @IsNotEmpty()
  idPessoa: string;
  @IsString()
  @IsNotEmpty()
  descricao: string;
  ativo: boolean;
}
