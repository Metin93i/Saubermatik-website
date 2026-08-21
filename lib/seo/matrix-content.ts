import { SERVICES, type MatrixServiceSlug } from "@/lib/config/services";
import {
  formatInfrastructure,
  formatZones,
  getLocalEntityProfile,
  isProgrammaticEntityCity,
} from "@/lib/seo/local-entities";
import { matrixSpinVariant } from "@/lib/seo/matrix-spin";
import { getMatrixServiceTech } from "@/lib/seo/matrix-service-tech";
import {
  buildObjectTypesParagraphs,
  buildProcurementParagraphs,
  getMatrixCityExtended,
} from "@/lib/seo/matrix-city-extended";
import {
  STANDORT_LABELS,
  type StandortCity,
} from "@/lib/routes/standorte";

export type MatrixContentSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export type MatrixDeepContent = {
  city: StandortCity;
  service: MatrixServiceSlug;
  cityLabel: string;
  serviceLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: readonly MatrixContentSection[];
  funnelInitialService: MatrixServiceSlug;
};

function buildLocalBlockA(
  city: StandortCity,
  cityLabel: string,
  serviceLabel: string,
  variant: number,
): MatrixContentSection {
  const profile = getLocalEntityProfile(city);
  const isHq = city === "messstetten";

  if (profile && isProgrammaticEntityCity(city)) {
    const zones = formatZones(profile.industrialZones);
    const infra = formatInfrastructure(profile.infrastructure);
    const leads = [
      `${cityLabel} ist geprägt von ${profile.industryFocus} Für ${serviceLabel} bedeutet das: Reinigungs-SLAs, die zur lokalen Wirtschaft passen — nicht generische Textbausteine aus der Großstadt. Saubermatik verbindet Meßstetten als Firmensitz mit Branchenkompetenz vor Ort: digitale Leistungsverzeichnisse, Echtzeit-QM und Key-Account-Betreuung für Facility Manager, Hausverwaltungen und Geschäftsführung.`,
      `In ${cityLabel} planen wir ${serviceLabel} entlang realer Gewerbestrukturen — ${zones} und die Anbindung über ${infra} sind Planungsanker für Touren, Reaktionszeiten und Ausfallsicherheit. Objekte in diesen Zonen erhalten priorisierte Disposition und dokumentierte Einsätze in der Saubermatik-App.`,
      `Der Wirtschaftsschwerpunkt (${profile.industryFocus}) verlangt mehr als Intervalle von der Stange: Hygienezonen, Werterhalt sensibler Substanz und Verkehrssicherungspflicht werden vor Vertragsstart schriftlich fixiert — nachvollziehbar für Einkauf und Eigentümerversammlungen.`,
    ];
    return {
      id: "local-b2b",
      title: `${serviceLabel} in ${cityLabel}: lokaler B2B-Kontext`,
      paragraphs: [
        leads[variant % 3]!,
        leads[(variant + 1) % 3]!,
        leads[(variant + 2) % 3]!,
        `Saubermatik ist in ${cityLabel} kein Vermittler anonyme Subunternehmer, sondern Ihr verbindlicher Partner mit festen Teams, digitalen Protokollen und Key-Account-Betreuung aus Meßstetten. ${serviceLabel} wird so planbar — für Einkauf, Facility und Eigentümer.`,
      ],
    };
  }

  const regionalLeads = isHq
    ? [
        `Meßstetten ist unser Firmensitz — für ${serviceLabel} bedeutet das kürzeste Wege, fester Ansprechpartner statt Callcenter und maximale Reaktionsgeschwindigkeit. Disposition, Key Account und Saubermatik-Plattform starten hier; Objekte in Meßstetten sind Referenz für den gesamten Zollernalbkreis.`,
        `Als regional verwurzelter Partner kennen wir WEG, Mittelstand, Praxen und Gewerbe nicht aus dem Navi, sondern aus täglicher Praxis. ${serviceLabel} wird mit festen Teams, digitalen Protokollen und messbarer Qualität (DIN EN 13549-orientiert) umgesetzt — nicht als anonyme Subunternehmer-Kette.`,
        `Digitale Objektsteuerung und Ausfallsicherheit sind bei uns Betriebslogik: Wenn jemand ausfällt, reagiert das System — Sie merken, dass es weiterläuft. Transparente SLAs, keine versteckten Kosten.`,
      ]
    : [
        `${cityLabel} liegt im Zollernalbkreis und Umkreis — ${serviceLabel} von Saubermatik kombiniert regionale Nähe aus Meßstetten mit überregionaler Prozessqualität. Kurze Anfahrten, feste Ansprechpartner, dieselben digitalen Standards wie in unseren Kernstädten.`,
        `Für ${cityLabel} setzen Unternehmen und Hausverwaltungen auf Verlässlichkeit statt Billig-Anbieter. Wir liefern dokumentierte Touren, Verkehrssicherungsnachweise und SLAs, die intern verteidigbar sind — bei Audits, Versicherern und Mieterversammlungen.`,
        `Ob Unterhalt, Glas, Winterdienst oder Objektbetreuung: ${serviceLabel} wird über die Saubermatik-App gesteuert — Echtzeit-QM, Ersatzlogistik, exportierbare Protokolle. Ein Partner statt vier Schnittstellen.`,
      ];

  return {
    id: "local-b2b",
    title: `${serviceLabel} in ${cityLabel}: regional verwurzelt`,
    paragraphs: [
      ...regionalLeads,
      `Für ${cityLabel} gilt: ${serviceLabel} mit Saubermatik bedeutet ein Gesicht, ein SLA, eine Plattform — von der Erstbegehung bis zur Vertragsverlängerung. Wir dokumentieren jede Leistung so, dass Sie sie intern verteidigen können.`,
    ],
  };
}

function buildSynergyBlockC(
  city: StandortCity,
  cityLabel: string,
  serviceLabel: string,
  serviceSlug: MatrixServiceSlug,
  variant: number,
): MatrixContentSection {
  const profile = getLocalEntityProfile(city);
  const industry = profile?.industryFocus ?? "Mittelstand, Verwaltung und Gewerbe in der Region Zollernalb";

  const synergyByService: Partial<Record<MatrixServiceSlug, readonly string[]>> = {
    unterhaltsreinigung: [
      `${serviceLabel} in ${cityLabel} ist die Basis für produktive Arbeitsplätze — ob Verwaltung entlang der B27, Produktionsbüro in ${profile?.industrialZones[0] ?? "lokalen Gewerbegebieten"} oder Praxisflächen mit RKI-Anforderung. Saubermatik übersetzt ${industry} in konkrete Reinigungs-SLAs mit 4-Farb-System und HACCP in Teeküchen.`,
      `Facility Manager profitieren von einem digitalen LV, das Flächen, Intervalle und Abnahmekriterien nach DIN EN 13549 fixiert — nicht monatlich neu verhandelt wird. Ausfallsicherheit über die Plattform bedeutet: Ihr Objekt in ${cityLabel} bleibt im Rhythmus, auch wenn einzelne Kräfte ausfallen.`,
      `Geschäftsführung und Einkauf erhalten messbare KPIs — Reklamationsquote, Reaktionszeit, Protokoll-Export. Das ist ${serviceLabel} als B2B-Dienstleistung, nicht als „Putzfrau-Modell“.`,
    ],
    "fenster-glasreinigung": [
      `Glasflächen prägen den ersten Eindruck von Unternehmen in ${cityLabel} — ${industry} Verunreinigte Fassaden und Fenster mindern Mietwert und Markenwirkung. Saubermatik liefert streifenfreie Ergebnisse mit Osmose, Teleskop und TRBS-2121-konformer Sicherheit.`,
      `In Medizintechnik- und High-Tech-Clustern der Region zählt jeder Schmutzeintrag an Schleusen und Produktionsnähe. Wir planen ${serviceLabel} deshalb nicht isoliert, sondern als Teil der Gebäudehygiene — kombinierbar mit Unterhalt und Fassadenpflege.`,
      `Verwalter und Facility sparen Koordination: ein Turnus, ein Protokoll, ein Ansprechpartner für ${cityLabel} und Umgebung.`,
    ],
    treppenhausreinigung: [
      `Treppenhäuser in ${cityLabel} sind Haftungs- und Kostenblock zugleich — ${industry} Saubermatik dokumentiert Verkehrssicherungspflicht und § 2 BetrKV-umlagefähige Leistungen digital — für WEG, MFH und Gewerbe.`,
      `Repräsentative Eingänge sichern Mieterzufriedenheit und Vermietbarkeit. Feste Intervalle, leise Geräte, Eskalation bei Mängeln — kein „wir waren irgendwann da“.`,
      `Kombination mit Winterdienst aus einem Portfolio: Gehweg, Treppe, Eingang — eine Verkehrssicherungslogik.`,
    ],
    hausmeisterservice: [
      `Hausmeisterservice in ${cityLabel} entlastet Verwalter technisch: ${industry} Kontrollgänge, Kleinreparaturen, Schlüssel, Übergaben — dokumentiert statt zettelbasiert.`,
      `Im MFH-Kontext skaliert ${serviceLabel} von 4 WE bis zum Verwalter-Portfolio — ein Key Account, ein SLA, WE-Richtwerte nach Objekt-Audit.`,
      `Verkehrssicherungspflicht und NK-Abrechnung aus einer Hand — weniger Streit in Eigentümerversammlungen.`,
    ],
    winterdienst: [
      `Winterdienst in ${cityLabel} ist Haftung: ${industry} dokumentierte Einsätze, wettergeführt, § 2 BetrKV-transparent — Saubermatik liefert Nachweise, die vor Versicherer und Gericht bestehen (Umfang je nach Objekt und Vereinbarung).`,
      `Gehwege, Zufahrten, Treppen — priorisiert nach Objektrisiko. Bereitschaftslogik statt Bürozeiten.`,
      `Kombination mit Treppenhaus und Grünpflege — eine Verkehrssicherungsstrategie für die Liegenschaft.`,
    ],
    gruenanlagenpflege: [
      `Grünanlagen in ${cityLabel} sichern Werterhalt und Verkehrssicherung — ${industry} Jahresprogramm statt Wildwuchs.`,
      `Laub, Äste, Rasen — dokumentiert, saisonal, kombiniert mit Winterdienst an Zufahrten.`,
      `Repräsentative Außenwirkung für Gewerbe und WEG — ein Ansprechpartner.`,
    ],
    grundreinigung: [
      `Grundreinigung in ${cityLabel} nach Bau, Sanierung oder Mieterwechsel — ${industry} VOB/C-orientiert, besenrein, abnahmefähig.`,
      `DIN 18365-Bodenbeläge, RKI in Praxen — dokumentierte Freigabe, nicht subjektives „sauber genug“.`,
      `Übergang in Unterhalt ohne Dienstleisterwechsel — ein Prozess.`,
    ],
    fassadenreinigung: [
      `Fassaden in ${cityLabel} — ${industry} materialschonend, TRBS-konform, werterhaltend.`,
      `Algen, Moos, Industrieabrieb — Turnus oder Einmalprojekt im LV.`,
      `Kombination mit Glas — eine Fassade, ein Partner.`,
    ],
    entruempelung: [
      `Entrümpelung in ${cityLabel} — diskret, termintreu, entsorgungsnachweispflichtig — ${industry} besenreine Übergabe.`,
      `Nachlass, Gewerbe, Zwangsverwaltung — ein Prozess bis zur Schlüsselübergabe.`,
      `Plus Grundreinigung aus einer Hand.`,
    ],
    sonstiges: [
      `Spezialanfragen in ${cityLabel} — ${industry} Teppich, Events, Sonderdesinfektion — messbares LV statt Schätzung.`,
      `Ausschreibungsfähig, DIN EN 13549-QM, RKI/VAH wo nötig.`,
      `Projektleitung und Skalierung über die Saubermatik-Plattform.`,
    ],
  };

  const paragraphs =
    synergyByService[serviceSlug] ??
    synergyByService.unterhaltsreinigung!;

  const rotated = [
    paragraphs[variant % 3]!,
    paragraphs[(variant + 1) % 3]!,
    paragraphs[(variant + 2) % 3]!,
    `Kurz gesagt: ${serviceLabel} in ${cityLabel} ist dann erfolgreich, wenn Qualität, Haftung und Dokumentation zusammenpassen — nicht, wenn der Preis pro Stunde minimal ist. Saubermatik liefert messbare Ergebnisse für ${industry}.`,
  ];

  return {
    id: "synergy",
    title: `Warum ${serviceLabel} in ${cityLabel} geschäftskritisch ist`,
    paragraphs: rotated,
  };
}

function buildCityEconomyBlock(
  city: StandortCity,
  serviceLabel: string,
  variant: number,
): MatrixContentSection {
  const cityLabel = STANDORT_LABELS[city];
  const extended = getMatrixCityExtended(city);
  const paras = extended.economicContext;
  return {
    id: "city-economy",
    title: `${cityLabel}: Wirtschaftsstruktur und Objektlandschaft`,
    paragraphs: [
      paras[variant % paras.length]!,
      paras[(variant + 1) % paras.length]!,
      paras[(variant + 2) % paras.length]!,
    ],
  };
}

function buildProcurementBlock(
  city: StandortCity,
  serviceLabel: string,
  serviceSlug: MatrixServiceSlug,
  variant: number,
): MatrixContentSection {
  const cityLabel = STANDORT_LABELS[city];
  return {
    id: "procurement",
    title: `B2B-Beschaffung: ${serviceLabel} in ${cityLabel} rechtsicher einkaufen`,
    paragraphs: buildProcurementParagraphs(city, serviceLabel, serviceSlug, variant),
  };
}

function buildObjectTypesBlock(
  city: StandortCity,
  serviceLabel: string,
  serviceSlug: MatrixServiceSlug,
): MatrixContentSection {
  const cityLabel = STANDORT_LABELS[city];
  return {
    id: "object-types",
    title: `Typische Objekte für ${serviceLabel} in ${cityLabel}`,
    paragraphs: buildObjectTypesParagraphs(city, serviceLabel, serviceSlug),
  };
}

function buildStandardsBlock(
  cityLabel: string,
  serviceLabel: string,
  normRefs: readonly string[],
): MatrixContentSection {
  const norms = normRefs.join(", ");
  return {
    id: "standards",
    title: `Normen & Qualität: ${serviceLabel} in ${cityLabel}`,
    paragraphs: [
      `${serviceLabel} in ${cityLabel} orientiert sich bei Saubermatik an anerkannten Standards: ${norms}. Diese Normen sind nicht Dekoration im Angebot, sondern Grundlage für Leistungsverzeichnis, Unterweisung und Abnahme — auditierbar für ISO, Konzern-Einkauf, Versicherer und Behörden.`,
      `DIN EN 13549 strukturiert messbare Qualität: Was wird wie oft mit welchen Mitteln gereinigt? Welche Abnahmekriterien gelten? Wo sind Sonderzonen (RKI, HACCP, TRBS 2121) definiert? Das wird vor Vertragsbeginn schriftlich fixiert — nicht nachträglich per Telefon.`,
      `Verkehrssicherungspflicht und § 2 BetrKV spielen in ${cityLabel} in Treppenhaus, Winterdienst und Außenanlagen eine zentrale Rolle. Wir liefern Nachweise, die vor Gericht und in Eigentümerversammlungen bestehen — dokumentierte Einsätze und Eskalationslogs aus der Saubermatik-App (Umfang je nach Objekt und Vereinbarung).`,
      `Qualitätsmanagement endet nicht bei der ersten Abnahme. Regelmäßige Begehungen, KPI-Auswertungen und Anpassungen im digitalen LV sichern, dass ${serviceLabel} über die Vertragslaufzeit auf dem vereinbarten Niveau bleibt — auch wenn sich Belegung, Flächen oder Anforderungen ändern.`,
    ],
  };
}

function buildDigitalBlock(
  cityLabel: string,
  serviceLabel: string,
): MatrixContentSection {
  return {
    id: "digital-qm",
    title: `Reinigung 4.0: ${serviceLabel} digital gesteuert in ${cityLabel}`,
    paragraphs: [
      `Die Saubermatik-Plattform ist kein Marketing-Buzzword: Reinigungskräfte haken digitale Leistungsverzeichnisse ab, Facility Manager sehen Echtzeit-QM, Ausfälle werden durch Ersatzkräfte geschlossen — bevor Ihr Objekt in ${cityLabel} leidet. Protokolle stehen für Abrechnung, ISO-Audits, BetrKV und Eigentümer-Reports bereit.`,
      `${serviceLabel} wird damit planbar und skalierbar — vom Einzelobjekt bis zum Multi-Standort-Portfolio. Key Account Manager begleiten Sie über Vertragslaufzeit, Anpassungen und Eskalationen — ein Gesicht, ein SLA, keine Hotline.`,
      `Einstieg in vier Schritten: Bedarf klären, Begehung, unverbindliches Angebot, Start im Objekt. Das ist Facility-Service auf Augenhöhe — regional aus Meßstetten, digital dokumentiert.`,
      `Exportierbare Reports, Versicherungsnachweise und Unterweisungsbelege sind jederzeit abrufbar — für ${cityLabel} und alle Standorte in Ihrem Portfolio. Sie sparen interne Koordination, weil Tourenplanung und Qualität in einem System laufen.`,
      `Wenn Sie ${serviceLabel} in ${cityLabel} neu vergeben oder wechseln wollen: Starten Sie mit einer unverbindlichen Begehung. Wir liefern ein schriftliches LV mit klaren SLAs — ohne versteckte Kosten, ohne Platzhalter, ohne Großstadt-Textbausteine.`,
    ],
  };
}

export function buildMatrixDeepContent(
  city: StandortCity,
  serviceSlug: MatrixServiceSlug,
): MatrixDeepContent {
  const cityLabel = STANDORT_LABELS[city];
  const service = SERVICES.find((s) => s.slug === serviceSlug)!;
  const tech = getMatrixServiceTech(serviceSlug);
  const variant = matrixSpinVariant(city, serviceSlug, 3);

  const blockA = buildLocalBlockA(
    city,
    cityLabel,
    tech.breadcrumbLabel,
    variant,
  );
  const blockB: MatrixContentSection = {
    id: "service-tech",
    title: tech.technicalTitle,
    paragraphs: tech.technicalParagraphs,
  };
  const blockB2: MatrixContentSection = {
    id: "compliance",
    title: tech.complianceTitle,
    paragraphs: tech.complianceParagraphs,
  };
  const blockB3: MatrixContentSection = {
    id: "operational",
    title: tech.operationalTitle,
    paragraphs: tech.operationalParagraphs,
  };
  const blockC = buildSynergyBlockC(
    city,
    cityLabel,
    tech.breadcrumbLabel,
    serviceSlug,
    variant,
  );
  const blockE = buildCityEconomyBlock(city, tech.breadcrumbLabel, variant);
  const blockF = buildProcurementBlock(
    city,
    tech.breadcrumbLabel,
    serviceSlug,
    variant,
  );
  const blockG = buildObjectTypesBlock(city, tech.breadcrumbLabel, serviceSlug);
  const blockH = buildStandardsBlock(cityLabel, tech.breadcrumbLabel, tech.normRefs);
  const blockD = buildDigitalBlock(cityLabel, tech.breadcrumbLabel);

  const heroVariants = [
    `${tech.breadcrumbLabel} in ${cityLabel}: Saubermatik liefert messbare SLAs, digitale Protokolle und regionale Teams — für ${getLocalEntityProfile(city)?.industryFocus ?? "Unternehmen und Verwaltungen in der Zollernalb"}.`,
    `Professionelle ${tech.breadcrumbLabel} für ${cityLabel} — von Meßstetten aus, mit DIN EN 13549-orientiertem QM, Ausfallsicherheit und festem Key Account. Kein Textbaustein, sondern Handwerk mit SaaS-Transparenz.`,
    `${cityLabel} · ${tech.breadcrumbLabel}: Saubermatik verbindet Normen (${tech.normRefs.slice(0, 2).join(", ")}) mit lokaler Präsenz — transparente Preise, dokumentierte Touren, keine versteckten Kosten.`,
  ];

  return {
    city,
    service: serviceSlug,
    cityLabel,
    serviceLabel: tech.breadcrumbLabel,
    metaTitle: `${tech.breadcrumbLabel} ${cityLabel} | Saubermatik`,
    metaDescription: heroVariants[variant].slice(0, 158),
    heroTitle: `${tech.breadcrumbLabel} in ${cityLabel} — regional, digital, verbindlich.`,
    heroSubtitle: heroVariants[variant],
    sections: [blockA, blockE, blockB, blockC, blockB2, blockB3, blockF, blockG, blockH, blockD],
    funnelInitialService: serviceSlug,
  };
}

/** Grobe Wortzahl für QA (Server/Build). */
export function countMatrixWords(content: MatrixDeepContent): number {
  const all = [
    content.heroSubtitle,
    ...content.sections.flatMap((s) => s.paragraphs),
  ].join(" ");
  return all.split(/\s+/).filter(Boolean).length;
}
