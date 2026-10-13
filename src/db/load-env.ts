// Loads local env files for scripts that run outside of Next.js (e.g. the seed
// script). Must be imported before any module that reads `process.env`.
for (const file of [".env.local", ".env"]) {
  try {
    process.loadEnvFile(file);
  } catch {
    // Ignore missing env files.
  }
}