-- Kanigiri Fluoride Watch — Neon PostgreSQL schema

CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_data TEXT NOT NULL,
  caption TEXT NOT NULL DEFAULT 'Observation from the field',
  category VARCHAR(20) NOT NULL CHECK (category IN ('Drought', 'Fluoride', 'Migration')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS gallery_images_category_idx ON gallery_images (category);
CREATE INDEX IF NOT EXISTS gallery_images_created_at_idx ON gallery_images (created_at DESC);

CREATE TABLE IF NOT EXISTS mandals (
  slug VARCHAR(50) PRIMARY KEY,
  population VARCHAR(32) NOT NULL,
  fluoride_range VARCHAR(64) NOT NULL,
  crisis_tags JSONB NOT NULL DEFAULT '[]'::jsonb,
  sort_order SMALLINT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS mandal_translations (
  mandal_slug VARCHAR(50) NOT NULL REFERENCES mandals (slug) ON DELETE CASCADE,
  language VARCHAR(5) NOT NULL CHECK (language IN ('en', 'te', 'hi')),
  name VARCHAR(120) NOT NULL,
  status_label VARCHAR(64) NOT NULL,
  details TEXT NOT NULL,
  summary TEXT NOT NULL,
  key_signals JSONB NOT NULL DEFAULT '[]'::jsonb,
  PRIMARY KEY (mandal_slug, language)
);

CREATE TABLE IF NOT EXISTS mandal_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mandal_slug VARCHAR(50) NOT NULL REFERENCES mandals (slug) ON DELETE CASCADE,
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  publisher VARCHAR(120),
  year VARCHAR(10),
  note TEXT,
  sort_order SMALLINT NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS mandal_sources_slug_idx ON mandal_sources (mandal_slug);

CREATE TABLE IF NOT EXISTS app_settings (
  key VARCHAR(100) PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
