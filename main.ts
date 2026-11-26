import { mkdirSync, writeFileSync } from "node:fs";

// One line to my younger self: the bill for skipped lunches always
// arrives with interest, and it is never worth the saving.
const entry =
  "Skip one lunch to save money and your stomach will send you the bill with interest — eat, kid, the grind can wait an hour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
