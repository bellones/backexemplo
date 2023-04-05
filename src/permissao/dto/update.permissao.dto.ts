import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePermissaoDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  idTipo: string;
  @IsString()
  @IsNotEmpty()
  idPessoa: string;
  @IsBoolean()
  listar: boolean;
  @IsBoolean()
  cadastrar: boolean;
  @IsBoolean()
  editar: boolean;
  @IsBoolean()
  excluir: boolean;
}
