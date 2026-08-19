import { getSiteOrigin } from "@/lib/seo/site-origin";

export type OnboardingStep = {
  position: number;
  id: string;
  title: string;
  tagline: string;
  body: string;
  deliverable: string;
};

/** Vier Schritte bis zum laufenden Betrieb — ohne Onboarding-Jargon, ohne Zwei-Wochen-Zusage. */
export const B2B_ONBOARDING_STEPS: readonly OnboardingStep[] = [
  {
    position: 1,
    id: "bedarfsanalyse",
    title: "Bedarf klären",
    tagline: "Strukturiert statt Bauchgefühl",
    body: "Im Gespräch klären wir Objekttyp, Flächen, Nutzungszeiten und Qualitätsanspruch. Facility-Leitung und Geschäftsführung sehen, welche Leistungsbausteine, Intervalle und Schnittstellen (Winterdienst, Glas, Sonderflächen) relevant sind.",
    deliverable: "Kurzes Leistungsbild & offene Punkte",
  },
  {
    position: 2,
    id: "objektbegehung",
    title: "Objektbegehung",
    tagline: "Substanz vor Angebot",
    body: "Vor Ort schauen wir uns Böden, Verkehrszonen, Zugänge und sensible Bereiche an. Ergebnis ist kein Standardkatalog, sondern ein objektspezifisches Leistungsbild, das Einkauf, Hausverwaltung und Betrieb gemeinsam tragen können.",
    deliverable: "Begehungsnotiz mit Zonenplan",
  },
  {
    position: 3,
    id: "sla-angebot",
    title: "Unverbindliches Angebot",
    tagline: "Umfang nach Vereinbarung",
    body: "Auf Basis der Begehung formulieren wir ein klares Angebot mit Leistungsumfang und vertraglich vereinbarten Reaktionszeiten – statt vager Formulierungen wie „regelmäßig“. Ausnahmeprozesse und Review-Termine legen wir offen fest.",
    deliverable: "Angebot mit Reaktionszeiten",
  },
  {
    position: 4,
    id: "kick-off",
    title: "Start im Objekt",
    tagline: "Betrieb nach Vertragsstart",
    body: "Zum Vertragsstart richten wir Touren, Checklisten und Kommunikationswege in der Saubermatik-Plattform ein. Ihr fester Ansprechpartner koordiniert die Übergabe. Einsätze erfassen wir über mobile Endgeräte – Umfang der Dokumentation nach Vereinbarung.",
    deliverable: "Tourenplan & Startprotokoll",
  },
] as const;

export function buildB2BOnboardingHowToJsonLd(pagePath: string) {
  const origin = getSiteOrigin();
  const url = `${origin}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#b2b-onboarding`,
    name: "Zusammenarbeit mit Saubermatik Gebäudereinigung starten",
    description:
      "Vier Schritte: Bedarf klären, Objektbegehung, unverbindliches Angebot und Start im Objekt mit dokumentierten Einsätzen.",
    inLanguage: "de-DE",
    provider: {
      "@type": "Organization",
      name: "Saubermatik Gebäudereinigung",
      url: origin,
    },
    step: B2B_ONBOARDING_STEPS.map((s) => ({
      "@type": "HowToStep",
      position: s.position,
      name: s.title,
      text: `${s.body} Ergebnis: ${s.deliverable}`,
      url: `${url}#onboarding-${s.id}`,
    })),
  };
}
