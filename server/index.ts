import "dotenv/config";
import app from "./app";
import { ensureSchema } from "../lib/ensureSchema";
import { formatDbError } from "../lib/dbError";

const PORT = Number(process.env.PORT) || 3001;

async function main() {
  try {
    await ensureSchema();
    console.log("Database schema ready.");
  } catch (err) {
    console.error("Schema setup failed:", formatDbError(err));
    console.error("Fix DATABASE_URL in .env, then run: npm run db:migrate");
  }

  app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
