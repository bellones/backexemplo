/*
  Warnings:

  - You are about to drop the column `teste` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "teste",
ADD COLUMN     "refreshToken" TEXT;
