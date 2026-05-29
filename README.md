<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Kanigiri Fluoride Watch

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:** Node.js, a [Neon](https://neon.tech) PostgreSQL database

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and set `DATABASE_URL` to your Neon connection string.
3. Create tables and seed mandal data:
   ```bash
   npm run db:setup
   ```
4. Run the app (starts **both** Vite and the API — required for gallery uploads):
   ```bash
   npm run dev
   ```
   - Web: http://localhost:3069  
   - API: http://localhost:3001 (proxied at `/api` during dev)
   - This frees port 3001 first if a stale API process is stuck.

   **Do not use only** `npm run dev:web` for gallery — uploads need the API.

   Verify API: http://localhost:3001/api/health → `{"ok":true,"database":"neon"}`

Or run only one side: `npm run dev:web` or `npm run dev:server`.

### Storage (Neon)

| Data | Table |
|------|--------|
| Gallery uploads | `gallery_images` |
| Mandal profiles | `mandals`, `mandal_translations`, `mandal_sources` |
| App settings | `app_settings` |

Optional: set `GEMINI_API_KEY` in `.env` for Gemini features.

## Deploy on Vercel

1. Push this repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Framework preset: **Vite** (or use the included `vercel.json`).
3. Add environment variables (Production and Preview):
   - `DATABASE_URL` — Neon connection string (required for gallery and mandal APIs).
   - `GEMINI_API_KEY` — optional.
4. After the first deploy, seed the production database once from your machine (same `DATABASE_URL`):
   ```bash
   npm run db:setup
   ```
5. The static site is built to `dist`; all `/api/*` routes go through a **single** serverless function (`api/index.cjs` → bundled Express from `server/app.ts`). `npm run build` runs `scripts/build-api.mjs` to produce `api/_app.cjs`.
6. After deploy, open `/api/health` — expect `{"ok":true,"database":"neon"}`. If you see `FUNCTION_INVOCATION_FAILED`, check Vercel → Logs and confirm `DATABASE_URL` is set.

Gallery images are stored as base64 in Postgres. Vercel Hobby plans limit request bodies to about 4.5MB—compress large photos before upload.
