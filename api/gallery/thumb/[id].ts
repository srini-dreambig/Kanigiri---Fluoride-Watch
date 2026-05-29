import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendGalleryImage } from "../../../lib/sendGalleryImage";
import { nodeHandlerConfig, withVercelHandler } from "../../../lib/vercelRoute";

export const config = nodeHandlerConfig;

export default withVercelHandler(
  "GET /api/gallery/thumb/:id",
  async (req: VercelRequest, res: VercelResponse) => {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const id = req.query.id;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Image id is required" });
    }

    return sendGalleryImage(res, id, "thumb");
  }
);
