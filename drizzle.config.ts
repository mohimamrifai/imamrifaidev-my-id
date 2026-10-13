import { defineConfig } from "drizzle-kit";

// Load local env files if present (Node >= 20.12). This keeps `drizzle-kit`
// commands working without an extra dotenv dependency.
for (const file of [".env.local", ".env"]) {
  try {
    process.loadEnvFile(file);
  } catch {
    // Ignore missing env files.
  }
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  // Migrations/push run through node-postgres (now installed), so they work
  // against local Postgres and Neon direct connections. The app itself
  // queries through the Neon HTTP driver (src/db/index.ts).
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
  strict: true,
  verbose: true,
});
