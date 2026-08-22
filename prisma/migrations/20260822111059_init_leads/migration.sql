-- CreateEnum
CREATE TYPE "LeadSource" AS ENUM ('HOME', 'ADMISSIONS', 'CONTACT');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'ENROLLED', 'CLOSED');

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "parentName" TEXT NOT NULL,
    "childName" TEXT,
    "childAge" INTEGER,
    "phone" TEXT,
    "email" TEXT,
    "subject" TEXT,
    "message" TEXT,
    "source" "LeadSource" NOT NULL,
    "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt" DESC);

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Lead_source_idx" ON "Lead"("source");
