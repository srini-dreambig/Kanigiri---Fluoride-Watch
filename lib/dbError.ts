export function formatDbError(err: unknown): string {
  const msg =
    err instanceof Error
      ? err.message
      : typeof err === "object" && err !== null && "message" in err
        ? String((err as { message: unknown }).message)
        : "Database error";

  if (msg.includes("DATABASE_URL")) {
    return "Database is not configured. Copy .env.example to .env and set DATABASE_URL (Neon).";
  }
  if (msg.includes("gallery_images") && msg.includes("does not exist")) {
    return "Gallery table is missing. Run: npm run db:migrate";
  }
  if (msg.includes("gen_random_uuid")) {
    return "Database extension missing. Run: npm run db:migrate";
  }
  if (msg.includes("connection") || msg.includes("ENOTFOUND") || msg.includes("timeout")) {
    return "Cannot reach Neon. Check DATABASE_URL and that your Neon project is active.";
  }

  return msg;
}
