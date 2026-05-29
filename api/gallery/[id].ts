import type { VercelRequest, VercelResponse } from "@vercel/node";
import { deleteGalleryImage } from "../../lib/handlers/gallery";
import { nodeHandlerConfig, withVercelHandler } from "../../lib/vercelRoute";

export const config = nodeHandlerConfig;

export default withVercelHandler(
  "DELETE /api/gallery/:id",
  async (req: VercelRequest, res: VercelResponse) => {
    if (req.method !== "DELETE") {
      res.setHeader("Allow", "DELETE");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const id = req.query.id;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Image id is required" });
    }

    const result = await deleteGalleryImage(id);
    if (result.status === 204) {
      return res.status(204).end();
    }
    return res.status(result.status).json(result.body);
  }
);
