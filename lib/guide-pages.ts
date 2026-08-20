import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

const siteUrl = "https://midnight-chasers.wiki";

export const guidePages = [
  { route: "/", slug: null, file: "index.html", priority: 1 },
  { route: "/beginner-guide", slug: "beginner-guide", file: "beginner-guide/index.html", priority: 0.9 },
  { route: "/codes", slug: "codes", file: "codes/index.html", priority: 0.8 },
  { route: "/cash-boosts", slug: "cash-boosts", file: "cash-boosts/index.html", priority: 0.8 },
  { route: "/gamepasses", slug: "gamepasses", file: "gamepasses/index.html", priority: 0.8 },
  { route: "/maps", slug: "maps", file: "maps/index.html", priority: 0.8 },
  { route: "/vehicles", slug: "vehicles", file: "vehicles/index.html", priority: 0.8 },
  { route: "/faq", slug: "faq", file: "faq/index.html", priority: 0.7 },
] as const;

export type GuideRoute = (typeof guidePages)[number]["route"];

const pageByRoute = new Map(guidePages.map((page) => [page.route, page]));
const routeBySlug = new Map<string, GuideRoute>(
  guidePages.filter((page) => page.slug !== null).map((page) => [page.slug, page.route]),
);

function sourceForRoute(route: GuideRoute) {
  const page = pageByRoute.get(route);
  if (!page) throw new Error(`Unknown guide route: ${route}`);
  return readFileSync(path.join(process.cwd(), "content/pages", page.file), "utf8");
}

function textBetween(source: string, pattern: RegExp, label: string) {
  const match = source.match(pattern);
  if (!match) throw new Error(`Missing ${label}`);
  return match[1].replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

function metaContent(source: string, attribute: "name" | "property", value: string) {
  const tags = source.match(/<meta\s+[^>]*>/gi) ?? [];
  const tag = tags.find((candidate) => new RegExp(`\\b${attribute}="${value}"`, "i").test(candidate));
  return tag?.match(/\bcontent="([^"]*)"/i)?.[1].replace(/&amp;/g, "&");
}

export function routeForSlug(slug: string) {
  return routeBySlug.get(slug);
}

export function guidePageContent(route: GuideRoute) {
  const source = sourceForRoute(route);
  const bodyMatch = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) throw new Error(`Missing body for ${route}`);

  const jsonLd = [...source.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((match) =>
    JSON.stringify(JSON.parse(match[1])).replace(/</g, "\\u003c"),
  );

  return { body: bodyMatch[1], jsonLd };
}

export function guideMetadata(route: GuideRoute): Metadata {
  const source = sourceForRoute(route);
  const title = textBetween(source, /<title>([\s\S]*?)<\/title>/i, `title for ${route}`);
  const description = metaContent(source, "name", "description");
  const openGraphTitle = metaContent(source, "property", "og:title") ?? title;
  const openGraphDescription = metaContent(source, "property", "og:description") ?? description;
  const image = metaContent(source, "property", "og:image") ?? `${siteUrl}/og.png`;

  return {
    title,
    description,
    alternates: { canonical: route },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "website",
      url: `${siteUrl}${route}`,
      siteName: "Midnight Chasers Guide",
      title: openGraphTitle,
      description: openGraphDescription,
      images: [{ url: image, width: 1200, height: 630, alt: metaContent(source, "property", "og:image:alt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaContent(source, "name", "twitter:title") ?? openGraphTitle,
      description: metaContent(source, "name", "twitter:description") ?? openGraphDescription,
      images: [metaContent(source, "name", "twitter:image") ?? image],
    },
  };
}
