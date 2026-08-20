import type { Metadata } from "next";
import Link from "next/link";
import { AnfrageCta } from "@/components/AnfrageCta";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Für wen wir arbeiten",
  description:
    "Jede Branche hat eigene Anforderungen an Sauberkeit, Abläufe und Nachweise. Deshalb arbeiten wir nicht nach Schema F, sondern mit einem Plan, der zu Ihrem Objekt passt – und mit einem festen Ansprechpartner statt Callcenter.",
  alternates: { canonical: "/zielgruppen" },
};

const BRANCHEN = [
  {
    href: "/zielgruppen/hausverwaltungen",
    title: "Hausverwaltungen & WEG",
    line: "Weniger Mieteranrufe, klare Nachweise.",
  },
  {
    href: "/zielgruppen/praxen-gesundheitswesen",
    title: "Praxen & Gesundheitswesen",
    line: "Hygienesensibel, außerhalb der Sprechzeiten.",
  },
  {
    href: "/zielgruppen/buero-gewerbe",
    title: "Büro & Gewerbe",
    line: "Zuverlässig sauber, ohne Ihren Betrieb zu stören.",
  },
] as const;

export default function ZielgruppenHubPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Branchen", path: "/zielgruppen" },
        ]}
      />
      <article className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-secondary">Branchen</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Für wen wir arbeiten
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Jede Branche hat eigene Anforderungen an Sauberkeit, Abläufe und
          Nachweise. Deshalb arbeiten wir nicht nach Schema F, sondern mit einem
          Plan, der zu Ihrem Objekt passt – und mit einem festen Ansprechpartner
          statt Callcenter.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHEN.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-sm border border-zinc-200 bg-white p-5 transition hover:border-primary hover:bg-white sm:p-6"
              >
                <h2 className="text-lg font-semibold text-foreground group-hover:text-secondary">
                  {item.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {item.line}
                </p>
                <span className="mt-4 text-sm font-semibold text-secondary">
                  Mehr erfahren →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-16 border-t border-zinc-200 pt-12">
          <AnfrageCta />
        </section>
      </article>
    </>
  );
}
