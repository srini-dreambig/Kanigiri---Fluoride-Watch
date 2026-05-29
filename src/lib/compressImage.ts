async function fileToDataUrl(
  file: File,
  options: {
    maxWidth: number;
    maxHeight: number;
    quality: number;
    maxBytes: number;
  }
): Promise<string> {
  const { maxWidth, maxHeight, quality, maxBytes } = options;

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxWidth / bitmap.width, maxHeight / bitmap.height);
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    bitmap.close();
    throw new Error("Could not prepare image for upload");
  }
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  let q = quality;
  let dataUrl = canvas.toDataURL("image/jpeg", q);
  while (dataUrl.length > maxBytes && q > 0.4) {
    q -= 0.08;
    dataUrl = canvas.toDataURL("image/jpeg", q);
  }

  if (dataUrl.length > maxBytes) {
    throw new Error("Image is still too large after compression. Try a smaller photo.");
  }

  return dataUrl;
}

/** Full-size upload (Vercel ~4.5MB request limit). */
export async function fileToCompressedDataUrl(
  file: File,
  options: {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    maxBytes?: number;
  } = {}
): Promise<string> {
  return fileToDataUrl(file, {
    maxWidth: options.maxWidth ?? 1600,
    maxHeight: options.maxHeight ?? 1600,
    quality: options.quality ?? 0.82,
    maxBytes: options.maxBytes ?? 2_800_000,
  });
}

/** Small preview for fast gallery grid loads. */
export async function fileToThumbnailDataUrl(file: File): Promise<string> {
  return fileToDataUrl(file, {
    maxWidth: 400,
    maxHeight: 400,
    quality: 0.72,
    maxBytes: 80_000,
  });
}
