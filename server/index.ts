import "dotenv/config";
import express from "express";
import cors from "cors";
import { galleryRouter } from "./routes/gallery.ts";
import { mandalsRouter } from "./routes/mandals.ts";
import { ensureSchema } from "./ensureSchema.ts";

const PORT = Number(process.env.PORT) || 3001;

async function main() {
  await ensureSchema();

  const app = express();
  app.use(cors({ origin: true }));
  app.use(express.json({ limit: "15mb" }));

  app.get("/api/health", async (_req, res) => {
    const { isDatabaseConfigured, sql } = await import("./db.ts");
    if (!isDatabaseConfigured()) {
      res.status(503).json({ ok: false, database: "unconfigured" });
      return;
    }
    try {
      await sql`SELECT 1`;
      res.json({ ok: true, database: "neon" });
    } catch {
      res.status(503).json({ ok: false, database: "unavailable" });
    }
  });

  app.use("/api/gallery", galleryRouter);
  app.use("/api/mandals", mandalsRouter);

  app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
