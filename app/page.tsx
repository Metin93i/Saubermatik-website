import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QrCodeIcon, ShieldCheckIcon, UserCheckIcon } from "@/components/BrandIcons";
import { EsgComplianceStatement } from "@/components/EsgComplianceStatement";
import { FaqPageJsonLd } from "@/components/FaqPageJsonLd";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { AnfrageCta } from "@/components/AnfrageCta";
import { StartHowItWorks } from "@/components/StartHowItWorks";
import { StartLeistungsGrid } from "@/components/StartLeistungsGrid";
import { StartTrustBar } from "@/components/StartTrustBar";
import { getStandortKachelUntertitel } from "@/lib/config/city-tiers";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";
import { getStartseiteFaqItems } from "@/lib/seo/startseite-faq";

export const metadata: Metadata = {
  description:
    "Saubermatik aus Meßstetten: Gebäudereinigung für Zollernalbkreis, Sigmaringen, Rottweil, Hechingen und Tübingen – Projekte bis Stuttgart und an den Bodensee. Fester Ansprechpartner, dokumentierte Einsätze.",
};

const trustItems = [
  "Fester Ansprechpartner statt Callcenter",
  "Bei Urlaub oder Ausfall: bewährtes Vertretungsteam, sonst die Geschäftsführung",
  "Regional verwurzelt: Zollernalbkreis, Sigmaringen, Rottweil, Hechingen, Tübingen – Projekte bis Stuttgart und an den Bodensee",
] as const;

const galleryImages = [
  {
    src: "/images/einsatz-fensterreinigung-reinwasser.jpg",
    alt: "Fensterreinigung mit Reinwasser-Teleskopstange an Bürogebäude",
    sizes: "(max-width: 1024px) 50vw, 33vw",
  },
  {
    src: "/images/einsatz-gruenanlagenpflege.jpg",
    alt: "Saubermatik-Mitarbeiter bei der Grünanlagenpflege mit Trimmer",
    sizes: "(max-width: 1024px) 50vw, 33vw",
  },
  {
    src: "/images/einsatz-glasfassade-hoehe.jpg",
    alt: "Saubermatik-Mitarbeiter reinigt hohe Glasfassade mit Teleskopstange im Reinwasser-Verfahren",
    sizes: "(max-width: 1024px) 100vw, 33vw",
    className: "sm:col-span-2 lg:col-span-1",
  },
] as const;

const secureOpsPoints = [
  {
    icon: QrCodeIcon,
    text: "QR-Meldung ohne App und ohne Anmeldung",
  },
  {
    icon: ShieldCheckIcon,
    text: "Einsätze mit Nachweis im Portal",
  },
  {
    icon: UserCheckIcon,
    text: "Fester Ansprechpartner statt Callcenter",
  },
] as const;

const CTA_NOTE =
  "Besichtigung und Angebot sind kostenlos und unverbindlich." as const;

/** Breiter Startseiten-Container (2XL / ~100rem) — weniger Rand-Whitespace auf großen Monitoren. */
const PAGE_CONTAINER = "mx-auto w-full max-w-[100rem] px-4 sm:px-8 lg:px-16";

const startFaqItems = getStartseiteFaqItems();

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <FaqPageJsonLd items={startFaqItems} />
      <section className="flex flex-col lg:grid lg:min-h-[80vh] lg:grid-cols-[minmax(0,58%)_minmax(0,42%)]">
        <div className="relative h-[45vh] w-full lg:order-2 lg:h-auto lg:min-h-[80vh]">
          <Image
            src="/images/einsatz-fensterreinigung-hero.jpg"
            alt="Saubermatik-Mitarbeiter reinigt Fenster mit Teleskopstange und Bürste an einer Glasfassade"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 45vw"
            quality={85}
            priority
          />
        </div>
        <div className="flex flex-col justify-center bg-[#13181d] px-4 py-10 sm:px-8 lg:order-1 lg:min-h-[80vh] lg:px-16 lg:py-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
              Gebäudereinigung · Zollernalbkreis · Sigmaringen · Stuttgart ·
              Bodensee · Rottweil · Hechingen · Tübingen
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Wir digitalisieren die Reinigung.
            </h1>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Beweis statt Versprechen. Ihr Reinigungsservice für Gewerbe,
              Hausverwaltungen und Praxen – mit dokumentierten Einsätzen im
              eigenen Kundenportal.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-10 items-center justify-center rounded-sm bg-primary px-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
              >
                Anfrage stellen
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex h-10 items-center justify-center rounded-sm border border-white/70 bg-white/10 px-4 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StartTrustBar />

      <StartLeistungsGrid />

      <section className="border-t border-foreground/10 bg-zinc-50 py-10 sm:py-12">
        <div className={`${PAGE_CONTAINER} flex flex-col gap-3`}>
          <p className="max-w-4xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Saubermatik ist ein Reinigungsservice aus Meßstetten. Bei uns
            bekommen Sie keinen Textbaustein aus der Großstadt, sondern einen
            festen Ansprechpartner. Bei Urlaub oder Ausfall übernimmt ein
            bewährtes Vertretungsteam – sonst die Geschäftsführung persönlich.
            Ob Verkehrssicherung für Hausverwaltungen, Praxisreinigung nach
            abgestimmtem Plan oder die Unterhaltsreinigung Ihres Büros: Wir
            halten Ihre Immobilien im Zollernalbkreis, in Sigmaringen, Rottweil,
            Hechingen und Tübingen im Rhythmus – Projektaufträge bis Stuttgart
            und an den Bodensee. Angebot auf Anfrage.
          </p>
          <FreshnessBadge />
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-zinc-50 py-12 sm:py-14">
        <div className={PAGE_CONTAINER}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Warum wir? Weil wir nicht nur putzen.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-muted sm:text-lg">
            Wir übernehmen Verantwortung für Ihre Liegenschaft: klare
            Intervalle, nachvollziehbare Qualität und ein Team, das weiß, was
            in Kanzleien, Praxen und Gewerbeobjekten zählt. Digital gestützt
            heißt bei uns: weniger Ausfälle, weniger Telefonate – mehr Ruhe im
            Alltag.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-7 text-muted">
            Regional verwurzelt zwischen Zollernalbkreis, Sigmaringen, Rottweil,
            Hechingen und Tübingen bleiben Entscheidungswege kurz – Projektaufträge
            übernehmen wir bis Stuttgart und an den Bodensee. Wer bei uns
            anruft, landet nicht in einer Hotline, sondern bei Menschen, die
            Ihr Objekt kennen oder es sich aneignen.
          </p>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-white py-10 sm:py-12">
        <div className={PAGE_CONTAINER}>
          <ul className="flex flex-col gap-2 text-sm font-medium text-foreground sm:text-base">
            {trustItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-secondary" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="py-12 sm:py-16"
        style={{
          background: "linear-gradient(105deg, #003a6b 0%, #0066b3 70%, #1a7cc4 100%)",
        }}
        aria-labelledby="secureops-band-heading"
      >
        <div className={PAGE_CONTAINER}>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            SecureOps by Saubermatik
          </p>
          <h2
            id="secureops-band-heading"
            className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            Ein Scan im Objekt – das Anliegen landet direkt bei uns.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            Dokumentierte Einsätze im Kundenportal, nachvollziehbar statt
            versprochen. Den Umfang vereinbaren wir je Objekt. Für
            Hausverwaltungen, Gewerbe und Kommunen.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            Keine Software, die Sie kaufen – SecureOps ist Teil unserer
            Reinigungsleistung.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {secureOpsPoints.map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-white">
                <item.icon className="mt-0.5 h-6 w-6 shrink-0" />
                <span className="text-sm font-semibold leading-6 sm:text-base">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href="/secureops"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-sm bg-white px-5 text-sm font-bold text-[#0066b3] transition hover:bg-white/90"
          >
            SecureOps ansehen
          </Link>
        </div>
      </section>

      <section className="bg-[#13181d] py-12 sm:py-16" aria-labelledby="marken-band-heading">
        <div className={PAGE_CONTAINER}>
          <div className="border-l-4 border-[#f47920] pl-5 sm:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
              SAUBERMATIK Reinigungsservice
            </p>
            <h2
              id="marken-band-heading"
              className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              Sauber. Zuverlässig.{" "}
              <span className="text-[#f47920]">Vor Ort.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 sm:text-lg">
              Ihr Gebäudeservice auf der Schwäbischen Alb – von der
              Unterhaltsreinigung über Glas- und Raffstore-Reinigung bis zum
              Winterdienst.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-8 sm:py-10">
        <div className={`${PAGE_CONTAINER} flex flex-col gap-2.5`}>
          <EsgComplianceStatement />
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
              Statt Excel-Chaos steuern wir Ihr Objekt über die
              Saubermatik-Plattform: digitale Protokolle, klare Checklisten und
              ein Team, das Ausfälle persönlich oder mit bewährter Vertretung
              auffängt – damit Reinigung bei Ihnen nicht vom Zufall abhängt.
            </p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            <li className="flex flex-col rounded-sm border border-zinc-200 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Digitale Protokolle
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                Dokumentierte Einsätze hinterlassen eine Spur: Was wurde wann
                erledigt – nachvollziehbar für Geschäftsführung, Hausverwaltung
                und Qualitätssicherung. Weniger Streit, weniger Rückfragen, mehr
                Kontrolle im Alltag.
              </p>
            </li>
            <li className="flex flex-col rounded-sm border border-zinc-200 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Vertretung, die Sie kennen
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                Wenn jemand ausfällt, springt ein bewährtes Vertretungsteam ein
                – oder die Geschäftsführung selbst. So bleibt Ihr Objekt im
                Rhythmus, ohne dass Sie jedes Mal selbst koordinieren müssen.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-zinc-50 py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className={`relative aspect-[4/3] overflow-hidden rounded-sm ${"className" in img ? img.className : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={img.sizes}
                  quality={80}
                />
              </div>
            ))}
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
                    {getStandortKachelUntertitel(city)}
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

      <StartHowItWorks />

      <section
        className="border-t border-foreground/10 bg-zinc-50 py-12 sm:py-14"
        aria-labelledby="start-faq-heading"
      >
        <div className={PAGE_CONTAINER}>
          <h2
            id="start-faq-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Häufige Fragen
          </h2>
          <dl className="mt-8 max-w-3xl space-y-8">
            {startFaqItems.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-foreground">
                  {item.question}
                </dt>
                <dd className="mt-2 text-base leading-[1.75] text-foreground/90">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="kontakt-anfrage"
        className="border-t border-foreground/10 bg-zinc-100 py-12 sm:py-16"
      >
        <div className={PAGE_CONTAINER}>
          <AnfrageCta
            title="Objekt anfragen"
            text="Fläche, Intervalle, Sonderzonen: Nach einer Begehung erhalten Sie ein unverbindliches Angebot. Fester Ansprechpartner statt Callcenter."
            note={CTA_NOTE}
          />
        </div>
      </section>
    </div>
  );
}
