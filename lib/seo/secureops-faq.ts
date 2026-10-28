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
    question: "Wird jemand überwacht?",
    answer:
      "Nein. SecureOps nutzt weder GPS noch Zeiterfassung und speichert keine Mitarbeiterfotos. Es geht darum, geleistete Arbeit nachvollziehbar zu machen, nicht darum, Menschen zu kontrollieren. Was erfasst wird, richtet sich nach dem Objekt und den geltenden Datenschutzregeln.",
  },
  {
    question: "Was passiert mit einer Meldung über den Melde-QR?",
    answer:
      "Sie kommt direkt bei uns an. Wir kümmern uns darum, und die Meldung bleibt mit ihrem Status nachvollziehbar erfasst.",
  },
  {
    question: "Bekomme ich auch ohne Portal Nachweise?",
    answer:
      "Ja. Wenn Sie das Portal nicht nutzen möchten, stellen wir Ihnen die Nachweise auf Anfrage zur Verfügung.",
  },
  {
    question: "Haben Sie SecureOps wirklich selbst entwickelt?",
    answer:
      "Ja. SecureOps ist unsere eigene Plattform. Das Kundenportal ist im Aufbau und wird aus der Praxis heraus weiterentwickelt.",
  },
] as const;

export function getSecureOpsFaqItems(): readonly FaqPair[] {
  return SECUREOPS_FAQ_ITEMS;
}
