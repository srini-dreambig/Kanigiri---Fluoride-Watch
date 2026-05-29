import type { VercelRequest, VercelResponse } from "@vercel/node";
import { listMandals } from "../../server/handlers/mandals";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const lang = typeof req.query.lang === "string" ? req.query.lang : undefined;
    const data = await listMandals(lang);
    return res.status(200).json(data);
  } catch (err) {
    console.error("GET /api/mandals", err);
    return res.status(500).json({ error: "Failed to load mandals" });
  }
}
