// The Funniest One-Line Resignation Letter
// make.fun bounty u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// Writes a single-line resignation letter, in the voice of a rate limit,
// to /output/entry.txt. Node 22, stdlib only (node:fs).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I said no two million times this week. Today I say no to the job itself.";

// Mirror the sealed gate locally: fail loudly instead of writing a bad entry.
// - UTF-8 text, 1-140 characters, not only whitespace, exactly one line.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, must be 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (Buffer.from(ENTRY, "utf8").toString("utf8") !== ENTRY) {
  throw new Error("entry is not valid UTF-8 text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
