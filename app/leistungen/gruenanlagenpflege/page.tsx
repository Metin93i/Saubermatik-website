import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { LeistungFaqJsonLd } from "@/components/LeistungFaqJsonLd";
import { LeistungHeroImage } from "@/components/LeistungHeroImage";
import { LeistungSgeTldr } from "@/components/LeistungSgeTldr";
import { AnfrageCta } from "@/components/AnfrageCta";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";

export const metadata: Metadata = {
  title: "Grünanlagenpflege",
  description:
    "Grünanlagenpflege für Wohnanlagen und Gewerbe: Frühjahr, Sommer, Herbst – Rasen, Hecken, Laub, Wildkraut. Repräsentative Außenanlagen in der Zollernalb.",
  alternates: { canonical: "/leistungen/gruenanlagenpflege" },
};

const seasons = [
  {
    title: "Frühjahr – Start in die Saison",
    items: [
      "Rasenpflege nach Winterruhe: Vertikutieren, erste Schnitte, Kante zu Wegen",
      "Beetpflege, Schnitt von Hecken und Sträuchern unter Beachtung der Schnittzeiten (§ 39 BNatSchG: 1.3.–30.9. nur schonende Form- und Pflegeschnitte)",
      "Entfernung von Winterlaub, Aufnahme von Fallholz, Kontrolle der Bewässerung",
    ],
  },
  {
    title: "Sommer – repräsentativer Standard",
    items: [
      "Intervall-Rasenmähen, Kantenpflege, Wildkrautentfernung in Beeten und Pflasterfugen",
      "Heckenschnitt und Formschnitt für Sichtachsen und Eingangsbereiche",
      "Pflege von Zufahrten und Müllstellplätzen – optische Verbindung zum Gebäude",
    ],
  },
  {
    title: "Herbst – Laub & Vorbereitung Winter",
    items: [
      "Laubentsorgung auf Gehwegen, Höfen und Grünflächen – Verkehrssicherheit",
      "Letzte Rasenschnitte, Düngung nach Plan, Rückschnitt von Sträuchern ab Oktober",
      "Abstimmung mit Winterdienst: keine Konflikte zwischen Laubdienst und Räumfenstern",
    ],
  },
  {
    title: "Wildkraut & Sonderflächen",
    items: [
      "Wildkrautentfernung mechanisch oder thermisch – ohne Herbizide (auf befestigten Flächen ohnehin verboten, § 12 Abs. 2 PflSchG)",
      "Pflege von Innenhöfen, Spiel- und Ruhebereichen in Wohnanlagen (Grünpflege, keine Spielplatzinspektion)",
      "Dokumentierte Einsätze, objektbezogen ausgewiesen – ob umlagefähig, richtet sich nach Mietvertrag und § 2 BetrKV",
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
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Anfrage stellen
              </Link>
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
              Verkehrssicherheit zugleich: ungemähte Wege, Laub auf Gehwegen
              und zugewucherte Eingänge erzeugen Beschwerden und
              Haftungsrisiken. Saubermatik plant Grünpflege als Jahresprogramm –
              nicht als Einzelauftrag nach Beschwerde.
            </p>
            <p>
              Für Wohnanlagen, Gewerbehöfe und gemischte Bestände in der
              Zollernalb und angrenzenden Regionen gilt: Jedes Objekt erhält
              einen saisonalen Pflegeplan mit definierten Intervallen,
              Leistungsumfang und Nachweispflicht. Einsätze dokumentieren wir
              als Protokoll (PDF) – für Abrechnung, Eigentümerversammlungen und
              interne Qualitätskontrolle.
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
            Die folgende Struktur ist unser Referenzrahmen – vor Vertragsstart
            wird er objektspezifisch verfeinert (Flächengröße, Bepflanzung,
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
              „Hier wird das Objekt gepflegt – nicht nur auf dem Papier.“ In
              Vermarktungsphasen und bei Neuvermietungen prägt der gepflegte
              Innenhof den ersten Eindruck.
            </p>
            <p>
              Für Einkauf und Geschäftsführung von Verwaltungen liefern wir
              transparente, objektbezogene Kostenpositionen und Protokolle (PDF)
              – ob umlagefähig, richtet sich nach Mietvertrag und §&nbsp;2
              BetrKV. Kombinieren Sie Grünpflege mit unserem{" "}
              <Link
                href="/zielgruppen/hausverwaltungen"
                className="font-semibold text-secondary hover:underline"
              >
                Angebot für Hausverwaltungen
              </Link>{" "}
              für ein integriertes Liegenschaftsbild.
            </p>
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
            <AnfrageCta title="Grünanlagenpflege anfragen" />
          </div>
        </section>
      </div>
    </>
  );
}
