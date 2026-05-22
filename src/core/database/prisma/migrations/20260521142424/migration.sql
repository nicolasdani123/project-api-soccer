/*
  Warnings:

  - The values [RIGTH] on the enum `PreferredFootEnum` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `shortName` on table `Team` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `Team` required. This step will fail if there are existing NULL values in that column.
  - Made the column `foundedYear` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PreferredFootEnum_new" AS ENUM ('LEFT', 'RIGHT');
ALTER TABLE "Player" ALTER COLUMN "preferredFoot" TYPE "PreferredFootEnum_new" USING ("preferredFoot"::text::"PreferredFootEnum_new");
ALTER TYPE "PreferredFootEnum" RENAME TO "PreferredFootEnum_old";
ALTER TYPE "PreferredFootEnum_new" RENAME TO "PreferredFootEnum";
DROP TYPE "public"."PreferredFootEnum_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_teamId_fkey";

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "teamId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "shortName" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "foundedYear" SET NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
