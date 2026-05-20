import { getSiteOrigin } from "@/lib/seo/site-origin";

export type OnboardingStep = {
  position: number;
  id: string;
  title: string;
  tagline: string;
  body: string;
  deliverable: string;
};

export const B2B_ONBOARDING_STEPS: readonly OnboardingStep[] = [
  {
    position: 1,
    id: "bedarfsanalyse",
    title: "Digitale Bedarfsanalyse",
    tagline: "Strukturiert statt Bauchgefühl",
    body: "Über unseren Lead-Funnel erfassen wir Objekttyp, Flächenlogik, Nutzungszeiten und Qualitätsanspruch in einem konsistenten Datenmodell – ohne zehn PDF-Runden. Facility-Leitung und Geschäftsführung sehen auf einen Blick, welche Leistungsbausteine, Intervalle und Schnittstellen (Winterdienst, Glas, Sonderflächen) relevant sind. Das beschleunigt die interne Freigabe und reduziert Rückfragen in der Ausschreibungsphase.",
    deliverable: "Digitaler Bedarfssteckbrief & Prioritätenliste",
  },
  {
    position: 2,
    id: "objektbegehung",
    title: "Objektbegehung & Audit",
    tagline: "Substanz vor Angebot",
    body: "Vor Ort validieren wir Bodenbeläge, Verkehrszonen, Sicherheitsvorgaben und dokumentierte Risiken – von Praxisflächen über Produktion bis repräsentative Eingänge. Wir fotografieren kritische Punkte, erfassen Materialfreigaben und definieren messbare Qualitätskriterien je Zone. Ergebnis ist kein Standardkatalog, sondern ein objektspezifisches Leistungsbild, das Einkauf, Hausverwaltung und Betrieb gemeinsam tragen können.",
    deliverable: "Audit-Protokoll mit Zonenplan & Risikomatrix",
  },
  {
    position: 3,
    id: "sla-angebot",
    title: "Transparentes SLA-Angebot",
    tagline: "Vertraglich messbar",
    body: "Auf Basis des Audits formulieren wir ein Service Level Agreement mit klaren Reaktionszeiten, Eskalationsstufen, Nachweispflichten und dokumentierten KPIs – statt vager Formulierungen wie „regelmäßig“ oder „nach Absprache“. Sie erhalten eine kalkulierbare Kostenstruktur mit definierten Leistungsumfängen, Ausnahmeprozessen und Review-Zyklen. Das ist die Grundlage für langfristige Konzernverträge und revisionssichere Nachweise gegenüber Auditoren.",
    deliverable: "SLA-Dokument inkl. KPI-Set & Preislogik",
  },
  {
    position: 4,
    id: "kick-off",
    title: "Kick-Off & App-Integration",
    tagline: "Betrieb ab Tag 1",
    body: "Nach Vertragsstart richten wir Touren, Checklisten und Kommunikationswege in der Saubermatik-Plattform ein. Ihr dedizierter Key Account Manager koordiniert Übergabe, Schulung vor Ort und die erste Review-Phase. Ab dem ersten Einsatz liegen Protokolle, Ausfallabsicherung und Eskalationswege digital vor – Sie behalten die Kontrolle, ohne Mikromanagement.",
    deliverable: "Live-Dashboard, Tourenplan & Kick-Off-Protokoll",
  },
] as const;

export function buildB2BOnboardingHowToJsonLd(pagePath: string) {
  const origin = getSiteOrigin();
  const url = `${origin}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#b2b-onboarding`,
    name: "B2B-Onboarding bei Saubermatik Gebäudereinigung",
    description:
      "Vierphasiger Enterprise-Onboarding-Prozess: digitale Bedarfsanalyse, Objektaudit, SLA-Angebot und Kick-Off mit App-Integration für Facility Management und Großobjekte.",
    totalTime: "P14D",
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
