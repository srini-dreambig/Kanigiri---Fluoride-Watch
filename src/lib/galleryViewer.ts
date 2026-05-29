export function triggerDownload(href: string, filename: string) {
  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function galleryDownloadFilename(category: string, id: string) {
  const safe = category.toLowerCase().replace(/\s+/g, "-");
  return `kanigiri-gallery-${safe}-${id.slice(0, 8)}.jpg`;
}

/** Export rotated JPEG when user rotated in the viewer. */
export async function downloadGalleryImage(
  src: string | undefined,
  filename: string,
  rotationDeg: number
): Promise<void> {
  if (!src) {
    throw new Error("Image URL is missing");
  }
  const normalized = ((rotationDeg % 360) + 360) % 360;
  if (normalized === 0) {
    triggerDownload(src, filename);
    return;
  }

  const img = await loadImage(src);
  const canvas = document.createElement("canvas");
  const swap = normalized === 90 || normalized === 270;
  canvas.width = swap ? img.naturalHeight : img.naturalWidth;
  canvas.height = swap ? img.naturalWidth : img.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    triggerDownload(src, filename);
    return;
  }

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((normalized * Math.PI) / 180);
  ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.92)
  );
  if (!blob) {
    triggerDownload(src, filename);
    return;
  }
  const url = URL.createObjectURL(blob);
  triggerDownload(url, filename);
  URL.revokeObjectURL(url);
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = src;
  });
}
