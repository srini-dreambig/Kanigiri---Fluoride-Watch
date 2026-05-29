import type { GalleryImageDto } from "./api";
import { resolveMediaPath } from "./api";
import { normalizeGalleryItem } from "./galleryNormalize";

const CACHE_KEY = "kanigiri-gallery-list-v5";

export function readGalleryCache(): GalleryImageDto[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY) ?? sessionStorage.getItem("kanigiri-gallery-list-v3");
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<GalleryImageDto>[];
    if (!Array.isArray(parsed)) return null;
    return parsed
      .filter((row): row is Partial<GalleryImageDto> & { id: string } => Boolean(row?.id))
      .map((row) => {
        const item = normalizeGalleryItem(row);
        return {
          ...item,
          url: resolveMediaPath(item.url),
          fullUrl: resolveMediaPath(item.fullUrl),
        };
      });
  } catch {
    return null;
  }
}

export function writeGalleryCache(images: GalleryImageDto[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(images));
  } catch {
    /* quota exceeded — ignore */
  }
}

export function clearGalleryCache() {
  try {
    sessionStorage.removeItem(CACHE_KEY);
  } catch {
    /* ignore */
  }
}
