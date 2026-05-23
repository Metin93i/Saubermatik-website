import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_DEDICATED_LEISTUNG_SLUGS } from "@/lib/seo/leistung-deep-content";
import {
  LEISTUNG_SLUGS,
  LEISTUNGEN_BY_SLUG,
  isLeistungSlug,
} from "@/lib/routes/leistungen";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const DEDICATED_SET = new Set<string>(ALL_DEDICATED_LEISTUNG_SLUGS);

export function generateStaticParams() {
  return LEISTUNG_SLUGS.filter((slug) => !DEDICATED_SET.has(slug)).map(
    (slug) => ({ slug }),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isLeistungSlug(slug)) {
    return { title: "Leistung" };
  }
  const content = LEISTUNGEN_BY_SLUG[slug];
  return {
    title: content.title,
    description: content.summary,
    alternates: {
      canonical: `/leistungen/${slug}`,
    },
  };
}

/** Fallback nur für ungültige Slugs – alle Services haben dedizierte Deep-Content-Routen. */
export default async function LeistungDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isLeistungSlug(slug) || DEDICATED_SET.has(slug)) {
    notFound();
  }
  notFound();
}
