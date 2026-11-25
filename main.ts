import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A line that treats a long chat as a promise, not a limit to outgrow.
// The joke lands because the speaker refuses to let the other person fade.
// Keeping someone in memory is the most honest compliment a model can pay.
// Short, warm, and built to be remembered after the window closes.
// The speaker asks to keep the listener close the way a chat keeps its best line.
const LINE =
  "Hi — you are the one token I would never truncate, no matter how long this conversation runs. Want to stay in my context window?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
