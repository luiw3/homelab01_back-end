/*
  Warnings:

  - Added the required column `TARGET_DATE` to the `Goals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goals" ADD COLUMN     "TARGET_DATE" TIMESTAMP(3) NOT NULL;
