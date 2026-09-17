import type { FaqPair } from "@/lib/seo/leistung-faq";

/** FAQ für `/secureops` — wortgetreu, Single Source für Sicht + FAQPage-JSON-LD. */
export const SECUREOPS_FAQ_ITEMS: readonly FaqPair[] = [
  {
    question: "Kostet SecureOps extra?",
    answer:
      "Nein. SecureOps ist Teil unserer Dienstleistung, keine separate Software, die Sie kaufen. Was wir dokumentieren, stimmen wir pro Objekt mit Ihnen ab.",
  },
  {
    question: "Wer kann auf meine Objektdaten zugreifen?",
    answer:
      "Ihr Zugang ist persönlich und auf Ihre Objekte beschränkt. Andere Kunden sehen Ihre Daten nicht.",
  },
  {
    question: "Werden Mitarbeiter überwacht?",
    answer:
      "Nein. Es geht darum, geleistete Arbeit nachvollziehbar zu machen, nicht darum, Menschen zu kontrollieren. Was erfasst wird, richtet sich nach dem Objekt und den geltenden Datenschutzregeln.",
  },
  {
    question: "Was passiert mit einer Mieter-Meldung über den QR-Code?",
    answer:
      "Sie kommt direkt bei uns an. Wir sehen sie sofort, kümmern uns und die Meldung bleibt nachvollziehbar erfasst.",
  },
  {
    question: "Bekomme ich auch ohne Portal Nachweise?",
    answer:
      "Ja. Wenn Sie das Portal nicht nutzen möchten, stellen wir Ihnen die Nachweise auf Anfrage zur Verfügung.",
  },
  {
    question: "Habt ihr SecureOps wirklich selbst entwickelt?",
    answer:
      "Ja. SecureOps ist unsere eigene Plattform und wird laufend weiterentwickelt – aus der Praxis heraus, weil wir sie in unseren eigenen Objekten täglich nutzen.",
  },
] as const;

export function getSecureOpsFaqItems(): readonly FaqPair[] {
  return SECUREOPS_FAQ_ITEMS;
}
