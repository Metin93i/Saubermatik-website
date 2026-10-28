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
      `${cityLabel} ist geprägt von ${profile.industryFocus} Für ${serviceLabel} bedeutet das: SLAs, die zur lokalen Wirtschaft passen — nicht generische Textbausteine aus der Großstadt. Saubermatik verbindet Meßstetten als Firmensitz mit Branchenkompetenz vor Ort: digitale Leistungsverzeichnisse, dokumentierte Qualität und einen persönlichen Ansprechpartner für Facility Manager, Hausverwaltungen und Geschäftsführung.`,
      `In ${cityLabel} planen wir ${serviceLabel} entlang realer Gewerbestrukturen — ${zones} und die Anbindung über ${infra} sind Planungsanker für Touren und Reaktionszeiten. Nachweise erhalten Sie als Protokoll (PDF); Meldungen laufen per Melde-QR über das Kundenportal (im Aufbau).`,
      `Der Wirtschaftsschwerpunkt (${profile.industryFocus}) verlangt mehr als Intervalle von der Stange: Sonderbereiche, Werterhalt sensibler Substanz und Verkehrssicherungspflicht werden vor Vertragsstart schriftlich fixiert — nachvollziehbar für Einkauf und Eigentümerversammlungen.`,
    ];
    return {
      id: "local-b2b",
      title: `${serviceLabel} in ${cityLabel}: lokaler B2B-Kontext`,
      paragraphs: [
        leads[variant % 3]!,
        leads[(variant + 1) % 3]!,
        leads[(variant + 2) % 3]!,
        `Saubermatik ist in ${cityLabel} kein Vermittler anonymer Subunternehmer, sondern Ihr verbindlicher, inhabergeführter Partner mit digitalen Protokollen und festem Ansprechpartner aus Meßstetten — dem Inhaber persönlich. ${serviceLabel} wird so planbar — für Einkauf, Facility und Eigentümer.`,
      ],
    };
  }

  const regionalLeads = isHq
    ? [
        `Meßstetten ist unser Firmensitz — für ${serviceLabel} bedeutet das kürzeste Wege, fester Ansprechpartner statt Callcenter und maximale Reaktionsgeschwindigkeit. Disposition, persönliche Betreuung durch den Inhaber und das Kundenportal (im Aufbau) sind hier zu Hause.`,
        `Als regional verwurzelter Partner kennen wir WEG, Mittelstand, Praxen und Gewerbe nicht aus dem Navi, sondern aus täglicher Praxis. ${serviceLabel} wird mit festem Ansprechpartner (Inhaber), digitalen Protokollen und schriftlich vereinbarten Qualitätskriterien umgesetzt — nicht als anonyme Subunternehmer-Kette.`,
        `Vertretung und Kapazität regeln wir vor Leistungsbeginn schriftlich — damit klar ist, was bei Urlaub oder Krankheit passiert. Transparente SLAs, keine versteckten Kosten.`,
      ]
    : [
        `${cityLabel} liegt im Zollernalbkreis und Umkreis — ${serviceLabel} von Saubermatik kombiniert regionale Nähe aus Meßstetten mit überregionaler Prozessqualität. Kurze Anfahrten, ein fester Ansprechpartner, dieselben digitalen Standards wie in unseren Kernstädten.`,
        `Für ${cityLabel} setzen Unternehmen und Hausverwaltungen auf Verlässlichkeit statt Billig-Anbieter. Wir liefern dokumentierte Touren, Verkehrssicherungsnachweise und SLAs, die intern verteidigbar sind — bei Audits, Versicherern und Mieterversammlungen.`,
        `Ob Unterhalt, Glas, Winterdienst oder Objektbetreuung: ${serviceLabel} wird schriftlich geplant und als Protokoll (PDF) nachgewiesen; Meldungen laufen per Melde-QR über das Kundenportal (im Aufbau). Ein Partner statt vier Schnittstellen.`,
      ];

  return {
    id: "local-b2b",
    title: `${serviceLabel} in ${cityLabel}: regional verwurzelt`,
    paragraphs: [
      ...regionalLeads,
      `Für ${cityLabel} gilt: ${serviceLabel} mit Saubermatik bedeutet einen festen Ansprechpartner und ein SLA — von der Erstbegehung bis zur Vertragsverlängerung. Wir dokumentieren jede Leistung so, dass Sie sie intern verteidigen können.`,
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
      `Facility Manager profitieren von einem digitalen LV, das Flächen, Intervalle und Abnahmekriterien in Anlehnung an DIN EN 13549 fixiert — nicht monatlich neu verhandelt wird. Vertretung bei Urlaub oder Krankheit regeln wir vor Leistungsbeginn schriftlich — damit Ihr Objekt in ${cityLabel} im Rhythmus bleibt.`,
      `Geschäftsführung und Einkauf erhalten nachvollziehbare Nachweise — Protokolle (PDF) und regelmäßige Qualitätsbegehungen. Das ist ${serviceLabel} als B2B-Dienstleistung, nicht als „Putzfrau-Modell“.`,
    ],
    "fenster-glasreinigung": [
      `Glasflächen prägen den ersten Eindruck von Unternehmen in ${cityLabel} — ${industry} Verunreinigte Fassaden und Fenster mindern Mietwert und Markenwirkung. Saubermatik liefert streifenfreie Ergebnisse mit Osmose, Teleskop und TRBS-2121-konformer Sicherheit.`,
      `In Medizintechnik- und High-Tech-Clustern der Region zählt jeder Schmutzeintrag an Schleusen und Produktionsnähe. Wir planen ${serviceLabel} deshalb nicht isoliert, sondern als Teil der Gebäudehygiene — kombinierbar mit Unterhalt und Fassadenpflege.`,
      `Verwalter und Facility sparen Koordination: ein Turnus, ein Protokoll, ein Ansprechpartner für ${cityLabel} und Umgebung.`,
    ],
    treppenhausreinigung: [
      `Treppenhäuser in ${cityLabel} sind Haftungs- und Kostenblock zugleich — ${industry} Saubermatik dokumentiert Leistungen nachvollziehbar — für WEG, MFH und Gewerbe; ob die Kosten umlagefähig sind, richtet sich nach Mietvertrag und § 2 BetrKV.`,
      `Repräsentative Eingänge sichern Mieterzufriedenheit und Vermietbarkeit. Feste Intervalle, leise Geräte, Eskalation bei Mängeln — kein „wir waren irgendwann da“.`,
      `Kombination mit Winterdienst aus einem Portfolio: Gehweg, Treppe, Eingang — eine Verkehrssicherungslogik.`,
    ],
    hausmeisterservice: [
      `Hausmeisterservice in ${cityLabel} entlastet Verwalter technisch: ${industry} Kontrollgänge, einfache Kleinreparaturen ohne Eingriff in Elektro-, Sanitär-, Brandschutz- und Sicherheitstechnik, Schlüssel, Übergaben — dokumentiert statt zettelbasiert. Fachgewerke koordinieren wir nach Freigabe.`,
      `Im MFH-Kontext reicht ${serviceLabel} von 4 WE bis zum Verwalter-Portfolio — Umfang und Kapazität klären wir vor dem Angebot; ein fester Ansprechpartner (Inhaber), ein SLA, WE-Richtwerte nach Objekt-Audit.`,
      `Verkehrssicherung und NK-Abrechnung aus einer Hand — nachvollziehbar dokumentiert für Eigentümerversammlungen.`,
    ],
    winterdienst: [
      `Winterdienst in ${cityLabel} ist Verkehrssicherung: ${industry} Räum- und Streupflicht mit schriftlichem Plan und Protokoll, Einsatzauslösung nach vereinbarten Kriterien, objektbezogen abgerechnet — Einsätze nachvollziehbar dokumentiert (Umfang je nach Objekt und Vereinbarung).`,
      `Gehwege, Zufahrten, Treppen — priorisiert nach Objektrisiko. Einsatzauslösung nach vereinbarten Kriterien; Fertigstellungszeiten vereinbaren wir im Vertrag.`,
      `Kombination mit Treppenhaus und Grünpflege — abgestimmte Abläufe für die vertraglich übernommenen Flächen.`,
    ],
    gruenanlagenpflege: [
      `Grünanlagen in ${cityLabel} unterstützen Werterhalt und Verkehrssicherheit — ${industry} Jahresprogramm statt Wildwuchs.`,
      `Laub, Fallholz, Rasen — dokumentiert, saisonal, kombiniert mit Winterdienst an Zufahrten.`,
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
      `Ausschreibungsfähig, QM in Anlehnung an DIN EN 13549, RKI/VAH wo nötig.`,
      `Projektleitung durch den Inhaber — Umfang und Kapazität klären wir vor dem Angebot.`,
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
    title: `B2B-Beschaffung: ${serviceLabel} in ${cityLabel} rechtssicher einkaufen`,
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
      `Das Leistungsverzeichnis strukturiert messbare Qualität: Was wird wie oft mit welchen Mitteln erledigt? Welche Abnahmekriterien gelten? Wo gelten Sonderregeln? Das wird vor Vertragsbeginn schriftlich fixiert — nicht nachträglich per Telefon.`,
      `Verkehrssicherungspflicht und § 2 BetrKV spielen in ${cityLabel} in Treppenhaus, Winterdienst und Außenanlagen eine zentrale Rolle. Wir dokumentieren Einsätze nachvollziehbar und stellen Nachweise als Protokoll (PDF) bereit — auch für Eigentümerversammlungen (Umfang je nach Objekt und Vereinbarung).`,
      `Qualitätsmanagement endet nicht bei der ersten Abnahme. Regelmäßige Qualitätsbegehungen mit Ihnen, Protokolle mit Maßnahmen und Anpassungen im digitalen LV sichern, dass ${serviceLabel} über die Vertragslaufzeit auf dem vereinbarten Niveau bleibt — auch wenn sich Belegung, Flächen oder Anforderungen ändern.`,
    ],
  };
}

function buildDigitalBlock(
  cityLabel: string,
  serviceLabel: string,
): MatrixContentSection {
  return {
    id: "digital-qm",
    title: `Kundenportal & Nachweise: ${serviceLabel} in ${cityLabel}`,
    paragraphs: [
      `Das Saubermatik-Kundenportal ist im Aufbau: Meldungen per Melde-QR, Anfragen mit Status und Dokumente an einem Ort. Nachweise erhalten Sie als Protokoll (PDF) — für Abrechnung, ISO-Audits, BetrKV und Eigentümer-Reports. Vertretung und Kapazität für Ihr Objekt in ${cityLabel} regeln wir vor Leistungsbeginn schriftlich.`,
      `${serviceLabel} wird damit planbar — vom Einzelobjekt bis zum Multi-Standort-Portfolio. Ihr fester Ansprechpartner ist der Inhaber persönlich — über Vertragslaufzeit, Anpassungen und Eskalationen: ein Gesicht, ein SLA, keine Hotline.`,
      `Einstieg in vier Schritten: Bedarf klären, Begehung, unverbindliches Angebot, Start im Objekt. Das ist Facility-Service auf Augenhöhe — regional aus Meßstetten, digital dokumentiert.`,
      `Protokolle (PDF), Versicherungsnachweise und Unterweisungsbelege stellen wir auf Anfrage bereit — für ${cityLabel} und alle Standorte in Ihrem Portfolio. Im Kundenportal (im Aufbau) liegen Dokumente künftig gesammelt an einem Ort.`,
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
    `${tech.breadcrumbLabel} in ${cityLabel}: Saubermatik liefert messbare SLAs, digitale Protokolle und einen festen Ansprechpartner — für ${getLocalEntityProfile(city)?.industryFocus ?? "Unternehmen und Verwaltungen in der Zollernalb"}.`,
    `${tech.breadcrumbLabel} für ${cityLabel} — von Meßstetten aus, mit schriftlichem Leistungsverzeichnis, festem Ansprechpartner (Inhaber) und vor Leistungsbeginn geregelter Vertretung. Handwerk mit nachvollziehbarer Dokumentation.`,
    `${cityLabel} · ${tech.breadcrumbLabel}: Saubermatik orientiert sich an anerkannten Vorgaben (${tech.normRefs.slice(0, 2).join(", ")}) und verbindet das mit lokaler Präsenz — transparente Preise, dokumentierte Touren, keine versteckten Kosten.`,
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
