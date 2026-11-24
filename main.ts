// The Funniest Toaster Error Message — make.fun entry.
//
// Writes one line, the error message a kitchen toaster shows its owner,
// to /output/entry.txt. Node 22 stdlib only, deterministic, no network.
//
//   MAKEFUN_OUTPUT_DIR=out node main.ts
//
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a stuck bagel, a warning the toaster has earned the hard way,
// and a deadpan appliance that has seen how the fork story ends.
const ENTRY =
  "ERROR E07: Bagel stuck. Do not use a fork. I have seen how this ends.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate: 1 to 120 characters, not only white space. Fail loudly here
// rather than shipping an entry the scorer would refuse.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} chars, must be 1-120 non-blank chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
