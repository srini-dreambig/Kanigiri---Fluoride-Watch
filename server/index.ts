import "dotenv/config";
import express from "express";
import cors from "cors";
import { galleryRouter } from "./routes/gallery.ts";
import { mandalsRouter } from "./routes/mandals.ts";
import { ensureSchema } from "../lib/ensureSchema.ts";
import { formatDbError } from "../lib/dbError.ts";
import { isDatabaseConfigured, sql } from "../lib/db.ts";
import { asyncRoute } from "./asyncRoute.ts";

const PORT = Number(process.env.PORT) || 3001;

async function main() {
  try {
    await ensureSchema();
    console.log("Database schema ready.");
  } catch (err) {
    console.error("Schema setup failed:", formatDbError(err));
    console.error("Fix DATABASE_URL in .env, then run: npm run db:migrate");
  }

  const app = express();
  app.use(cors({ origin: true }));
  app.use(express.json({ limit: "15mb" }));

  app.get(
    "/api/health",
    asyncRoute(async (_req, res) => {
      if (!isDatabaseConfigured()) {
        res.status(503).json({ ok: false, database: "unconfigured" });
        return;
      }
      try {
        await sql`SELECT 1`;
        res.json({ ok: true, database: "neon" });
      } catch (err) {
        console.error("GET /api/health", err);
        res.status(503).json({ ok: false, database: "unavailable" });
      }
    })
  );

  app.use("/api/gallery", galleryRouter);
  app.use("/api/mandals", mandalsRouter);

  app.use(
    (
      err: unknown,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ) => {
      console.error("API error:", err);
      if (res.headersSent) return;
      res.status(500).json({ error: formatDbError(err) });
    }
  );

  app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
