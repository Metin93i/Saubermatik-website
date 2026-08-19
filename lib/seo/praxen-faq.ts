import type { FaqPair } from "@/lib/seo/leistung-faq";

/** FAQ für `/zielgruppen/praxen-gesundheitswesen` — wortgetreu. */
export const PRAXEN_FAQ_ITEMS: readonly FaqPair[] = [
  {
    question: "Reinigt ihr auch während der Sprechzeiten?",
    answer:
      "In der Regel reinigen wir außerhalb der Sprechzeiten, damit Ihr Betrieb ungestört läuft. Einzelne Leistungen tagsüber sind nach Absprache möglich.",
  },
  {
    question: "Übernehmt ihr auch die Desinfektion?",
    answer:
      "Grundlage ist Ihr Hygieneplan. Welche Flächen desinfizierend gereinigt werden und mit welchen Mitteln, legen wir vorab gemeinsam mit Ihnen fest.",
  },
  {
    question: "Bekommen wir Nachweise für unser Qualitätsmanagement?",
    answer:
      "Ja, auf Wunsch. Über unsere Plattform SecureOps dokumentieren wir Einsätze und stellen Ihnen Nachweise bereit. Den Umfang stimmen wir auf Ihre Anforderungen ab.",
  },
  {
    question: "Wer ist unser Ansprechpartner?",
    answer:
      "Sie haben eine feste Ansprechperson, die Ihr Objekt kennt – vom Angebot bis zum laufenden Betrieb. Kein Callcenter.",
  },
] as const;

export function getPraxenFaqItems(): readonly FaqPair[] {
  return PRAXEN_FAQ_ITEMS;
}
