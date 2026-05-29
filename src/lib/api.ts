import { normalizeGalleryItem } from "./galleryNormalize";

const API_BASE = import.meta.env.VITE_API_URL ?? "";

export function resolveMediaPath(path: string | undefined | null): string {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  return `${API_BASE}${path}`;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    let message = `Request failed (${res.status})`;
    try {
      const body = JSON.parse(text) as { error?: string };
      if (body.error) message = body.error;
    } catch {
      if (text.trim()) message = text.trim().slice(0, 300);
    }
    throw new Error(message);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export type CrisisCategory = "Drought" | "Fluoride" | "Migration";

export interface GalleryImageDto {
  id: string;
  /** Thumbnail URL for grid — small, cacheable. */
  url: string;
  /** Full-resolution URL for lightbox and download. */
  fullUrl: string;
  caption: string;
  category: CrisisCategory;
  timestamp: number;
}

type GalleryListRow = Partial<GalleryImageDto> & { id: string };

function mapGalleryItem(row: GalleryListRow): GalleryImageDto {
  const item = normalizeGalleryItem(row);
  return {
    ...item,
    url: resolveMediaPath(item.url),
    fullUrl: resolveMediaPath(item.fullUrl),
  };
}

export interface MandalDto {
  slug: string;
  name: string;
  pop: string;
  fluoride: string;
  status: string;
  details: string;
  summary: string;
  keySignals: string[];
  crisisTags: string[];
}

export interface MandalDetailDto extends MandalDto {
  sources: {
    label: string;
    url: string;
    publisher?: string;
    year?: string;
    note?: string;
  }[];
}

export const api = {
  health: () => request<{ ok: boolean; database: string }>("/api/health"),

  gallery: {
    list: async () => {
      const rows = await request<GalleryListRow[]>("/api/gallery");
      return rows.map(mapGalleryItem);
    },
    create: (payload: {
      imageData: string;
      thumbData: string;
      caption?: string;
      category: CrisisCategory;
    }) =>
      request<GalleryListRow>("/api/gallery", {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(mapGalleryItem),
    remove: (id: string) =>
      request<void>(`/api/gallery/${id}`, { method: "DELETE" }),
  },

  mandals: {
    list: (lang: string) => request<MandalDto[]>(`/api/mandals?lang=${lang}`),
    get: (slug: string, lang: string) =>
      request<MandalDetailDto>(`/api/mandals/${slug}?lang=${lang}`),
  },
};
