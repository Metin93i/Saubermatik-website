import type { Metadata } from "next";
import Link from "next/link";
import { EngagementCalculator } from "@/components/EngagementCalculator";
import { LeistungHeroImage } from "@/components/LeistungHeroImage";
import { LeadFunnel } from "@/components/LeadFunnel";
import { SnippetBaitTable } from "@/components/SnippetBaitTable";

export const metadata: Metadata = {
  title: {
    absolute:
      "Unterhaltsreinigung & Büroreinigung | Saubermatik Zollernalb",
  },
  description:
    "Zuverlässige Unterhaltsreinigung für Büros, Kanzleien und Arztpraxen in Meßstetten, Balingen und Tuttlingen. 100% Ausfallsicherheit.",
  alternates: {
    canonical: "/leistungen/unterhaltsreinigung",
  },
};

const checklist = [
  {
    title: "Arbeitsplätze & Büroflächen",
            text: "Staubfreie Oberflächen, hygienische Schreibtischzonen, versiegelte Böden pflegen wir intervallbasiert – ohne Ihre Abläufe zu stören.",
  },
  {
    title: "Sanitäranlagen & WC",
    text: "Desinfektion nach Plan, Nachfüllen der Verbrauchsmaterialien, streifenfreie Spiegel: Ihre Gäste und Teams merken den Unterschied sofort.",
  },
  {
    title: "Müll & Entsorgungslogistik",
    text: "Sortenreine Behälter, termingerechte Leerung, dokumentierte Touren – weniger Koordinationsaufwand für Ihre Facility-Verantwortlichen.",
  },
  {
    title: "Bodenpflege (Einscheiben / Saugen / Feuchtwischen)",
    text: "Materialgerechte Intervalle statt „Einmal alles“. So bleiben Oberflächen länger wertstabil und wirken repräsentativ.",
  },
  {
    title: "Teeküchen & Gemeinschaftsflächen",
    text: "Kaffeeflecken, Kühlschrank-Fronten, Spülen: Details, die anekdotisch nerven – bei uns sind sie Teil des Standards, nicht der Ausnahme.",
  },
];

export default function UnterhaltsreinigungPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <nav className="text-sm font-semibold text-secondary">
            <Link href="/leistungen" className="hover:underline">
              Leistungen
            </Link>
            <span className="text-muted"> / </span>
            <span className="text-muted">Unterhaltsreinigung</span>
          </nav>
          <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Professionelle Unterhaltsreinigung für Gewerbe &amp; Praxen in der
            Region Zollernalb.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Wir sorgen für makellose Hygiene, die Ihre Mitarbeiter motiviert und
            Kunden beeindruckt. Ohne Ausfälle, ohne Kompromisse.
          </p>
          <LeistungHeroImage
            slug="unterhaltsreinigung"
            priority
            className="mt-10 max-w-4xl"
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt-anfrage"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
            >
              Jetzt Objekt-Analyse anfordern
            </a>
            <Link
              href="/leistungen"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-primary transition hover:border-secondary/40 hover:bg-slate-50"
            >
              Alle Leistungen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
              Problem
            </h2>
            <p className="mt-3 text-2xl font-bold tracking-tight text-primary">
              Wenn Reinigung zur Zufallsvariable wird, leidet Ihr Betrieb.
            </p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <li>
                <span className="font-semibold text-primary">
                  Wechselnde Gesichter:
                </span>{" "}
                Jedes Mal neue Ansprechpartner, jedes Mal andere Standards. Das
                kostet Managementzeit, die Sie woanders brauchen.
              </li>
              <li>
                <span className="font-semibold text-primary">
                  Unzuverlässige Zeitfenster:
                </span>{" "}
                Wenn Teams zu spät kommen oder ausfallen, steht Ihre Rezeption
                oder Produktion – nicht unsere Ausrede.
              </li>
              <li>
                <span className="font-semibold text-primary">
                  Kommunikationslücken:
                </span>{" "}
                Ohne klare Eskalationswege bleiben Mängel liegen, bis sie
                sichtbar werden. In Kanzleien und Praxen ist das ein
                Reputationsrisiko.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
              Lösung
            </h2>
            <p className="mt-3 text-2xl font-bold tracking-tight text-primary">
              Der SaaS-Vorteil für Ihr Objekt: digitale Objektsteuerung.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Bei Saubermatik wird nichts dem Zufall überlassen. Unsere Teams
              werden per App gesteuert. Fällt jemand aus, reagiert das System in
              Echtzeit. Sie haben immer 100&nbsp;% Leistung – planbar,
              dokumentierbar, skalierbar.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Das ist keine Software, die Sie kaufen müssen. Es ist die
              Betriebslogik dahinter: klare Checklisten, SLA-basierte Touren und
              ein Ansprechpartner, der die KPIs Ihrer Sauberkeit mitverantwortet.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Was wir konkret für Sie erledigen
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-slate-600">
            Unterhaltsreinigung ist Operationsarbeit. Hier ist der Kernkatalog,
            den wir für Gewerbeobjekte und Praxen in der Zollernalb typischerweise
            abdecken – abgestimmt auf Ihre Frequenz und Ihre Flächenlogistik.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {checklist.map((item) => (
              <li
                key={item.title}
                className="flex flex-col rounded-2xl border border-white bg-white p-6 shadow-sm"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/15 text-secondary"
                  aria-hidden
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          Vertrauen, den Sie intern verteidigen können
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-primary">
              Feste Ansprechpartner
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Sie wissen immer, wen Sie anrufen. Kein anonymes Callcenter, kein
              endloses Weiterleiten – sondern Verantwortung mit Namen.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-primary">
              Geschultes Personal
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Standards statt Improvisation: Einweisung auf Ihr Objekt,
              Materialkompetenz und Arbeitsschutz sind Pflicht, keine
              „Nice-to-have“-Liste.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-primary">
              Diskretion &amp; Sensibilität
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Kanzleien, Arztpraxen, Steuerberater: Wir behandeln Räume und
              Informationen so, wie Sie es von einem B2B-Partner erwarten – nicht
              wie von einem anonymen Nebenjob-Pool.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <SnippetBaitTable slug="unterhaltsreinigung" />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
          <EngagementCalculator funnelHref="#kontakt-anfrage" />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Objekt-Analyse anfordern
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Drei kurze Fragen zu Fläche und Start – dann Ihre Kontaktdaten.
              Wir melden uns mit einem klaren Vorschlag, der zu Ihrem Betrieb
              passt.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <LeadFunnel initialServiceType="unterhaltsreinigung" />
          </div>
        </div>
      </section>
    </div>
  );
}
