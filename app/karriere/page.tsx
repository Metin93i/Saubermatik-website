import type { Metadata } from "next";
import Link from "next/link";
import { JobListings } from "@/components/JobListings";
import { BrandSurface } from "@/components/BrandSurface";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Karriere bei Saubermatik Meßstetten: faire Bezahlung, digitale Erfassung über mobile Endgeräte, Teamkultur in der Zollernalb – jetzt initiativ bewerben.",
  alternates: { canonical: "/karriere" },
};

const benefits = [
  {
    title: "Faire Bezahlung & klare Strukturen",
    text: "Wir verstehen Reinigung als Handwerk mit Verantwortung. Leistung wird anerkannt, Schichten und Aufgaben sind transparent geplant.",
  },
  {
    title: "Mobile Endgeräte statt Zettel",
    text: "Checklisten, Objektinfos und Touren laufen digital: Sie arbeiten mit Handy oder Platform-App statt mit vergilbten Formularblättern.",
  },
  {
    title: "Regionale Einsätze, kurze Wege",
    text: "Schwerpunkte liegen in der Zollernalb und angrenzenden Städten – weniger sinnlose Fahrzeit, mehr Zeit für saubere Arbeit.",
  },
  {
    title: "Weiterbildung & Sicherheit",
    text: "Einweisungen zu Objekten, Materialien und Sicherheitsregeln sind fester Bestandteil – für Sie und für die Qualität beim Kunden.",
  },
] as const;

export default function KarrierePage() {
  return (
    <article className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">Karriere</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Werden Sie Teil eines Teams, das digital denkt und handwerklich liefert.
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Wir suchen Menschen mit Sinn für Ordnung, Respekt vor Kundenobjekten und
        Lust auf saubere Prozesse. Ob Reinigungskraft, Objektleitung oder
        Quereinstieg – sprechen Sie uns an.
      </p>

      <BrandSurface className="mt-8 aspect-[16/9] w-full rounded-sm" />

      <section className="mt-12" aria-labelledby="offene-stellen-heading">
        <h2
          id="offene-stellen-heading"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Offene Stellen
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
          Aktuelle Positionen aus unserem Stellenportal — direkt bewerben per
          E-Mail oder über das Formular unten.
        </p>
        <div className="mt-6">
          <JobListings />
        </div>
      </section>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {benefits.map((b) => (
          <li
            key={b.title}
            className="flex min-h-[11rem] flex-col rounded-sm border border-zinc-200 bg-white p-5 sm:min-h-[12rem] sm:p-6"
          >
            <h2 className="text-base font-bold text-foreground sm:text-lg">
              {b.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
              {b.text}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-sm border border-zinc-200 bg-slate-50/90 p-5 sm:p-6">
        <h2 className="text-lg font-bold text-foreground">
          Initiativbewerbung
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Senden Sie uns kurz Ihre Motivation und Verfügbarkeit – wir melden uns
          zeitnah mit den nächsten Schritten.
        </p>
        <Link
          href="/kontakt?type=karriere#bewerbung"
          className="mt-5 inline-flex h-11 items-center justify-center rounded-sm bg-secondary px-5 text-sm font-bold text-secondary-foreground transition hover:bg-secondary/90"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </div>
    </article>
  );
}
