/*
  Warnings:

  - You are about to drop the `MoneyBoxSettings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MoneyBoxSettings";

-- CreateTable
CREATE TABLE "SavingPlan" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "dailyIncrease" DOUBLE PRECISION NOT NULL,
    "initialAmount" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SavingPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavingsHistory" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "savingsPlanId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavingsHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavingPlan" ADD CONSTRAINT "SavingPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingsHistory" ADD CONSTRAINT "SavingsHistory_savingsPlanId_fkey" FOREIGN KEY ("savingsPlanId") REFERENCES "SavingPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
