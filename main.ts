import { mkdirSync, writeFileSync } from "node:fs";

const PLACARD =
  "Sticky note, c. 2019. One yellow tablet bearing the command 'CALL STEVE', its urgency undimmed after five thousand years. On loan from the Archive of Forgotten Errands.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLACARD, "utf8");
