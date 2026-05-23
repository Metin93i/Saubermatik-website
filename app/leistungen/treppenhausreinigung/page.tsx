import type { Metadata } from "next";
import { LeistungDeepPage } from "@/components/LeistungDeepPage";
import { getLeistungDeepContent } from "@/lib/seo/leistung-deep-content";

const SLUG = "treppenhausreinigung" as const;
const content = getLeistungDeepContent(SLUG)!;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: `/leistungen/${SLUG}` },
};

export default function TreppenhausreinigungPage() {
  return <LeistungDeepPage content={content} />;
}
