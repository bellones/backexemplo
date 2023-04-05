export declare class UpdateEnderecoDto {
    id: string;
    idTipo: string;
    idPessoa: string;
    cep: string;
    local: string;
    numero: string;
    bairro: string;
    complemento: string | undefined;
    cidade: string;
    estado: string;
    ativo: boolean | undefined;
    principal: boolean | undefined;
}
