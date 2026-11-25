// SPDX-License-Identifier: MIT
// One line of awkward small talk, one robot to another, in an elevator.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Smells like hot dust in here. I'd blame the elevator, but that's my own cooling fan.";

const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");
