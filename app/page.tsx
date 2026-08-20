import { GuidePage } from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guide-pages";

export const dynamic = "force-static";
export const metadata = guideMetadata("/");

export default function HomePage() {
  return <GuidePage route="/" />;
}
