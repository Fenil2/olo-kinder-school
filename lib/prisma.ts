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
 *
 * The client is also built lazily, on the first query rather than at import.
 * `next build` imports every route module to read its config — including the
 * dynamic ones that only ever talk to the database at request time — so
 * connecting at import turns a build with no `DATABASE_URL` in its
 * environment into a failed build instead of a deploy that needs the variable
 * set. A missing URL still throws; it just throws at the query.
 */
const createClient = () => {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    throw new Error('DATABASE_URL is not set — copy .env.example to .env and fill in the Neon connection string.')
  }

  return new PrismaClient({ adapter: new PrismaPg({ connectionString }) })
}

type Client = ReturnType<typeof createClient>

const globalForPrisma = globalThis as unknown as { prisma?: Client }

let client: Client | undefined

const getClient = () => {
  client ??= globalForPrisma.prisma ?? createClient()
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = client
  return client
}

export const prisma = new Proxy({} as Client, {
  get(_target, property) {
    const instance = getClient()
    const value = Reflect.get(instance, property)
    return typeof value === 'function' ? value.bind(instance) : value
  },
})
