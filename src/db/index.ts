import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

/**
 * Whether a database connection string is available. When it is not, the
 * public site falls back to the static data in `src/data/resume.tsx`.
 */
export const isDbConfigured = Boolean(connectionString);

export type Database = NodePgDatabase<typeof schema>;

// Cache the pool across hot reloads during development.
const globalForDb = globalThis as unknown as {
  __portfolioPool?: Pool;
};

function createPool(): Pool | null {
  if (!connectionString) {
    return null;
  }
  if (process.env.NODE_ENV !== "production" && globalForDb.__portfolioPool) {
    return globalForDb.__portfolioPool;
  }
  const pool = new Pool({
    connectionString,
    max: 5,
    // Neon (with the -pooler endpoint) will reject connections that idle too
    // long, so drain sockets when idle.
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });
  if (process.env.NODE_ENV !== "production") {
    globalForDb.__portfolioPool = pool;
  }
  return pool;
}

const pool = createPool();

export const db: Database | null = pool ? drizzle(pool, { schema }) : null;