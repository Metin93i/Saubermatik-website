import type { FaqPair } from "@/lib/seo/leistung-faq";

/** FAQ für `/` — wortgetreu, Single Source für Sicht + FAQPage-JSON-LD. */
export const STARTSEITE_FAQ_ITEMS: readonly FaqPair[] = [
  {
    question: "Was kostet die Gebäudereinigung?",
    answer:
      "Das hängt von Objekt, Fläche und Turnus ab. Nach einer kostenlosen Besichtigung erhalten Sie ein klares, unverbindliches Angebot – ohne versteckte Kosten.",
  },
  {
    question: "Wie schnell bekomme ich eine Rückmeldung?",
    answer:
      "In der Regel innerhalb eines Werktags. Sie erreichen uns Mo–Sa von 08:00 bis 22:00 Uhr – per Formular, Telefon oder WhatsApp.",
  },
  {
    question: "In welchen Regionen seid ihr im Einsatz?",
    answer:
      "Regelmäßige Reinigung übernehmen wir im Zollernalbkreis und im Umkreis – etwa Sigmaringen, Rottweil, Hechingen und Tübingen. Projekt- und Sonderaufträge wie Glas-, Fassaden- oder Raffstore-Reinigung auch überregional, zum Beispiel in Stuttgart oder am Bodensee.",
  },
  {
    question: "Was ist SecureOps?",
    answer:
      "Unsere eigene Plattform, mit der wir Einsätze dokumentieren. Sie erhalten Zugang zu einem Kundenportal und sehen, was in Ihrem Objekt passiert ist. Keine Software, die Sie kaufen – SecureOps ist Teil unserer Reinigungsleistung. Den Umfang vereinbaren wir je Objekt.",
  },
] as const;

export function getStartseiteFaqItems(): readonly FaqPair[] {
  return STARTSEITE_FAQ_ITEMS;
}
