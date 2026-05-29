import "dotenv/config";
import { Pool } from "@neondatabase/serverless";
import { SCHEMA_SQL } from "./schemaSql.ts";

async function migrate() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL is required");
    process.exit(1);
  }

  const pool = new Pool({ connectionString: url });
  await pool.query(SCHEMA_SQL);
  await pool.end();
  console.log("Neon schema applied successfully.");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
