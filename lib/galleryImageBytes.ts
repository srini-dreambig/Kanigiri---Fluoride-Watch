/** Parse data:image/...;base64,... into bytes for HTTP responses. */
export function dataUrlToBuffer(dataUrl: string): { buffer: Buffer; contentType: string } {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    throw new Error("Invalid image data");
  }
  const contentType = match[1];
  const binary = Buffer.from(match[2], "base64");
  return { buffer: binary, contentType };
}
