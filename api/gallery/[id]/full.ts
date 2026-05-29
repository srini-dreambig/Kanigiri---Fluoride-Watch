import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendGalleryImage } from "../../../lib/sendGalleryImage";

export const config = { runtime: "nodejs" };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = req.query.id;
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Image id is required" });
  }

  try {
    return await sendGalleryImage(res, id, "full");
  } catch (err) {
    console.error("GET /api/gallery/:id/full", err);
    return res.status(500).json({ error: "Failed to load image" });
  }
}
