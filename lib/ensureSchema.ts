import { neon } from "@neondatabase/serverless";
import { SCHEMA_STATEMENTS } from "./schemaSql.ts";
import { isDatabaseConfigured } from "./db.ts";

let schemaReady: Promise<void> | null = null;

export async function ensureSchema(): Promise<void> {
  if (!isDatabaseConfigured()) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env and add your Neon connection string."
    );
  }
  if (!schemaReady) {
    schemaReady = applySchema();
  }
  return schemaReady;
}

async function applySchema(): Promise<void> {
  const query = neon(process.env.DATABASE_URL!);
  for (const statement of SCHEMA_STATEMENTS) {
    await query.query(statement, []);
  }
}
