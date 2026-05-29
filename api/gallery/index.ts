import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  createGalleryImage,
  listGalleryImages,
} from "../../server/handlers/gallery";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "GET") {
      const data = await listGalleryImages();
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const result = await createGalleryImage(req.body ?? {});
      return res.status(result.status).json(result.body);
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("api/gallery", err);
    return res.status(500).json({ error: "Failed to process gallery request" });
  }
}
