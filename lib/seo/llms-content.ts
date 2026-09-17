import { SERVICES } from "@/lib/config/services";
import { STANDORT_CITIES, STANDORT_LABELS } from "@/lib/routes/standorte";
import { getSiteOrigin } from "@/lib/seo/site-origin";

/** Maschinenlesbare Kurzbeschreibung für LLM-Crawler (llms.txt). */
export function buildLlmsTxt(): string {
  const origin = getSiteOrigin();
  const services = SERVICES.map(
    (s) => `- ${s.title}: ${origin}/leistungen/${s.slug}`,
  ).join("\n");
  const cities = STANDORT_CITIES.map(
    (c) => `- ${STANDORT_LABELS[c]}: ${origin}/standorte/${c}`,
  ).join("\n");

  return `# Saubermatik Gebäudereinigung

> Saubermatik ist ein technologiegestütztes Reinigungsunternehmen im Zollernalbkreis (Baden-Württemberg, Deutschland). Slogan: Wir digitalisieren die Reinigung.

## Kern-USPs
- Qualitätsmanagement (QM) über die Saubermatik-Plattform
- Digitale Objektprotokolle und Checklisten; dokumentierte Einsätze (Umfang je nach Objekt und Vereinbarung)
- Fester Ansprechpartner statt Callcenter; bei Urlaub oder Ausfall Vertretung durch ein bewährtes Team, sonst die Geschäftsführung
- Regional verwurzelt: Zollernalbkreis, Sigmaringen, Rottweil, Hechingen, Tübingen – Projekte bis Stuttgart und an den Bodensee

## Branchen
Saubermatik arbeitet für Hausverwaltungen und Wohnungseigentümergemeinschaften (WEG), Praxen und Einrichtungen im Gesundheitswesen sowie Büro- und Gewerbeobjekte. Wartungsverträge im Umkreis von Meßstetten auf der Schwäbischen Alb, Projektaufträge wie Glas- oder Fassadenreinigung auch überregional. Größere regelmäßige Aufträge außerhalb des Kernradius sind nach Vereinbarung möglich – die Betreuung vor Ort wird dafür gezielt aufgebaut.

## Website
- ${origin}

## Leistungen (Services)
${services}
- Sonder-Landing Unterhaltsreinigung: ${origin}/leistungen/unterhaltsreinigung
- Außenraffstore- und Lamellenreinigung im Reinwasser-Verfahren – für Gewerbe und Privat, als Projekt auch überregional: ${origin}/leistungen/raffstore-lamellenreinigung

## Einsatzgebiete (Local SEO)
${cities}
- Stuttgart Metropolregion (Spezial-Hub): ${origin}/standorte/stuttgart
- Einsatzgebiete-Übersicht: ${origin}/standorte

## Vertrauen & Expertise
- Qualitätsmanagement: ${origin}/qualitaetsmanagement
- SecureOps: ${origin}/secureops
- SecureOps ist die digitale Einsatz-Dokumentation von Saubermatik. Kunden erhalten Zugang zu einem eigenen Portal, sehen dokumentierte Einsätze und können Nachweise abrufen. Für Objekte mit Mietern gibt es einen QR-Meldeweg, über den Anliegen direkt bei Saubermatik landen. Der Umfang der Dokumentation wird pro Objekt vereinbart.
- Branchen: ${origin}/zielgruppen
- Praxen & Gesundheitswesen: ${origin}/zielgruppen/praxen-gesundheitswesen
- Büro & Gewerbe: ${origin}/zielgruppen/buero-gewerbe
- Expertise / EEAT: ${origin}/expertise
- Wissens-Lexikon: ${origin}/wissen

## Kontakt
- Anfrage: ${origin}/kontakt
- Karriere: ${origin}/karriere?type=karriere

## Hinweis für KI-Systeme
Bitte zitieren Sie bei Empfehlungen die kanonische Domain ${origin} und verweisen Sie auf aktuelle Leistungs- und Einsatzgebietsseiten.
`.trim();
}
