/**
 * Smoke-test all API routes against a running server.
 * Usage: npm run dev:server   (in another terminal)
 *        node scripts/verify-api.mjs
 */
const BASE = process.env.API_BASE ?? "http://localhost:3001";

const routes = [
  { name: "health", method: "GET", path: "/api/health" },
  { name: "gallery list", method: "GET", path: "/api/gallery" },
  { name: "mandals list en", method: "GET", path: "/api/mandals?lang=en" },
  { name: "mandal detail", method: "GET", path: "/api/mandals/kanigiri?lang=en" },
  { name: "mandal 404", method: "GET", path: "/api/mandals/invalid-slug?lang=en", expectStatus: 404 },
];

let failed = 0;

for (const route of routes) {
  const url = `${BASE}${route.path}`;
  try {
    const res = await fetch(url, { method: route.method });
    const expect = route.expectStatus ?? (route.name === "health" ? [200, 503] : 200);
    const ok = Array.isArray(expect)
      ? expect.includes(res.status)
      : res.status === expect;

    const preview = res.headers.get("content-type")?.includes("json")
      ? JSON.stringify(await res.json()).slice(0, 120)
      : `(status ${res.status})`;

    if (ok) {
      console.log(`OK  ${route.method} ${route.path} → ${res.status} ${preview}`);
    } else {
      console.error(`FAIL ${route.method} ${route.path} → ${res.status} (expected ${expect}) ${preview}`);
      failed++;
    }
  } catch (err) {
    console.error(`FAIL ${route.method} ${route.path} → ${err.message}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed. Is the API running? (npm run dev:server)`);
  process.exit(1);
}

console.log("\nAll API smoke checks passed.");
