-- CreateTable
CREATE TABLE "Tipo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "documento" TEXT,
    "razaoSocial" TEXT,
    "nomeFantasia" TEXT,
    "inscricaoMunicipal" TEXT,
    "inscricaoEstadual" TEXT,
    "nascimento" TIMESTAMP(3),
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizado" TIMESTAMP(3),
    "ativo" BOOLEAN DEFAULT false,
    "isAdmin" BOOLEAN DEFAULT false,
    "tipoId" TEXT,
    "empresaId" TEXT,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PessoaTipo" (
    "id" TEXT NOT NULL,
    "idTipo" TEXT NOT NULL,
    "idPessoa" TEXT NOT NULL,

    CONSTRAINT "PessoaTipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" TEXT NOT NULL,
    "idTipo" TEXT NOT NULL,
    "idPessoa" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "ativo" BOOLEAN DEFAULT false,
    "principal" BOOLEAN DEFAULT false,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "idPessoa" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizado" TIMESTAMP(3),
    "ativo" BOOLEAN DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permissao" (
    "id" TEXT NOT NULL,
    "idTipo" TEXT NOT NULL,
    "idPessoa" TEXT NOT NULL,
    "listar" BOOLEAN DEFAULT false,
    "cadastrar" BOOLEAN DEFAULT false,
    "editar" BOOLEAN DEFAULT false,
    "excluir" BOOLEAN DEFAULT false,

    CONSTRAINT "Permissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contato" (
    "id" TEXT NOT NULL,
    "idTipo" TEXT NOT NULL,
    "idPessoa" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ativo" BOOLEAN DEFAULT false,

    CONSTRAINT "Contato_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Endereco_cep_local_bairro_cidade_idx" ON "Endereco"("cep", "local", "bairro", "cidade");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "Contato_descricao_idx" ON "Contato"("descricao");

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "Tipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaTipo" ADD CONSTRAINT "PessoaTipo_idTipo_fkey" FOREIGN KEY ("idTipo") REFERENCES "Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaTipo" ADD CONSTRAINT "PessoaTipo_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_idTipo_fkey" FOREIGN KEY ("idTipo") REFERENCES "Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permissao" ADD CONSTRAINT "Permissao_idTipo_fkey" FOREIGN KEY ("idTipo") REFERENCES "Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permissao" ADD CONSTRAINT "Permissao_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_idTipo_fkey" FOREIGN KEY ("idTipo") REFERENCES "Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
