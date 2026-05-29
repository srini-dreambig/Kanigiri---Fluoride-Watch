import { Router } from "express";
import {
  createGalleryImage,
  deleteGalleryImage,
  listGalleryImages,
} from "../../lib/handlers/gallery.ts";
import { formatDbError } from "../../lib/dbError.ts";
import { sendGalleryImageExpress } from "../../lib/sendGalleryImage.ts";
import { asyncRoute } from "../asyncRoute.ts";

export const galleryRouter = Router();

galleryRouter.get(
  "/",
  asyncRoute(async (_req, res) => {
    try {
      const data = await listGalleryImages();
      res.json(data);
    } catch (err) {
      console.error("GET /api/gallery", err);
      res.status(500).json({ error: formatDbError(err) });
    }
  })
);

galleryRouter.post(
  "/",
  asyncRoute(async (req, res) => {
    try {
      const result = await createGalleryImage(
        (req.body ?? {}) as Record<string, unknown>
      );
      res.status(result.status).json(result.body);
    } catch (err) {
      console.error("POST /api/gallery", err);
      res.status(500).json({ error: formatDbError(err) });
    }
  })
);

galleryRouter.get(
  "/thumb/:id",
  asyncRoute(async (req, res) => {
    try {
      await sendGalleryImageExpress(res, req.params.id, "thumb");
    } catch (err) {
      console.error("GET /api/gallery/thumb/:id", err);
      res.status(500).json({ error: formatDbError(err) });
    }
  })
);

galleryRouter.get(
  "/full/:id",
  asyncRoute(async (req, res) => {
    try {
      await sendGalleryImageExpress(res, req.params.id, "full");
    } catch (err) {
      console.error("GET /api/gallery/full/:id", err);
      res.status(500).json({ error: formatDbError(err) });
    }
  })
);

galleryRouter.delete(
  "/:id",
  asyncRoute(async (req, res) => {
    try {
      const result = await deleteGalleryImage(req.params.id);
      if (result.status === 204) {
        res.status(204).send();
        return;
      }
      res.status(result.status).json(result.body);
    } catch (err) {
      console.error("DELETE /api/gallery/:id", err);
      res.status(500).json({ error: formatDbError(err) });
    }
  })
);
