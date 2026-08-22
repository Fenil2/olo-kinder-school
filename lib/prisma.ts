import { PrismaClient } from '@/lib/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

/**
 * The one Prisma client for the app.
 *
 * Two things matter here.
 *
 * The pooled Neon URL is the right one at runtime: it goes through PgBouncer,
 * which is what keeps a lot of short-lived serverless invocations from
 * exhausting Postgres' connection slots. Migrations use the direct URL
 * instead — see prisma.config.ts.
 *
 * And the client is cached on `globalThis` in development. Next.js reloads
 * this module on every edit, and a fresh `PrismaClient` per reload opens a
 * fresh pool per reload, so the database runs out of connections after a few
 * minutes of editing. Production gets a plain instance: it is constructed
 * once per process, and the global would only keep it alive across a reload
 * that never happens.
 */
const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is not set — copy .env.example to .env and fill in the Neon connection string.')
}

const createClient = () => new PrismaClient({ adapter: new PrismaPg({ connectionString }) })

const globalForPrisma = globalThis as unknown as { prisma?: ReturnType<typeof createClient> }

export const prisma = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
