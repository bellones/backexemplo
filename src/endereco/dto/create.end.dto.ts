import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  @IsNotEmpty()
  idTipo: string;
  @IsString()
  @IsNotEmpty()
  idPessoa: string;
  @IsString()
  @IsNotEmpty()
  cep: string;
  @IsString()
  @IsNotEmpty()
  local: string;
  @IsString()
  @IsNotEmpty()
  numero: string;
  @IsString()
  @IsNotEmpty()
  bairro: string;
  complemento: string | undefined;
  @IsString()
  @IsNotEmpty()
  cidade: string;
  @IsString()
  @IsNotEmpty()
  estado: string;
  ativo: boolean | undefined;
  principal: boolean | undefined;
}
