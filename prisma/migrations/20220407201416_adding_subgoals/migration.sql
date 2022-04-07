/*
  Warnings:

  - Added the required column `NAME` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NEEDS_MONEY` to the `Goals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "NAME" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Goals" ADD COLUMN     "NEEDS_MONEY" BOOLEAN NOT NULL,
ADD COLUMN     "parent_id" TEXT;

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Goals"("ID") ON DELETE SET NULL ON UPDATE CASCADE;
