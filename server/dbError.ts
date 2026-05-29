export function formatDbError(err: unknown): string {
  const msg =
    err instanceof Error
      ? err.message
      : typeof err === "object" && err !== null && "message" in err
        ? String((err as { message: unknown }).message)
        : "Database error";

  if (msg.includes("DATABASE_URL")) {
    return "Database is not configured. Set DATABASE_URL in Vercel → Settings → Environment Variables, then redeploy.";
  }
  if (msg.includes("gallery_images") && msg.includes("does not exist")) {
    return "Gallery table is missing. Redeploy after this update, or run npm run db:migrate locally.";
  }
  if (msg.includes("gen_random_uuid")) {
    return "Database extension missing. Redeploy — the API will enable pgcrypto automatically.";
  }
  if (msg.includes("connection") || msg.includes("ENOTFOUND") || msg.includes("timeout")) {
    return "Cannot reach Neon database. Check DATABASE_URL and that the Neon project is active.";
  }

  return msg;
}
