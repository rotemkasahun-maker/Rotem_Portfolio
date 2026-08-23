import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "public");

// Explicit public allowlist. Repository evidence, sources, docs, archives,
// prototypes, QA captures and Git metadata must never enter this directory.
const publicFiles = [
  "index.html",
  "family-finance.html",
  "styles.css",
  "script.js",
  "frame-1.jpg",
  "frame-2.jpg",
  "frame-3.jpg",
  "frame-4.jpg",
  "frame-5.jpg",
  "v1.png",
  "v2.png",
  "v3.png",
  "v4.png",
  "assets/family-finance/evidence/screenshots/core-receipt-after.png",
];

await rm(output, { recursive: true, force: true });

for (const relativePath of publicFiles) {
  const destination = join(output, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await cp(join(root, relativePath), destination, {
    errorOnExist: true,
    force: false,
  });
}

console.log(`Prepared ${publicFiles.length} public assets in ${output}`);
