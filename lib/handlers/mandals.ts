import { sql } from "../db.ts";
import { ensureSchema } from "../ensureSchema.ts";
import { mandalSlugsInOrder, type MandalSlug } from "../../src/data/mandals.ts";

const LANGS = new Set(["en", "te", "hi"]);

export async function listMandals(langParam: string | undefined) {
  await ensureSchema();
  const lang = LANGS.has(String(langParam)) ? String(langParam) : "en";

  const rows = await sql`
    SELECT
      m.slug,
      m.population,
      m.fluoride_range,
      m.crisis_tags,
      t.name,
      t.status_label,
      t.details,
      t.summary,
      t.key_signals
    FROM mandals m
    JOIN mandal_translations t ON t.mandal_slug = m.slug AND t.language = ${lang}
    ORDER BY m.sort_order ASC
  `;

  return rows.map((row) => ({
    slug: row.slug,
    name: row.name,
    pop: row.population,
    fluoride: row.fluoride_range,
    status: row.status_label,
    details: row.details,
    summary: row.summary,
    keySignals: row.key_signals,
    crisisTags: row.crisis_tags,
  }));
}

export async function getMandalBySlug(
  slug: string,
  langParam: string | undefined
): Promise<{ status: number; body: Record<string, unknown> }> {
  if (!mandalSlugsInOrder.includes(slug as MandalSlug)) {
    return { status: 404, body: { error: "Mandal not found" } };
  }

  const lang = LANGS.has(String(langParam)) ? String(langParam) : "en";

  await ensureSchema();

  const mandalRows = await sql`
    SELECT
      m.slug,
      m.population,
      m.fluoride_range,
      m.crisis_tags,
      t.name,
      t.status_label,
      t.details,
      t.summary,
      t.key_signals
    FROM mandals m
    JOIN mandal_translations t ON t.mandal_slug = m.slug AND t.language = ${lang}
    WHERE m.slug = ${slug}
  `;

  if (mandalRows.length === 0) {
    return {
      status: 404,
      body: { error: "Mandal not found in database. Run npm run db:seed." },
    };
  }

  const sourceRows = await sql`
    SELECT label, url, publisher, year, note
    FROM mandal_sources
    WHERE mandal_slug = ${slug}
    ORDER BY sort_order ASC
  `;

  const row = mandalRows[0];
  return {
    status: 200,
    body: {
      slug: row.slug,
      name: row.name,
      pop: row.population,
      fluoride: row.fluoride_range,
      status: row.status_label,
      details: row.details,
      summary: row.summary,
      keySignals: row.key_signals,
      crisisTags: row.crisis_tags,
      sources: sourceRows.map((s) => ({
        label: s.label,
        url: s.url,
        publisher: s.publisher ?? undefined,
        year: s.year ?? undefined,
        note: s.note ?? undefined,
      })),
    },
  };
}
