import type { FaqPair } from "@/lib/seo/leistung-faq";

/** FAQ für `/zielgruppen/buero-gewerbe` — wortgetreu. */
export const BUERO_FAQ_ITEMS: readonly FaqPair[] = [
  {
    question: "Zu welchen Zeiten wird gereinigt?",
    answer:
      "In der Regel in Randzeiten – früh morgens oder nach Feierabend. Die Zeiten legen wir gemeinsam so, dass Ihr Betrieb nicht gestört wird.",
  },
  {
    question: "Können wir den Leistungsumfang anpassen?",
    answer:
      "Ja. Der Reinigungsplan ist nicht in Stein gemeißelt – Turnus und Umfang passen wir an, wenn sich Ihr Bedarf ändert.",
  },
  {
    question: "Was kostet die Büroreinigung?",
    answer:
      "Das hängt von Fläche, Ausstattung und Turnus ab. Nach einer kurzen Besichtigung erhalten Sie ein klares, unverbindliches Angebot.",
  },
  {
    question: "Gibt es einen Vertrag mit langer Laufzeit?",
    answer:
      "Die Vertragsdetails besprechen wir offen im Angebot. Uns ist wichtiger, dass Sie wegen der Qualität bleiben, nicht wegen der Laufzeit.",
  },
] as const;

export function getBueroFaqItems(): readonly FaqPair[] {
  return BUERO_FAQ_ITEMS;
}
