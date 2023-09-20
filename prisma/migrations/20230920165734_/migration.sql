/*
  Warnings:

  - You are about to drop the column `userId` on the `SavingPlan` table. All the data in the column will be lost.
  - You are about to drop the `SavingsHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavingPlan" DROP CONSTRAINT "SavingPlan_userId_fkey";

-- DropForeignKey
ALTER TABLE "SavingsHistory" DROP CONSTRAINT "SavingsHistory_savingsPlanId_fkey";

-- AlterTable
ALTER TABLE "SavingPlan" DROP COLUMN "userId";

-- DropTable
DROP TABLE "SavingsHistory";

-- DropTable
DROP TABLE "User";
