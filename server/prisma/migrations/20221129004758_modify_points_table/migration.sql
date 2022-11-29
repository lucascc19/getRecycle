/*
  Warnings:

  - You are about to drop the column `contato` on the `Points` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    CONSTRAINT "Points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Points" ("endereco", "id", "userId") SELECT "endereco", "id", "userId" FROM "Points";
DROP TABLE "Points";
ALTER TABLE "new_Points" RENAME TO "Points";
CREATE UNIQUE INDEX "Points_endereco_key" ON "Points"("endereco");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
