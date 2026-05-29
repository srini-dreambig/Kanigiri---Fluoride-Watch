import fs from "fs";
const p = "src/data/uiLabels.ts";
let s = fs.readFileSync(p, "utf8");
for (const line of s.split("\n")) {
  if (line.includes("default_caption") && /[\u0400-\u04FF]/.test(line)) {
    const fixed =
      '      default_caption: "\u0C15\u0C4D\u0C37\u0C47\u0C24\u0C4D\u0C30\u0C02 \u0C28\u0C41\u0C02\u0C21\u0C3F \u0C38\u0C2E\u0C3E\u0C1A\u0C3E\u0C30\u0C02",';
    s = s.replace(line, fixed);
    break;
  }
}
fs.writeFileSync(p, s);
