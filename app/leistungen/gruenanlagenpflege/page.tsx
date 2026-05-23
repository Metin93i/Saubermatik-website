import type { Metadata } from "next";
import Link from "next/link";
import { B2BOnboardingProcess } from "@/components/B2BOnboardingProcess";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { EngagementCalculator } from "@/components/EngagementCalculator";
import { LeistungFaqJsonLd } from "@/components/LeistungFaqJsonLd";
import { LeistungHeroImage } from "@/components/LeistungHeroImage";
import { LeistungSgeTldr } from "@/components/LeistungSgeTldr";
import { LeadFunnel } from "@/components/LeadFunnel";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { SnippetBaitTable } from "@/components/SnippetBaitTable";

export const metadata: Metadata = {
  title: "Grünanlagenpflege",
  description:
    "Grünanlagenpflege für Wohnanlagen und Gewerbe: Frühjahr, Sommer, Herbst – Rasen, Hecken, Laub, Unkraut. Repräsentative Außenanlagen in der Zollernalb.",
  alternates: { canonical: "/leistungen/gruenanlagenpflege" },
};

const seasons = [
  {
    title: "Frühjahr – Start in die Saison",
    items: [
      "Rasenpflege nach Winterruhe: Vertikutieren, erste Schnitte, Kante zu Wegen",
      "Beetpflege, Schnitt von Hecken und Sträuchern nach Pflanzenschutzfenstern",
      "Entfernung von Winterlaub und Sturmholz, Kontrolle der Bewässerung",
    ],
  },
  {
    title: "Sommer – repräsentativer Standard",
    items: [
      "Intervall-Rasenmähen, Kantenpflege, Unkrautmanagement in Beeten und Pflasterfugen",
      "Heckenschnitt und Formschnitt für Sichtachsen und Eingangsbereiche",
      "Pflege von Zufahrten und Müllstellplätzen – optische Verbindung zum Gebäude",
    ],
  },
  {
    title: "Herbst – Laub & Vorbereitung Winter",
    items: [
      "Laubentsorgung auf Gehwegen, Höfen und Grünflächen – Verkehrssicherheit",
      "Letzte Rasenschnitte, Düngung nach Plan, Schnitt vorbereitender Sträucher",
      "Abstimmung mit Winterdienst: keine Konflikte zwischen Laubdienst und Räumfenstern",
    ],
  },
  {
    title: "Unkraut & Sonderflächen",
    items: [
      "Unkrautvernichtung materialschonend in Pflaster- und Randbereichen",
      "Pflege von Innenhöfen, Spiel- und Ruhebereichen in Wohnanlagen",
      "Dokumentierte Einsätze für umlagefähige Betriebskosten (§ 2 BetrKV)",
    ],
  },
] as const;

export default function GruenanlagenpflegePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Grünanlagenpflege", path: "/leistungen/gruenanlagenpflege" },
        ]}
      />
      <LeistungFaqJsonLd slug="gruenanlagenpflege" />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <nav className="text-sm font-semibold text-secondary">
              <Link href="/leistungen" className="hover:underline">
                Leistungen
              </Link>
              <span className="text-muted"> / </span>
              <span className="text-muted">Grünanlagenpflege</span>
            </nav>
            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Grünanlagenpflege – repräsentative Außenanlagen für Wohnkomplexe
              &amp; Gewerbe.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Der erste Eindruck Ihrer Liegenschaft entsteht vor der Haustür –
              auf dem Rasen, im Innenhof, an Zufahrten und Beeten. Wir pflegen
              jahreszeitlich strukturiert, dokumentiert und abgestimmt mit
              Reinigung und Winterdienst.
            </p>
            <LeistungHeroImage
              slug="gruenanlagenpflege"
              priority
              className="mt-10 max-w-4xl"
            />
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Grünanlagen-Angebot
              </a>
              <Link
                href="/zielgruppen/hausverwaltungen"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                Für Hausverwaltungen
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <LeistungSgeTldr slug="gruenanlagenpflege" />
          <div className="mt-12 space-y-6 text-base leading-[1.75] text-foreground/90">
            <p>
              Grünanlagen sind für Hausverwaltungen mehr als „Rasen mähen“. Sie
              sind Werterhalt der Liegenschaft, Mieterzufriedenheit und
              Verkehrssicherheit zugleich: ungemähte Wege, Laub auf Gehsteinen
              und zugewucherte Eingänge erzeugen Beschwerden und
              Haftungsrisiken. Saubermatik plant Grünpflege als Jahresprogramm –
              nicht als Einzelauftrag nach Beschwerde.
            </p>
            <p>
              Wir betreuen Wohnkomplexe, Gewerbehöfe und gemischte Bestände in
              der Zollernalb und angrenzenden Regionen. Jedes Objekt erhält
              einen saisonalen Pflegeplan mit definierten Intervallen,
              Leistungsumfang und Nachweispflicht. Die Saubermatik-App
              dokumentiert Einsätze – für Abrechnung, Eigentümerversammlungen
              und interne Qualitätskontrolle.
            </p>
            <p>
              Die Koordination mit Hausmeisterservice und Winterdienst ist
              zentral: Im Herbst darf Laubentsorgung nicht mit dem ersten
              Räumeinsatz kollidieren; im Frühjahr dürfen Heckenschnitte nicht
              mit Sonderreinigungen kollidieren. Ein Portfolio-Anbieter spart
              dem Verwalter die Schnittstellen, die in der Praxis die meiste
              Zeit kosten.
            </p>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Jahresprogramm nach Saison
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Die folgende Struktur ist unser Referenzrahmen – im Onboarding wird
            er objektspezifisch verfeinert (Flächengröße, Bepflanzung,
            Spielbereiche, Müllstellplätze).
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {seasons.map((block) => (
              <li
                key={block.title}
                className="rounded-sm border border-zinc-200 bg-white p-6 "
              >
                <h3 className="text-lg font-bold text-foreground">
                  {block.title}
                </h3>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-6 text-muted">
                  {block.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-16 space-y-5 text-base leading-[1.75] text-foreground/90">
            <p>
              Repräsentative Außenanlagen signalisieren Mietern und Eigentümern:
              „Hier wird verwaltet, nicht nur verwaltet auf dem Papier.“ In
              Vermarktungsphasen und bei Neuvermietungen ist der gepflegte
              Innenhof oft der entscheidende Faktor – noch vor der
              Wohnungsgröße.
            </p>
            <p>
              Für Einkauf und Geschäftsführung von Verwaltungen liefern wir
              transparente Kostenpositionen und digitale Protokolle –
              umlagefähig nach §&nbsp;2 BetrKV, sofern objektbezogen
              ausgewiesen. Kombinieren Sie Grünpflege mit unserem{" "}
              <Link
                href="/zielgruppen/hausverwaltungen"
                className="font-semibold text-secondary hover:underline"
              >
                Hausverwaltungs-Silo
              </Link>{" "}
              für ein integriertes Liegenschaftsbild.
            </p>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-12">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <SnippetBaitTable slug="gruenanlagenpflege" />
          </div>
        </section>

        <B2BOnboardingProcess
          pagePath="/leistungen/gruenanlagenpflege"
          className="border-t border-foreground/10 bg-slate-50/80 py-12 sm:py-14"
        />

        <section className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
            <EngagementCalculator
              funnelHref="#kontakt-anfrage"
              initialCategory="hausverwaltung"
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
          className="border-t border-slate-200 bg-zinc-100 py-12 sm:py-14"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Grünanlagenpflege anfragen
              </h2>
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <LeadFunnel initialServiceType="gruenanlagenpflege" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
