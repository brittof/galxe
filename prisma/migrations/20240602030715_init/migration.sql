-- CreateTable
CREATE TABLE "todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "owner" TEXT NOT NULL DEFAULT 'Anonymous',
    "avatar" TEXT DEFAULT 'https://abre.ai/jUTD',
    "done" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "todos_title_key" ON "todos"("title");
