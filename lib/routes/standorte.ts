export const STANDORT_CITIES = [
  "tuttlingen",
  "balingen",
  "albstadt",
  "rottweil",
] as const;

export type StandortCity = (typeof STANDORT_CITIES)[number];

export function isStandortCity(value: string): value is StandortCity {
  return (STANDORT_CITIES as readonly string[]).includes(value);
}

export const STANDORT_LABELS: Record<StandortCity, string> = {
  tuttlingen: "Tuttlingen",
  balingen: "Balingen",
  albstadt: "Albstadt",
  rottweil: "Rottweil",
};

export type StandortContent = {
  headline: string;
  paragraphs: string[];
};

export const STANDORTE_BY_CITY: Record<StandortCity, StandortContent> = {
  tuttlingen: {
    headline: "Gebäudereinigung in Tuttlingen",
    paragraphs: [
      "Von Meßstetten aus sind wir schnell in Tuttlingen im Einsatz – mit lokaler Erreichbarkeit und festen Ansprechpartnern.",
      "Ob Unterhalt, Glas oder Objektlogistik: Wir planen digital und liefern zuverlässig.",
    ],
  },
  balingen: {
    headline: "Gebäudereinigung in Balingen",
    paragraphs: [
      "Für Gewerbe und Liegenschaften in Balingen bieten wir gründliche Reinigung mit transparenten Leistungsbeschreibungen.",
      "Wir unterstützen Sie bei wiederkehrenden Aufgaben und Sonderprojekten – ohne versteckte Kostenfallen.",
    ],
  },
  albstadt: {
    headline: "Gebäudereinigung in Albstadt",
    paragraphs: [
      "Saubermatik ist Ihr Partner für professionelle Reinigung in Albstadt und der Region Zollernalb.",
      "Qualität entsteht durch Routine: feste Teams, klare Checklisten und messbare Standards.",
    ],
  },
  rottweil: {
    headline: "Gebäudereinigung in Rottweil",
    paragraphs: [
      "Auch in Rottweil sind wir für Sie da – termintreu, versichert und mit Fokus auf langfristige Zusammenarbeit.",
      "Von der Erstberatung bis zur laufenden Betreuung: ein Ansprechpartner, eine saubere Linie.",
    ],
  },
};
