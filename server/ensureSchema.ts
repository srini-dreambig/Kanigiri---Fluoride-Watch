import { Pool } from "@neondatabase/serverless";
import { SCHEMA_SQL } from "./schemaSql.ts";
import { isDatabaseConfigured } from "./db.ts";

let schemaReady: Promise<void> | null = null;

export async function ensureSchema(): Promise<void> {
  if (!isDatabaseConfigured()) {
    throw new Error("DATABASE_URL is not set. Add it to Vercel Environment Variables.");
  }
  if (!schemaReady) {
    schemaReady = applySchema();
  }
  return schemaReady;
}

async function applySchema(): Promise<void> {
  const url = process.env.DATABASE_URL!;
  const pool = new Pool({ connectionString: url });
  try {
    await pool.query(SCHEMA_SQL);
  } finally {
    await pool.end();
  }
}
