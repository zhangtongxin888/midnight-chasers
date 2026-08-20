import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { canonicalBase, canonicalFor, pages } from "./site-config.mjs";

const contentRoot = path.resolve("content/pages");
const publicRoot = path.resolve("public");
const routeSet = new Set(pages.map(({ route }) => route));
const pageSources = new Map();

const matches = (source, pattern) => [...source.matchAll(pattern)];
const stripTags = (value) => value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

for (const page of pages) {
  const source = await readFile(path.join(contentRoot, page.file), "utf8");
  pageSources.set(page.route, source);

  assert.match(source, /^<!doctype html>/i, `${page.route}: missing doctype`);
  assert.match(source, /<html\s+lang="en">/i, `${page.route}: missing English language declaration`);
  assert.equal(matches(source, /<title>[\s\S]*?<\/title>/gi).length, 1, `${page.route}: expected one title`);
  assert.equal(matches(source, /<meta\s+[^>]*name="description"[^>]*>/gi).length, 1, `${page.route}: expected one description`);

  const canonicalTags = matches(source, /<link\s+[^>]*rel="canonical"[^>]*>/gi);
  assert.equal(canonicalTags.length, 1, `${page.route}: expected one canonical`);
  assert.match(canonicalTags[0][0], new RegExp(`href="${canonicalFor(page.route).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `${page.route}: incorrect canonical`);

  const h1s = matches(source, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi);
  assert.equal(h1s.length, 1, `${page.route}: expected one H1`);
  const h1Text = stripTags(h1s[0][1]);
  assert.doesNotMatch(h1Text, /suspension/i, `${page.route}: mutable title prefix leaked into H1`);

  const ids = matches(source, /\sid="([^"]+)"/gi).map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${page.route}: duplicate HTML id`);

  const jsonLdBlocks = matches(source, /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  assert.ok(jsonLdBlocks.length > 0, `${page.route}: missing JSON-LD`);
  for (const [, body] of jsonLdBlocks) JSON.parse(body);

  assert.match(source, new RegExp(`${canonicalBase.replaceAll(".", "\\.")}/og\\.png`), `${page.route}: missing production OG image`);
  assert.doesNotMatch(source, /\b(?:ThanksFor920k|ThxFor100Mil|MerryChristmas2025|GeneralKiko|ThxFor20Mil)\b/i, `${page.route}: non-current code is published`);
  assert.doesNotMatch(source, /\b(?:75|115)%\b/, `${page.route}: unverified combined boost percentage is published`);
  assert.doesNotMatch(source, /(?:lorem ipsum|todo:|placeholder)/i, `${page.route}: placeholder copy remains`);
}

const idsByRoute = new Map(
  [...pageSources].map(([route, html]) => [route, new Set(matches(html, /\sid="([^"]+)"/gi).map((match) => match[1]))]),
);

for (const page of pages) {
  const source = pageSources.get(page.route);
  for (const [, href] of matches(source, /<a\s+[^>]*href="([^"]+)"[^>]*>/gi)) {
    if (/^(?:https?:|mailto:|tel:)/i.test(href)) continue;
    if (href.startsWith("#")) {
      assert.ok(idsByRoute.get(page.route).has(href.slice(1)), `${page.route}: broken fragment ${href}`);
      continue;
    }

    const target = new URL(href, canonicalBase);
    if (["/styles.css", "/app.js", "/og.png", "/og.svg", "/robots.txt", "/sitemap.xml"].includes(target.pathname)) continue;
    assert.ok(routeSet.has(target.pathname), `${page.route}: broken internal route ${href}`);
    if (target.hash) assert.ok(idsByRoute.get(target.pathname).has(target.hash.slice(1)), `${page.route}: broken target fragment ${href}`);
  }
}

const styles = await readFile(path.resolve("app/globals.css"), "utf8");
assert.match(styles, /@media\s*\(max-width:\s*980px\)/, "missing tablet breakpoint");
assert.match(styles, /@media\s*\(max-width:\s*720px\)/, "missing phone breakpoint");
assert.match(styles, /prefers-reduced-motion/, "missing reduced-motion support");

const script = await readFile(path.join(publicRoot, "app.js"), "utf8");
new Function(script);

process.stdout.write(`Static site lint passed for ${pages.length} pages\n`);
