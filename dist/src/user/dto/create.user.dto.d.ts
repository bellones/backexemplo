export declare class CreateUserDto {
    idPessoa: string;
    email: string;
    password: string;
    refreshToken: string | undefined;
    dataCadastro: Date;
    dataAtualizado: Date | undefined;
    ativo: boolean;
}
