import type { StandortCity } from "@/lib/routes/standorte";
import {
  formatInfrastructure,
  formatZones,
  getLocalEntityProfile,
  isProgrammaticEntityCity,
  spinVariant,
  type LocalEntityProfile,
} from "@/lib/seo/local-entities";

export type StandortContentSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export type StandortDeepContent = {
  heroTitle: string;
  heroSubtitle: string;
  sections: readonly StandortContentSection[];
};

function joinZones(profile: LocalEntityProfile): string {
  return formatZones(profile.industrialZones);
}

function joinInfra(profile: LocalEntityProfile): string {
  return formatInfrastructure(profile.infrastructure);
}

function buildCoreCitySections(
  city: StandortCity,
  label: string,
  profile: LocalEntityProfile,
): StandortContentSection[] {
  const zones = joinZones(profile);
  const infra = joinInfra(profile);
  const v = spinVariant(city, 3);
  const zoneA = profile.industrialZones[0]!;
  const zoneB = profile.industrialZones[1] ?? profile.industrialZones[0]!;

  const industryLead =
    v === 0
      ? `${label} lebt von ${profile.industryFocus} Saubermatik übersetzt das in konkrete Reinigungs-SLAs: digitale Leistungsverzeichnisse, Echtzeit-QM und Prozesse, die zu Ihrer Branche passen – nicht generische „Büroreinigung“ ohne Kontext.`
      : v === 1
        ? `Der Wirtschaftsschwerpunkt in ${label} (${profile.industryFocus}) verlangt mehr als Standardintervalle. Wir planen Unterhalt, Glas, Winterdienst und Objektbetreuung entlang Ihrer Nutzung – mit dokumentierten Nachweisen für Einkauf, Facility und Hausverwaltung.`
        : `In ${label} verbinden wir regionale Nähe aus Meßstetten mit Branchenkompetenz: ${profile.industryFocus} Unsere Teams kennen die Anforderungen an Hygiene, Werterhalt und Verkehrssicherung in genau dieser Mischung aus Gewerbe, Produktion und Verwaltung.`;

  return [
    {
      id: "partner",
      title: `Ihr Facility-Partner in ${label}`,
      paragraphs: [
        `Saubermatik ist Ihr Ansprechpartner für Gebäudereinigung und Facility-Services in ${label} – mit Sitz in Meßstetten im Herzen der Zollernalb. Kurze Wege entlang ${infra} bedeuten schnelle Reaktionszeiten, feste Teams und weniger anonyme Subunternehmer-Ketten.`,
        `Ob Unterhaltsreinigung, Glas- und Fassadenpflege, Treppenhaus für WEG, Winterdienst oder Hausmeisterservice: Sie erhalten ein digitales Leistungsverzeichnis, Ausfallsicherheit über unsere Plattform und einen Key Account, der Ihre Objekte kennt – nicht nur Ihre Postleitzahl.`,
        `Facility Manager und Geschäftsführung in ${label} profitieren von messbarer Qualität (DIN EN 13549-orientiert), transparenten Protokollen und SLAs, die intern verteidigbar sind – bei Audits, Eigentümerversammlungen und Vertragsverlängerungen.`,
      ],
    },
    {
      id: "industry",
      title: `Wirtschaftsfokus ${label}`,
      paragraphs: [
        industryLead,
        `Medizintechnik, Produktion, Mittelstand oder historische Bestände – jedes Profil braucht andere Schwerpunkte: Desinfektionszonen, Hallenboden, Schaufenster oder sensibler Werterhalt. Wir definieren das im Onboarding schriftlich, nicht auf der Rechnung nachträglich.`,
        `Die Anbindung über ${infra} macht ${label} zum planbaren Einsatzgebiet: Touren werden gebündelt, Leerfahrten minimiert und Ersatzlogistik bei Ausfällen über die Saubermatik-App gesteuert – Ihr Betrieb merkt den Unterschied an weniger Reklamationen und klaren Ansprechpartnern.`,
      ],
    },
    {
      id: "zones",
      title: `Lokale Präsenz: Gewerbegebiete in ${label}`,
      paragraphs: [
        `Von etablierten Firmen im ${zoneA} bis zu Expansionsflächen in ${zoneB}: ${zones} sind für uns keine Fußnote, sondern Planungsanker für Intervalle, Zufahrt und Sicherheit. Objekte in diesen Zonen erhalten priorisierte Tourenplanung und dokumentierte Einsätze.`,
        `Neubauten, Bestandsgebäude und gemischte Liegenschaften entlang ${infra} betreuen wir mit demselben Qualitätsstandard – angepasst an Mieterstruktur, Öffnungszeiten und vertragliche SLAs. Hausverwaltungen erhalten umlagefähige Nachweise nach § 2 BetrKV.`,
        `Sie suchen einen Partner, der ${label} wirtschaftlich versteht? Sprechen Sie uns an – wir erstellen nach Objektbegehung ein verbindliches, digitales LV.`,
      ],
    },
    {
      id: "services",
      title: `Leistungen vor Ort in ${label}`,
      paragraphs: [
        `Unterhaltsreinigung mit 4-Farb-System und HACCP in Teeküchen, streifenfreie Glasreinigung (Reinwasser-Osmose), Grund- und Bauendreinigung, Fassadenpflege, Entrümpelung und Winterdienst – alles aus einem Portfolio. Das reduziert Schnittstellen für Verwalter und Facility in ${label}.`,
        `Treppenhausreinigung und Verkehrssicherungspflicht sind für WEG und Gewerbe in ${label} besonders sensibel: Trittsicherheit, repräsentative Eingänge und GPS-protokollierte Winterdienste schützen vor Haftung und Mieterbeschwerden.`,
      ],
    },
    {
      id: "digital",
      title: `Digitale Objektsteuerung & Ausfallsicherheit`,
      paragraphs: [
        `Die Saubermatik-Plattform ist kein Marketing-Buzzword: Reinigungskräfte haken digitale LVs ab, Facility Manager sehen Echtzeit-QM, Ausfälle werden durch Ersatzkräfte geschlossen – bevor Ihr Objekt in ${label} leidet. Protokolle stehen für Abrechnung, Audits und Eigentümer-Reports bereit.`,
        `Das ist Reinigung 4.0 für die Region: nicht mehr Excel und Telefonkette, sondern ein System, das Skalierung ohne Qualitätsverlust ermöglicht – vom Einzelbüro bis zum Multi-Objekt-Portfolio entlang ${infra}.`,
      ],
    },
  ];
}

const REGIONAL_FOCUS_VARIANTS = [
  (label: string) =>
    `${label} liegt im Einzugsgebiet Schwarzwald-Baar-Heuberg und Zollernalbkreis – eine Region mit starkem Mittelstand, etablierten Hausverwaltungen und Gewerbe, das kurze Wege von Meßstetten aus erlaubt.`,
  (label: string) =>
    `Für ${label} kombinieren wir regionale Nähe mit überregionaler Prozessqualität: dieselben SLAs und digitale Standards wie in unseren Kernstädten, angepasst an Anfahrt und Objektstruktur.`,
  (label: string) =>
    `In ${label} setzen Unternehmen und Verwaltungen auf Verlässlichkeit statt Billig-Anbieter. Saubermatik liefert feste Teams, dokumentierte Touren und einen Ansprechpartner mit Namen – nicht anonyme Wechsel.`,
] as const;

function buildRegionalSections(
  city: StandortCity,
  label: string,
): StandortContentSection[] {
  const v = spinVariant(city, 3);
  const focusFn = REGIONAL_FOCUS_VARIANTS[v]!;
  const isHq = city === "messstetten";

  const regionalIntro = isHq
    ? [
        `Meßstetten ist unser Firmensitz – hier starten Disposition, Key-Account-Betreuung und die Saubermatik-Plattform. Für Objekte in Meßstetten bedeutet das: kürzeste Wege, maximale Reaktionsgeschwindigkeit und direkter Draht zur Geschäftsführung.`,
        `Als regional verwurzelter Partner kennen wir Zollernalbkreis und angrenzende Räume nicht aus dem Navi, sondern aus täglicher Praxis: WEG, Mittelstand, Praxen und Gewerbe mit unterschiedlichsten Anforderungen.`,
        `Digitale Objektsteuerung, Ausfallsicherheit und messbare Qualität sind bei uns kein Upsell – sie sind die Betriebslogik, mit der Meßstetten und die gesamte Region bedient werden.`,
      ]
    : [
        focusFn(label),
        `${label} profitiert von unserem Netzwerk in der Zollernalb: gebündelte Touren, Ersatzlogistik und ein Qualitätsstandard, der auch in kleineren Städten nicht abgeschwächt wird. Sie erhalten dieselbe App, dieselben Protokolle und dieselbe Ausfallsicherheit wie in Balingen oder Tuttlingen.`,
        `Facility Manager in ${label} brauchen Planbarkeit: feste Intervalle für Unterhalt, Glas und Treppenhaus, Winterdienst mit Verkehrssicherungspflicht und – wo nötig – Hausmeisterservice aus einem Guss. Saubermatik liefert das als SLA, nicht als Stundenkontingent ohne Nachweis.`,
      ];

  return [
    {
      id: "partner",
      title: isHq
        ? "Facility Management & Gebäudereinigung in Meßstetten – Ihr Partner vor Ort"
        : `Facility Management & Gebäudereinigung in ${label}`,
      paragraphs: regionalIntro,
    },
    {
      id: "region",
      title: `Regionale Verankerung: Zollernalb & Schwarzwald-Baar-Heuberg`,
      paragraphs: [
        `Schwarzwald-Baar-Heuberg und Zollernalbkreis verbinden Mittelstand, Industrie, Handel und Wohnbestand – mit unterschiedlichen Reinigungsanforderungen. Saubermatik orchestriert diese Vielfalt über digitale LVs: von Büro und Praxis über Produktions-Sozialräume bis Treppenhaus und Außenanlage.`,
        `Regionale Nähe heißt für ${label}: schnelle Reaktion bei Notfällen (Glasbruch, Wasserschaden, Sonderreinigung), kurze Entscheidungswege und Teams, die Ihre Objektlogik lernen und behalten. Kein Callcenter in einer fernen Metropole – sondern Meßstetten als Steuerungszentrale.`,
        `Wir vermeiden Doorway-Pages: Jede Stadt erhält eigenen, substanziellen Fließtext mit lokaler Einordnung – keine leeren Copy-Paste-Landings ohne regionalen Mehrwert.`,
      ],
    },
    {
      id: "compliance",
      title: `Verkehrssicherung, Winterdienst & Hausverwaltung`,
      paragraphs: [
        `Verkehrssicherungspflicht ist in ${label} kein Nebenthema: Winterdienst, Treppenhaus, Glätte auf Zufahrten und dokumentierte Räum- und Streupflicht schützen Eigentümer und Verwalter vor Haftung. Saubermatik liefert GPS-protokollierte Einsätze und umlagefähige Abrechnung nach § 2 BetrKV.`,
        `Hausverwaltungen und WEG in ${label} bündeln bei uns Treppenhaus, Grünpflege, Winterdienst und Hausmeisterservice – ein Key Account, ein SLA, eine App. Mieterzufriedenheit steigt, wenn Intervalle stimmen und Mängel proaktiv gemeldet werden.`,
        `Notfall-Reaktionszeiten sind vertraglich steuerbar: Glasbruch, Wasserschaden oder kurzfristige Sonderreinigung werden über dieselbe Plattform dispositioniert wie der tägliche Unterhalt – transparent für Sie, steuerbar für uns.`,
      ],
    },
    {
      id: "services",
      title: `Leistungsspektrum in ${label}`,
      paragraphs: [
        `Unterhaltsreinigung (4-Farb-System, DIN EN 13549-orientiertes QM), Glas- und Fassadenreinigung, Grund- und Bauendreinigung, Entrümpelung, Grünpflege und Spezialanfragen – das volle Saubermatik-Portfolio steht ${label} zur Verfügung. Deep-Content-Leistungsseiten dokumentieren Normen, Prozesse und TF-IDF-Entitäten für Einkauf und Facility.`,
        `Praxen und Kanzleien in ${label} erhalten RKI- und HACCP-orientierte Prozesse wo erforderlich; Gewerbe und Industrie erhalten Hallen- und Bürokonzepte mit optimierter Flächenleistung – ohne Störung des Tagesgeschäfts.`,
      ],
    },
    {
      id: "digital",
      title: `Digitale Qualitätssicherung für ${label}`,
      paragraphs: [
        `Jeder Einsatz in ${label} kann digital protokolliert werden: LV-Positionen, Zeitstempel, Sonderfotos bei Abweichungen. Facility Manager haben Echtzeit-Einsicht – keine monatliche Überraschung, keine undokumentierte „war schon jemand da?“-Diskussion.`,
        `Ausfallsicherheit ist vertraglich relevant: Krankheit oder Personalengpass löst Ersatzlogik aus, bevor Qualität bricht. Das ist der Unterschied zwischen Reinigung als Einkaufsposition und Facility als strategischem Risikomanagement in ${label} und der gesamten Region.`,
      ],
    },
  ];
}

export function buildStandortDeepContent(
  city: StandortCity,
  label: string,
): StandortDeepContent {
  const profile = getLocalEntityProfile(city);
  const infra =
    profile !== null
      ? joinInfra(profile)
      : spinVariant(city, 2) === 0
        ? "B27 und regionale Bundesstraßen"
        : "Autobahn- und Bundesstraßenanbindung der Region";

  const heroTitle =
    profile !== null
      ? `Facility Management & Gebäudereinigung in ${label}. Ihr Partner an der ${infra}.`
      : city === "messstetten"
        ? `Facility Management & Gebäudereinigung in Meßstetten. Ihr Partner im Zollernalbkreis.`
        : `Facility Management & Gebäudereinigung in ${label}. Ihr Partner in der Zollernalb.`;

  const heroSubtitle =
    profile !== null
      ? `${profile.industryFocus} – mit digitaler Objektsteuerung, dokumentierter Verkehrssicherung und festen Ansprechpartnern aus Meßstetten.`
      : `Schwarzwald-Baar-Heuberg & Zollernalbkreis: regionale Nähe, schnelle Reaktionszeiten und SLAs für Unterhalt, Glas, Winterdienst und Hausverwaltung.`;

  const sections =
    profile !== null
      ? buildCoreCitySections(city, label, profile)
      : buildRegionalSections(city, label);

  return { heroTitle, heroSubtitle, sections };
}

/** Grobe Wortzahl für QA (nur Server/Build). */
export function countStandortWords(content: StandortDeepContent): number {
  const all = [
    content.heroTitle,
    content.heroSubtitle,
    ...content.sections.flatMap((s) => [s.title, ...s.paragraphs]),
  ].join(" ");
  return all.split(/\s+/).filter(Boolean).length;
}
