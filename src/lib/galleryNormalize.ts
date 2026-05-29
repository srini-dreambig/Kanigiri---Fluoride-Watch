import type { CrisisCategory, GalleryImageDto } from "./api";

export function galleryMediaPaths(id: string) {
  return {
    url: `/api/gallery/${id}/thumb`,
    fullUrl: `/api/gallery/${id}/full`,
  };
}

/** Supports legacy list rows (inline base64 `url` only) and new thumb/full paths. */
export function normalizeGalleryItem(
  raw: Partial<GalleryImageDto> & { id: string }
): GalleryImageDto {
  const paths = galleryMediaPaths(raw.id);
  const legacyUrl = raw.url;
  const legacyFull = raw.fullUrl;

  let url: string;
  let fullUrl: string;

  if (typeof legacyUrl === "string" && legacyUrl.startsWith("data:")) {
    url = legacyUrl;
    fullUrl =
      typeof legacyFull === "string" && legacyFull.startsWith("data:")
        ? legacyFull
        : legacyUrl;
  } else {
    url =
      typeof legacyUrl === "string" && legacyUrl.length > 0 ? legacyUrl : paths.url;
    fullUrl =
      typeof legacyFull === "string" && legacyFull.length > 0
        ? legacyFull
        : paths.fullUrl;
  }

  const category =
    raw.category === "Drought" || raw.category === "Fluoride" || raw.category === "Migration"
      ? raw.category
      : "Fluoride";

  return {
    id: raw.id,
    url,
    fullUrl,
    caption: raw.caption ?? "",
    category,
    timestamp: typeof raw.timestamp === "number" ? raw.timestamp : Date.now(),
  };
}
