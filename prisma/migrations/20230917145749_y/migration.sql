/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Example";

-- CreateTable
CREATE TABLE "MoneyBoxSettings" (
    "id" SERIAL NOT NULL,
    "startAmount" INTEGER NOT NULL,
    "dailyIncrease" INTEGER NOT NULL,
    "desiredAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MoneyBoxSettings_pkey" PRIMARY KEY ("id")
);
