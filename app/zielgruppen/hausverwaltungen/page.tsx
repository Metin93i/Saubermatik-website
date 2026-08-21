import type { Metadata } from "next";
import Link from "next/link";
import { AnfrageCta } from "@/components/AnfrageCta";
import { buildHausverwaltungenServiceJsonLd } from "@/lib/seo/hausverwaltungen-schema";

export const metadata: Metadata = {
  title: "Hausverwaltungen & WEG",
  description:
    "All-in-One für Hausverwaltungen: Treppenhaus, Hausmeister, Grünpflege, Winterdienst mit dokumentierten Einsätzen. Verkehrssicherungspflicht, § 2 BetrKV-Umlagefähigkeit, Mieterzufriedenheit.",
  alternates: { canonical: "/zielgruppen/hausverwaltungen" },
};

const serviceJsonLd = buildHausverwaltungenServiceJsonLd();
const serviceJson = JSON.stringify(serviceJsonLd).replaceAll("<", "\\u003c");

export default function HausverwaltungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceJson }}
      />
      <div className="flex flex-1 flex-col">
        <section className="border-b border-foreground/10 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Zielgruppe · Hausverwaltung
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Die All-in-One Lösung für Hausverwaltungen: Treppenhaus,
              Hausmeister &amp; Grünpflege mit dokumentierten Nachweisen.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Sie verwalten nicht nur Quadratmeter – Sie tragen Verantwortung
              für Haftung, Nebenkostenabrechnung und Mieterzufriedenheit.
              Saubermatik bündelt operative Leistungen in einem vertraglich
              messbaren System: mit dokumentierten Touren und Einsätzen
              (Umfang je nach Objekt und Vereinbarung) und einem Key Account,
              der Ihre Liegenschaften
              kennt.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Anfrage stellen
              </Link>
              <Link
                href="/leistungen/treppenhausreinigung"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 bg-white px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                Leistungsportfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-foreground/10 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="max-w-3xl text-base leading-[1.75] text-foreground/90 sm:text-lg">
              Weniger Anrufe auf Ihrem Tisch: Mieter melden Reinigungsanliegen
              per QR-Code direkt an uns – dokumentiert und nachvollziehbar.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="max-w-3xl space-y-6 text-base leading-[1.75] text-foreground/90">
            <p>
              Hausverwaltungen stehen zwischen Eigentümer, Mieterbeirat und
              Dienstleister – und zahlen den Preis, wenn Schnittstellen nicht
              funktionieren. Ein Winterdienst ohne Nachweis, ein Hausmeister
              ohne Eskalationsweg, eine Treppenhausreinigung ohne Protokoll:
              Jeder Vorfall landet beim Verwalter, nicht beim Anbieter. Wir
              strukturieren das Gegenteil: ein integriertes Portfolio aus
              Reinigung, Objektbetreuung, Grünpflege und Winterdienst – digital
              gesteuert, revisionssicher dokumentiert. Den QR-Meldeweg für
              Mieter-Anliegen beschreiben wir oben; das Portal erklären wir
              unter{" "}
              <Link
                href="/secureops"
                className="font-semibold text-secondary hover:underline"
              >
                SecureOps
              </Link>
              .
            </p>
          </article>

          <div className="mt-16 space-y-16">
            <section aria-labelledby="hv-haftung">
              <h2
                id="hv-haftung"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Rechtssicherheit &amp; Haftung: Verkehrssicherungspflicht
                operationalisieren
              </h2>
              <div className="mt-6 space-y-5 text-base leading-[1.75] text-foreground/90">
                <p>
                  Als Verwalter haften Sie nicht nur für Verwaltungsfehler –
                  Sie haften operativ mit, wenn Gehwege, Zufahrten und
                  Stellplätze bei Glatteis, Schnee oder Laub nicht sicher
                  begehbar sind. Die Verkehrssicherungspflicht ist kein
                  theoretisches Kapitel im Verwalterseminar, sondern
                  Alltagsrisiko bei jedem Wetterereignis. Entscheidend ist
                  nicht, ob ein Dienstleister „irgendwann“ vor Ort war,
                  sondern ob Sie im Streitfall nachweisen können: Wann wurde
                  geräumt? Womit gestreut? Welche Flächen waren betroffen? Wer
                  hat die Kontrolle dokumentiert?
                </p>
                <p>
                  Saubermatik übersetzt die Verkehrssicherungspflicht in
                  belastbare Prozesse: Wetterführung, Einsatzfenster,
                  Streumittelklassen und Kontrollgänge sind vertraglich
                  fixiert. Unsere Saubermatik-App erzeugt dokumentierte
                  Einsatznachweise – Zeitstempel, Objektzuordnung,
                  Leistungsart (Umfang je nach Objekt und Vereinbarung). Das
                  ist Ihr Schutzschild gegen Haftungsklagen
                  und Regress von Versicherern: nicht die Behauptung „wir
                  waren da“, sondern strukturierte Beweiskette.
                </p>
                <p>
                  Für WEG und gewerbliche Bestände bedeutet das: Der Verwalter
                  kann gegenüber Eigentümern und Mietern belegen, dass die
                  Sorgfaltspflicht organisatorisch erfüllt wurde – unabhängig
                  davon, ob ein einzelner Einsatz durch Subunternehmer oder
                  Wetterlage komplex wurde. Wir koppeln Winterdienst an
                  Treppenhaus- und Außenanlagenlogik, damit keine graue Zone
                  zwischen „Gebäude reinigen“ und „Wege sichern“ entsteht.
                </p>
                <p>
                  Strategisch gewinnen Sie Zeit: Statt E-Mails mit
                  Mieterbeschwerden und anwaltlichen Anfragen zu jonglieren,
                  erhalten Sie monatliche Compliance-Reports – exportierbar
                  für Eigentümerversammlungen und Versicherungsunterlagen.
                </p>
              </div>
            </section>

            <section aria-labelledby="hv-betrkv">
              <h2
                id="hv-betrkv"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Betriebskosten (§&nbsp;2 BetrKV): umlagefähig
                dokumentieren
              </h2>
              <div className="mt-6 space-y-5 text-base leading-[1.75] text-foreground/90">
                <p>
                  Die Nebenkostenabrechnung ist Ihr jährlicher Stresstest.
                  §&nbsp;2 BetrKV definiert, welche Kosten auf Mieter umlegbar
                  sind – vorausgesetzt, sie sind angemessen, zuordenbar und
                  belegbar. Reinigung, Hausmeister, Grünpflege und
                  Winterdienst gehören typischerweise zu den umlagefähigen
                  Betriebskosten, wenn sie dem objektbezogenen Verbrauch und
                  der objektbezogenen Nutzung dienen. In der Praxis scheitert
                  es selten an der Rechtslage, sondern an der Qualität der
                  Belege.
                </p>
                <p>
                  Saubermatik liefert transparente Rechnungen mit
                  leistungsbezogenen Positionen: Objekt-ID, Leistungsart,
                  Intervall, WE-Bezug wo relevant, Ausführungsnachweis. Die
                  digitalen Leistungsprotokolle aus der App sind die Brücke
                  zwischen Buchhaltung und Betrieb – Eigentümer und Mieter
                  sehen, wofür sie zahlen. Das reduziert Rückfragen,
                  Widersprüche und Nachforderungsdiskussionen im
                  Abrechnungszeitraum.
                </p>
                <p>
                  Für Verwalter mit mehreren Liegenschaften standardisieren
                  wir Kostenstellen und Reporting: gleiche KPI-Logik über alle
                  Objekte, vergleichbare Monatswerte, keine Medienbrüche
                  zwischen Excel, PDF und Handwerker-Zettel. Die
                  Nebenkostenabrechnung wird wieder zum administrativen
                  Prozess – nicht zum forensischen Projekt.
                </p>
                <p>
                  Kombinieren Sie umlagefähige Positionen mit der Abstimmung
                  vor Vertragsstart: es wird definiert, welche
                  Flächen in welcher BetrKV-Logik laufen – Treppenhaus,
                  Gemeinschaftsanlagen, Außenflächen, Winterdienst separat
                  ausgewiesen. Das schützt vor pauschalen „Pauschalen“, die
                  Abrechnungsbeauftragte im Zweifel streichen.
                </p>
              </div>
            </section>

            <section aria-labelledby="hv-mieter">
              <h2
                id="hv-mieter"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Mieterzufriedenheit: Beschwerdequote durch proaktives
                Mängelmanagement senken
              </h2>
              <div className="mt-6 space-y-5 text-base leading-[1.75] text-foreground/90">
                <p>
                  Mieter reklamieren selten abstrakte „Unzufriedenheit“ – sie
                  reklamieren defekte Leuchtmittel im Treppenhaus,
                  verschmutzte Eingänge, überquellende Müllbereiche, nicht
                  gemähte Rasenflächen und glatte Gehwege nach Schnee. Jede
                  Beschwerde kostet den Verwalter Zeit: Telefon, E-Mail,
                  Protokoll, Dienstleister nachfassen, Rückmeldung an Mieter.
                  Die Summe frisst Verwaltungskapazität, die für
                  wertschöpfende Aufgaben fehlt.
                </p>
                <p>
                  Saubermatik arbeitet mit festen Intervallen und proaktivem
                  Mängelmanagement: Hausmeister und Reinigungsteams melden
                  Abweichungen in der App – defekte Lampen, lose Geländer,
                  Vandalismus, Sturmschäden – bevor der erste Mieter anruft.
                  Der Key Account priorisiert, beauftragt und schließt den
                  Vorgang dokumentiert ab. Ziel ist nicht „null Beschwerden“
                  als Marketingphrase, sondern weniger Eskalationen, die bei
                  der Verwaltung landen.
                </p>
                <p>
                  Repräsentative Treppenhäuser und gepflegte Außenanlagen sind
                  der sichtbare Qualitätsstandard Ihrer Verwaltung. In
                  Vermietungs- und Verkaufsgesprächen der Eigentümer zählt der
                  erste Eindruck im Eingangsbereich mehr als jede
                  Prospektseite. Wir synchronisieren Treppenhausreinigung,
                  Grünpflege und Hausmeister so, dass der Eingangsbereich
                  dauerhaft „verwaltet wirkt“ – nicht nur am Tag nach der
                  Sonderreinigung.
                </p>
                <p>
                  Für Geschäftsführungen von Verwaltungen bedeutet das:
                  skalierbare Qualität ohne linearen Personalaufbau intern.
                  Sie kaufen ein System, nicht nur Stunden.
                </p>
              </div>
            </section>

            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Treppenhaus & Unterhalt",
                  href: "/leistungen/treppenhausreinigung",
                },
                {
                  title: "Hausmeisterservice",
                  href: "/leistungen/hausmeisterservice",
                },
                {
                  title: "Grünanlagenpflege",
                  href: "/leistungen/gruenanlagenpflege",
                },
                {
                  title: "Winterdienst",
                  href: "/leistungen/winterdienst",
                },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex h-full flex-col rounded-sm border border-zinc-300 bg-white p-5 transition hover:border-primary hover:bg-zinc-100"
                  >
                    <span className="font-semibold text-foreground">
                      {item.title}
                    </span>
                    <span className="mt-2 text-sm text-secondary">
                      Leistung ansehen →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="kontakt-anfrage"
          className="border-t border-foreground/10 bg-zinc-100 py-12 sm:py-14"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <AnfrageCta
              title="Liegenschaftsportfolio anfragen"
              text="Objektanzahl, WE-Struktur und Leistungsmix – wir erstellen ein Angebot für Ihre Hausverwaltung. Fester Ansprechpartner statt Callcenter."
              note="Besichtigung und Angebot sind kostenlos und unverbindlich."
            />
          </div>
        </section>
      </div>
    </>
  );
}
