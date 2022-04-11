/*
  Warnings:

  - Added the required column `IS_RECURRENT` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "IS_RECURRENT" BOOLEAN NOT NULL;
