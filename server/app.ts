import express from "express";
import cors from "cors";
import { galleryRouter } from "./routes/gallery";
import { mandalsRouter } from "./routes/mandals";
import { formatDbError } from "../lib/dbError";
import { isDatabaseConfigured, sql } from "../lib/db";
import { asyncRoute } from "./asyncRoute";

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

export default app;
