import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getMandalBySlug } from "../../lib/handlers/mandals";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const slug = req.query.slug;
  if (!slug || Array.isArray(slug)) {
    return res.status(400).json({ error: "Mandal slug is required" });
  }

  try {
    const lang = typeof req.query.lang === "string" ? req.query.lang : undefined;
    const result = await getMandalBySlug(slug, lang);
    return res.status(result.status).json(result.body);
  } catch (err) {
    console.error("GET /api/mandals/:slug", err);
    return res.status(500).json({ error: "Failed to load mandal" });
  }
}
