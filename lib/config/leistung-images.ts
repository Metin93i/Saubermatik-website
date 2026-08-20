import type { LeistungSlug } from "@/lib/routes/leistungen";

export type LeistungImage = { src: string; alt: string };

/** Nur eigene Einsatzfotos. Fehlende Slugs → Markenfläche (kein Fremdbild). */
export const LEISTUNG_IMAGES: Partial<Record<LeistungSlug, LeistungImage>> = {
  "fenster-glasreinigung": {
    src: "/images/einsatz-fensterreinigung-reinwasser.jpg",
    alt: "Fensterreinigung mit Reinwasser-Teleskopstange an Bürogebäude",
  },
  gruenanlagenpflege: {
    src: "/images/einsatz-gruenanlagenpflege.jpg",
    alt: "Saubermatik-Mitarbeiter bei der Grünanlagenpflege mit Trimmer",
  },
  fassadenreinigung: {
    src: "/images/einsatz-glasfassade-hoehe.jpg",
    alt: "Saubermatik-Mitarbeiter reinigt hohe Glasfassade mit Teleskopstange im Reinwasser-Verfahren",
  },
};

export function getLeistungImage(
  slug: LeistungSlug,
): LeistungImage | undefined {
  return LEISTUNG_IMAGES[slug];
}
