import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  createGalleryImage,
  listGalleryImages,
} from "../../server/handlers/gallery";

/** Vercel default is 1MB — gallery uploads need more headroom for base64 JPEG. */
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4.5mb",
    },
  },
};

function parseJsonBody(req: VercelRequest): Record<string, unknown> {
  const raw = req.body;
  if (raw == null) return {};
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  if (typeof raw === "object") return raw as Record<string, unknown>;
  return {};
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "GET") {
      const data = await listGalleryImages();
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const result = await createGalleryImage(parseJsonBody(req));
      return res.status(result.status).json(result.body);
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("api/gallery", err);
    const message =
      err instanceof Error && err.message.includes("DATABASE_URL")
        ? "Database is not configured. Set DATABASE_URL in Vercel environment variables."
        : err instanceof Error
          ? err.message
          : "Failed to process gallery request";
    return res.status(500).json({ error: message });
  }
}
