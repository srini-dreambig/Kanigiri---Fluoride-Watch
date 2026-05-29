import JSZip from "jszip";
import type { GalleryImageDto } from "./api";
import { galleryDownloadFilename, triggerDownload } from "./galleryViewer";

function zipTimestamp(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function dataUrlToBlob(dataUrl: string): { blob: Blob; ext: string } {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    throw new Error("Invalid image data");
  }
  const mime = match[1];
  const ext = mime.includes("png") ? "png" : mime.includes("webp") ? "webp" : "jpg";
  const binary = atob(match[2]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return { blob: new Blob([bytes], { type: mime }), ext };
}

async function blobFromImageUrl(url: string | undefined): Promise<{ blob: Blob; ext: string }> {
  if (!url) {
    throw new Error("Image URL is missing");
  }
  if (url.startsWith("data:")) {
    return dataUrlToBlob(url);
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch image");
  const blob = await res.blob();
  const ext =
    blob.type.includes("png") ? "png" : blob.type.includes("webp") ? "webp" : "jpg";
  return { blob, ext };
}

/** One file as-is; multiple files as `kanigiri-{timestamp}.zip`. */
export async function downloadGallerySelection(images: GalleryImageDto[]): Promise<void> {
  if (images.length === 0) return;

  if (images.length === 1) {
    const img = images[0];
    const { blob, ext } = await blobFromImageUrl(img.fullUrl);
    const url = URL.createObjectURL(blob);
    const base = galleryDownloadFilename(img.category, img.id).replace(/\.jpg$/, "");
    triggerDownload(url, `${base}.${ext}`);
    URL.revokeObjectURL(url);
    return;
  }

  const zip = new JSZip();
  const usedNames = new Set<string>();

  for (const img of images) {
    const { blob, ext } = await blobFromImageUrl(img.fullUrl);
    let name = galleryDownloadFilename(img.category, img.id).replace(/\.jpg$/, `.${ext}`);
    if (usedNames.has(name)) {
      name = name.replace(`.${ext}`, `-${img.id.slice(0, 6)}.${ext}`);
    }
    usedNames.add(name);
    zip.file(name, blob);
  }

  const archive = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
  const url = URL.createObjectURL(archive);
  triggerDownload(url, `kanigiri-${zipTimestamp()}.zip`);
  URL.revokeObjectURL(url);
}
