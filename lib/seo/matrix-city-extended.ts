import type { ServiceSlug } from "@/lib/config/services";
import type { StandortCity } from "@/lib/routes/standorte";
import { STANDORT_LABELS } from "@/lib/routes/standorte";

export type MatrixCityExtendedProfile = {
  economicContext: readonly string[];
  objectTypes: readonly string[];
  regionalNote: string;
};

/** Erweiterte Wirtschaftsprofile für alle 16 Matrix-Städte (Block E). */
export const MATRIX_CITY_EXTENDED: Record<
  StandortCity,
  MatrixCityExtendedProfile
> = {
  messstetten: {
    economicContext: [
      "Meßstetten ist Firmensitz von Saubermatik und Drehscheibe für den gesamten Zollernalbkreis. Als Verwaltungs- und Dienstleistungsstandort mit Nähe zu Alb-Werkstätten und regionalen Mittelständlern verbindet die Stadt ländliche Strukturen mit modernen Gewerbe- und Verwaltungsflächen. Für Facility Manager bedeutet das: kürzeste Reaktionswege, direkter Zugang zur Geschäftsführung und Referenzobjekte, an denen Prozesse erprobt werden, bevor sie auf andere Standorte skaliert werden.",
      "Typische Objekte in Meßstetten umfassen Verwaltungsgebäude, Arztpraxen, WEG-Portfolios und kleinere Produktionsbetriebe entlang der B463. Die Mischung aus Wohn- und Gewerbestruktur erfordert flexible Reinigungs-SLAs: leise Geräte in Mehrfamilienhäusern, HACCP in Teeküchen, RKI-orientierte Prozesse in Praxen — alles aus einem digitalen Leistungsverzeichnis.",
      "Als HQ-Standort profitieren Meßstettener Auftraggeber von maximaler Dispositionspriorität. Touren starten hier, Ersatzkräfte werden zuerst lokal eingesetzt, Eskalationen laufen über den Key Account ohne Umwege über Callcenter. Das ist kein Marketing-Versprechen, sondern operative Realität: Meßstetten ist unser Referenzmarkt für Ausfallsicherheit und dokumentierte Qualität.",
    ],
    objectTypes: [
      "Verwaltungs- und Bürogebäude",
      "Arztpraxen und MVZ",
      "WEG und MFH-Portfolios",
      "Gewerbehallen und Werkstätten",
    ],
    regionalNote:
      "Kern des Zollernalbkreises — kürzeste Wege, HQ-Dispositionspriorität.",
  },
  balingen: {
    economicContext: [
      "Balingen ist wirtschaftliches Zentrum des Zollernalbkreises: Mittelstand, Einzelhandel und Verwaltung entlang der B27 prägen die Flächenstruktur. Gewerbegebiete wie Gehrn und Auf dem Kies bündeln Produktion, Logistik und Büroflächen — ideal für skalierbare Unterhaltsreinigung mit klaren Touren und messbaren SLAs nach DIN EN 13549.",
      "Hausverwaltungen in Balingen verwalten oft gemischte Bestände: historische Innenstadtlagen neben modernen Neubauten in den Gewerbezonen. Das erfordert materialspezifische Bodenpflege, dokumentierte Verkehrssicherung in Treppenhäusern und transparente §-2-BetrKV-Abrechnung — nicht vier verschiedene Dienstleister für Glas, Treppe, Winter und Unterhalt.",
      "Einkauf und Geschäftsführung in Balingen erwarten B2B-Niveau: verbindliche Angebote, digitale Protokolle, Key-Account-Betreuung. Saubermatik liefert genau das — regional aus Meßstetten, digital auf Enterprise-Standard, ohne versteckte Zusatzpositionen.",
    ],
    objectTypes: [
      "Büro- und Verwaltungskomplexe B27",
      "Einzelhandel und Showrooms",
      "Gewerbehallen Gehrn / Auf dem Kies",
      "WEG- und MFH-Bestände Innenstadt",
    ],
    regionalNote:
      "Kreisstadt Zollernalbkreis — Mittelstand, B27-Achse, Gewerbezonen Gehrn.",
  },
  tuttlingen: {
    economicContext: [
      "Tuttlingen ist Weltmarktführer in der Medizintechnik — Medical Mountains, Gänsäcker, Industriepark. Unternehmen wie Aesculap und hunderte Zulieferer setzen höchste Hygienestandards: Reinraum-nähe, dokumentierte Desinfektion, VAH- und RKI-konforme Prozesse in Produktions- und Sozialräumen. Generische Reinigung aus der Großstadt scheitert hier an Audit-Anforderungen.",
      "Facility Manager in Tuttlingen koordinieren Büroflächen, Produktionsbereiche, Labore und repräsentative Empfangszonen gleichzeitig. Ein Partner muss HACCP in Kantinen, 4-Farb-System in Sanitärbereichen und streifenfreie Glasflächen an Fassaden beherrschen — mit exportierbaren Protokollen für ISO, Konzern-Einkauf und Behörden.",
      "Die Anbindung über B14 und B311 macht Tuttlingen dispositionstechnisch planbar: feste Touren, Puffer für Ersatzkräfte, wettergeführter Winterdienst an Zufahrten. Saubermatik verbindet Medizintechnik-Kompetenz mit regionaler Präsenz — kein anonymes Subunternehmer-Netzwerk.",
    ],
    objectTypes: [
      "Medizintechnik-Produktion und Zulieferer",
      "Büro- und Verwaltungsflächen Medical Mountains",
      "Labore und hygiene-sensitive Nebenräume",
      "Empfang, Glasfassaden, repräsentative Zonen",
    ],
    regionalNote:
      "Medical Mountains — Medizintechnik, höchste Hygiene- und Audit-Anforderungen.",
  },
  albstadt: {
    economicContext: [
      "Albstadt vereint Maschinenbau, Textilindustrie und Produktionshallen in Ebingen und Tailfingen. Hallenböden, Sozialräume, Umkleiden und Verwaltungsflächen haben unterschiedliche Reinigungsprofile — alkalische Grundreiniger nur wo vorgesehen, neutrale Unterhaltsreiniger im Tagesbetrieb, TRBS-orientierte Sicherheit an Glas und Fassaden.",
      "Produktionsbetriebe in Albstadt brauchen Reinigung, die den Schichtbetrieb respektiert: feste Zeitfenster, leise Geräte, dokumentierte Freigabe von Produktionsflächen. Facility und Werksleitung erwarten KPIs — Reklamationsquote, Ausfallquote, Reaktionszeit — nicht monatliche Diskussionen ohne Daten.",
      "Die B463-Anbindung und die Nähe zu Meßstetten ermöglichen kurze Reaktionszeiten. Saubermatik plant Albstadt-Objekte entlang realer Touren, nicht theoretischer Landkarten — mit Ausfallsicherheit über die Plattform.",
    ],
    objectTypes: [
      "Produktionshallen Ebingen / Tailfingen",
      "Sozialräume und Kantinen",
      "Verwaltung und Vertrieb",
      "WEG und Wohnbestand",
    ],
    regionalNote:
      "Maschinenbau und Textil — Hallen, Sozialräume, Schichtbetrieb.",
  },
  rottweil: {
    economicContext: [
      "Rottweil verbindet historische Bausubstanz mit modernen Gewerbeparks wie Berner Feld und IN⊙VATOR. Werterhalt sensibler Substanz — Naturstein, historische Treppen, denkmalgeschützte Fassaden — erfordert materialschonende Verfahren und erfahrene Teams, nicht aggressive Hochdruckreiniger und Billig-Chemie.",
      "Die A81- und B27-Anbindung macht Rottweil zum Knotenpunkt zwischen Schwarzwald und Neckar. Verwalter und Facility Manager betreuen oft Multi-Objekt-Portfolios: Büro in Neubauten, WEG in Altbestand, Gewerbe in Industriezonen — ein SLA, ein Ansprechpartner, digitale Protokolle für Eigentümerversammlungen.",
      "Verkehrssicherungspflicht ist in Rottweil kein Nebenthema: Treppenhaus, Gehweg, Zufahrt — dokumentiert, wettergeführt, §-2-BetrKV-transparent. Saubermatik bündelt Winterdienst, Treppenhaus und Unterhalt in einer Verkehrssicherungslogik.",
    ],
    objectTypes: [
      "Historische WEG und MFH Altstadt",
      "Gewerbeparks Berner Feld / IN⊙VATOR",
      "Büro- und Verwaltungsneubauten",
      "Praxen und Dienstleistungsflächen",
    ],
    regionalNote:
      "Historische Substanz plus moderne Gewerbeparks — Werterhalt, A81/B27.",
  },
  hechingen: {
    economicContext: [
      "Hechingen ist High-Tech- und Medizintechnik-Standort mit Zonen Lotzenäcker und Nasswasen entlang der B27. Praxisnahe Hygiene, Labor- und Büroflächen mit SLA-Anforderungen prägen den Markt — Facility Manager brauchen Partner, die RKI, VAH und DIN EN 13549 nicht als Buzzwords, sondern als operative Checklisten verstehen.",
      "Zulieferer und Mittelständler in Hechingen erwarten streifenfreie Glasflächen, desinfizierte Sozialräume und dokumentierte Grundreinigung nach Mieterwechsel. Die Nähe zu Tuttlingen und der Medical-Mountains-Cluster schärft Qualitätsanforderungen — Audits sind Alltag, nicht Ausnahme.",
      "Saubermatik bedient Hechingen von Meßstetten aus mit kurzen Anfahrten und festen Teams. Digitale Leistungsverzeichnisse, dokumentierte Qualität und Key-Account-Betreuung machen den Unterschied gegenüber Billig-Anbietern ohne Nachweiskette.",
    ],
    objectTypes: [
      "Medizintechnik und Zulieferer Lotzenäcker",
      "Labore und Büroflächen",
      "Praxen und MVZ",
      "WEG und Verwaltungsstandorte B27",
    ],
    regionalNote:
      "High-Tech und Medizintechnik — SLA-Anforderungen, B27-Korridor.",
  },
  sigmaringen: {
    economicContext: [
      "Sigmaringen ist Verwaltungs- und Tourismusstandort am oberen Donautal: Landratsamt, Kliniken, Hotels, gastronomische Betriebe und historische Liegenschaften prägen den Objektmarkt. Öffentliche Auftraggeber und private Verwalter erwarten rechtskonforme Vergabe, dokumentierte Qualität und Verkehrssicherungsnachweise — besonders in winterlichen Monaten an Zufahrten und Treppen.",
      "Die Mischung aus repräsentativen Gebäuden, Pflegeeinrichtungen und WEG-Bestand erfordert flexible Reinigungs-SLAs: RKI in Gesundheitsnähe, HACCP in Küchen, leise Geräte in Wohnlagen. Saubermatik strukturiert das in einem digitalen LV statt in monatlich neu verhandelten Zusatzrechnungen.",
      "Von Meßstetten aus ist Sigmaringen gut erreichbar — Touren werden entlang der B32/B313-Logik geplant, mit Puffer für Ersatzkräfte und wettergeführter Winterdienst-Priorisierung an sensiblen Zugängen.",
    ],
    objectTypes: [
      "Verwaltung und öffentliche Gebäude",
      "Kliniken und Pflege",
      "Hotellerie und Gastronomie",
      "WEG und historische Liegenschaften",
    ],
    regionalNote:
      "Donautal — Verwaltung, Tourismus, Gesundheitswesen, repräsentative Bausubstanz.",
  },
  moessingen: {
    economicContext: [
      "Mössingen ist Pendler- und Gewerbestadt zwischen Reutlingen und Tübingen mit wachsendem Büro- und Dienstleistungssektor. Liegenschaften reichen von MFH-Portfolios für Verwalter bis zu Gewerbehallen und Praxen — alle mit Anspruch auf Verlässlichkeit statt wechselnder Subunternehmer.",
      "Facility Manager in Mössingen schätzen kurze Wege aus der Zollernalb und digitale Protokolle für Nebenkosten und Eigentümerversammlungen. Unterhaltsreinigung, Treppenhaus, Glas und Winterdienst aus einer Hand reduzieren Koordinationsaufwand und Haftungsrisiken an Schnittstellen.",
      "Die Anbindung an Reutlingen und Tübingen macht Mössingen zu einem strategischen Portfolio-Standort: Multi-Objekt-Betreuung mit einem Key Account und skalierbarer Saubermatik-Plattform.",
    ],
    objectTypes: [
      "MFH- und WEG-Portfolios",
      "Gewerbe und Dienstleistung",
      "Arztpraxen und Therapiezentren",
      "Büroflächen Pendlerregion",
    ],
    regionalNote:
      "Pendlerregion Reutlingen–Tübingen — MFH-Portfolios, wachsender Dienstleistungssektor.",
  },
  tuebingen: {
    economicContext: [
      "Tübingen ist Universitäts- und Forschungsstandort mit hoher Dichte an Büros, Instituten, Start-ups und Arztpraxen. Objekte wechseln häufig Mieter — Grundreinigung nach Übergabe, Unterhalt im laufenden Betrieb und Glas an repräsentativen Fassaden sind Standardanforderungen, nicht Sonderwünsche.",
      "Verwalter und Facility in Tübingen erwarten B2B-Prozesse: schriftliches LV, DIN EN 13549-orientierte Abnahme, exportierbare Protokolle für Eigentümer und Behörden. Die Nähe zu Meßstetten erlaubt regionale Betreuung ohne Großstadt-Overhead.",
      "Forschungseinrichtungen und Praxen verlangen hygiene-sensitive Prozesse — 4-Farb-System, VAH wo nötig, dokumentierte Desinfektion. Saubermatik verbindet Tübingen-Kompetenz mit Zollernalb-Nähe und digitaler Objektsteuerung.",
    ],
    objectTypes: [
      "Universität und Forschungsinstitute",
      "Start-up-Büros und Co-Working",
      "Arztpraxen und MVZ",
      "WEG und Altstadt-Liegenschaften",
    ],
    regionalNote:
      "Universitätsstadt — Forschung, Praxen, häufige Mieterwechsel, repräsentative Fassaden.",
  },
  schoemberg: {
    economicContext: [
      "Schömberg ist typische Zollernalb-Gemeinde mit Handwerk, kleinem Gewerbe und WEG-dominiertem Wohnbestand. Verwalter und Eigentümer erwarten persönliche Betreuung, faire Preise und Verlässlichkeit — nicht anonyme Callcenter und wechselnde Teams ohne Objektwissen.",
      "Treppenhausreinigung, Winterdienst und Unterhalt sind hier oft der Kernbedarf — mit dokumentierter Verkehrssicherungspflicht und §-2-BetrKV-transparenter Abrechnung. Saubermatik liefert feste Ansprechpartner aus Meßstetten mit kurzen Anfahrten.",
      "Digitale Protokolle schaffen Klarheit in Eigentümerversammlungen: wer wann wo gereinigt hat, welche Mängel eskaliert wurden, wie Winterdienst nachgewiesen wurde — ohne Zettelwirtschaft.",
    ],
    objectTypes: [
      "WEG und MFH",
      "Handwerk und Kleingewerbe",
      "Praxen und Dienstleister",
      "Kommunale und Vereinsgebäude",
    ],
    regionalNote:
      "Zollernalb-Gemeinde — WEG-Schwerpunkt, persönliche Betreuung, Verkehrssicherung.",
  },
  "villingen-schwenningen": {
    economicContext: [
      "Villingen-Schwenningen ist Doppelstadt mit Uhrenindustrie, Technologie, großer Verwaltung und Einzelhandel. Facility Manager betreuen oft größere Flächen mit mehreren Zugängen — digitale Tourenplanung und dokumentierte Qualität sind hier Pflicht, nicht Kür.",
      "Die Region verlangt winterfesten Betrieb: dokumentierte Einsätze beim Winterdienst, priorisierte Räumung an Klinik- und Verwaltungszufahrten, Kombination mit Treppenhaus und Gehwegsicherung aus einem Portfolio.",
      "Saubermatik bedient VS von Meßstetten aus mit überregionaler Prozessqualität: ein Key Account, messbare SLAs, skalierbare Plattform für Multi-Objekt-Bestände — ohne Qualitätsverlust bei wachsender Objektzahl.",
    ],
    objectTypes: [
      "Verwaltung und Behörden",
      "Technologie und Uhrenindustrie",
      "Einzelhandel und Showrooms",
      "Kliniken und Gesundheitswesen",
    ],
    regionalNote:
      "VS-Doppelstadt — größere Flächen, VS-Verwaltung, Winter prioritär.",
  },
  spaichingen: {
    economicContext: [
      "Spaichingen verbindet Textiltradition mit modernem Mittelstand und Gewerbe zwischen Tuttlingen und der Baar. Produktions- und Büroflächen, WEG-Bestand und Praxen erwarten zuverlässige Intervalle und materialschonende Pflege — besonders bei historischen Bodenbelägen in Innenstadtlagen.",
      "Verwalter schätzen die Nähe zu Meßstetten und Tuttlingen: kurze Wege, feste Teams, digitale NK-Abrechnungsunterlagen. Winterdienst und Treppenhaus aus einer Hand reduzieren Haftungsrisiken an Übergängen zwischen Gewerbe- und Wohnzonen.",
      "Saubermatik strukturiert Spaichingen-Objekte in einem LV mit klaren Abnahmekriterien nach DIN EN 13549 — auditierbar für Einkauf und Eigentümerversammlungen.",
    ],
    objectTypes: [
      "Textil und Produktion",
      "Gewerbe und Handel",
      "WEG und MFH",
      "Praxen und Therapie",
    ],
    regionalNote:
      "Textiltradition, Nähe Tuttlingen — Mittelstand, WEG, kurze Wege von Meßstetten.",
  },
  burladingen: {
    economicContext: [
      "Burladingen liegt in unmittelbarer Nähe zu Alb-Werkstätten und dem Zollernalbkreis-Kern. Handwerk, Gewerbe und WEG-dominierte Wohnstruktur prägen den Markt — Verwalter erwarten faire, dokumentierte Leistung ohne versteckte Nachforderungen.",
      "Typische Anforderungen: Treppenhaus mit Verkehrssicherungsnachweis, Unterhalt in Praxen und Büros, saisonale Grünpflege an Zufahrten, Winterdienst an steilen Lagen. Saubermatik bündelt das in einem SLA mit digitaler Objektsteuerung.",
      "Als Nachbarstadt zu Meßstetten profitiert Burladingen von maximal kurzen Reaktionszeiten und HQ-naher Disposition — ideal für Verwalter mit mehreren kleineren Objekten im Portfolio.",
    ],
    objectTypes: [
      "WEG und MFH",
      "Handwerk und Gewerbe",
      "Praxen",
      "Kommunale Gebäude",
    ],
    regionalNote:
      "Alb-Werkstätten-Nähe — WEG, Handwerk, kürzeste HQ-Anfahrt.",
  },
  rottenburg: {
    economicContext: [
      "Rottenburg am Neckar ist Universitätsstadt mit Verwaltung, Forschung, WEG-Bestand und Gewerbe am Neckar. Die Mischung aus historischen Gebäuden und Neubauten erfordert werterhaltende Reinigung — Naturstein, historische Treppen, moderne Glasfassaden in einem Portfolio.",
      "Facility und Verwalter in Rottenburg koordinieren oft Objekte über mehrere Standorte — ein digitaler Partner mit Key Account und exportierbaren Protokollen spart Einkaufs- und Abrechnungsaufwand. Grundreinigung nach Mieterwechsel und laufender Unterhalt aus einer Hand vermeiden Schnittstellenprobleme.",
      "Von Meßstetten aus planen wir Rottenburg-Touren effizient entlang der Neckar-Achse — mit Ausfallsicherheit, Ersatzlogistik und wettergeführter Verkehrssicherung.",
    ],
    objectTypes: [
      "Universität und Verwaltung",
      "WEG Altstadt und Neubau",
      "Gewerbe Neckar",
      "Praxen und Dienstleistung",
    ],
    regionalNote:
      "Neckar-Universitätsstadt — historische Substanz, Mieterwechsel, Multi-Objekt-Portfolios.",
  },
  reutlingen: {
    economicContext: [
      "Reutlingen ist einer der größten Standorte in unserem Einzugsgebiet: Textil, Technologie, Einzelhandel und große Verwaltungsflächen. Einkauf und Facility erwarten skalierbare SLAs, KPI-Reports und digitale Protokolle — Saubermatik liefert Plattform-Denken statt Einzelkämpfer-Logik.",
      "Produktions- und Büroflächen, Einkaufszentren und WEG-Portfolios erfordern unterschiedliche Intervalle und Geräte. Das 4-Farb-System, materialspezifische Bodenpflege und TRBS-konforme Glasreinigung sind Standard in unseren Reutlingen-Objekten.",
      "Die Nähe zu Meßstetten und Mössingen ermöglicht effiziente Tourenplanung. Multi-Standort-Verträge mit einem Key Account sind für Reutlingen-Portfolios realistisch — nicht theoretisch.",
    ],
    objectTypes: [
      "Technologie und Produktion",
      "Einzelhandel und Verwaltung",
      "Große WEG- und MFH-Portfolios",
      "Praxen und Gesundheitswesen",
    ],
    regionalNote:
      "Großstadtregion — skalierbare SLAs, Textil/Technologie, Multi-Objekt-Einkauf.",
  },
  ueberlingen: {
    economicContext: [
      "Überlingen am Bodensee verbindet Tourismus, Hotellerie, Kliniken und gehobenen Wohnbestand. Saisonale Schwankungen — Hauptsaison Hotel, Winter Nebenkosten — erfordern flexible, aber verbindliche Reinigungs-SLAs mit dokumentierter Qualität für Gäste, Behörden und Eigentümer.",
      "Hotellerie und Gastronomie unterliegen praktischen HACCP-Anforderungen; Kliniknähe RKI-orientierten Prozessen. Fassaden und Glas prägen die Außenwirkung am See — streifenfreie Ergebnisse mit Osmose und materialschonender Fassadenpflege sind werterhaltend.",
      "Überlingen liegt am Rand unseres Kerngebiets — wir planen Umfang und Rhythmus transparent im LV, mit realistischen Anfahrtszeiten und Ersatzlogistik über die Saubermatik-Plattform.",
    ],
    objectTypes: [
      "Hotellerie und Gastronomie",
      "Kliniken und Gesundheit",
      "WEG und gehobener Wohnbestand",
      "Tourismus und Einzelhandel",
    ],
    regionalNote:
      "Bodensee — Hotellerie, Saisonbetrieb, HACCP, repräsentative Außenwirkung.",
  },
};

export function getMatrixCityExtended(city: StandortCity): MatrixCityExtendedProfile {
  return MATRIX_CITY_EXTENDED[city];
}

/** B2B-Beschaffungsblock — variiert leicht nach Service. */
export function buildProcurementParagraphs(
  city: StandortCity,
  serviceLabel: string,
  serviceSlug: ServiceSlug,
  variant: number,
): readonly string[] {
  const cityLabel = STANDORT_LABELS[city];
  const base = [
    `Beschaffung und Vergabe für ${serviceLabel} in ${cityLabel} sollten auf messbaren Kriterien basieren — nicht auf dem niedrigsten Stundenpreis. Saubermatik liefert schriftliche Leistungsverzeichnisse nach DIN EN 13549 mit definierten Intervallen, Abnahmekriterien und Eskalationswegen. Das reduziert Nachverhandlungen, Reklamationen und das Risiko von Doorway-Anbietern ohne regionale Substanz.`,
    `Facility Manager und Hausverwaltungen profitieren von einem digitalen Angebot: Flächen, Sonderzonen, Verkehrssicherung, Winterdienst-Optionen und Glas-Turnus in einer Quelle. Vertragsverlängerung erfolgt datenbasiert — Ausfallquote, Reaktionszeit, Reklamationsquote aus der Saubermatik-Plattform, nicht aus Bauchgefühl.`,
    `Für Eigentümerversammlungen und Konzern-Einkauf stellen wir exportierbare Protokolle, Versicherungsnachweise und TRBS-/RKI-/HACCP-relevante Unterweisungsbelege bereit. ${serviceLabel} wird so intern verteidigbar — in ${cityLabel} wie überall in unserem Einzugsgebiet.`,
  ];

  const serviceExtra: Partial<Record<ServiceSlug, string>> = {
    unterhaltsreinigung:
      "Bei Unterhaltsverträgen empfehlen wir Probeintervalle und Abnahme-Checklisten vor Festpreis-Freigabe — Qualität vor Preis.",
    "fenster-glasreinigung":
      "Glas-Leistungen werden turnus- oder flächenbasiert kalkuliert — inklusive TRBS 2121-Dokumentation für Außeneinsätze.",
    treppenhausreinigung:
      "Treppenhaus-SLAs verknüpfen wir mit §-2-BetrKV-Transparenz und Verkehrssicherungsnachweisen — essenziell für WEG in " +
      cityLabel +
      ".",
    winterdienst:
      "Winterdienst-Vergaben sollten dokumentierte Einsätze und Einsatzschwellen schriftlich fixieren — Haftung ist kein Detail.",
    hausmeisterservice:
      "Hausmeister-Leistungen werden als Stunden- oder Pauschalpaket mit Kontrollgängen im LV beschrieben — kein offenes Mandat.",
  };

  const extra = serviceExtra[serviceSlug];
  if (extra && variant % 2 === 0) {
    return [...base, extra];
  }
  return base;
}

/** Objekttypen-Block — city + service spezifisch. */
export function buildObjectTypesParagraphs(
  city: StandortCity,
  serviceLabel: string,
  serviceSlug: ServiceSlug,
): readonly string[] {
  const profile = MATRIX_CITY_EXTENDED[city];
  const cityLabel = STANDORT_LABELS[city];
  const types = profile.objectTypes.join(", ");

  return [
    `In ${cityLabel} betreuen wir ${serviceLabel} vor allem in folgenden Objekttypen: ${types}. Jeder Typ erhält ein angepasstes Leistungsverzeichnis — Intervalle, Geräte, Normen und Abnahmekriterien werden vor Start schriftlich freigegeben.`,
    `${profile.regionalNote} Das prägt unsere Disposition: Touren, Reaktionszeiten und Ersatzlogistik sind auf die lokale Realität in ${cityLabel} ausgelegt, nicht auf eine generische Bundesland-Karte.`,
    `Ob Einzelobjekt oder Verwalter-Portfolio — Saubermatik skaliert ${serviceLabel} über die Plattform, ohne dass Qualität oder Dokumentationstiefe leiden. Key Account Manager begleiten Sie von der Erstbegehung bis zur Vertragsverlängerung.`,
  ];
}
