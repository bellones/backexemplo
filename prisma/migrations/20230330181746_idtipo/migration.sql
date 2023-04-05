-- AlterTable
ALTER TABLE "Tipo" ADD COLUMN     "tipoId" TEXT;

-- AddForeignKey
ALTER TABLE "Tipo" ADD CONSTRAINT "Tipo_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "Tipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
