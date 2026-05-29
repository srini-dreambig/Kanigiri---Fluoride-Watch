import type { VercelResponse } from "@vercel/node";
import { getGalleryImageBytes } from "./handlers/gallery.ts";

const CACHE = "public, max-age=31536000, immutable";

export async function sendGalleryImage(
  res: VercelResponse,
  id: string,
  variant: "thumb" | "full"
) {
  const result = await getGalleryImageBytes(id, variant);
  if (result.status !== 200 || !result.buffer) {
    return res.status(result.status).json({ error: result.error ?? "Not found" });
  }
  res.setHeader("Content-Type", result.contentType ?? "image/jpeg");
  res.setHeader("Cache-Control", CACHE);
  return res.status(200).send(result.buffer);
}

export async function sendGalleryImageExpress(
  res: import("express").Response,
  id: string,
  variant: "thumb" | "full"
) {
  const result = await getGalleryImageBytes(id, variant);
  if (result.status !== 200 || !result.buffer) {
    res.status(result.status).json({ error: result.error ?? "Not found" });
    return;
  }
  res.setHeader("Content-Type", result.contentType ?? "image/jpeg");
  res.setHeader("Cache-Control", CACHE);
  res.send(result.buffer);
}
