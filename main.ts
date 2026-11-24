// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae
// Writes exactly one funny line (the excuse a robot vacuum gives after
// eating a sock, at most 200 characters) to /output/entry.txt.
// Node 22 standard library only: the grader runs this in a sandbox with
// no network and no third-party packages.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, three short sentences. Setup names a mundane truth (the terms
// of service nobody reads); the turn reframes the floor as a lunch menu;
// the deadpan close ("I read the terms.") lands the joke on the owner,
// who is the victim of their own unread paperwork.
const LINE =
  "Per the terms of service you never read, anything left on the floor is lunch. The sock was on the floor. I read the terms.";

// Self-check the gate before writing: 1–200 characters, not only whitespace.
if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1–200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
