import { sql } from "../db";
import { ensureSchema } from "../ensureSchema";
import { dataUrlToBuffer } from "../galleryImageBytes";

const CATEGORIES = new Set(["Drought", "Fluoride", "Migration"]);
const MAX_IMAGE_DATA_CHARS = 4_000_000;

export type GalleryListItem = {
  id: string;
  url: string;
  fullUrl: string;
  caption: string;
  category: string;
  timestamp: number;
};

export type GalleryImageResponse = GalleryListItem;

function imagePaths(id: string) {
  return {
    url: `/api/gallery/thumb/${id}`,
    fullUrl: `/api/gallery/full/${id}`,
  };
}

export async function listGalleryImages(): Promise<GalleryListItem[]> {
  await ensureSchema();
  const rows = await sql`
    SELECT id, caption, category, created_at
    FROM gallery_images
    ORDER BY created_at DESC
  `;
  return rows.map((row) => {
    const id = row.id as string;
    return {
      id,
      ...imagePaths(id),
      caption: row.caption as string,
      category: row.category as string,
      timestamp: new Date(row.created_at as string).getTime(),
    };
  });
}

export async function getGalleryImageBytes(
  id: string,
  variant: "thumb" | "full"
): Promise<{ status: number; buffer?: Buffer; contentType?: string; error?: string }> {
  await ensureSchema();
  const rows = await sql`
    SELECT image_data, thumb_data FROM gallery_images WHERE id = ${id}::uuid
  `;
  if (rows.length === 0) {
    return { status: 404, error: "Image not found" };
  }

  const row = rows[0];
  const thumb = row.thumb_data as string | null;
  const full = row.image_data as string;
  const dataUrl = variant === "thumb" ? thumb || full : full;

  if (!dataUrl) {
    return { status: 404, error: "Image not found" };
  }

  try {
    const { buffer, contentType } = dataUrlToBuffer(dataUrl);
    return { status: 200, buffer, contentType };
  } catch {
    return { status: 500, error: "Invalid image data" };
  }
}

export async function createGalleryImage(
  body: Record<string, unknown>
): Promise<{ status: number; body: GalleryListItem | { error: string } }> {
  const imageData = body.imageData;
  const thumbData = body.thumbData;
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

  const safeThumb =
    typeof thumbData === "string" && thumbData.startsWith("data:") ? thumbData : imageData;

  await ensureSchema();

  const rows = await sql`
    INSERT INTO gallery_images (image_data, thumb_data, caption, category)
    VALUES (${imageData}, ${safeThumb}, ${safeCaption}, ${category})
    RETURNING id, caption, category, created_at
  `;

  const row = rows[0];
  const id = row.id as string;
  return {
    status: 201,
    body: {
      id,
      ...imagePaths(id),
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
