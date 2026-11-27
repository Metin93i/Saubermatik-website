import type { StandortCity } from "@/lib/routes/standorte";
import { STANDORT_LABELS } from "@/lib/routes/standorte";

export type StandortFaqItem = {
  question: string;
  answer: string;
};

export function getStandortFaqItems(city: StandortCity): StandortFaqItem[] {
  const label = STANDORT_LABELS[city];

  return [
    {
      question: `Bieten Sie tägliche Unterhaltsreinigung für Büros in ${label} an?`,
      answer: `Ja. Saubermatik plant Unterhaltsreinigung für Büros, Kanzleien und Praxen in ${label} mit digitalem Leistungsverzeichnis, 4-Farb-Hygiene und festen Intervallen – täglich bis wöchentlich, abgestimmt auf Ihre Fläche und Nutzung. Ihr fester Ansprechpartner – der Inhaber persönlich – koordiniert die Einsätze aus Meßstetten; Nachweise erhalten Facility Manager und Eigentümer als Protokoll (PDF).`,
    },
    {
      question: `Wie schnell sind Sie bei Notfällen (z.B. Glasbruch, Wasserschaden) in ${label} vor Ort?`,
      answer: `Für ${label} und die Region Zollernalb halten wir Eskalationswege bereit: Glasbruch, Wasserschaden oder Sonderreinigung nach Events werden prioritär disponiert – Reaktionszeiten für Notfälle vereinbaren wir im Vertrag. Sie erreichen Ihren festen Ansprechpartner direkt; Sonderfahrten protokollieren wir nachvollziehbar.`,
    },
    {
      question: `Übernehmen Sie die Verkehrssicherungspflicht (Winterdienst) für Hausverwaltungen in ${label}?`,
      answer: `Ja – per schriftlicher Vereinbarung. Wir übernehmen Räum- und Streupflicht für WEG, Gewerbe und Hausverwaltungen in ${label} – mit schriftlichem Plan und Protokoll; ob die Kosten umlagefähig sind, richtet sich nach Mietvertrag und § 2 BetrKV (Umfang je nach Objekt und Vereinbarung). Ihre Kontrollpflicht als Auftraggeber bleibt bestehen. Kombinierbar mit Treppenhausreinigung und Grünpflege aus einem Portfolio und einem SLA.`,
    },
  ];
}
