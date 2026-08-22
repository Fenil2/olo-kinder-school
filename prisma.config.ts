import 'dotenv/config'
import { defineConfig } from 'prisma/config'

/**
 * Prisma CLI configuration.
 *
 * Neon hands out two connection strings. `DATABASE_URL` goes through PgBouncer,
 * which is what the app should use — it is what survives a lot of short-lived
 * serverless connections. Migrations cannot run over it, though: PgBouncer's
 * transaction pooling does not carry the session state that DDL and advisory
 * locks need. `DATABASE_URL_UNPOOLED` is the direct connection, so that is
 * what the CLI gets here.
 */
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env['DATABASE_URL_UNPOOLED'] ?? process.env['DATABASE_URL'],
  },
})
