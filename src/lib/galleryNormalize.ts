import type { CrisisCategory, GalleryImageDto } from "./api";

export function galleryMediaPaths(id: string) {
  return {
    url: `/api/gallery/thumb/${id}`,
    fullUrl: `/api/gallery/full/${id}`,
  };
}

/** Map pre-v5 API paths to current Vercel routes. */
function rewriteLegacyApiPath(path: string, id: string): string {
  if (path === `/api/gallery/${id}/thumb`) return `/api/gallery/thumb/${id}`;
  if (path === `/api/gallery/${id}/full`) return `/api/gallery/full/${id}`;
  return path;
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
      typeof legacyUrl === "string" && legacyUrl.length > 0
        ? rewriteLegacyApiPath(legacyUrl, raw.id)
        : paths.url;
    fullUrl =
      typeof legacyFull === "string" && legacyFull.length > 0
        ? rewriteLegacyApiPath(legacyFull, raw.id)
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
