import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppMockup } from "@/components/AppMockup";
import { B2BOnboardingProcess } from "@/components/B2BOnboardingProcess";
import { EsgComplianceStatement } from "@/components/EsgComplianceStatement";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { GeoImage } from "@/components/GeoImage";
import { HeroQuickSearch } from "@/components/HeroQuickSearch";
import { KamProfileCard } from "@/components/KamProfileCard";
import { LeadFunnel } from "@/components/LeadFunnel";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";

export const metadata: Metadata = {
  description:
    "Saubermatik aus Meßstetten: Facility & Reinigung für die Zollernalb und den Schwarzwald-Baar-Heuberg-Kreis – mit festem Ansprechpartner und digitaler Objektsteuerung.",
};

const trustItems = [
  "Fester Ansprechpartner statt Callcenter",
  "Digitale Objektsteuerung: Ausfälle werden abgefangen, bevor Sie es merken",
  "Regional verwurzelt: Zollernalb & Schwarzwald-Baar-Heuberg, kurze Wege",
] as const;

const imgOffice =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000";
const imgCleaning =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";
const imgHandshake =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200";
const imgFacade =
  "https://images.unsplash.com/photo-1520110120835-c96534a4c984?auto=format&fit=crop&q=80&w=1200";

/** Breiter Startseiten-Container (2XL / ~100rem) — weniger Rand-Whitespace auf großen Monitoren. */
const PAGE_CONTAINER = "mx-auto w-full max-w-[100rem] px-4 sm:px-8 lg:px-16";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden bg-zinc-50">
        <div className={`${PAGE_CONTAINER} py-5 lg:py-7`}>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Meßstetten · Zollernalb · Schwarzwald-Baar-Heuberg
          </p>
          <h1 className="mt-1 max-w-5xl text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
            Wir digitalisieren die Reinigung.
          </h1>
          <p className="mt-2 max-w-3xl text-base font-semibold text-foreground sm:text-lg">
            Beweis statt Versprechen.
          </p>

          <HeroQuickSearch className="mt-4" />

          <div className="mt-4 grid items-start gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">
                Bei uns bekommen Sie keinen Textbaustein aus der Großstadt,
                sondern einen festen Ansprechpartner. Unsere digitale
                Objektsteuerung sorgt dafür, dass Touren und Qualität nicht vom
                Zufall abhängen: Wenn jemand ausfällt, reagiert das System – Sie
                merken vor allem eins: dass es weiterläuft. Wir kombinieren
                modernste SaaS-Protokolle mit echtem, regionalem Handwerk. Ob
                rechtssichere Verkehrssicherung für Hausverwaltungen,
                RKI-konforme Praxisreinigung oder die tägliche
                Unterhaltsreinigung Ihres Büros – wir sichern den Werterhalt
                Ihrer Immobilien im gesamten Zollernalbkreis und
                Schwarzwald-Baar-Heuberg. Transparente SLAs, keine versteckten
                Kosten.
              </p>
              <FreshnessBadge />
              <ul className="flex flex-col gap-1 text-sm font-medium text-foreground">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-0.5 shrink-0 text-secondary"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/leistungen"
                  className="inline-flex h-10 items-center justify-center rounded-sm bg-primary px-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                >
                  Leistungen ansehen
                </Link>
                <Link
                  href="#kontakt-anfrage"
                  className="inline-flex h-10 items-center justify-center rounded-sm border border-zinc-300 bg-white px-4 text-sm font-bold text-foreground transition hover:bg-zinc-100"
                >
                  Direkt anfragen
                </Link>
              </div>

              <div className="flex flex-col gap-2.5 pt-1">
                <KamProfileCard />
                <EsgComplianceStatement />
                <AppMockup />
              </div>
            </div>

            {/* TODO(E1): Hero-Banner-Bild noch nicht freigegeben — Platzhalter bis Asset vorliegt. Keinen Bildpfad erfinden. */}
            <div
              className="flex min-h-[16rem] items-center justify-center rounded-sm border border-dashed border-zinc-300 bg-zinc-100/80 px-6 py-10 text-center lg:sticky lg:top-20 lg:min-h-[22rem]"
              aria-label="Banner-Bild folgt"
            >
              <p className="max-w-xs text-sm leading-6 text-muted">
                Banner-Bild folgt.
                <br />
                <span className="text-xs">
                  TODO: freigegebenes Hero-Asset einbinden
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-foreground/10 bg-zinc-50 py-10 sm:py-12"
        aria-labelledby="reinigung-4-heading"
      >
        <div className={PAGE_CONTAINER}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Reinigung 4.0
            </p>
            <h2
              id="reinigung-4-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
            >
              Software-Vorteil statt Zufall: Protokolle, die jede Tour
              dokumentieren.
            </h2>
            <p className="mt-3 text-base leading-7 text-muted sm:text-lg">
              Statt Excel und WhatsApp-Chaos steuern wir Ihr Objekt über die
              Saubermatik-Plattform: digitale Protokolle, klare Checklisten und
              eine Disposition, die Ausfälle abfängt – damit Reinigung bei Ihnen
              nicht vom Zufall abhängt.
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            <li className="flex flex-col rounded-sm border border-zinc-200 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Digitale Protokolle
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                Jeder Einsatz hinterlässt eine Spur: Was wurde wann erledigt –
                nachvollziehbar für Geschäftsführung, Hausverwaltung und
                Qualitätssicherung. Weniger Streit, weniger Rückfragen, mehr
                Kontrolle im Alltag.
              </p>
            </li>
            <li className="flex flex-col rounded-sm border border-zinc-200 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Ausfallsicherheit über die Plattform
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                Wenn jemand ausfällt, springt die Saubermatik-Plattform ein:
                Ersatzlogistik und Touren werden neu geplant, bevor Lücken
                spürbar werden. So bleibt Ihr Objekt im Rhythmus – ohne dass Sie
                jedes Mal selbst koordinieren müssen.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <B2BOnboardingProcess
        pagePath="/"
        className="border-t border-foreground/10 bg-white py-8 sm:py-10"
      />

      <section
        id="kontakt-anfrage"
        className="border-t border-foreground/10 bg-zinc-50 py-8 sm:py-10"
      >
        <div className={`${PAGE_CONTAINER} grid gap-5 lg:grid-cols-2 lg:gap-6`}>
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              Objekt anfragen — direkt an Metin Altinsoys Team
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
              Fläche, Intervalle, Sonderzonen: Wir erstellen nach Begehung ein
              verbindliches Leistungsverzeichnis mit transparenten SLAs.
            </p>
            <KamProfileCard className="mt-4" />
          </div>
          <LeadFunnel className="w-full rounded-sm border border-zinc-200" />
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-zinc-50 py-12 sm:py-14">
        <div
          className={`${PAGE_CONTAINER} grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10`}
        >
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Warum wir? Weil wir nicht nur putzen.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Wir übernehmen Verantwortung für Ihre Liegenschaft: klare
              Intervalle, nachvollziehbare Qualität und ein Team, das weiß, was
              in Kanzleien, Praxen und Gewerbeobjekten zählt. Digital gestützt
              heißt bei uns: weniger Ausfälle, weniger Telefonate – mehr Ruhe im
              Alltag.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Regional verwurzelt in der Zollernalb und im
              Schwarzwald-Baar-Heuberg-Kreis bleiben Entscheidungswege kurz. Wer
              bei uns anruft, landet nicht in einer Hotline, sondern bei
              Menschen, die Ihr Objekt kennen oder es sich aneignen.
            </p>
          </div>
          <div className="relative order-1 aspect-[5/4] overflow-hidden rounded-sm border border-zinc-200 lg:order-2">
            <GeoImage
              src={imgHandshake}
              alt="B2B-Gespräch und Handschlag – partnerschaftliche Zusammenarbeit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              placeholder="blur"
              blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
              contentLocation="Zollernalbkreis, Baden-Württemberg"
              author="Saubermatik"
              imageId="geo-warum-wir-handshake"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-zinc-50 py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-200">
              <Image
                src={imgOffice}
                alt="Moderne Bürowelt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-200">
              <Image
                src={imgCleaning}
                alt="Professionelle Reinigung"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-200 sm:col-span-2 lg:col-span-1">
              <Image
                src={imgFacade}
                alt="Glasfassade eines Geschäftsgebäudes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                placeholder="blur"
                blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-white py-12 sm:py-14">
        <div className={PAGE_CONTAINER}>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Kurz vor Ort – für Sie in der Nachbarschaft
            </h2>
            <p className="mt-2 text-base leading-7 text-muted">
              Von Meßstetten aus sind wir u. a. in Tübingen, Reutlingen,
              Villingen-Schwenningen und am Bodensee (Überlingen) im Einsatz –
              und in der gesamten Zollernalb. Ein Klick führt zur lokalen
              Einordnung; Ihre Anfrage landet zentral bei uns.
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {STANDORT_CITIES.map((city) => (
              <li key={city}>
                <Link
                  href={`/standorte/${city}`}
                  className="group flex min-h-[8rem] flex-col rounded-sm border border-zinc-200 bg-zinc-50 p-4 transition hover:border-primary hover:bg-white"
                >
                  <span className="text-base font-semibold text-foreground group-hover:text-secondary">
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
