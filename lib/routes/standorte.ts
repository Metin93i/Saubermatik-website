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
      "Mit Sitz in Meßstetten sind wir mitten in der Zollernalb – kurze Wege, feste Ansprechpartner und Teams, die Ihre Objekte kennenlernen und behalten.",
      "Digitale Protokolle und die Saubermatik-Plattform steuern Touren und Qualität: Ausfälle werden abgefangen, bevor sie zum Stillstand werden – Sie merken vor allem, dass es zuverlässig weiterläuft.",
    ],
  },
  albstadt: {
    headline: "Gebäudereinigung in Albstadt",
    paragraphs: [
      "Saubermatik ist Ihr Partner für professionelle Reinigung in Albstadt und der Region Zollernalb.",
      "Qualität entsteht durch Routine: feste Teams, klare Checklisten und messbare Standards – digital abgesichert über unsere Plattform.",
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
      "Die Saubermatik-Plattform dokumentiert Leistungen digital und sorgt für Ersatzlogistik, wenn einmal jemand ausfällt.",
    ],
  },
  sigmaringen: {
    headline: "Gebäudereinigung in Sigmaringen",
    paragraphs: [
      "In Sigmaringen betreuen wir Büros, Praxen und Gewerbe mit dem Fokus auf Verlässlichkeit und saubere Kommunikation.",
      "Ausfallsicherheit heißt bei uns: die Saubermatik-Plattform fängt Personal- und Tourenlücken ab, bevor Ihr Objekt leidet – mit dokumentierter Qualität und klarer Disposition.",
    ],
  },
  moessingen: {
    headline: "Gebäudereinigung in Mössingen",
    paragraphs: [
      "Von der Zollernalb nach Mössingen sind wir schnell vor Ort – ideal für Liegenschaften mit klaren Qualitätsanforderungen.",
      "Digitale Objektsteuerung heißt: weniger Rückfragen für Sie, mehr Planungssicherheit im laufenden Betrieb.",
    ],
  },
  tuebingen: {
    headline: "Gebäudereinigung in Tübingen",
    paragraphs: [
      "Für Tübingen kombinieren wir regionale Erreichbarkeit mit professionellen Standards in Unterhalt, Glas und Objektbetreuung.",
      "Protokolle und Touren sind auf der Saubermatik-Plattform gebündelt – transparent für Sie, steuerbar für uns.",
    ],
  },
  schoemberg: {
    headline: "Gebäudereinigung in Schömberg",
    paragraphs: [
      "Schömberg liegt in unserem typischen Einsatzradius: kurze Wege, persönliche Betreuung statt anonymer Hotline.",
      "Wenn sich etwas ändert, sehen wir es im System – und reagieren, bevor Qualität oder Termine leiden.",
    ],
  },
  tuttlingen: {
    headline: "Gebäudereinigung in Tuttlingen",
    paragraphs: [
      "Von Meßstetten aus sind wir schnell in Tuttlingen im Einsatz – mit lokaler Erreichbarkeit und festen Ansprechpartnern.",
      "Ob Unterhalt, Glas oder Objektlogistik: Wir planen digital und liefern zuverlässig.",
    ],
  },
  rottweil: {
    headline: "Gebäudereinigung in Rottweil",
    paragraphs: [
      "Auch in Rottweil sind wir für Sie da – termintreu, versichert und mit Fokus auf langfristige Zusammenarbeit.",
      "Von der Erstberatung bis zur laufenden Betreuung: ein Ansprechpartner, eine saubere Linie – technisch abgesichert über unsere Plattform.",
    ],
  },
  "villingen-schwenningen": {
    headline: "Gebäudereinigung in Villingen-Schwenningen",
    paragraphs: [
      "Für Villingen-Schwenningen organisieren wir Reinigung und Objektbetreuung mit belastbarer Planung und festen Teams.",
      "Digitale Protokolle schaffen Klarheit bei Übergaben und Qualität – besonders bei größeren Flächen und mehreren Zugängen.",
    ],
  },
  spaichingen: {
    headline: "Gebäudereinigung in Spaichingen",
    paragraphs: [
      "Spaichingen erreichen wir effizient von Meßstetten aus – mit Fokus auf Treppenhaus, Büro und Außenanlagen nach Bedarf.",
      "Die Plattform koordiniert Einsätze so, dass Lücken in der Abdeckung selten werden – und schnell geschlossen werden.",
    ],
  },
  burladingen: {
    headline: "Gebäudereinigung in Burladingen",
    paragraphs: [
      "In Burladingen setzen wir auf sorgfältige Ausführung und verlässliche Intervalle – ohne Überraschungen im Kleingedruckten.",
      "Objektsteuerung digital bedeutet: weniger Koordinationsaufwand auf Ihrer Seite, mehr Planbarkeit im Alltag.",
    ],
  },
  rottenburg: {
    headline: "Gebäudereinigung in Rottenburg",
    paragraphs: [
      "Rottenburg am Neckar und Umgebung betreuen wir mit denselben Standards wie in der Zollernalb – nur mit anderer Anfahrtlogistik.",
      "Saubermatik vernetzt Disposition und Qualität: Sie erhalten nachvollziehbare Abläufe statt Bauchgefühl.",
    ],
  },
  reutlingen: {
    headline: "Gebäudereinigung in Reutlingen",
    paragraphs: [
      "Für Reutlingen liefern wir Facility-nahe Reinigungsleistungen mit klarem Scope und festen Ansprechpartnern.",
      "Unsere Plattform unterstützt die Ausfallsicherheit Ihres Objekts – mit dokumentierten Einsätzen und steuerbaren Standards.",
    ],
  },
  ueberlingen: {
    headline: "Gebäudereinigung in Überlingen",
    paragraphs: [
      "Überlingen und der Bodenseeraum liegen am Rand unseres regionalen Schwerpunkts – sprechen Sie uns für Umfang und Rhythmus an.",
      "Wo wir fahren, gilt: digitale Protokolle, transparente Qualität und eine Organisation, die Lücken nicht ignoriert.",
    ],
  },
};
