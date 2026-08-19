import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Branchen",
  description:
    "Branchen-Übersicht von Saubermatik: Einstieg Hausverwaltungen & WEG – weitere Branchen folgen.",
  alternates: { canonical: "/zielgruppen" },
};

export default function ZielgruppenHubPage() {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">Branchen</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Branchen
      </h1>
      <p className="mt-5 text-base leading-7 text-muted">
        Saubermatik betreut unterschiedliche Objektwelten mit klaren
        Ansprechpartnern und digitaler Steuerung. Weitere Branchen-Seiten
        folgen.
      </p>
      <ul className="mt-10 space-y-3">
        <li>
          <Link
            href="/zielgruppen/hausverwaltungen"
            className="block rounded-sm border border-zinc-200 px-4 py-3 text-sm font-medium text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
          >
            Hausverwaltungen &amp; WEG
          </Link>
        </li>
      </ul>
    </article>
  );
}
