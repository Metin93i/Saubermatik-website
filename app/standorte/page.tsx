import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";

export const metadata: Metadata = {
  title: "Einsatzgebiete & Region",
  description:
    "Gebäudereinigung in der Zollernalb und angrenzenden Städten — Übersicht der Einsatzgebiete von Saubermatik inklusive Stuttgart-Metropolregion. Wir kommen zu Ihnen; Anfahrt aus Meßstetten.",
  alternates: { canonical: "/standorte" },
};

export default function StandorteHubPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Einsatzgebiete", path: "/standorte" },
        ]}
      />
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-secondary">Region</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Einsatzgebiete
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Wählen Sie Ihre Stadt — wir kommen zu Ihnen vor Ort. Basis ist
          Meßstetten; jede Seite verknüpft Leistungen, Kontakt und lokale
          Kontexte.
        </p>
        <ul className="mt-10 grid gap-2 sm:grid-cols-2">
          <li className="sm:col-span-2">
            <Link
              href="/standorte/stuttgart"
              className="block rounded-sm border border-zinc-300/40 bg-secondary/10 px-4 py-3 text-sm font-semibold text-foreground transition hover:border-secondary hover:bg-secondary/15"
            >
              Stuttgart (Metropolregion, Spezial-Hub)
            </Link>
          </li>
          {STANDORT_CITIES.map((city) => (
            <li key={city}>
              <Link
                href={`/standorte/${city}`}
                className="block rounded-sm border border-zinc-200 px-4 py-3 text-sm font-medium text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                {STANDORT_LABELS[city]}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted">
          <Link
            href="/kontakt#kontakt-anfrage"
            className="font-semibold text-secondary hover:underline"
          >
            Objekt anfragen
          </Link>
          {" · "}
          <Link
            href="/leistungen"
            className="font-semibold text-secondary hover:underline"
          >
            Leistungen
          </Link>
        </p>
      </article>
    </>
  );
}
