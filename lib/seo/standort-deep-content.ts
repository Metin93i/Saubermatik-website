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
      ? `${label} lebt von ${profile.industryFocus} Saubermatik übersetzt das in konkrete Reinigungs-SLAs: digitale Leistungsverzeichnisse, dokumentierte Qualität und Prozesse, die zu Ihrer Branche passen – nicht generische „Büroreinigung“ ohne Kontext.`
      : v === 1
        ? `Der Wirtschaftsschwerpunkt in ${label} (${profile.industryFocus}) verlangt mehr als Standardintervalle. Wir planen Unterhalt, Glas, Winterdienst und Objektbetreuung entlang Ihrer Nutzung – mit dokumentierten Nachweisen für Einkauf, Facility und Hausverwaltung.`
        : `In ${label} verbinden wir regionale Nähe aus Meßstetten mit Branchenkompetenz: ${profile.industryFocus} Wir kennen die Anforderungen an Hygiene, Werterhalt und Verkehrssicherung in genau dieser Mischung aus Gewerbe, Produktion und Verwaltung.`;

  return [
    {
      id: "partner",
      title: `Ihr Facility-Partner in ${label}`,
      paragraphs: [
        `Saubermatik ist Ihr Ansprechpartner für Gebäudereinigung und Facility-Services in ${label} – mit Sitz in Meßstetten im Herzen der Zollernalb. Kurze Wege entlang ${infra} bedeuten schnelle Reaktionszeiten, einen festen Ansprechpartner – den Inhaber persönlich – und weniger anonyme Subunternehmer-Ketten.`,
        `Ob Unterhaltsreinigung, Glas- und Fassadenpflege, Treppenhaus für WEG, Winterdienst oder Hausmeisterservice: Sie erhalten ein digitales Leistungsverzeichnis, eine vor Leistungsbeginn schriftlich geregelte Vertretung bei Urlaub oder Ausfall und einen festen Ansprechpartner, der Ihre Objekte kennt – nicht nur Ihre Postleitzahl.`,
        `Facility Manager und Geschäftsführung in ${label} profitieren von messbarer Qualität (Reinigung in Anlehnung an DIN EN 13549), transparenten Protokollen und SLAs, die intern verteidigbar sind – bei Audits, Eigentümerversammlungen und Vertragsverlängerungen.`,
      ],
    },
    {
      id: "industry",
      title: `Wirtschaftsfokus ${label}`,
      paragraphs: [
        industryLead,
        `Medizintechnik, Produktion, Mittelstand oder historische Bestände – jedes Profil braucht andere Schwerpunkte: Desinfektionszonen, Hallenboden, Schaufenster oder sensibler Werterhalt. Wir definieren das vor Vertragsstart schriftlich, nicht auf der Rechnung nachträglich.`,
        `Die Anbindung über ${infra} macht ${label} zum planbaren Einsatzgebiet: Touren werden gebündelt und Leerfahrten minimiert; Vertretung bei Ausfällen regeln wir vor Leistungsbeginn schriftlich – mit einem klaren Ansprechpartner.`,
      ],
    },
    {
      id: "zones",
      title: `Einsatzplanung: Gewerbegebiete in ${label}`,
      paragraphs: [
        `Ob etablierte Firmen im ${zoneA} oder Expansionsflächen in ${zoneB}: ${zones} sind für uns keine Fußnote, sondern Planungsanker für Intervalle, Zufahrt und Sicherheit. Einsätze dokumentieren wir als Protokoll (PDF).`,
        `Für Neubauten, Bestandsgebäude und gemischte Liegenschaften entlang ${infra} gilt derselbe Qualitätsstandard – angepasst an Mieterstruktur, Öffnungszeiten und vertragliche SLAs. Hausverwaltungen erhalten objektbezogene Nachweise; ob die Kosten umlagefähig sind, richtet sich nach Mietvertrag und § 2 BetrKV.`,
        `Sie suchen einen Partner, der ${label} wirtschaftlich versteht? Sprechen Sie uns an – wir erstellen nach Objektbegehung ein verbindliches, digitales LV.`,
      ],
    },
    {
      id: "services",
      title: `Leistungen vor Ort in ${label}`,
      paragraphs: [
        `Unterhaltsreinigung mit 4-Farb-System und HACCP in Teeküchen, streifenfreie Glasreinigung (Reinwasser-Osmose), Grund- und Bauendreinigung, Fassadenpflege, Entrümpelung und Winterdienst – alles aus einem Portfolio. Das reduziert Schnittstellen für Verwalter und Facility in ${label}.`,
        `Treppenhausreinigung und Verkehrssicherungspflicht sind für WEG und Gewerbe in ${label} besonders sensibel: Trittsicherheit, repräsentative Eingänge und nachvollziehbar dokumentierte Winterdienste nach schriftlichem Plan.`,
      ],
    },
    {
      id: "digital",
      title: `Kundenportal (im Aufbau) & Vertretung`,
      paragraphs: [
        `Das Saubermatik-Kundenportal ist im Aufbau: Meldungen per Melde-QR, Anfragen mit Status und Dokumente an einem Ort. Vertretung bei Urlaub oder Ausfall regeln wir vor Leistungsbeginn schriftlich. Nachweise erhalten Sie als Protokoll (PDF) – für Abrechnung, Audits und Eigentümer-Reports.`,
        `Das ist Reinigung 4.0 für die Region: nicht mehr Excel und Telefonkette, sondern schriftliche Protokolle und ein Kundenportal (im Aufbau) für Meldungen und Dokumente – vom Einzelbüro bis zum Multi-Objekt-Portfolio entlang ${infra}.`,
      ],
    },
  ];
}

const REGIONAL_FOCUS_VARIANTS = [
  (label: string) =>
    `${label} liegt im Zollernalbkreis und Umkreis – etwa Sigmaringen, Rottweil, Hechingen und Tübingen; Projektaufträge auch bis Stuttgart und an den Bodensee. Eine Region mit starkem Mittelstand, etablierten Hausverwaltungen und Gewerbe, das kurze Wege von Meßstetten aus erlaubt.`,
  (label: string) =>
    `Für ${label} kombinieren wir regionale Nähe mit überregionaler Prozessqualität: dieselben SLAs und digitale Standards wie in unseren Kernstädten, angepasst an Anfahrt und Objektstruktur.`,
  (label: string) =>
    `In ${label} setzen Unternehmen und Verwaltungen auf Verlässlichkeit statt Billig-Anbieter. Saubermatik liefert dokumentierte Touren und einen festen Ansprechpartner mit Namen – den Inhaber persönlich, nicht anonyme Wechsel.`,
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
        `Meßstetten ist unser Firmensitz – hier starten Tourenplanung, Ansprechpartner-Betreuung und das Saubermatik-Kundenportal (im Aufbau). Für Objekte in Meßstetten bedeutet das: kürzeste Wege und fester Ansprechpartner statt Callcenter.`,
        `Als regional verwurzelter Partner kennen wir Zollernalbkreis und angrenzende Räume nicht aus dem Navi, sondern aus täglicher Praxis: WEG, Mittelstand, Praxen und Gewerbe mit unterschiedlichsten Anforderungen.`,
        `Vertretung bei Urlaub oder Ausfall regeln wir vor Leistungsbeginn schriftlich; digitale Protokolle und dokumentierte Qualität sind bei uns kein Upsell – sie sind die Betriebslogik, mit der Meßstetten und die gesamte Region bedient werden.`,
      ]
    : [
        focusFn(label),
        `${label} profitiert von der Nähe zu unserem Sitz in Meßstetten: gebündelte Touren und ein Qualitätsstandard, der auch in kleineren Städten nicht abgeschwächt wird. Protokolle (PDF) und Kundenportal (im Aufbau) sind überall dieselben.`,
        `Facility Manager in ${label} brauchen Planbarkeit: feste Intervalle für Unterhalt, Glas und Treppenhaus, Winterdienst mit Verkehrssicherungspflicht und – wo nötig – Hausmeisterservice aus einem Guss. Saubermatik liefert das als SLA, nicht als Stundenkontingent ohne Nachweis.`,
      ];

  return [
    {
      id: "partner",
      title: isHq
        ? "Facility Services & Gebäudereinigung in Meßstetten – Ihr Partner vor Ort"
        : `Facility Services & Gebäudereinigung in ${label}`,
      paragraphs: regionalIntro,
    },
    {
      id: "region",
      title: `Regionale Verankerung: Zollernalbkreis bis Stuttgart und Bodensee`,
      paragraphs: [
        `Zollernalbkreis, Sigmaringen, Rottweil, Hechingen und Tübingen verbinden Mittelstand, Industrie, Handel und Wohnbestand – mit unterschiedlichen Reinigungsanforderungen. Projektaufträge übernehmen wir bis Stuttgart und an den Bodensee. Saubermatik orchestriert diese Vielfalt über digitale LVs: von Büro und Praxis über Produktions-Sozialräume bis Treppenhaus und Außenanlage.`,
        `Regionale Nähe heißt für ${label}: schnelle Reaktion bei Notfällen (Glasbruch, Wasserschaden, Sonderreinigung), kurze Entscheidungswege und ein fester Ansprechpartner, der Ihre Objektlogik kennt und behält. Kein Callcenter in einer fernen Metropole – sondern Meßstetten als Steuerungszentrale.`,
        `Wir vermeiden Doorway-Pages: Jede Stadt erhält eigenen, substanziellen Fließtext mit lokaler Einordnung – keine leeren Copy-Paste-Landings ohne regionalen Mehrwert.`,
      ],
    },
    {
      id: "compliance",
      title: `Verkehrssicherung, Winterdienst & Hausverwaltung`,
      paragraphs: [
        `Verkehrssicherungspflicht ist in ${label} kein Nebenthema: Winterdienst, Treppenhaus, Glätte auf Zufahrten und Räum- und Streupflicht mit schriftlichem Plan und Protokoll. Saubermatik liefert dokumentierte Einsätze und eine objektbezogene Abrechnung; ob die Kosten umlagefähig sind, richtet sich nach Mietvertrag und § 2 BetrKV (Umfang je nach Objekt und Vereinbarung).`,
        `Hausverwaltungen und WEG in ${label} können bei uns Treppenhaus, Grünpflege, Winterdienst und Hausmeisterservice bündeln – ein fester Ansprechpartner, ein SLA, Meldungen per Melde-QR im Kundenportal (im Aufbau). Mieterzufriedenheit steigt, wenn Intervalle stimmen und Mängel proaktiv gemeldet werden.`,
        `Notfall-Reaktionszeiten sind vertraglich steuerbar: Glasbruch, Wasserschaden oder kurzfristige Sonderreinigung werden nach denselben vereinbarten Abläufen disponiert wie der tägliche Unterhalt – transparent für Sie, steuerbar für uns.`,
      ],
    },
    {
      id: "services",
      title: `Leistungsspektrum in ${label}`,
      paragraphs: [
        `Unterhaltsreinigung (4-Farb-System, QM in Anlehnung an DIN EN 13549), Glas- und Fassadenreinigung, Grund- und Bauendreinigung, Entrümpelung, Grünpflege und Spezialanfragen – das volle Saubermatik-Portfolio steht ${label} zur Verfügung. Die Leistungsseiten beschreiben Normbezüge und Prozesse für Einkauf und Facility.`,
        `Praxen und Kanzleien in ${label} erhalten Hygieneprozesse nach abgestimmtem Plan; Gewerbe und Industrie erhalten Hallen- und Bürokonzepte – ohne Störung des Tagesgeschäfts.`,
      ],
    },
    {
      id: "digital",
      title: `Digitale Qualitätssicherung für ${label}`,
      paragraphs: [
        `Einsätze in ${label} protokollieren wir nachvollziehbar – Nachweise erhalten Sie als Protokoll (PDF), Meldungen laufen per Melde-QR über das Kundenportal (im Aufbau) – keine monatliche Überraschung, keine undokumentierte „war schon jemand da?“-Diskussion.`,
        `Vertretung bei Urlaub oder Ausfall regeln wir vor Leistungsbeginn schriftlich – Ihr fester Ansprechpartner ist der Inhaber persönlich. Das ist der Unterschied zwischen Reinigung als Einkaufsposition und Facility mit klarem Ansprechpartner in ${label} und der gesamten Region.`,
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
      ? `Facility Services & Gebäudereinigung in ${label}. Ihr Partner an der ${infra}.`
      : city === "messstetten"
        ? `Facility Services & Gebäudereinigung in Meßstetten. Ihr Partner im Zollernalbkreis.`
        : `Facility Services & Gebäudereinigung in ${label}. Ihr Partner in der Zollernalb.`;

  const heroSubtitle =
    profile !== null
      ? `${profile.industryFocus} – mit Protokollen (PDF), dokumentierter Verkehrssicherung und festem Ansprechpartner aus Meßstetten.`
      : `Zollernalbkreis und Umkreis (Sigmaringen, Rottweil, Hechingen, Tübingen): regionale Nähe, schnelle Reaktionszeiten und SLAs für Unterhalt, Glas, Winterdienst und Hausverwaltung. Projektaufträge bis Stuttgart und an den Bodensee.`;

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
