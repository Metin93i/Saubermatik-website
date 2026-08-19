/**
 * Zentrales Facility- & Reinigungsportfolio (Slugs, Marketingtexte, Funnel-UI).
 * Alle Slugs müssen mit `LeadServiceType` / API-`serviceType` übereinstimmen.
 *
 * `includeInMatrix: false` → keine `/standorte/[city]/[service]`-Routen (E3-Kuration).
 */
export const SERVICES = [
  {
    slug: "unterhaltsreinigung",
    title: "Unterhalts- & Büroreinigung",
    funnelLabel: "Unterhalt & Büro",
    emoji: "🏢",
    summary:
      "Intervallbasierte Sauberkeit für Büros, Praxen und Gewerbeflächen – mit digitaler Objektsteuerung und festen Ansprechpartnern.",
    body: [
      "Staubwischen, Sanitär, Bodenpflege und Verbrauchsmaterial nach Plan: Sie behalten die Kontrolle über Qualität und Budget.",
      "Ideal, wenn Sie keine Überraschungen wollen – sondern einen Partner, der mitdenkt.",
    ],
  },
  {
    slug: "fenster-glasreinigung",
    title: "Fenster- & Glasreinigung",
    funnelLabel: "Fenster & Glas",
    emoji: "🪟",
    summary:
      "Streifenfreie Scheiben innen und außen – sicher, materialschonend und termintreu.",
    body: [
      "Von Schaufenster bis Wintergarten: Wir arbeiten mit professioneller Logistik und klaren Zugangszeiten.",
      "Repräsentative Glasflächen sind Ihr Aushängeschild – wir halten sie dauerhaft wettbewerbsfähig.",
    ],
  },
  {
    slug: "raffstore-lamellenreinigung",
    title: "Raffstore- & Lamellenreinigung",
    funnelLabel: "Raffstore & Lamellen",
    emoji: "☀️",
    summary:
      "Schonende Reinigung von Außenraffstoren im Reinwasser-Verfahren – für Gewerbe und Privat.",
    body: [
      "Wir reinigen Außenraffstoren schonend im Reinwasser-Verfahren – ohne Chemie und ohne Risiko für die Mechanik.",
      "Für Firmen und Privathaushalte, von Meßstetten aus auf der Schwäbischen Alb und im Umkreis.",
    ],
    includeInMatrix: false,
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    funnelLabel: "Treppenhaus",
    emoji: "🪜",
    summary:
      "Repräsentative Eingangsbereiche und Treppenhäuser für WEG, Miethäuser und Gewerbeimmobilien.",
    body: [
      "Geländer, Bodenbeläge, Spiegel und Zugänge werden intervalbasiert gepflegt – ohne Störung der Mieterströme.",
      "Dokumentierte Touren und feste Ansprechpartner reduzieren Reklamationen und Verwaltungsaufwand.",
    ],
  },
  {
    slug: "hausmeisterservice",
    title: "Hausmeisterservice & Objektbetreuung",
    funnelLabel: "Hausmeister",
    emoji: "🔧",
    summary:
      "Kleine Reparaturen, Kontrollgänge, Schlüssel- und Lieferantenlogistik – alles aus einer Hand.",
    body: [
      "Wir entlasten Eigentümer und Facility-Teams bei den Aufgaben zwischen den großen Gewerken.",
      "Abgestimmte Eskalationswege: Wenn etwas auffällig wird, wissen Sie es frühzeitig – nicht erst beim Mieter.",
    ],
  },
  {
    slug: "gruenanlagenpflege",
    title: "Grünanlagenpflege",
    funnelLabel: "Grünanlagen",
    emoji: "🌿",
    summary:
      "Pflege von Außenanlagen, Zufahrten und Außenauftritten – sauber, ordentlich, wertstabil.",
    body: [
      "Rasen, Beete, Hecken und Wege: wir halten Ihr Objekt optisch auf Top-Niveau – abgestimmt auf die Jahreszeit.",
      "Koordination mit Winterdienst und Reinigung aus einem Portfolio vermeidet Schnittstellenchaos.",
    ],
  },
  {
    slug: "winterdienst",
    title: "Winterdienst",
    funnelLabel: "Winterdienst",
    emoji: "❄️",
    summary:
      "Räum- und Streupflicht professionell erfüllt – dokumentiert, wetterführend und haftungssicher vorbereitet.",
    body: [
      "Einsatzpläne, Meldewege und Nachweise: Sie erfüllen Ihre Sorgfaltspflicht gegenüber Nutzern und Versicherern.",
      "Kombinierbar mit Außenanlagen- und Gebäudeservice für eine durchgängige Objektstrategie.",
    ],
  },
  {
    slug: "grundreinigung",
    title: "Grund- & Baureinigung",
    funnelLabel: "Grund & Bau",
    emoji: "🧱",
    summary:
      "Tiefenreinigung, Übergabenach Bau oder Sanierung – termingetrieben und abnahmefertig.",
    body: [
      "Wir entfernen Baustaub, Schutzfolien und Verschmutzungen materialspezifisch – ohne Ihre Oberflächen zu riskieren.",
      "Klare Meilensteine und Abstimmung mit Ihrem Projektleiter halten den Zeitplan stabil.",
    ],
  },
  {
    slug: "fassadenreinigung",
    title: "Fassadenreinigung",
    funnelLabel: "Fassade",
    emoji: "🏗️",
    summary:
      "Wiederherstellung und Erhalt der Fassadenoptik – von Naturstein bis Metall und Glas.",
    body: [
      "Materialgerechte Verfahren und Arbeitssicherheit stehen im Vordergrund – inklusive Zuwegungsplanung.",
      "Saubere Fassaden schützen Substanz und Image – besonders bei Einzelhandel und Head Offices.",
    ],
  },
  {
    slug: "entruempelung",
    title: "Entrümpelung & Haushaltsauflösung",
    funnelLabel: "Entrümpelung",
    emoji: "📦",
    summary:
      "Besenreine Übergaben nach Haushaltsauflösung, Nachlass oder Gewerberäumung – terminiert, versichert und dokumentiert.",
    body: [
      "Wir koordinieren Sortierung, fachgerechte Entsorgung und Endreinigung – damit Sie oder Ihre Mandanten einen stressfreien Abschluss erleben.",
      "Kombinierbar mit Grundreinigung und Objektbetreuung aus einer Hand.",
    ],
  },
  {
    slug: "sonstiges",
    title: "Sonstiges / Spezialanfrage",
    funnelLabel: "Sonstiges",
    emoji: "✨",
    summary:
      "Individuelle Reinigungs- oder Serviceprojekte außerhalb der Standardkategorien – wir strukturieren Ihr Anliegen.",
    body: [
      "Events, Sonderflächen oder Ausschreibungen: wir übersetzen Ihr Briefing in ein klares Leistungsbild mit transparentem Angebot.",
      "Nutzen Sie diesen Einstieg, wenn Sie unsicher sind, welche Leistung passt – wir ordnen ein.",
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

/** Services mit Stadt×Leistung-Matrix (`includeInMatrix` nicht `false`). */
export type MatrixServiceSlug = Exclude<
  ServiceSlug,
  "raffstore-lamellenreinigung"
>;

export const MATRIX_SERVICES = SERVICES.filter(
  (s): s is (typeof SERVICES)[number] & { slug: MatrixServiceSlug } =>
    !("includeInMatrix" in s && s.includeInMatrix === false),
);

export const LEAD_SERVICE_TYPES = SERVICES.map(
  (s) => s.slug,
) as readonly ServiceSlug[];

export const FUNNEL_SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.slug,
  label: s.funnelLabel,
  emoji: s.emoji,
})) as readonly {
  value: ServiceSlug;
  label: string;
  emoji: string;
}[];
