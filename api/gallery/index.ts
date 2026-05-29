import type { VercelRequest, VercelResponse } from "@vercel/node";
import { formatDbError } from "../../lib/dbError";
import { createGalleryImage, listGalleryImages } from "../../lib/handlers/gallery";
import { nodeHandlerConfig, withVercelHandler } from "../../lib/vercelRoute";

/** Vercel default is 1MB — gallery uploads need more headroom for base64 JPEG. */
export const config = {
  ...nodeHandlerConfig,
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

export default withVercelHandler("api/gallery", async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "GET") {
    try {
      const data = await listGalleryImages();
      return res.status(200).json(data);
    } catch (err) {
      console.error("api/gallery GET", err);
      return res.status(500).json({ error: formatDbError(err) });
    }
  }

  if (req.method === "POST") {
    try {
      const result = await createGalleryImage(parseJsonBody(req));
      return res.status(result.status).json(result.body);
    } catch (err) {
      console.error("api/gallery POST", err);
      return res.status(500).json({ error: formatDbError(err) });
    }
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ error: "Method not allowed" });
});
