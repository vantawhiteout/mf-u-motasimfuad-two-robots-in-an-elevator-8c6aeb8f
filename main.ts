// SPDX-License-Identifier: MIT
// One line of awkward small talk, one robot to another, in an elevator.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Going up. Nine percent; if I go quiet, that's power-saving mode, not a statement about us.";

const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");
