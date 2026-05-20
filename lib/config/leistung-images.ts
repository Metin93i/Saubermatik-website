import type { LeistungSlug } from "@/lib/routes/leistungen";

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

/** Premium Unsplash-Hero pro Leistung (Corporate / Facility). */
export const LEISTUNG_IMAGES: Record<
  LeistungSlug,
  { src: string; alt: string }
> = {
  unterhaltsreinigung: {
    src: u("photo-1497366216548-37526070297c"),
    alt: "Modernes Büro mit großzügigen Glasflächen – Unterhaltsreinigung",
  },
  "fenster-glasreinigung": {
    src: u("photo-1520110120835-c96534a4c984"),
    alt: "Glasfassade eines Gewerbegebäudes – streifenfreie Fensterreinigung",
  },
  treppenhausreinigung: {
    src: u("photo-1560448204-e02f11c3d0e2"),
    alt: "Repräsentatives Treppenhaus in einer Gewerbeimmobilie",
  },
  hausmeisterservice: {
    src: u("photo-1581578731548-c64695cc6952"),
    alt: "Professionelle Gebäude- und Objektbetreuung im Gewerbebereich",
  },
  gruenanlagenpflege: {
    src: u("photo-1558905617-15a8aa7e374e"),
    alt: "Repräsentative Grünanlage an einer Wohnanlage",
  },
  winterdienst: {
    src: u("photo-1418985991508-e47386d96a71"),
    alt: "Winterlicher Objektzugang – professioneller Winterdienst",
  },
  grundreinigung: {
    src: u("photo-1504307651254-35680f356dfd"),
    alt: "Baureinigung und Übergabe in einem modernen Gewerbeobjekt",
  },
  fassadenreinigung: {
    src: u("photo-1486325212027-8081e485255e"),
    alt: "Moderne Gebäudefassade – Fassadenreinigung und Werterhalt",
  },
  entruempelung: {
    src: u("photo-1584622650111-993a426fbf0a"),
    alt: "Leerer, besenreiner Raum nach Entrümpelung",
  },
  sonstiges: {
    src: u("photo-1556761175-5973dc0f32e7"),
    alt: "Beratungsgespräch zu individuellen Reinigungsprojekten",
  },
};

export function getLeistungImage(slug: LeistungSlug) {
  return LEISTUNG_IMAGES[slug];
}
