const API_BASE = import.meta.env.VITE_API_URL ?? "";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? `Request failed (${res.status})`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export type CrisisCategory = "Drought" | "Fluoride" | "Migration";

export interface GalleryImageDto {
  id: string;
  url: string;
  caption: string;
  category: CrisisCategory;
  timestamp: number;
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
    list: () => request<GalleryImageDto[]>("/api/gallery"),
    create: (payload: { imageData: string; caption?: string; category: CrisisCategory }) =>
      request<GalleryImageDto>("/api/gallery", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    remove: (id: string) =>
      request<void>(`/api/gallery/${id}`, { method: "DELETE" }),
  },

  mandals: {
    list: (lang: string) => request<MandalDto[]>(`/api/mandals?lang=${lang}`),
    get: (slug: string, lang: string) =>
      request<MandalDetailDto>(`/api/mandals/${slug}?lang=${lang}`),
  },
};
