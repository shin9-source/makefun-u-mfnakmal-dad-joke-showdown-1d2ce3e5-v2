import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "After his third helping, Dad looked at the mountain of dishes and said, 'I'm spoon-fed up.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
