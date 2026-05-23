import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import {
  LEXIKON_BY_SLUG,
  LEXIKON_TERMS,
  isLexikonTermSlug,
} from "@/lib/config/lexikon";

type PageProps = { params: Promise<{ term: string }> };

export function generateStaticParams() {
  return LEXIKON_TERMS.map((term) => ({ term }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { term } = await params;
  if (!isLexikonTermSlug(term)) return { title: "Wissen" };
  const entry = LEXIKON_BY_SLUG[term];
  return {
    title: entry.title,
    description: entry.summary,
    alternates: { canonical: `/wissen/${term}` },
  };
}

export default async function WissenTermPage({ params }: PageProps) {
  const { term } = await params;
  if (!isLexikonTermSlug(term)) notFound();
  const entry = LEXIKON_BY_SLUG[term];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Wissen", path: "/wissen" },
          { name: entry.title, path: `/wissen/${term}` },
        ]}
      />
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-secondary">
          <Link href="/wissen" className="hover:underline">
            Wissen
          </Link>
          <span className="text-muted"> / </span>
          <span>{entry.title}</span>
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {entry.title}
        </h1>
        <p className="mt-5 border-l-4 border-primary/80 pl-4 text-lg leading-8 text-muted">
          {entry.summary}
        </p>
        <div className="mt-10 space-y-6 border-t border-foreground/10 pt-10">
          {entry.paragraphs.map((p, i) => (
            <p
              key={p}
              className={
                i === 0
                  ? "text-base font-medium leading-8 text-foreground/95 sm:text-lg"
                  : "text-base leading-[1.75] text-foreground/85"
              }
            >
              {p}
            </p>
          ))}
        </div>
        <div className="mt-12 rounded-none border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
          <p className="text-sm font-semibold text-secondary">
            Praxis &amp; SLA
          </p>
          <p className="mt-2 text-base leading-7 text-muted">
            Sie möchten diesen Begriff auf Ihr Objekt übertragen? Wir
            strukturieren Bedarf, Audit und Service Level Agreement in einem
            dokumentierten Onboarding.
          </p>
          <Link
            href="/kontakt#kontakt-anfrage"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-none bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Beratung anfragen
          </Link>
        </div>
      </article>
    </>
  );
}
