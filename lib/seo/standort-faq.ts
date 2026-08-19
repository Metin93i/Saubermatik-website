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
      answer: `Ja. Saubermatik plant Unterhaltsreinigung für Büros, Kanzleien und Praxen in ${label} mit digitalem Leistungsverzeichnis, 4-Farb-Hygiene und festen Intervallen – täglich bis wöchentlich, abgestimmt auf Ihre Fläche und Nutzung. Ein Key Account koordiniert Touren aus Meßstetten; die Saubermatik-App dokumentiert jeden Einsatz für Facility Manager und Eigentümer.`,
    },
    {
      question: `Wie schnell sind Sie bei Notfällen (z.B. Glasbruch, Wasserschaden) in ${label} vor Ort?`,
      answer: `Für ${label} und die Region Zollernalb halten wir Eskalationswege bereit: Glasbruch, Wasserschaden oder Sonderreinigung nach Events werden prioritär dispositioniert – typischerweise am selben Werktag, bei akuten Verkehrssicherungs-Themen schneller. Sie erreichen Ihren festen Ansprechpartner; die Plattform protokolliert Sonderfahrten transparent.`,
    },
    {
      question: `Übernehmen Sie die Verkehrssicherungspflicht (Winterdienst) für Hausverwaltungen in ${label}?`,
      answer: `Ja. Wir übernehmen Räum- und Streupflicht für WEG, Gewerbe und Hausverwaltungen in ${label} – wettergeführt, mit dokumentierten Einsätzen und umlagefähiger Dokumentation nach § 2 BetrKV (Umfang je nach Objekt und Vereinbarung). Kombinierbar mit Treppenhausreinigung und Grünpflege aus einem Portfolio und einem SLA.`,
    },
  ];
}
