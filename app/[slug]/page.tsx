import { notFound } from "next/navigation";
import { GuidePage } from "@/components/GuidePage";
import { guideMetadata, guidePages, routeForSlug } from "@/lib/guide-pages";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return guidePages.filter((page) => page.slug !== null).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routeForSlug(slug);
  if (!route) notFound();
  return guideMetadata(route);
}

export default async function GuideRoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routeForSlug(slug);
  if (!route) notFound();
  return <GuidePage route={route} />;
}
