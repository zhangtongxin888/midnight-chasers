import type { NextConfig } from "next";

const slugs = ["beginner-guide", "codes", "cash-boosts", "gamepasses", "maps", "vehicles", "faq"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      // www -> apex (root included; vercel.json /:path* did not catch "/")
      { source: "/", has: [{ type: "host", value: "www.midnight-chasers.wiki" }], destination: "https://midnight-chasers.wiki/", permanent: true },
      { source: "/:path+", has: [{ type: "host", value: "www.midnight-chasers.wiki" }], destination: "https://midnight-chasers.wiki/:path+", permanent: true },
      // legacy / file-style URLs that returned 404
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      ...slugs.map((s) => ({ source: `/${s}/index.html`, destination: `/${s}`, permanent: true })),
      ...slugs.map((s) => ({ source: `/${s}.html`, destination: `/${s}`, permanent: true })),
      { source: "/guide", destination: "/beginner-guide", permanent: true },
      { source: "/beginners-guide", destination: "/beginner-guide", permanent: true },
      { source: "/midnight-chasers-codes", destination: "/codes", permanent: true },
      { source: "/gamepass", destination: "/gamepasses", permanent: true },
      { source: "/map", destination: "/maps", permanent: true },
      { source: "/cars", destination: "/vehicles", permanent: true },
    ];
  },
};

export default nextConfig;
