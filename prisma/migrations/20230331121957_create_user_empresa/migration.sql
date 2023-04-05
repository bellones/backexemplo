-- CreateTable
CREATE TABLE "UserEmpresa" (
    "id" TEXT NOT NULL,
    "idPessoa" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "pessoaId" TEXT,

    CONSTRAINT "UserEmpresa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserEmpresa" ADD CONSTRAINT "UserEmpresa_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
