import type { NextConfig } from "next";

const slugs = ["beginner-guide", "codes", "cash-boosts", "gamepasses", "maps", "vehicles", "faq"];

// Legacy, file-style and alias URLs -> the most relevant canonical page (HTTP 301).
// GSC reported "Not found (404)" on 2026-09-16 without listing URLs; these cover the
// static-export paths of the original build plus common player/typo variants.
const aliases: Record<string, string> = {
  "/index.html": "/",
  "/home": "/",
  "/wiki": "/",
  "/guide": "/beginner-guide",
  "/guides": "/beginner-guide",
  "/beginners-guide": "/beginner-guide",
  "/beginner": "/beginner-guide",
  "/how-to-play": "/beginner-guide",
  "/tips": "/beginner-guide",
  "/code": "/codes",
  "/redeem-codes": "/codes",
  "/midnight-chasers-codes": "/codes",
  "/gamepass": "/gamepasses",
  "/game-passes": "/gamepasses",
  "/passes": "/gamepasses",
  "/cash": "/cash-boosts",
  "/money": "/cash-boosts",
  "/cash-boost": "/cash-boosts",
  "/boosts": "/cash-boosts",
  "/map": "/maps",
  "/cars": "/vehicles",
  "/car": "/vehicles",
  "/vehicle": "/vehicles",
  "/faqs": "/faq",
  "/favicon.ico": "/icon.png",
  "/apple-touch-icon.png": "/apple-icon.png",
  "/apple-touch-icon-precomposed.png": "/apple-icon.png",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      // www -> apex (root included; vercel.json /:path* did not catch "/")
      { source: "/", has: [{ type: "host", value: "www.midnight-chasers.wiki" }], destination: "https://midnight-chasers.wiki/", permanent: true },
      { source: "/:path+", has: [{ type: "host", value: "www.midnight-chasers.wiki" }], destination: "https://midnight-chasers.wiki/:path+", permanent: true },
      ...Object.entries(aliases).map(([source, destination]) => ({ source, destination, statusCode: 301 as const })),
      ...slugs.map((s) => ({ source: `/${s}/index.html`, destination: `/${s}`, statusCode: 301 as const })),
      ...slugs.map((s) => ({ source: `/${s}.html`, destination: `/${s}`, statusCode: 301 as const })),
    ];
  },
};

export default nextConfig;
