import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An office joke: the fridge thief, defeated by the one label nobody wants to open.
const joke =
  "My lunch kept getting stolen from the office fridge, so now I label it \"Q3 Budget Review\" and nobody has opened it since.";

const limit = 200;
if ([...joke].length > limit) throw new Error(`joke is ${[...joke].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke);
