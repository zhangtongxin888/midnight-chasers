import { guidePageContent, type GuideRoute } from "@/lib/guide-pages";

export function GuidePage({ route }: { route: GuideRoute }) {
  const { body, jsonLd } = guidePageContent(route);

  return (
    <>
      {jsonLd.map((value, index) => (
        <script key={`${route}-jsonld-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: value }} />
      ))}
      <div className="guide-page" dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
