export const STANDORT_CITIES = [
  "messstetten",
  "albstadt",
  "balingen",
  "hechingen",
  "sigmaringen",
  "moessingen",
  "tuebingen",
  "schoemberg",
  "tuttlingen",
  "rottweil",
  "villingen-schwenningen",
  "spaichingen",
  "burladingen",
  "rottenburg",
  "reutlingen",
  "ueberlingen",
] as const;

export type StandortCity = (typeof STANDORT_CITIES)[number];

export function isStandortCity(value: string): value is StandortCity {
  return (STANDORT_CITIES as readonly string[]).includes(value);
}

export const STANDORT_LABELS: Record<StandortCity, string> = {
  messstetten: "Meßstetten",
  albstadt: "Albstadt",
  balingen: "Balingen",
  hechingen: "Hechingen",
  sigmaringen: "Sigmaringen",
  moessingen: "Mössingen",
  tuebingen: "Tübingen",
  schoemberg: "Schömberg",
  tuttlingen: "Tuttlingen",
  rottweil: "Rottweil",
  "villingen-schwenningen": "Villingen-Schwenningen",
  spaichingen: "Spaichingen",
  burladingen: "Burladingen",
  rottenburg: "Rottenburg",
  reutlingen: "Reutlingen",
  ueberlingen: "Überlingen",
};

export type StandortContent = {
  headline: string;
  paragraphs: string[];
};

export const STANDORTE_BY_CITY: Record<StandortCity, StandortContent> = {
  messstetten: {
    headline: "Gebäudereinigung in Meßstetten",
    paragraphs: [
      "Mit Sitz in Meßstetten sind wir mitten in der Zollernalb – kurze Wege und ein fester Ansprechpartner, der Ihre Objekte dauerhaft betreut: der Inhaber persönlich.",
      "Protokolle (PDF) machen Touren und Qualität nachvollziehbar; Vertretung bei Ausfällen regeln wir vor Leistungsbeginn schriftlich.",
    ],
  },
  albstadt: {
    headline: "Gebäudereinigung in Albstadt",
    paragraphs: [
      "Saubermatik ist Ihr Partner für professionelle Reinigung in Albstadt und der Region Zollernalb.",
      "Qualität entsteht durch Routine: klare Checklisten und messbare Standards – digital dokumentiert.",
    ],
  },
  balingen: {
    headline: "Gebäudereinigung in Balingen",
    paragraphs: [
      "Für Gewerbe und Liegenschaften in Balingen bieten wir gründliche Reinigung mit transparenten Leistungsbeschreibungen.",
      "Wir unterstützen Sie bei wiederkehrenden Aufgaben und Sonderprojekten – ohne versteckte Kostenfallen, mit nachvollziehbaren Objektprotokollen.",
    ],
  },
  hechingen: {
    headline: "Gebäudereinigung in Hechingen",
    paragraphs: [
      "Für Hechingen planen wir Unterhalts- und Objektreinigung mit klaren Intervallen – und kurzer Anfahrt aus Meßstetten.",
      "Leistungen dokumentieren wir als Protokoll (PDF). Vertretung bei Urlaub oder Ausfall regeln wir vor Leistungsbeginn schriftlich.",
    ],
  },
  sigmaringen: {
    headline: "Gebäudereinigung in Sigmaringen",
    paragraphs: [
      "Für Büros, Praxen und Gewerbe in Sigmaringen setzen wir auf Verlässlichkeit und saubere Kommunikation.",
      "Vertretung bei Urlaub oder Ausfall regeln wir vor Leistungsbeginn schriftlich. Qualität und Einsätze bleiben dokumentiert.",
    ],
  },
  moessingen: {
    headline: "Gebäudereinigung in Mössingen",
    paragraphs: [
      "Von der Zollernalb nach Mössingen sind wir schnell vor Ort – ideal für Liegenschaften mit klaren Qualitätsanforderungen.",
      "Dokumentierte Abläufe heißen: weniger Rückfragen für Sie, mehr Planungssicherheit im laufenden Betrieb.",
    ],
  },
  tuebingen: {
    headline: "Gebäudereinigung in Tübingen",
    paragraphs: [
      "Für Tübingen kombinieren wir regionale Erreichbarkeit mit professionellen Standards in Unterhalt, Glas und Objektbetreuung.",
      "Touren planen wir an einer Stelle, Einsätze dokumentieren wir als Protokoll (PDF) – transparent für Sie, steuerbar für uns.",
    ],
  },
  schoemberg: {
    headline: "Gebäudereinigung in Schömberg",
    paragraphs: [
      "Schömberg liegt in unserem typischen Einsatzradius: kurze Wege, persönliche Betreuung statt anonymer Hotline.",
      "Wenn sich etwas ändert, erfahren wir es direkt – und reagieren, bevor Qualität oder Termine leiden.",
    ],
  },
  tuttlingen: {
    headline: "Gebäudereinigung in Tuttlingen",
    paragraphs: [
      "Von Meßstetten aus sind wir schnell in Tuttlingen im Einsatz – mit lokaler Erreichbarkeit und festem Ansprechpartner.",
      "Ob Unterhalt, Glas oder Objektlogistik: Wir planen digital und liefern zuverlässig.",
    ],
  },
  rottweil: {
    headline: "Gebäudereinigung in Rottweil",
    paragraphs: [
      "Auch in Rottweil sind wir für Sie da – termintreu, versichert und mit Fokus auf langfristige Zusammenarbeit.",
      "Von der Erstberatung bis zur laufenden Betreuung: ein Ansprechpartner, eine saubere Linie – nachvollziehbar dokumentiert.",
    ],
  },
  "villingen-schwenningen": {
    headline: "Gebäudereinigung in Villingen-Schwenningen",
    paragraphs: [
      "Für Villingen-Schwenningen organisieren wir Reinigung und Objektbetreuung mit belastbarer Planung und festem Ansprechpartner.",
      "Digitale Protokolle schaffen Klarheit bei Übergaben und Qualität – besonders bei größeren Flächen und mehreren Zugängen.",
    ],
  },
  spaichingen: {
    headline: "Gebäudereinigung in Spaichingen",
    paragraphs: [
      "Spaichingen erreichen wir effizient von Meßstetten aus – mit Fokus auf Treppenhaus, Büro und Außenanlagen nach Bedarf.",
      "Vertretung und Kapazität regeln wir vor Leistungsbeginn schriftlich – damit klar ist, wie Lücken in der Abdeckung geschlossen werden.",
    ],
  },
  burladingen: {
    headline: "Gebäudereinigung in Burladingen",
    paragraphs: [
      "In Burladingen setzen wir auf sorgfältige Ausführung und verlässliche Intervalle – ohne Überraschungen im Kleingedruckten.",
      "Dokumentierte Abläufe bedeuten: weniger Koordinationsaufwand auf Ihrer Seite, mehr Planbarkeit im Alltag.",
    ],
  },
  rottenburg: {
    headline: "Gebäudereinigung in Rottenburg",
    paragraphs: [
      "Für Rottenburg am Neckar und Umgebung gelten dieselben Standards wie in der Zollernalb – nur mit anderer Anfahrtlogistik.",
      "Saubermatik verbindet Tourenplanung und Qualität: Sie erhalten nachvollziehbare Abläufe statt Bauchgefühl.",
    ],
  },
  reutlingen: {
    headline: "Gebäudereinigung in Reutlingen",
    paragraphs: [
      "Für Reutlingen liefern wir Facility-nahe Reinigungsleistungen mit klarem Scope und festem Ansprechpartner.",
      "Wir dokumentieren Einsätze nachvollziehbar – mit steuerbaren Standards und einem festen Ansprechpartner.",
    ],
  },
  ueberlingen: {
    headline: "Gebäudereinigung in Überlingen",
    paragraphs: [
      "Überlingen und der Bodenseeraum liegen am Rand unseres regionalen Schwerpunkts – sprechen Sie uns für Umfang und Rhythmus an.",
      "Wo wir fahren, gilt: Protokolle (PDF), transparente Qualität und eine Vertretung, die vor Leistungsbeginn schriftlich geregelt ist.",
    ],
  },
};
