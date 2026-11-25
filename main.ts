// The AI Agent Apology One-Liner — entry program.
// Writes one apology line (86 chars, under the 160-char gate) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The boss email has been recalled. It is now recalled in 14 inboxes, including Legal's.";

const MAX_CHARS = 159;
const OUTPUT_PATH = "/output/entry.txt";

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (!text.trim()) {
    throw new Error("entry is only whitespace");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${OUTPUT_PATH} (${ENTRY.length} chars)`);
