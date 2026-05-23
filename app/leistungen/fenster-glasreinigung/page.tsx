import type { Metadata } from "next";
import Link from "next/link";
import { B2BOnboardingProcess } from "@/components/B2BOnboardingProcess";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { EngagementCalculator } from "@/components/EngagementCalculator";
import { GeoImage } from "@/components/GeoImage";
import { LeistungFaqJsonLd } from "@/components/LeistungFaqJsonLd";
import { LeistungSgeTldr } from "@/components/LeistungSgeTldr";
import { LeadFunnel } from "@/components/LeadFunnel";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { SnippetBaitTable } from "@/components/SnippetBaitTable";
import { getLeistungImage } from "@/lib/config/leistung-images";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";

const SLUG = "fenster-glasreinigung" as const;
const hero = getLeistungImage(SLUG);

export const metadata: Metadata = {
  title: "Glas- & Fensterreinigung Gewerbe",
  description:
    "Streifenfreie Glas- und Fassadenreinigung für Gewerbe und Industrie: Reinwasser-Osmose, Carbon-Teleskopstangen, TRBS 2121, klassisches Handwerk – Zollernalb & Region.",
  alternates: { canonical: "/leistungen/fenster-glasreinigung" },
};

export default function FensterGlasreinigungPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          {
            name: "Glas- & Fensterreinigung",
            path: "/leistungen/fenster-glasreinigung",
          },
        ]}
      />
      <LeistungFaqJsonLd slug={SLUG} />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <nav className="text-sm font-semibold text-secondary">
              <Link href="/leistungen" className="hover:underline">
                Leistungen
              </Link>
              <span className="text-muted"> / </span>
              <span className="text-muted">Glas- &amp; Fensterreinigung</span>
            </nav>
            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Streifenfreie Sicht, maximale Werterhaltung. Professionelle Glas-
              und Fassadenreinigung für Gewerbe und Industrie.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Saubermatik verbindet High-Tech-Reinwasser mit präzisem Handwerk –
              für repräsentative Fassaden, schadfreie Verglasungen und
              dokumentierte Compliance in der Zollernalb und angrenzenden
              Regionen.
            </p>
            <div className="relative mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-none ">
              <GeoImage
                src={hero.src}
                alt={hero.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 48rem"
                priority
                placeholder="blur"
                blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
                contentLocation="Zollernalbkreis, Baden-Württemberg"
                author="Saubermatik"
                imageId="geo-hero-glasreinigung-zollernalb"
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-none bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Glas-Analyse anfordern
              </a>
              <Link
                href="/qualitaetsmanagement"
                className="inline-flex h-12 items-center justify-center rounded-none border border-foreground/15 px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                Qualitätsmanagement
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <LeistungSgeTldr slug={SLUG} />

          <div className="mt-12 space-y-6 text-base leading-[1.75] text-foreground/90">
            <p>
              Glas ist die Visitenkarte Ihres Gebäudes – und gleichzeitig ein
              Hochrisiko-Asset: Verschmutzungen, Glas-Korrosion durch sauren
              Regen, Feinstaub und Moos an Rahmen und Falzen mindern nicht nur
              die Optik, sie beschleunigen Materialermüdung und treiben
              langfristige Instandhaltungskosten. Für Facility-Leiter,
              Geschäftsführung und Eigentümer zählt deshalb nicht „irgendwer mit
              Leiter“, sondern ein System aus Verfahren, Nachweisen und
              Arbeitssicherheit.
            </p>
            <p>
              Saubermatik liefert genau diesen Spagat: Das{" "}
              <strong className="text-foreground">Osmose-Verfahren</strong> mit{" "}
              <strong className="text-foreground">
                entmineralisiertem Wasser
              </strong>{" "}
              für Außenfassaden und Höhenarbeiten – und klassisches
              Präzisions-Handwerk mit Einwascher und Abzieher für Innenräume,
              Showrooms und feingliedrige Glasbauten. Beide Welten teilen sich
              eine digitale Protokollkette: Sie sehen, wann welche Fläche
              bearbeitet wurde – ohne Reklamations-Pingpong.
            </p>
          </div>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Deep Dive 1: Die Reinwasser-Revolution (High-Tech Osmose)
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Im Kern der modernen Außenreinigung steht Physik, nicht Chemie:
                Durch Umkehrosmose wird dem Wasser nahezu sämtliche Mineralien
                entzogen.{" "}
                <strong className="text-foreground">
                  Entmineralisiertes Wasser
                </strong>{" "}
                besitzt ein enormes Schmutzlösevermögen – es zieht Rückstände
                aktiv aus der Oberfläche, statt sie wie hartes Leitungswasser
                auf der Scheibe zu hinterlassen. Trocknet die Fläche – selbst
                bei direkter Sonneneinstrahlung – bleibt das Ergebnis{" "}
                <strong className="text-foreground">streifenfrei</strong>, ganz
                ohne aggressive Reinigungsmittel. Das ist echter Umweltschutz im
                Gewerbe: weniger Abwasserbelastung, keine unnötige
                Tensid-Exposition an beschichteten Fassaden.
              </p>
              <p>
                Der B2B-Hebel liegt in der Logistik: Mit leichten{" "}
                <strong className="text-foreground">
                  Carbon-Teleskopstangen
                </strong>{" "}
                erreichen geschulte Teams Verglasungen bis zu rund 20 Metern
                Höhe vom Boden aus. Das bedeutet konsequent{" "}
                <strong className="text-foreground">Hubsteiger-Verzicht</strong>{" "}
                an vielen Objekten – keine Kosten für Hubsteiger, Kräne oder
                aufwendige Gerüste, kürzere Einsatzzeiten, geringeres
                Haftungsrisiko auf dem Gelände. Für Industriehallen,
                Logistikzentren und Bürokomplexe in der Region bedeutet das:
                schneller, sicherer, planbarer – und in der Gesamtkalkulation
                oft deutlich günstiger als klassische Höhenkonzepte.
              </p>
              <p>
                Unsere Teams arbeiten nach dokumentierten SOPs: Wasserqualität,
                Stangenlänge, Reinigungsrichtung und Wetterfenster werden im
                Objektplan festgehalten. So wird die{" "}
                <strong className="text-foreground">
                  streifenfreie Glanzgarantie
                </strong>{" "}
                nicht zur Marketingfloskel, sondern zum wiederholbaren
                Qualitätsmerkmal – messbar für Einkauf und Facility.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Deep Dive 2: Klassisches Handwerk (Einwascher &amp; Abzieher)
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Nicht jede Verglasung verträgt das Reinwasser-Setup – und nicht
                jeder Innenraum verlangt Teleskoptechnik. Für Büroetagen,
                Praxisflure, Showrooms und feingliedrige Glasfassaden setzen wir
                auf das bewährte Handwerk: Einwascher, Abzieher,
                mikrofaserbasierte Technik und materialgerechte Mittel. Der
                Unterschied zu „Fenster schnell wischen“ liegt im Detail:{" "}
                <strong className="text-foreground">
                  Rahmen- und Falzreinigung
                </strong>
                , Dichtungen, Fensterbänke und Beschläge werden systematisch
                mitbearbeitet – nicht nur die sichtbare Scheibe.
              </p>
              <p>
                Warum das für C-Level relevant ist: Umwelteinflüsse wie Moos,
                Pollen, saurer Regen und industrielles Feinstaub sammeln sich
                zuerst in Falzen und auf Rahmen an. Wer nur Glas poliert, lässt
                Korrosion und Glas-Korrosion an den Rändern zu – mit Folgekosten
                bei Dichtungen, Wärmeschutz und Austausch. Unsere Intervalle
                (siehe Tabelle unten) kombinieren Außen- und Innenprogramme so,
                dass{" "}
                <strong className="text-foreground">Fassaden-Ergonomie</strong>{" "}
                und Werterhalt zusammenpassen: repräsentativ für Kunden,
                schonend für das Bauteil.
              </p>
              <p>
                Besonders Kanzleien, Arztpraxen und Einzelhandel mit
                Schaufensterfront profitieren: Die Außenwirkung sitzt im Glas,
                die Innenhygiene im Detail – beides dokumentiert für Ihre
                Qualitätssicherung und Audits.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Deep Dive 3: Arbeitssicherheit &amp; Compliance (TRBS 2121)
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Glasreinigung in der Höhe ist kein Nebengewerbe – sie unterliegt
                strengen Regeln. Saubermatik arbeitet nach den Vorgaben der
                Berufsgenossenschaft der Bauwirtschaft (BG BAU) und hält die{" "}
                <strong className="text-foreground">TRBS 2121</strong>{" "}
                (Technische Regeln für Betriebssicherheit – Absturzsicherung)
                bei allen Einsätzen ein, in denen Absturzgefahr besteht. Das
                umfasst Gefährdungsbeurteilung, Unterweisung, geprüfte PSA und
                klare Entscheidungskriterien: Wann Bodenarbeit mit
                Teleskoptechnik, wann Hubsteiger, wann Verkehrssicherung auf
                öffentlichem Grund.
              </p>
              <p>
                Für Ausschreibungen und Rahmenverträge liefern wir
                nachvollziehbare Unterlagen: Einsatzprotokolle, Versicherungs-
                und Unterweisungsnachweise, Abstimmung mit Ihrem Objektleiter.
                So reduzieren Sie nicht nur optische Risiken, sondern auch
                Betreiberhaftung – ein Punkt, den interne „Billig-Lösungen“
                selten sauber abbilden.
              </p>
              <p>
                Kombinieren Sie Glasprogramme mit unserer{" "}
                <Link
                  href="/leistungen/fassadenreinigung"
                  className="font-semibold text-secondary hover:underline"
                >
                  Fassadenreinigung
                </Link>{" "}
                oder dem{" "}
                <Link
                  href="/zielgruppen/hausverwaltungen"
                  className="font-semibold text-secondary hover:underline"
                >
                  Hausverwaltungs-Portfolio
                </Link>
                , wenn Außenflächen ganzheitlich im SLA gebündelt werden sollen.
              </p>
            </div>
          </article>

          <div className="mt-16 rounded-none border border-secondary/25 bg-secondary/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground">
              Warum Saubermatik für Glas &amp; Fassade?
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-muted">
              <li>
                Reinwasser-Osmose + Handwerk – ein Anbieter, ein Ansprechpartner
              </li>
              <li>
                Carbon-Teleskopstangen bis ca. 20 m – Hubsteiger-Verzicht wo
                möglich
              </li>
              <li>
                TRBS 2121 &amp; BG-BAU-orientierte Arbeitssicherheit in der Höhe
              </li>
              <li>
                Digitale Protokolle für Facility, Eigentümer und Abrechnung
              </li>
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Empfohlene Reinigungsintervalle (Gewerbe)
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Strukturierte Orientierung für Einkauf und Facility – exakt
              abgestimmt auf Gebäudeart und Nutzung.
            </p>
            <SnippetBaitTable slug={SLUG} />
          </div>
        </section>

        <B2BOnboardingProcess
          pagePath="/leistungen/fenster-glasreinigung"
          className="border-t border-foreground/10 bg-slate-50/80 py-16 sm:py-20"
        />

        <section className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
            <EngagementCalculator
              funnelHref="#kontakt-anfrage"
              initialCategory="glas"
            />
          </div>
        </section>

        <section className="border-t border-slate-200 py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SeoCrossLinks type="location" />
          </div>
        </section>

        <section
          id="kontakt-anfrage"
          className="border-t border-slate-200 bg-zinc-100 py-16 sm:py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Glas- &amp; Fensterreinigung anfragen
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">
                Flächen, Höhe, Intervalle – wir erstellen ein verbindliches
                Angebot nach Objektbegehung.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <LeadFunnel initialServiceType="fenster-glasreinigung" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
