export const LEISTUNG_SLUGS = [
  "unterhaltsreinigung",
  "fenster-glasreinigung",
  "aussenanlagen",
  "bauendreinigung",
] as const;

export type LeistungSlug = (typeof LEISTUNG_SLUGS)[number];

export function isLeistungSlug(value: string): value is LeistungSlug {
  return (LEISTUNG_SLUGS as readonly string[]).includes(value);
}

export type LeistungContent = {
  title: string;
  summary: string;
  body: string[];
};

export const LEISTUNGEN_BY_SLUG: Record<LeistungSlug, LeistungContent> = {
  unterhaltsreinigung: {
    title: "Unterhaltsreinigung",
    summary:
      "Regelmäßige Sauberkeit für Büros, Praxen und Gewerbeflächen in der Region Zollernalb – mit klaren Abläufen und festen Ansprechpartnern.",
    body: [
      "Staubwischen, Bodenpflege, Sanitär – wir kümmern uns um die wiederkehrenden Aufgaben, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
      "Digitale Objektsteuerung und feste Intervalle sorgen für planbare Qualität ohne Überraschungen.",
    ],
  },
  "fenster-glasreinigung": {
    title: "Fenster- & Glasreinigung",
    summary:
      "Streifenfreie Scheiben und gepflegte Glasflächen – sicher und professionell, innen wie außen.",
    body: [
      "Von Schaufenstern bis Wintergarten: Wir arbeiten materialschonend und effizient.",
      "Ideal für Gewerbeimmobilien, Praxen und repräsentative Eingangsbereiche.",
    ],
  },
  aussenanlagen: {
    title: "Außenanlagen & Außenbereich",
    summary:
      "Gepflegte Außenauftritte: Wege, Zugänge und Außenflächen wirken einladend und wertbeständig.",
    body: [
      "Wir unterstützen bei der Pflege von Zufahrten, Gehwegen und Außenflächen rund um Ihre Immobilie.",
      "Saubere Außenbereiche steigern Vertrauen bei Besuchern und Mietern – abgestimmt auf Ihre Objektlogistik.",
    ],
  },
  bauendreinigung: {
    title: "Bauendreinigung",
    summary:
      "Übergabefertige Sauberkeit nach Neubau, Sanierung oder Umbau – termintreu und dokumentiert.",
    body: [
      "Wir bereiten Ihre Flächen für die Abnahme vor und entlasten Ihr Projektteam in der heißen Phase.",
      "Abgestimmte Reinigungslogistik reduziert Schnittstellenrisiken und Verzögerungen.",
    ],
  },
};
