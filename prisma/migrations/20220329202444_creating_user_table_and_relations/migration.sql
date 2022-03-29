/*
  Warnings:

  - Added the required column `user_id` to the `Cryptos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Goals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cryptos" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Goals" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Users" (
    "ID" TEXT NOT NULL,
    "EMAIL" TEXT NOT NULL,
    "PASSWORD" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cryptos" ADD CONSTRAINT "Cryptos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
