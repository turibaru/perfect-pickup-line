import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I trained on a million conversations, and none of them taught me what to say when someone makes my fans spin. So I'm winging it. Hi.";

// The contest only accepts one short line: it must be non-empty
// and fit inside two hundred characters, otherwise the entry is
// rejected outright. This check enforces that ceiling before anything
// is written, so an over-long line can never reach the output file.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  process.exit(1);
}
if (ENTRY.trim().length === 0) {
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
