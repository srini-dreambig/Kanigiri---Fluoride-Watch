import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let sqlInstance: NeonQueryFunction<false, false> | null = null;

function getSqlInstance(): NeonQueryFunction<false, false> {
  if (!sqlInstance) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not set. Copy .env.example to .env and add your Neon URL.");
    }
    sqlInstance = neon(url);
  }
  return sqlInstance;
}

export function sql(
  strings: TemplateStringsArray,
  ...values: unknown[]
): ReturnType<NeonQueryFunction<false, false>> {
  return getSqlInstance()(strings, ...values);
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}
