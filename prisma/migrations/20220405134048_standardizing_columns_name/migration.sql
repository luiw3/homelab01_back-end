/*
  Warnings:

  - You are about to drop the column `user_id` on the `Cryptos` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Goals` table. All the data in the column will be lost.
  - Added the required column `USER_ID` to the `Cryptos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `USER_ID` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `USER_ID` to the `Goals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cryptos" DROP CONSTRAINT "Cryptos_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Goals" DROP CONSTRAINT "Goals_user_id_fkey";

-- AlterTable
ALTER TABLE "Cryptos" DROP COLUMN "user_id",
ADD COLUMN     "USER_ID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "user_id",
ADD COLUMN     "USER_ID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Goals" DROP COLUMN "user_id",
ADD COLUMN     "USER_ID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "Users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cryptos" ADD CONSTRAINT "Cryptos_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "Users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "Users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
