export declare class UpdateUserDto {
    id: string;
    idPessoa: string;
    email: string;
    password: string;
    refreshToken: string | undefined;
    dataCadastro: Date;
    dataAtualizado: Date | undefined;
    ativo: boolean;
}
