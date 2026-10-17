// Checks that every relative link and #anchor in every markdown file resolves.
// No dependencies. Run with `npm run check:links`.
//
// Slugs follow GitHub's rules — lowercase, drop everything that is not a word character,
// space or hyphen, then turn spaces into hyphens — because that is what renders these files.
// Note that a leading space survives as a leading hyphen, which is why the emoji heading in
// docs/brand/typography.md has an anchor starting with `-`.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKIP_DIRS = new Set(["node_modules", ".next", ".git"]);

function markdownFiles(dir, found = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) markdownFiles(path.join(dir, entry.name), found);
    } else if (entry.name.endsWith(".md")) {
      found.push(path.join(dir, entry.name));
    }
  }
  return found;
}

const slug = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s/g, "-");

function headingsOf(file) {
  const body = readFileSync(file, "utf8");
  const slugs = new Set();
  for (const match of body.matchAll(/^#{1,6}\s+(.*)$/gm)) slugs.add(slug(match[1]));
  return slugs;
}

const files = markdownFiles(root);
const headings = new Map(files.map((file) => [file, headingsOf(file)]));

let checked = 0;
const broken = [];

for (const file of files) {
  const relative = path.relative(root, file);
  // Fenced blocks quote markup, so links inside them are examples, not links.
  const body = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");

  for (const [, target] of body.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:)/.test(target)) continue;
    checked++;

    const [href, anchor] = target.split("#");
    // A bare `#anchor` is a link to this same file.
    const resolved = href ? path.resolve(path.dirname(file), decodeURIComponent(href)) : file;

    if (!existsSync(resolved)) {
      broken.push(`${relative} -> ${target}  (no such file)`);
    } else if (anchor && !statSync(resolved).isDirectory() && !headings.get(path.resolve(resolved))?.has(anchor)) {
      broken.push(`${relative} -> ${target}  (no such heading)`);
    }
  }
}

console.log(`checked ${checked} local links across ${files.length} markdown files`);

if (broken.length) {
  console.error(`\n${broken.length} broken:`);
  for (const line of broken) console.error(`  ${line}`);
  process.exit(1);
}

console.log("0 broken");
