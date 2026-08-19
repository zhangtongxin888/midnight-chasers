import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://midnight-chasers.wiki/sitemap.xml",
    host: "https://midnight-chasers.wiki",
  };
}
