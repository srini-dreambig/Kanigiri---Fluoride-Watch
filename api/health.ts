import type { VercelRequest, VercelResponse } from "@vercel/node";
import { isDatabaseConfigured, sql } from "../lib/db";
import { nodeHandlerConfig, withVercelHandler } from "../lib/vercelRoute";

export const config = nodeHandlerConfig;

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isDatabaseConfigured()) {
    return res.status(503).json({ ok: false, database: "unconfigured" });
  }

  try {
    await sql`SELECT 1`;
    return res.status(200).json({ ok: true, database: "neon" });
  } catch (err) {
    console.error("api/health db", err);
    return res.status(503).json({ ok: false, database: "unavailable" });
  }
}

export default withVercelHandler("GET /api/health", handler);
