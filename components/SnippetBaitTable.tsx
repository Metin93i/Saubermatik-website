import type { LeistungSlug } from "@/lib/routes/leistungen";

type Variant =
  | "unterhalt"
  | "glas"
  | "treppenhaus"
  | "winterdienst"
  | "grundreinigung"
  | "fassade"
  | "entruempelung"
  | "sonstiges"
  | "default";

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
  treppenhaus: {
    caption: "Treppenhaus-LV & Intervalle (WEG / MFH / Gewerbe)",
    columns: {
      col1: "Zone",
      col2: "Intervall",
      col3: "Leistungspositionen",
    },
    rows: [
      {
        gebaeudeart: "Treppenstufen & Podeste",
        intervall: "1–3× wöchentlich",
        fokus: "Feuchtwischen, Trittsicherheit, Verkehrssicherungspflicht",
      },
      {
        gebaeudeart: "Handläufe & Geländer",
        intervall: "2× wöchentlich",
        fokus: "Desinfektion, Griffspuren, Korrosionsschutz",
      },
      {
        gebaeudeart: "Eingang & Briefkasten",
        intervall: "Täglich bis wöchentlich",
        fokus: "Repräsentativität, Schmutzfangmatten, § 2 BetrKV-Nachweis",
      },
      {
        gebaeudeart: "Keller & Nebenräume",
        intervall: "Monatlich",
        fokus: "Staub, Spinnweben, Sondermüll-Logistik",
      },
    ],
  },
  winterdienst: {
    caption: "Winterdienst-Einsatzplan (Orientierung)",
    columns: {
      col1: "Priorität",
      col2: "Auslösung",
      col3: "Maßnahme",
    },
    rows: [
      {
        gebaeudeart: "Haupteingang / Feuerwehrzufahrt",
        intervall: "Bei Glätte / Schnee",
        fokus: "Räumen, Streuen, GPS-Fotoprotokoll",
      },
      {
        gebaeudeart: "Gehwege & Zufahrten",
        intervall: "Wettergeführt",
        fokus: "Räum- und Streupflicht, Verkehrssicherungspflicht",
      },
      {
        gebaeudeart: "Parkflächen & Innenhöfe",
        intervall: "Nach Objektplan",
        fokus: "Priorisierte Touren, § 2 BetrKV-Dokumentation",
      },
      {
        gebaeudeart: "Nachfahrt / Extremwetter",
        intervall: "Eskalationsstufe",
        fokus: "Zusatzstreue, Meldung an Verwalter",
      },
    ],
  },
  grundreinigung: {
    caption: "Bauphasen & LV – Bauendreinigung (VOB/C-orientiert)",
    columns: {
      col1: "Phase",
      col2: "Zeitpunkt",
      col3: "Leistungspositionen",
    },
    rows: [
      {
        gebaeudeart: "Baugrobreinigung",
        intervall: "Nach Rohbau / Gewerke",
        fokus: "Grobschmutz, Folien, Handwerkerschmutz, BG-BAU-Sicherheit",
      },
      {
        gebaeudeart: "Baufeinreinigung",
        intervall: "Vor Bauabnahme",
        fokus: "Zementschleierentfernung, Staub, besenreine Übergabe",
      },
      {
        gebaeudeart: "Grundreinigung Böden",
        intervall: "Vor Einzug / Nutzung",
        fokus: "Alkalischer Grundreiniger, Polymerdispersion, DIN 18365",
      },
      {
        gebaeudeart: "Praxis / Hygienezone",
        intervall: "Vor Eröffnung",
        fokus: "RKI-konform, VAH-Desinfektion, Hygieneschleuse",
      },
    ],
  },
  fassade: {
    caption: "Fassadenreinigungsintervalle nach Fassadentyp",
    columns: {
      col1: "Fassade",
      col2: "Intervall",
      col3: "Verfahren / Fokus",
    },
    rows: [
      {
        gebaeudeart: "Glas / Metall",
        intervall: "2–4× jährlich",
        fokus: "Reinwasser-Osmose, TRBS 2121, Rahmenpflege",
      },
      {
        gebaeudeart: "Naturstein / Klinker",
        intervall: "1–2× jährlich",
        fokus: "Materialschonend, Algen/Moos, Werterhalt",
      },
      {
        gebaeudeart: "Industrie / Rußbelastung",
        intervall: "Individuell",
        fokus: "Feinstaub, Emissionen, Zuwegungsplanung",
      },
      {
        gebaeudeart: "WEG / Wohnanlage",
        intervall: "1–3× jährlich",
        fokus: "Repräsentativität, Mieterlogistik, Protokoll",
      },
    ],
  },
  entruempelung: {
    caption: "Entrümpelungs-Leistungsverzeichnis (LV)",
    columns: {
      col1: "Leistungspaket",
      col2: "Umfang",
      col3: "Ergebnis",
    },
    rows: [
      {
        gebaeudeart: "Sortierung & Räumung",
        intervall: "Phase 1",
        fokus: "Behalten, Spenden, Verwertung, fachgerechte Entsorgung",
      },
      {
        gebaeudeart: "Abtransport",
        intervall: "Phase 2",
        fokus: "Container, Zufahrt, Terminplan Haushaltsauflösung",
      },
      {
        gebaeudeart: "Endreinigung",
        intervall: "Phase 3",
        fokus: "Grundreinigung, besenreine Übergabe",
      },
      {
        gebaeudeart: "Dokumentation",
        intervall: "Abschluss",
        fokus: "Fotoprotokoll, Entsorgungsnachweise, Übergabe an Verwalter",
      },
    ],
  },
  sonstiges: {
    caption: "Spezial-LV Beispiele (Sonderprojekte)",
    columns: {
      col1: "Projekttyp",
      col2: "Typischer SLA",
      col3: "Kernpositionen",
    },
    rows: [
      {
        gebaeudeart: "Teppich- & Polsterreinigung",
        intervall: "Quartalsweise / Event",
        fokus: "Sprühextraktion, Einpflegen, Werterhalt",
      },
      {
        gebaeudeart: "Praxis-Sonderdesinfektion",
        intervall: "Ereignis / Audit",
        fokus: "RKI-konform, VAH-gelistet, Kreuzkontamination vermeiden",
      },
      {
        gebaeudeart: "Event / Messe",
        intervall: "Temporär",
        fokus: "Flächenleistung, Ausfallsicherheit, Nachtfenster",
      },
      {
        gebaeudeart: "Ausschreibung",
        intervall: "Rahmenvertrag",
        fokus: "Digitales LV, DIN EN 13549, Referenzobjekte",
      },
    ],
  },
  default: {
    caption: "Reinigungsintervalle nach Gebäudeart (Orientierung)",
    rows: [
      {
        gebaeudeart: "Gewerbe / Büro",
        intervall: "Nach Nutzung & Fläche",
        fokus: "Unterhalt, Sanitär",
      },
      {
        gebaeudeart: "WEG / MFH",
        intervall: "Wöchentlich bis monatlich",
        fokus: "Treppenhaus, Eingang",
      },
      {
        gebaeudeart: "Industrie / Logistik",
        intervall: "Individuell",
        fokus: "Hallenboden, Sozialräume",
      },
      {
        gebaeudeart: "Öffentliche Einrichtung",
        intervall: "Täglich",
        fokus: "Hygiene, Nachweis",
      },
    ],
  },
};

const SLUG_VARIANT: Partial<Record<LeistungSlug, Variant>> = {
  unterhaltsreinigung: "unterhalt",
  "fenster-glasreinigung": "glas",
  treppenhausreinigung: "treppenhaus",
  winterdienst: "winterdienst",
  grundreinigung: "grundreinigung",
  fassadenreinigung: "fassade",
  entruempelung: "entruempelung",
  sonstiges: "sonstiges",
};

function variantForSlug(slug: LeistungSlug): Variant {
  return SLUG_VARIANT[slug] ?? "default";
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
      <h2 id={`snippet-table-${slug}`} className="sr-only">
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
