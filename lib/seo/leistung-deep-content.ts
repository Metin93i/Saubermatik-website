import type { LeistungSlug } from "@/lib/routes/leistungen";

export type LeistungDeepDive = {
  title: string;
  paragraphs: readonly string[];
};

export type LeistungDeepContent = {
  slug: LeistungSlug;
  breadcrumbLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introParagraphs: readonly string[];
  deepDives: readonly LeistungDeepDive[];
  highlight: { title: string; bullets: readonly string[] };
  secondaryCta?: { href: string; label: string };
  funnelTitle: string;
  funnelSubtitle: string;
};

const treppenhausreinigung: LeistungDeepContent = {
  slug: "treppenhausreinigung",
  breadcrumbLabel: "Treppenhausreinigung",
  metaTitle: "Treppenhausreinigung WEG & Gewerbe",
  metaDescription:
    "Treppenhausreinigung mit Verkehrssicherungspflicht, Trittsicherheit, § 2 BetrKV-Umlagefähigkeit und digitalem Nachweis – Saubermatik Zollernalb.",
  heroTitle:
    "Repräsentative Treppenhäuser, sichere Wege. Professionelle Treppenhausreinigung für WEG, Hausverwaltungen und Gewerbe.",
  heroSubtitle:
    "Verkehrssicherungspflicht, Trittsicherheit und Mieterzufriedenheit – dokumentiert, intervalbasiert und umlagefähig nach § 2 BetrKV.",
  introParagraphs: [
    "Das Treppenhaus ist die Visitenkarte jeder Liegenschaft – und ein klassischer Haftungs- und Kostenblock für Hausverwaltungen. Schmutzige Stufen, unsichere Beläge und undokumentierte Reinigung erzeugen Beschwerden, Versicherungsfragen und Streit in Eigentümerversammlungen. Saubermatik behandelt Treppenhausreinigung deshalb nicht als Nebenleistung, sondern als Kernprozess der Verkehrssicherungspflicht.",
    "Wir kombinieren feste Intervalle, materialschonende Verfahren und dokumentierte Einsätze in der Saubermatik-App (Umfang je nach Objekt und Vereinbarung). Für Verwalter bedeutet das: weniger Reklamationen, belastbare Positionen in der Nebenkostenabrechnung und ein repräsentativer Standard, den Mieter sofort wahrnehmen.",
  ],
  deepDives: [
    {
      title: "Deep Dive 1: Verkehrssicherungspflicht & Trittsicherheit",
      paragraphs: [
        "Treppen, Podeste und Eingangsbereiche unterliegen der Verkehrssicherungspflicht des Eigentümers bzw. Verwalters. Nasse Stufen, Sand, Streusalzreste oder lose Verschmutzungen erhöhen Sturzrisiken – mit potenzieller Haftung bei Personenschäden. Saubermatik definiert deshalb pro Objekt klare Reinigungs- und Kontrollintervalle: Stufen, Handläufe, Schmutzfangmatten und Beleuchtungsnähe werden checklistenbasiert bearbeitet, nicht nach Gefühl.",
        "Trittsicherheit ist messbar: rutschhemmende Beläge werden materialspezifisch gepflegt, Feuchtigkeit zeitnah entfernt, Warnhinweise bei Glätteereignissen koordiniert mit unserem Winterdienst. Jeder Einsatz wird digital dokumentiert – für Sie ein Nachweis, dass Sorgfaltspflichten aktiv wahrgenommen werden, nicht erst im Schadensfall.",
        "Besonders in Mehrfamilienhäusern mit hoher Frequenz (Kinderwagen, Lieferverkehr, ältere Bewohner) ist die Kombination aus Unterhaltsreinigung und proaktiver Mängelmeldung entscheidend. Ausgefallene Leuchtmittel, lose Geländer oder rissige Stufen werden im Kontrollgang eskaliert – bevor der Mieter stolpert.",
      ],
    },
    {
      title: "Deep Dive 2: Repräsentativität & § 2 BetrKV",
      paragraphs: [
        "Repräsentativität beginnt im Treppenhaus: Eingang, Spiegel, Glas, Briefkastenzonen und Fahrstuhl-Vorhallen prägen den ersten Eindruck bei Vermietung, Verkauf und Mieterwechsel. Saubermatik plant Touren so, dass Störungen minimal bleiben – abgestimmte Zeitfenster, leise Geräte, klare Zuständigkeiten zwischen Reinigung, Hausmeister und Winterdienst.",
        "Für Hausverwaltungen ist die umlagefähige Abrechnung zentral: Betriebskosten nach § 2 BetrKV müssen objektbezogen, nachvollziehbar und verhältnismäßig sein. Unsere transparenten Rechnungen und digitalen Leistungsprotokolle liefern genau die Granularität, die Eigentümerversammlungen und Prüfer erwarten – keine Pauschale ohne Nachweis, sondern dokumentierte Intervalle pro Liegenschaft.",
        "Kombinieren Sie Treppenhausreinigung mit unserem Hausverwaltungs-Portfolio: ein Ansprechpartner, ein SLA, eine App. Das reduziert Schnittstellenchaos zwischen Grünpflege, Winterdienst und Objektbetreuung.",
      ],
    },
    {
      title: "Deep Dive 3: Digitale Touren & Mieterzufriedenheit",
      paragraphs: [
        "Mieterbeschwerden entstehen selten wegen „zu wenig Politik“ – sie entstehen wegen Unzuverlässigkeit und fehlender Transparenz. Die Saubermatik-Plattform macht Touren sichtbar: Wann wurde welches Treppenhaus gereinigt? Gab es Sonderereignisse (Umzug, Bau, Wasserschaden)? Der Key Account kann Abweichungen in Echtzeit adressieren.",
        "Feste Ansprechpersonen und dokumentierte Touren sichern Wiedererkennung und Qualität. Verwalter sparen Koordinationszeit; Mieter erleben Konstanz. Bei Urlaub oder Ausfall übernimmt ein bewährtes Vertretungsteam – sonst die Geschäftsführung persönlich.",
        "Ob WEG, Mietshaus oder Gewerbeobjekt: Treppenhausreinigung wird zum planbaren Qualitätsmerkmal statt zum Reklamationsmagneten.",
      ],
    },
  ],
  highlight: {
    title: "Treppenhaus – Ihr Vorteil",
    bullets: [
      "Verkehrssicherungspflicht & Trittsicherheit checklistenbasiert",
      "§ 2 BetrKV: transparente, umlagefähige Leistungsnachweise",
      "Repräsentative Eingangsbereiche, feste Intervalle",
      "Dokumentierte Touren; Vertretung bei Urlaub oder Ausfall",
    ],
  },
  secondaryCta: {
    href: "/zielgruppen/hausverwaltungen",
    label: "Für Hausverwaltungen",
  },
  funnelTitle: "Treppenhausreinigung anfragen",
  funnelSubtitle:
    "WE-Struktur, Intervalle, Sonderflächen – wir erstellen ein SLA-fähiges Angebot.",
};

const winterdienst: LeistungDeepContent = {
  slug: "winterdienst",
  breadcrumbLabel: "Winterdienst",
  metaTitle: "Winterdienst & Räum- und Streupflicht",
  metaDescription:
    "Professioneller Winterdienst: Räum- und Streupflicht, Verkehrssicherungspflicht, Wetterführung, dokumentierte Einsätze – haftungssicher für WEG und Gewerbe.",
  heroTitle:
    "Haftungssicher durch den Winter. Professioneller Winterdienst mit Wetterführung und Echtzeit-Nachweis.",
  heroSubtitle:
    "Räum- und Streupflicht erfüllen, Verkehrssicherungspflicht dokumentieren – für Hausverwaltungen, Gewerbe und öffentliche Zugänge in der Zollernalb.",
  introParagraphs: [
    "Der Winterdienst ist keine Saisonalität nebenbei – er ist Haftungsmanagement. Jede Glätteperiode kann zu Personenschäden, Versicherungsfällen und Eigentümerstreit führen, wenn Räumen und Streuen nicht nachweisbar erfolgen. Saubermatik betreibt Winterdienst als wettergeführtes System mit Einsatzplänen, Meldewegen und dokumentierten Einsätzen (Umfang je nach Objekt und Vereinbarung).",
    "Für Verwalter und Facility Manager bedeutet das: Sie erfüllen Ihre Sorgfaltspflicht gegenüber Mietern, Besuchern und Versicherern – ohne nächtliche Koordinationsmarathons. Kombinierbar mit Treppenhausreinigung, Grünpflege und Hausmeisterservice aus einem Portfolio.",
  ],
  deepDives: [
    {
      title: "Deep Dive 1: Räum- und Streupflicht & Verkehrssicherungspflicht",
      paragraphs: [
        "Eigentümer und Verwalter tragen die Verkehrssicherungspflicht für Gehwege, Zufahrten, Parkflächen und Objektzugänge. Saubermatik definiert pro Liegenschaft Räum- und Streupflicht-Zonen, Prioritäten (Haupteingang, Feuerwehrzufahrt, Müllstellplätze) und Reaktionszeiten ab Wetterauslösung – schriftlich im Winterdienstplan, nicht mündlich „irgendwann“.",
        "Streumittel werden materialschonend und umweltbewusst eingesetzt; Mengen und Touren werden protokolliert. Bei Glätteereignissen außerhalb der Standardfenster greifen Eskalationsstufen: Nachfahrt, Zusatzstreue, Information an den Verwalter – alles mit Zeitstempel in der App.",
        "Das schützt vor dem klassischen Haftungsfall: „Niemand war da.“ Dokumentierte Einsätze und Checklisten sind Ihr Beweis gegenüber Versicherung und Gericht – nicht Marketing, sondern Risikoreduktion.",
      ],
    },
    {
      title: "Deep Dive 2: Wetterführung & Einsatzlogistik",
      paragraphs: [
        "Winterdienst ohne Wetterführung ist Glücksspiel. Saubermatik nutzt Wetterdienst-Trigger, Objekt-Prioritäten und vertraglich vereinbarte Reaktionszeiten in der Saison. Touren werden angepasst – ohne dass der Verwalter jede Nacht selbst koordinieren muss. Keine Rund-um-die-Uhr-Bereitschaft.",
        "BG-BAU-orientierte Arbeitssicherheit gilt auch im Winter: Beleuchtung, PSA, Schulung im Umgang mit Streugut und Räumgerät. Mitarbeiter sind unterwiesen, nicht improvisiert. Für Gewerbeobjekte mit Produktionsstart früh morgens sind definierte Fertigstellungszeiten vertraglich fixiert.",
        "Die Kombination mit Laubentsorgung im Herbst (Grünpflege) vermeidet Konflikte: Kein Laub auf Streuflächen, keine doppelten Einsätze ohne Plan.",
      ],
    },
    {
      title: "Deep Dive 3: Abrechnung, § 2 BetrKV & Mieterkommunikation",
      paragraphs: [
        "Winterdienstkosten sind umlagefähig, wenn sie objektbezogen, verursachungsgerecht und nachvollziehbar ausgewiesen werden. Unsere Rechnungen und digitalen Protokolle liefern die nötige Transparenz für Nebenkostenabrechnungen nach § 2 BetrKV – inklusive Einsatzhäufigkeit und Sonderfahrten bei Extremwetter.",
        "Mieterkommunikation profitiert von Verlässlichkeit: Wenn Eingänge morgens frei sind, sinkt die Beschwerdequote – unabhängig von Schneemenge. Verwalter gewinnen Zeit, weil Reklamationen mit Protokoll beantwortet werden können, statt mit Vermutungen.",
        "Integrieren Sie Winterdienst in unser Hausverwaltungs-Silo für ein durchgängiges Liegenschaftsbild – ein Key Account, ein SLA, eine App.",
      ],
    },
  ],
  highlight: {
    title: "Winterdienst – Ihr Vorteil",
    bullets: [
      "Räum- und Streupflicht dokumentiert (Umfang je nach Objekt und Vereinbarung)",
      "Wettergeführt mit Eskalationsstufen & festen Reaktionszeiten",
      "§ 2 BetrKV-transparente Abrechnung für Verwaltungen",
      "BG-BAU-orientierte Arbeitssicherheit im Einsatz",
    ],
  },
  secondaryCta: {
    href: "/zielgruppen/hausverwaltungen",
    label: "Für Hausverwaltungen",
  },
  funnelTitle: "Winterdienst anfragen",
  funnelSubtitle:
    "Flächen, Prioritäten, Streugut – wir erstellen Ihren haftungssicheren Winterdienstplan.",
};

const grundreinigung: LeistungDeepContent = {
  slug: "grundreinigung",
  breadcrumbLabel: "Grund- & Baureinigung",
  metaTitle: "Grundreinigung & Bauendreinigung",
  metaDescription:
    "Grundreinigung und Bauendreinigung: VOB/C, Bauabnahme, DIN 18365, Polymerbeschichtung, Zementschleierentfernung – besenreine Übergabe in der Zollernalb.",
  heroTitle:
    "Werterhalt durch Tiefe. Grundreinigung, Bauendreinigung und Sonderreinigung für Gewerbe und Neubau.",
  heroSubtitle:
    "VOB/C-konforme Bauübergaben, materialspecifische Tiefenreinigung und Polymerpflege nach DIN 18365 – termingerecht für Architekten und Bauherren.",
  introParagraphs: [
    "Grundreinigung ist der Reset-Knopf für Oberflächen – nach Bau, Sanierung oder vor Vertragsübergabe. Fehlende Bauendreinigung verzögert Abnahmen, erzeugt Gewährleistungsstreit und beschädigt neue Beläge durch unsachgemäße Entfernung von Zementschleier, Baustaub und Schutzfolien. Saubermatik liefert Grund- und Baureinigung als meilensteinbasiertes Projekt, nicht als „Schnellwisch“.",
    "Wir arbeiten materialspezifisch auf Linoleum, PVC, Stein, Fliesen und Industrieböden – inklusive Polymerbeschichtung, Einpflegen und Entfernung hartnäckiger Pflegefilme. Für Praxen und Hygienezonen gelten erweiterte Desinfektionsstandards; für Bauprojekte die logistische Disziplin der VOB/C.",
  ],
  deepDives: [
    {
      title: "Deep Dive 1: Bauendreinigung & VOB/C (Bauabnahme)",
      paragraphs: [
        "Die Bauendreinigung ist die Brücke zwischen Handwerk und Nutzung. Nach VOB/C und üblicher Vertragspraxis schulden Gewerke eine besenreine Übergabe – in der Praxis reicht das selten für Nutzer. Saubermatik übernimmt Baugrob- und Baufeinreinigung: Entfernung von Handwerkerschmutz, Staub, Farb- und Spachtelresten, Etiketten und Schutzfolien – materialschonend und abnahmefertig.",
        "Baufeinreinigung und Bauabnahme sind terminkritisch: Architekten und Bauherren brauchen fixe Meilensteine vor Einzug, Möblierung oder Praxiseröffnung. Wir koordinieren mit Projektleitung, definieren Leistungsgrenzen (BG BAU Arbeitssicherheit auf Baustellen, PSA, Zuwegung) und dokumentieren den Übergabestatus.",
        "Zementschleierentfernung auf Fliesen, Bautrocknung-Nachläufe und Feinstaub in Lüftungszonen sind typische Pain Points – wir adressieren sie mit klaren LV-Positionen, nicht pauschal „alles sauber“.",
      ],
    },
    {
      title: "Deep Dive 2: Werterhalt & DIN 18365 (Bodenbeläge)",
      paragraphs: [
        "Unterhalt hält den Zustand – Grundreinigung stellt ihn wieder her. Nach DIN 18365 (Bodenbelagsarbeiten in Verbindung mit Bauleistungen) und herstellerspezifischen Vorgaben entfernen wir eingebetteten Schmutz, alte Pflegemittelreste und Verschmutzungen, die Unterhaltsintervalle nicht mehr abtragen.",
        "Bei Linoleum und PVC setzen wir alkalische Grundreiniger kontrolliert ein, entfernen Pflegefilme und bereiten Einpflegen vor. Polymerdispersion und Polymerbeschichtung schützen den Belag langfristig – Werterhalt statt vorzeitigem Austausch. Für Teppich- und Polsterflächen planen wir intensive Sonderreinigung quartalsweise oder ereignisgetrieben.",
        "Der ROI für Eigentümer ist klar: verlängerte Nutzungsdauer, bessere Optik bei Vermietung, weniger Sonderkosten durch falsche Chemie.",
      ],
    },
    {
      title: "Deep Dive 3: Praxis & Hygienezonen (RKI, VAH, Dokumentation)",
      paragraphs: [
        "Grundreinigung in Praxen und Klinikzonen erfordert mehr als Bodenwisch: Desinfektionsmittel nach anerkannten Standards, Abstimmung mit Ihrem Hygieneplan und strikte Vermeidung von Kreuzkontamination zwischen Wartezimmer, Behandlung und Sanitär. Saubermatik trennt Zonen farblich (4-Farb-System), desinfiziert nach Plan und dokumentiert jeden Schritt – Umfang nach Vereinbarung.",
        "Hygieneschleusen, Behandlungsräume und Aufbereitungszonen werden nach validierten Kontaktzeiten behandelt – nosokomiale Infektionsrisiken senken sich durch Prozess, nicht durch Slogans. Absolute Diskretion und DSGVO-bewusste Abläufe sind für Kanzleien und Arztpraxen selbstverständlich.",
        "Kombinieren Sie Grundreinigung mit Unterhaltsreinigung für einen durchgängigen Hygienestandard – ein Partner, ein digitales LV, Echtzeit-QM.",
      ],
    },
  ],
  highlight: {
    title: "Grundreinigung – Ihr Vorteil",
    bullets: [
      "Baufeinreinigung & Bauabnahme VOB/C-orientiert",
      "Zementschleierentfernung, Bautrocknung-Nachläufe",
      "Polymerdispersion, Einpflegen, DIN 18365-Bodenbeläge",
      "Desinfektion nach Hygieneplan & anerkannten Standards für Praxen",
    ],
  },
  secondaryCta: {
    href: "/leistungen/unterhaltsreinigung",
    label: "Unterhaltsreinigung",
  },
  funnelTitle: "Grund- & Baureinigung anfragen",
  funnelSubtitle:
    "Projektphase, Flächen, Abnahmetermin – wir liefern ein terminsicheres LV.",
};

const fassadenreinigung: LeistungDeepContent = {
  slug: "fassadenreinigung",
  breadcrumbLabel: "Fassadenreinigung",
  metaTitle: "Fassadenreinigung Gewerbe & Industrie",
  metaDescription:
    "Fassadenreinigung materialschonend: Naturstein, Metall, Glas, Algen/Moos, TRBS 2121, Werterhalt – Saubermatik Zollernalb.",
  heroTitle:
    "Substanz schützen, Image stärken. Professionelle Fassadenreinigung für Gewerbe, Industrie und Wohnanlagen.",
  heroSubtitle:
    "Materialgerechte Verfahren, Arbeitssicherheit in der Höhe und dokumentierte Einsätze – für Werterhalt und repräsentative Außenwirkung.",
  introParagraphs: [
    "Fassaden sind Witterungsschild und Markenfläche zugleich. Algen, Moos, Industrieablagerungen und Biokorrosion mindern nicht nur die Optik – sie beschleunigen Materialschäden und treiben Instandhaltungskosten. Saubermatik reinigt Fassaden materialspezifisch: von Naturstein über Klinker und Metall bis zu großflächiger Glasarchitektur.",
    "Jeder Einsatz wird unter Berücksichtigung von TRBS 2121, BG-BAU-Vorgaben und Zuwegungsplanung durchgeführt – Hubsteiger, Seiltechnik oder Reinwasser-Osmose je nach Objekt. Digital protokolliert für Facility und Eigentümer.",
  ],
  deepDives: [
    {
      title: "Deep Dive 1: Materialgerechte Verfahren & Werterhalt",
      paragraphs: [
        "Nicht jede Fassade verträgt Hochdruck. Saubermatik wählt Verfahren nach Befund: schonende Biozid-Reduktion bei Algen, pH-neutrale Mittel bei Naturstein, impregnierende Nachbehandlung wo sinnvoll. Ziel ist Werterhalt – nicht der schnelle Glanz, der Substanz schädigt.",
        "Industrie- und Gewerbeobjekte in der Region (Metall, Logistik, Produktion) kämpfen mit Ruß und Feinstaub; Wohnanlagen mit Moos und Pollenfilmen. Wir definieren Intervalle und Methoden im Objekt-Audit, abgestimmt auf Denkmalschutz, Farbbeständigkeit und Mieterlogistik.",
        "Die Kombination mit Fenster- und Glasreinigung (Reinwasser-Osmose, Carbon-Teleskopstangen) vermeidet doppelte Gerätekosten und Schnittstellen.",
      ],
    },
    {
      title: "Deep Dive 2: Arbeitssicherheit (TRBS 2121) & Logistik",
      paragraphs: [
        "Fassadenreinigung in der Höhe unterliegt TRBS 2121 und BG-BAU-Regeln. Saubermatik führt Gefährdungsbeurteilungen durch, setzt geprüfte PSA und Hubsteiger-Logistik ein und sichert öffentliche Gehwege bei Bedarf ab. Für Ausschreibungen liefern wir Nachweise – Versicherung, Unterweisung, Geräteprüfung.",
        "Zuwegung, Halteverbote und Anliegerinformation werden vorab mit Verwaltung oder Facility abgestimmt – besonders in Innenstädten und WEG-Ensembles. So bleibt der Betrieb störungsarm und haftungsarm.",
        "Dokumentierte Einsätze geben Eigentümern Transparenz über Zustand vor/nach – wertvoll bei Sanierungsplanung und Versicherungsfällen (Umfang je nach Objekt und Vereinbarung).",
      ],
    },
    {
      title: "Deep Dive 3: Intervalle, Kosten & Image",
      paragraphs: [
        "Fassadenreinigung ist selten täglich – aber strategisch. Ein sauberer Firmensitz oder Einzelhandelsstandort signalisiert Professionalität. Saubermatik empfiehlt Intervalle nach Lage (Verkehr, Grün, Industrie), Fassadentyp und Budget – von jährlicher Pflege bis zu mehrjährigen Zyklen mit Zwischenkontrolle.",
        "Kosten lassen sich planen, wenn Verfahren und Fläche klar definiert sind. Unser digitales LV und SLA-Ansatz verhindert Überraschungen bei Sonderverschmutzungen – Eskalation nur nach Freigabe.",
        "Verknüpfen Sie Fassade mit Grünpflege und Winterdienst für ein ganzheitliches Außenbild der Liegenschaft.",
      ],
    },
  ],
  highlight: {
    title: "Fassade – Ihr Vorteil",
    bullets: [
      "Materialgerecht: Naturstein, Metall, Glas, Klinker",
      "TRBS 2121 & BG-BAU-konforme Höhenarbeit",
      "Algen/Moos-Reduktion, Werterhalt statt Substanzschaden",
      "Digitale Protokolle & Kombination mit Glasreinigung",
    ],
  },
  secondaryCta: {
    href: "/leistungen/fenster-glasreinigung",
    label: "Glasreinigung",
  },
  funnelTitle: "Fassadenreinigung anfragen",
  funnelSubtitle:
    "Fassadentyp, Höhe, Zugang – wir erstellen ein sicheres, terminiertes Angebot.",
};

const entruempelung: LeistungDeepContent = {
  slug: "entruempelung",
  breadcrumbLabel: "Entrümpelung",
  metaTitle: "Entrümpelung & Haushaltsauflösung",
  metaDescription:
    "Entrümpelung und Haushaltsauflösung: besenreine Übergabe, fachgerechte Entsorgung, Endreinigung – für Erben, Verwalter und Gewerbe in der Zollernalb.",
  heroTitle:
    "Besenreine Übergabe, stressfreier Abschluss. Entrümpelung & Haushaltsauflösung mit Endreinigung.",
  heroSubtitle:
    "Sortierung, fachgerechte Entsorgung und dokumentierte Übergabe – für Nachlass, Mieterwechsel und Gewerberäumung.",
  introParagraphs: [
    "Entrümpelung ist oft emotional und rechtlich heikel – Nachlass, Haushaltsauflösung, Mieterwechsel oder Gewerberäumung erfordern Diskretion, Tempo und rechtssichere Entsorgung. Saubermatik koordiniert Sortierung, Abtransport, Wertstofftrennung und Endreinigung aus einer Hand – damit Verwalter, Erben und Facility-Teams einen belastbaren Abschluss haben.",
    "Das Ziel ist immer besenreine Übergabe: Räume, die an den nächsten Nutzer, Käufer oder Vermieter übergeben werden können – ohne Nacharbeit, ohne offene Entsorgungsfragen.",
  ],
  deepDives: [
    {
      title: "Deep Dive 1: Haushaltsauflösung & Nachlass (Diskretion)",
      paragraphs: [
        "Haushaltsauflösungen verlangen Sensibilität: Erbengemeinschaften, Betreuer, Verwalter – alle erwarten zuverlässige Abläufe ohne Datenlecks oder wertlose Zerstörung brauchbarer Gegenstände. Saubermatik arbeitet nach abgestimmtem Sortierplan (Behalten, Spenden, Entsorgen, Verwertung) und dokumentiert den Fortschritt.",
        "Wertgegenstände und Dokumente werden separiert; Entsorgung erfolgt nach KrWG und lokalen Vorgaben. Diskretion und termingerechte Räumung reduzieren Leerstandskosten und vereinfachen Verkauf oder Neuvermietung.",
        "Für Hausverwaltungen ist die besenreine Übergabe nach Mieterauszug der Standard – kombinierbar mit Grundreinigung und kleinen Instandsetzungen über Hausmeisterservice.",
      ],
    },
    {
      title: "Deep Dive 2: Gewerbe & Objekträumung (VOB-orientiert)",
      paragraphs: [
        "Gewerberäumungen unterliegen oft strikten Übergabeterminen – Mietvertrag, Kündigung, Projektabschluss. Saubermatik plant Kapazität, Container, Zufahrt und Arbeitsfenster so, dass der Betriebsablauf des Auftraggebers nicht kollabiert.",
        "BG-BAU-relevante Aspekte (Schwerlast, Staub, Sonderabfälle) werden vorab geklärt. Besenreine Übergabe an Architekten oder Vermieter entspricht der erwarteten Baugrob-/Übergabequalität – ohne Restmüll, ohne Verwahrungsfristen.",
        "Kombination mit Bauendreinigung bei Umbauten spart zweite Anbieter und Schnittstellenrisiken.",
      ],
    },
    {
      title: "Deep Dive 3: Endreinigung & Dokumentation",
      paragraphs: [
        "Entrümpelung ohne Endreinigung ist halbe Arbeit. Staub, Klebereste, Bodenbelagsrückstände und Geruchsbelastungen verhindern Übergabe. Saubermatik schließt mit materialspezifischer Reinigung ab – von Grundreinigung bis Unterhaltsstart.",
        "Digitale Übergabeprotokolle (Fotos, Flächenliste, Entsorgungsnachweise) geben Verwaltern und Erben Sicherheit gegenüber Behörden und Käufern. Bei Bedarf koordinieren wir Schlüsselrückgabe und Zutritt mit Hausverwaltung.",
        "Ein Ansprechpartner, ein Termin, ein sauberer Abschluss – das ist der Saubermatik-Standard.",
      ],
    },
  ],
  highlight: {
    title: "Entrümpelung – Ihr Vorteil",
    bullets: [
      "Besenreine Übergabe mit Endreinigung",
      "Fachgerechte Entsorgung & Sortierung nach Plan",
      "Diskretion bei Haushaltsauflösung & Nachlass",
      "Kombinierbar mit Grundreinigung & Hausmeisterservice",
    ],
  },
  funnelTitle: "Entrümpelung anfragen",
  funnelSubtitle:
    "Objektgröße, Termin, Besonderheiten – wir erstellen ein unverbindliches Angebot.",
};

const sonstiges: LeistungDeepContent = {
  slug: "sonstiges",
  breadcrumbLabel: "Spezialanfrage",
  metaTitle: "Spezialreinigung & Sonderprojekte",
  metaDescription:
    "Individuelle Reinigungsprojekte: Teppichreinigung, Praxis-Sonderdesinfektion, Events, Ausschreibungen – Saubermatik strukturiert Ihr Briefing in ein SLA-fähiges LV.",
  heroTitle:
    "Kein Standardfall? Kein Problem. Spezialreinigung & Sonderprojekte mit klarem Leistungsverzeichnis.",
  heroSubtitle:
    "Teppich- und Polsterreinigung, Praxis-Sonderdesinfektion, Event-Reinigung oder Ausschreibungen – wir übersetzen Ihr Briefing in messbare Prozesse.",
  introParagraphs: [
    "Nicht jedes Objekt passt in eine Schublade. Teppichreinigung in Konferenzräumen, Praxis-Sonderdesinfektion nach Kontamination, Messe- oder Event-Reinigung, Industrie-Sonderflächen oder öffentliche Ausschreibungen – Saubermatik nimmt Sonderanfragen ernst und strukturiert sie in digitale Leistungsverzeichnisse mit SLA und Echtzeit-QM.",
    "Nutzen Sie diesen Einstieg, wenn Ihr Projekt mehrere Gewerke berührt oder normative Anforderungen explizit vertraglich fixiert werden müssen.",
  ],
  deepDives: [
    {
      title: "Deep Dive 1: Teppich- & Polsterreinigung (Werterhalt)",
      paragraphs: [
        "Teppichböden binden Feinstaub, Allergene und Flecken – Unterhaltsreinigung reicht periodisch nicht aus. Saubermatik plant intensive Polster- und Teppichreinigung (Sprühextraktion, Trockenzeit-Management) quartalsweise oder ereignisgetrieben, abgestimmt auf Nutzung (Konferenz, Hotel, Praxis-Wartezimmer).",
        "Werterhalt und Raumluftqualität steigen messbar; Austauschkosten sinken. Einpflegen nach Reinigung schützt Fasern. Flächenleistung wird so geplant, dass Betriebsablauf des Kunden null gestört wird – abends, am Wochenende oder in Schichtfenstern.",
        "Kombination mit Grundreinigung und Unterhalt aus einem Portfolio vermeidet Chemie-Konflikte und doppelte Anfahrt.",
      ],
    },
    {
      title: "Deep Dive 2: Praxis-Sonderdesinfektion & Hygiene (RKI, VAH)",
      paragraphs: [
        "Sonderfälle in Praxen und Klinikzonen erfordern Desinfektion nach Ihrem Hygieneplan, Mittel nach anerkannten Standards und strikte Trennung der Hygieneschleuse von Standardzonen. Kreuzkontamination wird durch 4-Farb-System und dokumentierte Kontaktzeiten vermieden.",
        "Nach Infektionsfällen oder Audit-Vorbereitung liefern wir Sonder-LVs mit Desinfektionsplan, Freigabemessung und Protokollkette für Behörden und Qualitätsmanagement. Absolute Diskretion und minimale Betriebsunterbrechung sind vertraglich fixierbar.",
        "Verlinkung zu unserem Lexikon: HACCP, DIN 13063, Farbcode-System – Topical Authority für Ihre interne Freigabe.",
      ],
    },
    {
      title: "Deep Dive 3: Events, Industrie & Ausschreibungen (SLA)",
      paragraphs: [
        "Messen, Stadtfeste, Produktionswechsel oder Logistik-Hochphasen brauchen temporäre Reinigungsvereinbarungen mit klaren Reaktionszeiten. Saubermatik steuert Einsätze über die Plattform – Umfang nach Vereinbarung, ohne Skalierungsversprechen über große Flächen.",
        "Bei öffentlichen oder konzernweiten Ausschreibungen liefern wir strukturierte LV-Texte und Nachweise zu Arbeitssicherheit. Sonderprojekte werden nicht „geschätzt“, sondern in Schritte (Begehung → LV → Start) überführt.",
        "Ihr Briefing ist der Start – unser Output ist ein messbares, digitales Leistungsverzeichnis.",
      ],
    },
  ],
  highlight: {
    title: "Spezialanfrage – Ihr Vorteil",
    bullets: [
      "Teppich- & Polsterreinigung mit Werterhalt-Fokus",
      "Desinfektion nach Hygieneplan & anerkannten Standards",
      "Event-/Industrie-Einsätze mit vereinbarten Reaktionszeiten",
      "Ausschreibungsfähige LV-Texte & digitales QM",
    ],
  },
  funnelTitle: "Spezialanfrage stellen",
  funnelSubtitle:
    "Beschreiben Sie Ihr Projekt – wir ordnen es ein und liefern ein verbindliches LV.",
};

export const LEISTUNG_DEEP_CONTENT: Partial<
  Record<LeistungSlug, LeistungDeepContent>
> = {
  treppenhausreinigung,
  winterdienst,
  grundreinigung,
  fassadenreinigung,
  entruempelung,
  sonstiges,
};

export const DEEP_CONTENT_SLUGS = Object.keys(
  LEISTUNG_DEEP_CONTENT,
) as LeistungSlug[];

export function getLeistungDeepContent(
  slug: LeistungSlug,
): LeistungDeepContent | undefined {
  return LEISTUNG_DEEP_CONTENT[slug];
}

/** Alle Slugs mit dedizierter Deep-Content-Route (inkl. manuell gepflegter Seiten). */
export const ALL_DEDICATED_LEISTUNG_SLUGS: readonly LeistungSlug[] = [
  "unterhaltsreinigung",
  "fenster-glasreinigung",
  "raffstore-lamellenreinigung",
  "treppenhausreinigung",
  "hausmeisterservice",
  "gruenanlagenpflege",
  "winterdienst",
  "grundreinigung",
  "fassadenreinigung",
  "entruempelung",
  "sonstiges",
];
