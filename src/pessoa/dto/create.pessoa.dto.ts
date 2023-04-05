import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
  documento: string | undefined;
  razaoSocial: string | undefined;
  nomeFantasia: string | undefined;
  inscricaoMunicipal: string | undefined;
  inscricaoEstadual: string | undefined;
  nascimento: Date | undefined;
  dataCadastro: Date;
  dataAtualizado: Date;
  ativo: boolean;
  isAdmin: boolean;
  @IsString()
  @IsNotEmpty()
  tipoId: string;
  @IsString()
  @IsNotEmpty()
  empresaId: string;
}
