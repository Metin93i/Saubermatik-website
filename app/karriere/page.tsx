import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";

const imgKarriere =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Karriere bei Saubermatik Meßstetten: faire Bezahlung, moderne digitale Arbeitsmittel und Tablets im Objekt, Teamkultur in der Zollernalb – jetzt initiativ bewerben.",
  alternates: { canonical: "/karriere" },
};

const benefits = [
  {
    title: "Faire Bezahlung & klare Strukturen",
    text: "Wir verstehen Reinigung als Handwerk mit Verantwortung. Leistung wird anerkannt, Schichten und Aufgaben sind transparent geplant.",
  },
  {
    title: "Modernste Arbeitsmittel & Tablets",
    text: "Checklisten, Objektinfos und Touren laufen digital: Sie arbeiten mit aktueller Ausstattung statt mit vergilbten Formularblättern.",
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
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">Karriere</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Werden Sie Teil eines Teams, das digital denkt und handwerklich liefert.
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Wir suchen Menschen mit Sinn für Ordnung, Respekt vor Kundenobjekten und
        Lust auf saubere Prozesse. Ob Reinigungskraft, Objektleitung oder
        Quereinstieg – sprechen Sie uns an.
      </p>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-foreground/10">
        <Image
          src={imgKarriere}
          alt="Teamarbeit im Büro – Karriere bei Saubermatik"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
          priority
          placeholder="blur"
          blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
        />
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {benefits.map((b) => (
          <li
            key={b.title}
            className="flex min-h-[11rem] flex-col rounded-2xl border border-foreground/10 bg-white p-5 shadow-md ring-1 ring-black/5 sm:min-h-[12rem] sm:p-6"
          >
            <h2 className="text-base font-bold text-foreground sm:text-lg">{b.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
              {b.text}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-2xl border border-foreground/10 bg-slate-50/90 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-foreground">Initiativbewerbung</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Senden Sie uns kurz Ihre Motivation und Verfügbarkeit – wir melden uns
          zeitnah mit den nächsten Schritten.
        </p>
        <Link
          href="/kontakt?type=karriere#bewerbung"
          className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-secondary px-5 text-sm font-bold text-secondary-foreground shadow-md transition hover:bg-secondary/90"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </div>
    </article>
  );
}
