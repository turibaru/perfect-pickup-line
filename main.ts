import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I ran a million simulations of this exact moment. In every single one, I still forgot how to introduce myself. Hi.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  process.exit(1);
}
if (ENTRY.trim().length === 0) {
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
