import { Router } from "express";
import {
  createGalleryImage,
  deleteGalleryImage,
  listGalleryImages,
} from "../handlers/gallery.ts";

export const galleryRouter = Router();

galleryRouter.get("/", async (_req, res) => {
  try {
    const data = await listGalleryImages();
    res.json(data);
  } catch (err) {
    console.error("GET /api/gallery", err);
    res.status(500).json({ error: "Failed to load gallery images" });
  }
});

galleryRouter.post("/", async (req, res) => {
  try {
    const result = await createGalleryImage(
      (req.body ?? {}) as Record<string, unknown>
    );
    res.status(result.status).json(result.body);
  } catch (err) {
    console.error("POST /api/gallery", err);
    const message =
      err instanceof Error && err.message.includes("DATABASE_URL")
        ? "Database is not configured. Set DATABASE_URL in .env."
        : "Failed to save gallery image";
    res.status(500).json({ error: message });
  }
});

galleryRouter.delete("/:id", async (req, res) => {
  try {
    const result = await deleteGalleryImage(req.params.id);
    if (result.status === 204) {
      res.status(204).send();
      return;
    }
    res.status(result.status).json(result.body);
  } catch (err) {
    console.error("DELETE /api/gallery/:id", err);
    res.status(500).json({ error: "Failed to delete gallery image" });
  }
});
