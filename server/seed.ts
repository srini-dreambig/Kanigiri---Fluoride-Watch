import "dotenv/config";
import {
  getMandalProfile,
  mandalProfiles,
  mandalSlugsInOrder,
  type MandalSlug,
  type SupportedLanguage,
} from "../src/data/mandals.ts";
import { translations } from "../src/translations.ts";
import { sql } from "./db.ts";

const languages: SupportedLanguage[] = ["en", "te", "hi"];

async function seed() {
  for (let i = 0; i < mandalSlugsInOrder.length; i++) {
    const slug = mandalSlugsInOrder[i] as MandalSlug;
    const profile = mandalProfiles[slug];

    await sql`
      INSERT INTO mandals (slug, population, fluoride_range, crisis_tags, sort_order)
      VALUES (
        ${slug},
        ${translations.en.mandal_details.list[i].pop},
        ${translations.en.mandal_details.list[i].fluoride},
        ${JSON.stringify(profile.crisisTags)}::jsonb,
        ${i}
      )
      ON CONFLICT (slug) DO UPDATE SET
        population = EXCLUDED.population,
        fluoride_range = EXCLUDED.fluoride_range,
        crisis_tags = EXCLUDED.crisis_tags,
        sort_order = EXCLUDED.sort_order
    `;

    for (const lang of languages) {
      const list = translations[lang].mandal_details.list[i];
      const localized = getMandalProfile(lang, slug);

      await sql`
        INSERT INTO mandal_translations (
          mandal_slug, language, name, status_label, details, summary, key_signals
        )
        VALUES (
          ${slug},
          ${lang},
          ${list.name},
          ${list.status},
          ${list.details},
          ${localized.summary},
          ${JSON.stringify(localized.keySignals)}::jsonb
        )
        ON CONFLICT (mandal_slug, language) DO UPDATE SET
          name = EXCLUDED.name,
          status_label = EXCLUDED.status_label,
          details = EXCLUDED.details,
          summary = EXCLUDED.summary,
          key_signals = EXCLUDED.key_signals
      `;
    }

    await sql`DELETE FROM mandal_sources WHERE mandal_slug = ${slug}`;

    for (let s = 0; s < profile.sources.length; s++) {
      const src = profile.sources[s];
      await sql`
        INSERT INTO mandal_sources (mandal_slug, label, url, publisher, year, note, sort_order)
        VALUES (
          ${slug},
          ${src.label},
          ${src.url},
          ${src.publisher ?? null},
          ${src.year ?? null},
          ${src.note ?? null},
          ${s}
        )
      `;
    }
  }

  console.log(`Seeded ${mandalSlugsInOrder.length} mandals into Neon.`);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
