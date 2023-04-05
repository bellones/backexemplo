export declare class CreatePessoaDto {
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
    tipoId: string;
    empresaId: string;
}
