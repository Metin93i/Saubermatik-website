import type { Metadata } from "next";
import Link from "next/link";
import { LeadFunnel } from "@/components/LeadFunnel";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";

export const metadata: Metadata = {
  description:
    "Professionelle Reinigungsfirma in der Region Zollernalb (Meßstetten): Gewerbe, Fenster, Fassade und Außenanlagen – transparent, pünktlich, digital geplant.",
};

const trustItems = [
  "Geschultes Personal",
  "Transparente Preise",
  "Digitale Objektsteuerung",
] as const;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/10 via-background to-background">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold text-secondary">
              Region Zollernalb · Meßstetten
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl lg:leading-tight">
              Gründlich. Pünktlich. Zuverlässig. Ihre professionelle
              Reinigungsfirma in der Region Zollernalb.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Egal ob Büro, Fenster, Fassade oder Gartenanlagen. Wir nehmen
              Ihnen die Arbeit ab – mit festen Ansprechpartnern, fairen Preisen
              und 100 % Ausfallsicherheit dank digitaler Planung. Für Gewerbe,
              Liegenschaften und Privat.
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-sm font-medium text-foreground sm:text-base">
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary" aria-hidden>
                    ✅
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/leistungen"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Leistungen ansehen
              </Link>
              <Link
                href="#kontakt-anfrage"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-foreground/15 bg-white px-5 text-sm font-semibold text-primary transition hover:border-secondary/60 hover:bg-secondary/5"
              >
                Direkt anfragen
              </Link>
            </div>
          </div>
          <LeadFunnel className="w-full max-w-xl lg:justify-self-end" />
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-white py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Stark vor Ort – schnell in der Region
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">
              Unsere Standort-Seiten bündeln lokale Suchintentionen (Hub &amp;
              Spoke) und verlinken klar zurück zur Leistungslogik.
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STANDORT_CITIES.map((city) => (
              <li key={city}>
                <Link
                  href={`/standorte/${city}`}
                  className="flex h-full flex-col rounded-2xl border border-foreground/10 bg-background p-5 shadow-sm transition hover:border-secondary/50 hover:shadow-md"
                >
                  <span className="text-base font-semibold text-primary">
                    {STANDORT_LABELS[city]}
                  </span>
                  <span className="mt-2 text-sm text-muted">
                    Gebäudereinigung &amp; Objektbetreuung
                  </span>
                  <span className="mt-4 text-sm font-semibold text-secondary">
                    Mehr erfahren →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
