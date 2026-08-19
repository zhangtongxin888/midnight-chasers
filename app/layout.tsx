import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://midnight-chasers.wiki";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Midnight Chasers Wiki: Beginner Guide, Codes & Tips",
  description:
    "A fact-checked Midnight Chasers: Highway Racing beginner guide covering the first 10 minutes, codes, cash boosts, driving tips, and common mistakes.",
  applicationName: "Midnight Chasers Wiki",
  authors: [{ name: "Midnight Chasers Wiki" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Midnight Chasers Wiki: Start Your First Night Run",
    description: "Learn the verified first-session route, codes, boosts, and driving loop.",
    siteName: "Midnight Chasers Wiki",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Midnight Chasers Wiki night highway guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midnight Chasers Wiki: Beginner Guide",
    description: "The fact-checked route for your first Midnight Chasers session.",
    images: ["/og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
