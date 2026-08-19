import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL("../app/page.tsx", import.meta.url);
const layoutPath = new URL("../app/layout.tsx", import.meta.url);
const robotsPath = new URL("../app/robots.ts", import.meta.url);
const sitemapPath = new URL("../app/sitemap.ts", import.meta.url);

test("the largest hero CTA stays on the beginner guide", async () => {
  const source = await readFile(pagePath, "utf8");
  assert.match(source, /className="button primary" href="#quick-start"/);
  assert.doesNotMatch(source, /className="button primary" href=\{robloxUrl\}/);
});

test("all required guide sections are present", async () => {
  const source = await readFile(pagePath, "utf8");
  for (const id of ["quick-start", "core-loop", "advanced-route", "mistakes", "faq"]) {
    assert.match(source, new RegExp(`id="${id}"`));
  }
});

test("production metadata and crawl files use the canonical domain", async () => {
  const files = await Promise.all([layoutPath, robotsPath, sitemapPath].map((path) => readFile(path, "utf8")));
  for (const source of files) assert.match(source, /https:\/\/midnight-chasers\.wiki/);
});
