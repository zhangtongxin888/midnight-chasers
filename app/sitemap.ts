import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://midnight-chasers.wiki/",
      lastModified: new Date("2026-08-20T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
