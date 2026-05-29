import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { SCHEMA_STATEMENTS } from "../lib/schemaSql.ts";

async function migrate() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL is required");
    process.exit(1);
  }

  const query = neon(url);
  for (const statement of SCHEMA_STATEMENTS) {
    await query.query(statement, []);
  }
  console.log("Neon schema applied successfully.");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
