import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  idPessoa: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  refreshToken: string | undefined;
  dataCadastro: Date;
  dataAtualizado: Date | undefined;
  ativo: boolean;
}
