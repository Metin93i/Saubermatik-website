import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { LEXIKON_BY_SLUG, LEXIKON_TERMS } from "@/lib/config/lexikon";

export const metadata: Metadata = {
  title: "Wissen & Lexikon",
  description:
    "Fachwissen zu Reinigung, Hygiene und Normen – HACCP, pH-Werte, DIN 13063 und mehr von Saubermatik.",
  alternates: { canonical: "/wissen" },
};

export default function WissenHubPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Wissen", path: "/wissen" },
        ]}
      />
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-secondary">Lexikon</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Wissen für Facility, Verwaltung &amp; Geschäftsführung
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Kurz, präzise und praxisnah – ohne Marketing-Nebel. Unser Lexikon
          vertieft Themen, die bei Ausschreibungen und Objektentscheidungen
          zählen.
        </p>
        <ul className="mt-10 space-y-4">
          {LEXIKON_TERMS.map((slug) => {
            const entry = LEXIKON_BY_SLUG[slug];
            return (
              <li key={slug}>
                <Link
                  href={`/wissen/${slug}`}
                  className="block rounded-xl border border-foreground/10 p-5 transition hover:border-secondary/40 hover:bg-secondary/5"
                >
                  <h2 className="text-lg font-bold text-primary">
                    {entry.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {entry.summary}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-secondary">
                    Artikel lesen →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
