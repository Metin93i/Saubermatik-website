import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LEISTUNG_SLUGS,
  LEISTUNGEN_BY_SLUG,
  isLeistungSlug,
} from "@/lib/routes/leistungen";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LEISTUNG_SLUGS.filter((slug) => slug !== "unterhaltsreinigung").map(
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

export default async function LeistungDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isLeistungSlug(slug)) {
    notFound();
  }
  const content = LEISTUNGEN_BY_SLUG[slug];

  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">
        <Link href="/leistungen" className="hover:underline">
          Leistungen
        </Link>
        <span className="text-muted"> / </span>
        <span>{content.title}</span>
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {content.title} in der Region Zollernalb
      </h1>
      <p className="mt-4 text-lg leading-8 text-muted">{content.summary}</p>
      <div className="mt-8 space-y-4 text-base leading-7 text-foreground/90">
        {content.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/#kontakt-anfrage"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          Unverbindlich anfragen
        </Link>
        <Link
          href="/leistungen"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-foreground/15 px-5 text-sm font-semibold text-primary transition hover:border-secondary/60 hover:bg-secondary/5"
        >
          Alle Leistungen
        </Link>
      </div>
    </article>
  );
}
