import type { LeistungSlug } from "@/lib/routes/leistungen";

type Variant = "unterhalt" | "glas" | "default";

type Row = { gebaeudeart: string; intervall: string; fokus: string };

const TABLES: Record<Variant, { caption: string; rows: Row[] }> = {
  unterhalt: {
    caption: "Reinigungsintervalle nach Gebäudeart (Unterhaltsreinigung)",
    rows: [
      { gebaeudeart: "Büro / Verwaltung", intervall: "Täglich bis 3× wöchentlich", fokus: "Arbeitsplätze, Sanitär, Boden" },
      { gebaeudeart: "Arztpraxis", intervall: "Täglich", fokus: "Wartezimmer, Behandlung, Desinfektion" },
      { gebaeudeart: "Kanzlei", intervall: "Täglich bis 5× wöchentlich", fokus: "Diskretion, Eingang, Besprechung" },
      { gebaeudeart: "Einzelhandel", intervall: "Täglich nach Ladenschluss", fokus: "Verkaufsfläche, Lager, WC" },
    ],
  },
  glas: {
    caption:
      "Empfohlene Glasreinigungsintervalle für Gewerbe (Orientierung Saubermatik)",
    rows: [
      {
        gebaeudeart: "Ladengeschäfte / Schaufenster",
        intervall: "1× bis 2× monatlich",
        fokus: "Außen- und Innenscheiben, streifenfreie Glanzgarantie",
      },
      {
        gebaeudeart: "Bürogebäude & Kanzleien",
        intervall: "1× pro Quartal",
        fokus: "Fassaden-Ergonomie, Rahmen- und Falzreinigung",
      },
      {
        gebaeudeart: "Industrie- & Produktionshallen",
        intervall: "2× jährlich",
        fokus: "Oberlicht, Hallenverglasung, TRBS-2121-konform",
      },
      {
        gebaeudeart: "Solaranlagen & PV-Module",
        intervall: "1× jährlich",
        fokus: "Ertragssicherung, schonendes Osmose-Verfahren",
      },
    ],
  },
  default: {
    caption: "Reinigungsintervalle nach Gebäudeart (Orientierung)",
    rows: [
      { gebaeudeart: "Gewerbe / Büro", intervall: "Nach Nutzung & Fläche", fokus: "Unterhalt, Sanitär" },
      { gebaeudeart: "WEG / MFH", intervall: "Wöchentlich bis monatlich", fokus: "Treppenhaus, Eingang" },
      { gebaeudeart: "Industrie / Logistik", intervall: "Individuell", fokus: "Hallenboden, Sozialräume" },
      { gebaeudeart: "Öffentliche Einrichtung", intervall: "Täglich", fokus: "Hygiene, Nachweis" },
    ],
  },
};

function variantForSlug(slug: LeistungSlug): Variant {
  if (slug === "unterhaltsreinigung") return "unterhalt";
  if (slug === "fenster-glasreinigung") return "glas";
  return "default";
}

type Props = { slug: LeistungSlug };

/** Semantische HTML-Tabelle für Featured-Snippet / Position-0-Kandidaten. */
export function SnippetBaitTable({ slug }: Props) {
  const { caption, rows } = TABLES[variantForSlug(slug)];

  return (
    <section
      className="mt-10 overflow-x-auto rounded-xl border border-foreground/10"
      aria-labelledby={`snippet-table-${slug}`}
    >
      <h2
        id={`snippet-table-${slug}`}
        className="sr-only"
      >
        {caption}
      </h2>
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <caption className="bg-secondary/10 px-4 py-3 text-left text-sm font-bold text-foreground">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              Gebäudeart
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              Typisches Intervall
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              Schwerpunkt
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.gebaeudeart}
              className="border-b border-foreground/5 last:border-0"
            >
              <td className="px-4 py-3 font-medium text-foreground">
                {row.gebaeudeart}
              </td>
              <td className="px-4 py-3 text-muted">{row.intervall}</td>
              <td className="px-4 py-3 text-muted">{row.fokus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
