import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadFunnel } from "@/components/LeadFunnel";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";

export const metadata: Metadata = {
  description:
    "Saubermatik aus Meßstetten: Facility & Reinigung für die Zollernalb und den Schwarzwald-Baar-Heuberg-Kreis – mit festem Ansprechpartner vor Ort und digitaler Objektsteuerung.",
};

const trustItems = [
  "Fester Ansprechpartner vor Ort – kein anonymes Weiterreichen",
  "Digitale Objektsteuerung: Ausfälle werden abgefangen, bevor Sie es merken",
  "Regional verwurzelt: Zollernalb & Schwarzwald-Baar-Heuberg, kurze Wege",
] as const;

const imgOffice =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85";
const imgCleaning =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85";
const imgHandshake =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85";
const imgFacade =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85";

const testimonials = [
  {
    quote:
      "Was zählt, ist, dass es klappt – ohne Diskussion. Seit wir mit Saubermatik fahren, ist die Treppenhaus- und Büroqualität stabil, und ich habe einen Namen für den Notfall.",
    name: "Michael R.",
    role: "Geschäftsführung, mittelständischer Betrieb · Tuttlingen",
  },
  {
    quote:
      "In der Praxis geht es um Verlässlichkeit und Diskretion. Die Teams halten sich an Zeitfenster, und wenn mal jemand ausfällt, wird neu geplant – das merkt man am laufenden Betrieb.",
    name: "Dr. Elena W.",
    role: "Fachärztin · Balingen",
  },
  {
    quote:
      "Wir brauchen keine Superlative, sondern saubere Objektdokumentation und Erreichbarkeit. Genau das liefern sie – bodenständig, aber auf dem Niveau, das unsere Mieter erwarten.",
    name: "Stefan K.",
    role: "Liegenschaftsverwaltung · Tuttlingen",
  },
] as const;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/12 via-background to-background">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-wide text-secondary">
              Meßstetten · Zollernalb · Schwarzwald-Baar-Heuberg
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Reinigung, die hält, was sie verspricht – mit Kopf, nicht nur mit
              dem Wischmob.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Bei uns bekommen Sie keinen Textbaustein aus der Großstadt, sondern
              einen festen Ansprechpartner vor Ort. Unsere digitale
              Objektsteuerung sorgt dafür, dass Touren und Qualität nicht vom
              Zufall abhängen: wenn jemand ausfällt, reagiert das System – Sie
              merken vor allem eins: dass es weiterläuft.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5 text-sm font-medium text-foreground sm:text-base">
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-secondary" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/leistungen"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-xl"
              >
                Leistungen ansehen
              </Link>
              <Link
                href="#kontakt-anfrage"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-foreground/15 bg-white/90 px-5 text-sm font-semibold text-primary shadow-md backdrop-blur transition-all duration-200 hover:scale-[1.02] hover:border-secondary/50 hover:bg-white hover:shadow-lg"
              >
                Direkt anfragen
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:items-end">
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl lg:ml-auto">
              <Image
                src={imgOffice}
                alt="Moderner Bürobereich – sauber und repräsentativ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <LeadFunnel className="w-full max-w-xl shadow-xl ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-2xl lg:ml-auto" />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Warum wir? Weil wir nicht nur putzen.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Wir übernehmen Verantwortung für Ihre Liegenschaft: klare Intervalle,
              nachvollziehbare Qualität und ein Team, das weiß, was in Kanzleien,
              Praxen und Gewerbeobjekten zählt. Digital gestützt heißt bei uns:
              weniger Ausfälle, weniger Telefonate – mehr Ruhe im Alltag.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Regional verwurzelt in der Zollernalb und im
              Schwarzwald-Baar-Heuberg-Kreis bleiben Entscheidungswege kurz.
              Wer bei uns anruft, landet nicht in einer Hotline, sondern bei
              Menschen, die Ihr Objekt kennen oder es sich aneignen.
            </p>
          </div>
          <div className="relative order-1 aspect-[5/4] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl lg:order-2">
            <Image
              src={imgHandshake}
              alt="B2B-Gespräch und Handschlag – partnerschaftliche Zusammenarbeit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-slate-50/80 py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl">
              <Image
                src={imgOffice}
                alt="Moderne Bürowelt"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl">
              <Image
                src={imgCleaning}
                alt="Professionelle Reinigung"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-1">
              <Image
                src={imgFacade}
                alt="Glasfassade eines Geschäftsgebäudes"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Stimmen aus der Region
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted">
            Beispielzitate für den Relaunch (Namen anonymisiert) – so arbeiten
            wir gern mit Geschäftsführung, Praxen und Verwaltung zusammen.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="flex flex-col rounded-2xl border border-foreground/10 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <p className="text-sm leading-6 text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 border-t border-foreground/10 pt-4">
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="mt-1 text-xs text-muted">{t.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-gradient-to-b from-slate-50/90 to-background py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Kurz vor Ort – für Sie in der Nachbarschaft
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">
              Von Meßstetten aus sind wir schnell in Tuttlingen, Balingen,
              Albstadt und Rottweil im Einsatz. Ein Klick führt zur lokalen
              Einordnung; Ihre Anfrage landet trotzdem zentral bei uns.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STANDORT_CITIES.map((city) => (
              <li key={city}>
                <Link
                  href={`/standorte/${city}`}
                  className="group flex h-full flex-col rounded-2xl border border-foreground/10 bg-white p-5 shadow-md transition-all duration-200 hover:scale-[1.02] hover:border-secondary/40 hover:shadow-xl"
                >
                  <span className="text-base font-semibold text-primary group-hover:text-secondary">
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
