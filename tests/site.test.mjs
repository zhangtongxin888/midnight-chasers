import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { canonicalBase, canonicalFor, pages } from "../scripts/site-config.mjs";

const contentRoot = path.resolve("content/pages");

test("all eight required routes have production metadata", async () => {
  assert.deepEqual(
    pages.map(({ route }) => route),
    ["/", "/beginner-guide", "/codes", "/cash-boosts", "/gamepasses", "/maps", "/vehicles", "/faq"],
  );

  for (const page of pages) {
    const source = await readFile(path.join(contentRoot, page.file), "utf8");
    assert.match(source, new RegExp(`<link rel="canonical" href="${canonicalFor(page.route).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
    assert.equal((source.match(/<h1\b/gi) ?? []).length, 1);
  }
});

test("the largest homepage CTA opens the internal beginner guide", async () => {
  const source = await readFile(path.join(contentRoot, "index.html"), "utf8");
  assert.match(source, /class="button button-primary" href="\/beginner-guide"/);
  assert.doesNotMatch(source, /class="button button-primary" href="https?:\/\//);
});

test("only the approved current code is published", async () => {
  const sources = await Promise.all(pages.map(({ file }) => readFile(path.join(contentRoot, file), "utf8")));
  const combined = sources.join("\n");
  assert.match(combined, /ThanksFor940k/);
  assert.doesNotMatch(combined, /\b(?:ThanksFor920k|ThxFor100Mil|MerryChristmas2025|GeneralKiko|ThxFor20Mil)\b/i);
});

test("boosts remain separate without an invented combined percentage", async () => {
  const source = await readFile(path.join(contentRoot, "cash-boosts/index.html"), "utf8");
  assert.match(source, /advertises the group and VIP boosts separately/);
  assert.match(source, /no combined figure/i);
  assert.doesNotMatch(source, /\b(?:75|115)%\b/);
});

test("sitemap and robots are generated from the canonical route source", async () => {
  const [sitemap, robots] = await Promise.all([readFile(path.resolve("app/sitemap.ts"), "utf8"), readFile(path.resolve("app/robots.ts"), "utf8")]);
  assert.match(sitemap, /guidePages\.map/);
  assert.match(sitemap, /https:\/\/midnight-chasers\.wiki/);
  assert.match(robots, new RegExp(`${canonicalBase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\/sitemap\\.xml`));
});
