import type { LeistungSlug } from "@/lib/routes/leistungen";

/** SGE / AI-Overview: knappe Faktenkette Problem → Lösung → Zeitrahmen */
export type LeistungSgeTldr = {
  problem: string;
  saubermatikLoesung: string;
  zeitrahmen: string;
};

export const LEISTUNG_SGE_TLDR: Record<LeistungSlug, LeistungSgeTldr> = {
  unterhaltsreinigung: {
    problem:
      "Büros und Praxen verschmutzen kontinuierlich; Qualität bricht ein, wenn Intervalle und Zuständigkeiten unklar sind.",
    saubermatikLoesung:
      "Fest definierte Reinigungsintervalle, digitale Objektprotokolle und feste Ansprechpartner über die Saubermatik-Plattform.",
    zeitrahmen:
      "Pilotabstimmung typischerweise innerhalb von 5–10 Werktagen; laufender Betrieb startet nach gemeinsam fixiertem Kick-off-Termin.",
  },
  "fenster-glasreinigung": {
    problem:
      "Glasflächen wirken schnell unscharf oder fleckig; Zugang, Höhe und Zeitfenster bremsen interne Ressourcen.",
    saubermatikLoesung:
      "Professionelle Glaslogistik, materialschonende Verfahren und dokumentierte Einsätze – abgestimmt auf Öffnungszeiten und Sicherheit.",
    zeitrahmen:
      "Ersttermin nach Kapazität oft innerhalb von 1–2 Wochen; Wiederkehrende Slots werden dauerhaft reserviert.",
  },
  "raffstore-lamellenreinigung": {
    problem:
      "Staub, Pollen und Wetterablagerungen setzen sich auf Lamellen und in Führungen fest; Anlagen laufen schwergängig.",
    saubermatikLoesung:
      "Schonende Reinigung von Außenraffstoren im Reinwasser-Verfahren – ohne Chemie und ohne Risiko für die Mechanik.",
    zeitrahmen:
      "Termine stimmen wir auf Ihren Betrieb ab; nach kurzen Angaben oder Besichtigung erhalten Sie ein unverbindliches Angebot.",
  },
  treppenhausreinigung: {
    problem:
      "Treppenhäuser sind Visitenkarte und Reklamationsmagnet – besonders bei WEG und Mieterhochfrequenz.",
    saubermatikLoesung:
      "Intervalbasierte Touren mit Checklisten, dokumentierten Läufen und Eskalationspfad bei Abweichungen.",
    zeitrahmen:
      "Objektbegehung und Startfenster meist in 1–2 Wochen; Intervalle werden quartalsweise mit der Verwaltung justiert.",
  },
  hausmeisterservice: {
    problem:
      "Kleinreparaturen, Kontrollgänge und Koordination entziehen sich internen Teams oder fragmentieren über viele Dienstleister.",
    saubermatikLoesung:
      "Gebündelte Objektbetreuung mit klarer Erreichbarkeit und Nachverfolgung über die Plattform – eine Schnittstelle.",
    zeitrahmen:
      "Leistungsbild und SLA-Fenster in der Regel innerhalb von 7–14 Werktagen; Notfallwege werden vorab definiert.",
  },
  gruenanlagenpflege: {
    problem:
      "Außenanlagen wirken schnell ungepflegt; Saisonwechsel und Nachbarobjekte erhöhen den Pflegeaufwand.",
    saubermatikLoesung:
      "Saisonale Pflegepläne, Abstimmung mit Winterdienst/Reinigung aus einem Portfolio und nachvollziehbare Einsätze.",
    zeitrahmen:
      "Erstkonzept oft in 1–2 Wochen; wiederkehrende Intervalle werden jahreszeitlich vorbesprochen.",
  },
  winterdienst: {
    problem:
      "Räum- und Streupflicht verlangt Nachweise und schnelle Reaktion – Haftung und Image stehen auf dem Spiel.",
    saubermatikLoesung:
      "Wetterführende Einsatzlogik, dokumentierte Streu- und Räumfahrten sowie klare Meldewege.",
    zeitrahmen:
      "Vertrags- und Streugüter-Setup vor Saisonbeginn (Sept.–Nov.); außerhalb der Saison kurzfristige Übernahmen nach Kapazität.",
  },
  grundreinigung: {
    problem:
      "Nach Bau oder Sanierung bleiben Staub und Rückstände; Übergaben verzögern sich ohne Tiefenreinigung.",
    saubermatikLoesung:
      "Materialspezifische Grundreinigung mit Meilensteinen, Abnahme-Checklisten und Abstimmung mit Projektleitung.",
    zeitrahmen:
      "Start meist innerhalb von 3–10 Werktagen nach Zugang und Oberflächenfreigabe; Dauer objektabhängig.",
  },
  fassadenreinigung: {
    problem:
      "Fassaden verlieren Glanz und Substanz; falsche Verfahren riskieren Beschichtungen und Arbeitssicherheit.",
    saubermatikLoesung:
      "Zuwegungsplanung, materialgerechte Verfahren und sichere Teams – inklusive Dokumentation für Facility und Eigentümer.",
    zeitrahmen:
      "Angebot und Terminierung typischerweise 2–4 Wochen; wetterabhängige Fenster werden vorab kommuniziert.",
  },
  entruempelung: {
    problem:
      "Haushaltsauflösungen und Räumungen erzeugen Entsorgungs- und Koordinationsstress ohne klaren Abschluss.",
    saubermatikLoesung:
      "Sortierung, fachgerechte Entsorgung und besenreine Übergabe – optional kombiniert mit Endreinigung.",
    zeitrahmen:
      "Termin nach Umfang oft innerhalb von 1–3 Wochen; große Objekte werden in Phasen geplant.",
  },
  sonstiges: {
    problem:
      "Spezialanforderungen passen nicht in Standardkataloge; Anfragen verpuffen in langen E-Mail-Ketten.",
    saubermatikLoesung:
      "Strukturiertes Briefing-Gespräch, klares Leistungsbild und transparentes Angebot – eingebettet in dieselbe Plattform-Logik.",
    zeitrahmen:
      "Erste Einordnung meist innerhalb von 2–5 Werktagen; Angebot abhängig von Komplexität und Begehung.",
  },
};

export function getLeistungSgeTldr(slug: LeistungSlug): LeistungSgeTldr {
  return LEISTUNG_SGE_TLDR[slug];
}
