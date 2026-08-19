import type { Metadata } from "next";
import Link from "next/link";
import { B2BOnboardingProcess } from "@/components/B2BOnboardingProcess";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { LeistungFaqJsonLd } from "@/components/LeistungFaqJsonLd";
import { LeistungHeroImage } from "@/components/LeistungHeroImage";
import { LeistungSgeTldr } from "@/components/LeistungSgeTldr";
import { LeadFunnel } from "@/components/LeadFunnel";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { SnippetBaitTable } from "@/components/SnippetBaitTable";

const SLUG = "unterhaltsreinigung" as const;

export const metadata: Metadata = {
  title: "Unterhaltsreinigung & Büroreinigung Gewerbe",
  description:
    "Zertifizierte Unterhaltsreinigung für Gewerbe und Büros: 4-Farb-System, DIN EN 13549, digitales LV, HACCP, Echtzeit-QM und 100% Ausfallsicherheit in der Zollernalb.",
  alternates: { canonical: "/leistungen/unterhaltsreinigung" },
};

const colorSystem = [
  {
    color: "Rot",
    zone: "Sanitäranlagen & WC",
    text: "Höchste Hygienestufe – keine Vermischung mit anderen Zonen.",
  },
  {
    color: "Gelb",
    zone: "Waschbecken & Lavabos",
    text: "Getrennt von Sanitär und Küche, um Keimübertragung zu verhindern.",
  },
  {
    color: "Blau",
    zone: "Inventar & Arbeitsflächen",
    text: "Schreibtische, Regale, Türgriffe – der Büro-Kern ohne Küchenkontakt.",
  },
  {
    color: "Grün",
    zone: "Teeküchen & Pausenräume",
    text: "HACCP-orientiert: Lebensmittelnähe nur mit grün codierten Textilien.",
  },
] as const;

export default function UnterhaltsreinigungPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          {
            name: "Unterhaltsreinigung",
            path: "/leistungen/unterhaltsreinigung",
          },
        ]}
      />
      <LeistungFaqJsonLd slug={SLUG} />
      <div className="flex flex-1 flex-col bg-white">
        <section className="border-b border-slate-200/80 bg-zinc-100">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <nav className="text-sm font-semibold text-secondary">
              <Link href="/leistungen" className="hover:underline">
                Leistungen
              </Link>
              <span className="text-muted"> / </span>
              <span className="text-muted">Unterhaltsreinigung</span>
            </nav>
            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Zertifizierte Unterhaltsreinigung für Gewerbe und Büros. Maximale
              Hygiene, messbare Qualität und 100&nbsp;% Ausfallsicherheit.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Saubermatik liefert Unterhaltsreinigung als Prozesssystem – nicht
              als Stundenkontingent. Mit 4-Farb-Hygiene, digitalem
              Leistungsverzeichnis und Echtzeit-QM für Facility Manager in der
              Zollernalb und angrenzenden Regionen.
            </p>
            <LeistungHeroImage
              slug={SLUG}
              priority
              className="mt-10 max-w-4xl"
            />
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt-anfrage"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Objekt-Analyse anfordern
              </a>
              <Link
                href="/qualitaetsmanagement"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
              >
                Qualitätsmanagement
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <LeistungSgeTldr slug={SLUG} />

          <div className="mt-12 space-y-6 text-base leading-[1.75] text-foreground/90">
            <p>
              Unterhaltsreinigung ist für B2B-Kunden kein Kosmetikposten – sie
              ist Betriebsinfrastruktur. Schlechte Hygiene in Sanitäranlagen,
              Kreuzkontamination zwischen Küche und WC oder undokumentierte
              Ausfälle treffen direkt auf Produktivität, Mitarbeiterbindung und
              Audit-Fähigkeit. Geschäftsführung und Facility Management brauchen
              deshalb einen Partner, der Prozesse definiert, misst und bei
              Störungen sofort reagiert – nicht einen Anbieter, der „irgendwann
              vorbeikommt“.
            </p>
            <p>
              Saubermatik positioniert Unterhaltsreinigung als Service Level
              Agreement (SLA) mit messbarer{" "}
              <strong className="text-foreground">Flächenleistung</strong>,
              klarer Zonenlogik und digitaler Nachweisführung. Ihr Vorteil:
              weniger Reklamationen, weniger interne Koordination, volle
              Verteidigbarkeit gegenüber Eigentümern, ISO-Auditoren und
              Betriebsräten.
            </p>
          </div>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Deep Dive 1: Hygiene &amp; Kreuzkontamination (Das 4-Farb-System)
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Der häufigste Fehler in der Büroreinigung ist unsichtbar:
                dieselbe Mikrofaser, die zuerst ein WC und danach eine Teeküche
                wischt, transportiert Keime quer durchs Gebäude –{" "}
                <strong className="text-foreground">Kreuzkontamination</strong>{" "}
                in Reinform. Für Praxen, Kanzleien und Produktionsbüros ist das
                kein Detail, sondern ein Hygiene- und Haftungsthema.
              </p>
              <p>
                Saubermatik setzt deshalb konsequent auf das{" "}
                <strong className="text-foreground">4-Farb-System</strong>: Jede
                Zone erhält ausschließlich farbcodierte Textilien und Eimer –
                physisch getrennt, in der App dokumentiert, in der Einweisung
                verpflichtend. Rot bleibt in Sanitäranlagen, Gelb an
                Waschbecken, Blau am Inventar, Grün in Teeküchen und
                Pausenbereichen. Keine Ausnahmen, keine „schnell mal mit
                derselben Faser“-Improvisation.
              </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {colorSystem.map((item) => (
                <li
                  key={item.color}
                  className="rounded-sm border border-zinc-200 bg-white p-5 "
                >
                  <span className="inline-flex rounded-sm bg-secondary/15 px-3 py-1 text-xs font-bold text-secondary">
                    {item.color}
                  </span>
                  <h3 className="mt-3 font-semibold text-foreground">
                    {item.zone}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-base leading-[1.75] text-foreground/90">
              Das System ist bewusst einfach – deshalb durchsetzbar. Neue Kräfte
              verstehen es in Minuten; Ihr Facility Manager kann es in
              Begehungen sofort prüfen. Mehr Tiefe finden Sie in unserem{" "}
              <Link
                href="/wissen/farbcode-system-hygiene"
                className="font-semibold text-secondary hover:underline"
              >
                Lexikon-Artikel zum Farbcode-System
              </Link>
              .
            </p>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Deep Dive 2: Digitale Qualitätssicherung (DIN EN 13549)
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Papier-Checklisten sind tot – zumindest dort, wo Qualität
                nachweisbar sein muss. Die europäische Norm{" "}
                <strong className="text-foreground">DIN EN 13549</strong>{" "}
                definiert Anforderungen an die Qualitätsmessung von
                Reinigungsleistungen. Saubermatik übersetzt das in die Praxis:
                Jedes Objekt erhält ein{" "}
                <strong className="text-foreground">
                  digitales Leistungsverzeichnis (LV)
                </strong>
                , das unsere Teams in der Saubermatik-App Punkt für Punkt
                abhaken – mit Zeitstempel, Mitarbeiter-ID und optionalen Fotos
                bei Abweichungen.
              </p>
              <p>
                Für Sie als Facility Manager bedeutet das{" "}
                <strong className="text-foreground">Echtzeit-QM</strong>: Sie
                sehen, welche Positionen erledigt wurden, wo Nacharbeit nötig
                war und ob das vereinbarte SLA eingehalten wurde – ohne
                Telefonkette, ohne Excel-Export am Monatsende. Das ist
                Transparenz auf C-Level-Niveau: messbar, auditierbar,
                verhandlungsfest bei Vertragsverlängerungen.
              </p>
              <p>
                Kombiniert mit unserer{" "}
                <strong className="text-foreground">Ausfallsicherheit</strong>{" "}
                reagiert die Plattform auf Krankheits- oder Personalengpässe in
                Echtzeit – Ersatzkräfte, Tourenumplanung, Eskalation an den Key
                Account. Ihr Betrieb merkt den Ausfall nicht; Ihre KPIs bleiben
                stabil. Genau das unterscheidet Reinigung 4.0 von
                Subunternehmer-Chaos.
              </p>
            </div>
          </article>

          <article className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Deep Dive 3: Effizienz &amp; HACCP in Aufenthaltsräumen
            </h2>
            <div className="space-y-5 text-base leading-[1.75] text-foreground/90">
              <p>
                Teeküchen, Kaffeemaschinen und Pausenräume sind die sozialen
                Herzstücke jedes Büros – und gleichzeitig Hotspots für
                Lebensmittelkontamination, wenn Reinigung unsystematisch läuft.
                Saubermatik behandelt diese Zonen nach{" "}
                <strong className="text-foreground">HACCP-Richtlinien</strong>:
                grün codierte Textilien, definierte Reinigungssequenzen,
                Desinfektionspunkte an Kontaktflächen und dokumentierte
                Intervalle. In Arztpraxen und Behandlungszonen gelten zusätzlich
                RKI-konforme Verfahren und VAH-gelistete Flächendesinfektion –
                nosokomiale Infektionen werden durch Prozess statt Improvisation
                reduziert.
              </p>
              <p>
                Parallel optimieren wir die{" "}
                <strong className="text-foreground">Flächenleistung</strong>:
                Touren werden so geplant, dass Ihr Tagesgeschäft null gestört
                wird – abends, früh morgens oder in definierten Fenstern
                zwischen Schichten. Materialgerechte Bodenpflege, staubarmes
                Wischen an Bildschirmzonen und leise Geräte in Kanzleietagen
                sind Standard, keine Sonderwünsche. Das senkt interne
                Beschwerden und hält die vereinbarte Flächenleistung im SLA ohne
                Überstunden-Debatten.
              </p>
              <p>
                Ob{" "}
                <Link
                  href="/standorte/balingen"
                  className="font-semibold text-secondary hover:underline"
                >
                  Balingen
                </Link>
                ,{" "}
                <Link
                  href="/standorte/tuttlingen"
                  className="font-semibold text-secondary hover:underline"
                >
                  Tuttlingen
                </Link>{" "}
                oder{" "}
                <Link
                  href="/standorte/stuttgart"
                  className="font-semibold text-secondary hover:underline"
                >
                  Stuttgart
                </Link>
                – das Prozessmodell bleibt identisch; nur Objekt-LV und
                Intervalle werden im Onboarding angepasst.
              </p>
            </div>
          </article>

          <div className="mt-16 rounded-sm border border-zinc-300/25 bg-secondary/5 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-foreground">
              Ihr Vorteil auf einen Blick
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-muted">
              <li>
                4-Farb-System gegen Kreuzkontamination – auditfest und
                alltagstauglich
              </li>
              <li>
                Digitales LV + DIN EN 13549-orientiertes Echtzeit-QM in der App
              </li>
              <li>
                HACCP in Teeküchen und Pausenräumen, optimierte Flächenleistung
              </li>
              <li>
                SLA mit 100&nbsp;% Ausfallsicherheit und festem Ansprechpartner
              </li>
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-12">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Leistungsverzeichnis (LV) – typische Büroreinigung
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Strukturierte Orientierung für Einkauf und Facility – im
              Onboarding wird daraus Ihr verbindliches, digitales LV.
            </p>
            <SnippetBaitTable slug={SLUG} />
          </div>
        </section>

        <B2BOnboardingProcess
          pagePath="/leistungen/unterhaltsreinigung"
          className="border-t border-foreground/10 bg-slate-50/80 py-12 sm:py-14"
        />

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
                Unterhaltsreinigung anfragen
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">
                Fläche, Intervalle, sensible Zonen – wir erstellen ein
                SLA-fähiges Angebot nach Objektbegehung.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <LeadFunnel initialServiceType="unterhaltsreinigung" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
