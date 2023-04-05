import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateContatoDto {
  @IsString()
  @IsNotEmpty()
  id: string;
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
