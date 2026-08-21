import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { LeistungFaqJsonLd } from "@/components/LeistungFaqJsonLd";
import { LeistungHeroImage } from "@/components/LeistungHeroImage";
import { LeistungSgeTldr } from "@/components/LeistungSgeTldr";
import { AnfrageCta } from "@/components/AnfrageCta";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { SnippetBaitTable } from "@/components/SnippetBaitTable";

export const metadata: Metadata = {
  title: "Hausmeisterservice & Objektbetreuung",
  description:
    "Hausmeisterservice für Hausverwaltungen und Gewerbe: SOPs für Kleinreparaturen, Kontrollgänge, Leuchtmittel, Mülllogistik, Zählerstände – digital dokumentiert in der Zollernalb.",
  alternates: { canonical: "/leistungen/hausmeisterservice" },
};

const sops = [
  {
    title: "Kleinreparaturen & Instandsetzung",
    text: "Lose Türgriffe, klemmende Schlösser, defekte Beschilderungen, leichte Silikon- und Dichtungsarbeiten: Wir erfassen Mängel in der App, priorisieren nach Sicherheitsrelevanz und schließen Vorgänge mit Foto-Nachweis – ohne dass der Verwalter jeden Handgriff selbst koordinieren muss.",
  },
  {
    title: "Leuchtmittelwechsel & Sicherheitsbeleuchtung",
    text: "Ausgefallene Lampen im Treppenhaus sind einer der häufigsten Mieterbeschwerden – und ein klassisches Haftungsthema bei Stürzen. Unsere Kontrollgänge beinhalten systematische Lichtchecks, dokumentierten Wechsel und Meldung an den Verwalter, wenn Sondermaterial oder Elektriker nötig wird.",
  },
  {
    title: "Mülltonnen-Bereitstellung & Entsorgungslogistik",
    text: "Am Abfuhrtermin stellen Teams Behälter bereit, kontrollieren Verschmutzungen im Müllraum und reinigen bei Bedarf Oberflächen. Für Hausverwaltungen bedeutet das: weniger Konflikte mit Entsorgern und weniger Beschwerden wegen „vergessener“ Tonnen.",
  },
  {
    title: "Zählerstände ablesen",
    text: "Wo vertraglich vorgesehen, lesen geschulte Mitarbeiter Zählerstände ab – mit Zeitstempel und Objektzuordnung in der digitalen Protokollkette. Das entlastet Verwalter bei Übergaben, Mieterwechseln und Abrechnungszeiträumen.",
  },
  {
    title: "Visuelle Objektkontrolle",
    text: "Vandalismus, Graffiti, Sturmschäden an Dachrinnen, lose Zäune, undicht wirkende Fenster: Die visuelle Kontrolle ist kein „Rundgang ohne Plan“, sondern checklistenbasiert. Auffälligkeiten werden sofort eskaliert – nicht erst beim nächsten Eigentümertermin.",
  },
  {
    title: "Schlüssel- & Zutrittslogistik",
    text: "Übergaben, Handwerkerzugänge, Lieferanten: Wir dokumentieren Schlüsselbewegungen nach internen Regeln. Für WEG und Gewerbe reduziert das das operative Risiko und schafft Nachvollziehbarkeit im Streitfall.",
  },
] as const;

export default function HausmeisterservicePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          {
            name: "Hausmeisterservice",
            path: "/leistungen/hausmeisterservice",
          },
        ]}
      />
      <LeistungFaqJsonLd slug="hausmeisterservice" />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <nav className="text-sm font-semibold text-secondary">
              <Link href="/leistungen" className="hover:underline">
                Leistungen
              </Link>
              <span className="text-muted"> / </span>
              <span className="text-muted">Hausmeisterservice</span>
            </nav>
            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Hausmeisterservice &amp; Objektbetreuung – SOPs statt
              Improvisation.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Für Hausverwaltungen, WEG und Gewerbeimmobilien: Wir übernehmen
              die operative Objektpräsenz zwischen den großen Gewerken – mit
              dokumentierten Standard Operating Procedures und dokumentierten
              Meldungen über die Saubermatik-App.
            </p>
            <LeistungHeroImage
              slug="hausmeisterservice"
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
          <LeistungSgeTldr slug="hausmeisterservice" />
          <div className="mt-12 space-y-6 text-base leading-[1.75] text-foreground/90">
            <p>
              Hausmeisterservice ist die unsichtbare Infrastruktur einer gut
              geführten Liegenschaft. Wenn er funktioniert, fällt er niemandem
              auf – wenn er versagt, landet jede Kleinigkeit beim Verwalter.
              Genau hier setzen wir an: nicht als „Mann für alles“ ohne Regeln,
              sondern als strukturiertes Betriebssystem mit klaren SOPs,
              Eskalationsstufen und digitaler Nachweisführung.
            </p>
            <p>
              Saubermatik entlastet Eigentümer, Verwaltungen und interne
              Facility-Teams bei genau den Aufgaben, die den Alltag sprengen:
              Kleinreparaturen, Kontrollgänge, Koordination mit Handwerkern,
              Schlüssel und Lieferanten. Einsätze werden in der App
              dokumentiert – der Key Account Manager sieht den Status, ohne
              WhatsApp-Ketten oder Zettelwirtschaft.
            </p>
            <p>
              Für Hausverwaltungen ist das strategisch relevant: Sie kaufen
              keine Stunden, sondern Risikoreduktion. Ein defektes Leuchtmittel
              wird gemeldet, bevor der Mieter stolpert. Ein Sturmschaden an der
              Regenrinne wird fotografiert, bevor Wasserschäden entstehen. Eine
              Müllraumverschmutzung wird bereinigt, bevor der Abfuhrtermin
              eskaliert. Das senkt Beschwerdequote und schützt vor
              Haftungsdiskussionen.
            </p>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Standard Operating Procedures (SOPs) – unser Leistungskatalog
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Jede Liegenschaft erhält ein objektspezifisches SOP-Set vor
            Vertragsstart. Nachfolgend die Kernmodule, die wir für
            Mehrfamilienhäuser und Gewerbeobjekte typischerweise verbindlich
            definieren.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {sops.map((item) => (
              <li
                key={item.title}
                className="flex flex-col rounded-sm border border-zinc-200 bg-white p-6 "
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-sm border border-zinc-300/25 bg-secondary/5 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-foreground">
              Kombination mit Reinigung &amp; Winterdienst
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Hausmeister, Treppenhausreinigung, Grünpflege und Winterdienst aus
              einem Portfolio vermeiden Schnittstellenchaos – ein
              Ansprechpartner, ein SLA, eine App. Besonders für{" "}
              <Link
                href="/zielgruppen/hausverwaltungen"
                className="font-semibold text-secondary hover:underline"
              >
                Hausverwaltungen
              </Link>{" "}
              ist das der Unterschied zwischen Verwaltung und Systemführung.
            </p>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-12">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <SnippetBaitTable slug="hausmeisterservice" />
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
            <AnfrageCta title="Hausmeisterservice anfragen" />
          </div>
        </section>
      </div>
    </>
  );
}
