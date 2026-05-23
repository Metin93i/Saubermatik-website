import type { LeistungSlug } from "@/lib/routes/leistungen";

type Variant = "unterhalt" | "glas" | "default";

type Row = { gebaeudeart: string; intervall: string; fokus: string };

type TableConfig = {
  caption: string;
  columns?: { col1: string; col2: string; col3: string };
  rows: Row[];
};

const TABLES: Record<Variant, TableConfig> = {
  unterhalt: {
    caption: "Typisches Leistungsverzeichnis (LV) für die Büroreinigung",
    columns: {
      col1: "Intervall",
      col2: "Programm",
      col3: "Leistungspositionen (LV)",
    },
    rows: [
      {
        gebaeudeart: "Täglich",
        intervall: "Kernprogramm",
        fokus: "Müllentsorgung, Sanitäranlagen (Desinfektion), Teeküchen",
      },
      {
        gebaeudeart: "Wöchentlich",
        intervall: "Detailpflege",
        fokus: "Griffspuren entfernen (Türen/Glas), Staubwischen (Tische, Bildschirme)",
      },
      {
        gebaeudeart: "Monatlich",
        intervall: "Tiefenpflege",
        fokus: "Fußleisten, Heizkörper, Spinnweben-Entfernung",
      },
      {
        gebaeudeart: "Quartalsweise",
        intervall: "Intensivprogramm",
        fokus: "Intensive Polster- und Teppichreinigung",
      },
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
  const config = TABLES[variantForSlug(slug)];
  const { caption, rows, columns } = config;
  const headers = columns ?? {
    col1: "Gebäudeart",
    col2: "Typisches Intervall",
    col3: "Schwerpunkt",
  };

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
              {headers.col1}
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              {headers.col2}
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              {headers.col3}
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
