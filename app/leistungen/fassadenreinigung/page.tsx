import type { Metadata } from "next";
import { LeistungDeepPage } from "@/components/LeistungDeepPage";
import { getLeistungDeepContent } from "@/lib/seo/leistung-deep-content";

const SLUG = "fassadenreinigung" as const;
const content = getLeistungDeepContent(SLUG)!;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: `/leistungen/${SLUG}` },
};

export default function FassadenreinigungPage() {
  return <LeistungDeepPage content={content} />;
}
