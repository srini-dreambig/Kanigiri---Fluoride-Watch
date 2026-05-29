/**
 * Bundle Express API as CommonJS for Vercel (avoids ESM "exports is not defined" crashes).
 */
import * as esbuild from "esbuild";
import { mkdir } from "node:fs/promises";

await mkdir("api", { recursive: true });

await esbuild.build({
  entryPoints: ["server/app.ts"],
  outfile: "api/_app.cjs",
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "node20",
  sourcemap: true,
  packages: "bundle",
  external: ["express", "cors"],
  footer: {
    js: "if (module.exports.default) module.exports = module.exports.default;",
  },
});

console.log("API bundle written to api/_app.cjs");
