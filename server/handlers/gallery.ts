import { sql } from "../db.ts";
import { ensureSchema } from "../ensureSchema.ts";

const CATEGORIES = new Set(["Drought", "Fluoride", "Migration"]);
/** ~4.5MB Vercel request cap; base64 JSON payload limit for image_data. */
const MAX_IMAGE_DATA_CHARS = 4_000_000;

export type GalleryImageResponse = {
  id: string;
  url: string;
  caption: string;
  category: string;
  timestamp: number;
};

export async function listGalleryImages(): Promise<GalleryImageResponse[]> {
  await ensureSchema();
  const rows = await sql`
    SELECT id, image_data, caption, category, created_at
    FROM gallery_images
    ORDER BY created_at DESC
  `;
  return rows.map((row) => ({
    id: row.id as string,
    url: row.image_data as string,
    caption: row.caption as string,
    category: row.category as string,
    timestamp: new Date(row.created_at as string).getTime(),
  }));
}

export async function createGalleryImage(
  body: Record<string, unknown>
): Promise<{ status: number; body: GalleryImageResponse | { error: string } }> {
  const imageData = body.imageData;
  const caption = body.caption;
  const category = body.category;

  if (!imageData || typeof imageData !== "string") {
    return { status: 400, body: { error: "imageData is required" } };
  }
  if (imageData.length > MAX_IMAGE_DATA_CHARS) {
    return {
      status: 413,
      body: {
        error:
          "Image is too large. Use a smaller photo (the app compresses before upload; try again or pick another file).",
      },
    };
  }
  if (!category || typeof category !== "string" || !CATEGORIES.has(category)) {
    return {
      status: 400,
      body: { error: "category must be Drought, Fluoride, or Migration" },
    };
  }

  const safeCaption =
    typeof caption === "string" && caption.trim()
      ? caption.trim()
      : "Observation from the field";

  await ensureSchema();

  const rows = await sql`
    INSERT INTO gallery_images (image_data, caption, category)
    VALUES (${imageData}, ${safeCaption}, ${category})
    RETURNING id, image_data, caption, category, created_at
  `;

  const row = rows[0];
  return {
    status: 201,
    body: {
      id: row.id as string,
      url: row.image_data as string,
      caption: row.caption as string,
      category: row.category as string,
      timestamp: new Date(row.created_at as string).getTime(),
    },
  };
}

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function deleteGalleryImage(
  id: string
): Promise<{ status: number; body?: { error: string } }> {
  if (!UUID_RE.test(id)) {
    return { status: 400, body: { error: "Invalid image id" } };
  }

  const rows = await sql`
    DELETE FROM gallery_images WHERE id = ${id}::uuid RETURNING id
  `;
  if (rows.length === 0) {
    return { status: 404, body: { error: "Image not found" } };
  }
  return { status: 204 };
}
