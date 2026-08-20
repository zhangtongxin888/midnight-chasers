import type { MetadataRoute } from "next";
import { guidePages } from "@/lib/guide-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return guidePages.map((page) => ({
    url: `https://midnight-chasers.wiki${page.route}`,
    lastModified: new Date("2026-08-20T00:00:00Z"),
    changeFrequency: "weekly",
    priority: page.priority,
  }));
}
