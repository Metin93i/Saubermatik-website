import type { LeistungSlug } from "@/lib/routes/leistungen";

export type FaqPair = { question: string; answer: string };

/** PAA-orientierte FAQs pro Leistungssslug (FAQPage JSON-LD). */
export function getLeistungFaqItems(slug: LeistungSlug): readonly FaqPair[] {
  const commonClosing =
    "Wir koordinieren Einsätze digital und halten feste Ansprechpartner – von Meßstetten aus mit kurzer Anbindung an Ihre Region.";

  const bySlug: Partial<Record<LeistungSlug, readonly FaqPair[]>> = {
    "fenster-glasreinigung": [
      {
        question: "Wie oft sollten Gewerbescheiben professionell gereinigt werden?",
        answer:
          "Typisch sind Intervalle von 4 bis 12 Wochen, abhängig von Verkehr, Wetterlage und Imageanspruch. Wir empfehlen ein Objektprogramm mit dokumentierten Terminen – so bleiben Eingänge und Schaufenster dauerhaft repräsentativ.",
      },
      {
        question: "Was kostet eine Fenster- und Glasreinigung ungefähr?",
        answer:
          "Die Kosten hängen von Höhe, Zugänglichkeit, Glasfläche und Verschmutzungsgrad ab. Nach einer kurzen Besichtigung erhalten Sie ein unverbindliches Angebot.",
      },
      {
        question: "Sind Außenarbeiten und Fassadenhoch hängende Scheiben machbar?",
        answer:
          "Ja, mit abgestimmter Zuwegung, Arbeitssicherheit und geprüfter Technik. Wir planen Logistik und Zeitfenster so, dass Mitarbeiter- und Besucherströme nicht gestört werden.",
      },
    ],
    "raffstore-lamellenreinigung": [
      {
        question: "Wie oft sollte man Außenraffstoren reinigen lassen?",
        answer:
          "In der Praxis empfiehlt sich ein- bis zweimal pro Jahr. Anlagen an Straßen, auf der Wetterseite oder mit starkem Pollenflug brauchen eher zwei Termine.",
      },
      {
        question: "Was kostet die Raffstorereinigung?",
        answer:
          "Das hängt von der Anzahl der Behänge, der Größe und der Zugänglichkeit ab. Nach ein paar kurzen Angaben oder einer Besichtigung erhalten Sie ein unverbindliches Angebot.",
      },
      {
        question: "Was ist das Reinwasser-Verfahren?",
        answer:
          "Entmineralisiertes Wasser löst Schmutz zuverlässig und trocknet ohne Streifen und Kalkflecken ab. In Verbindung mit weichen Spezialbürsten werden die Lamellen gründlich und schonend sauber – ganz ohne Chemie.",
      },
      {
        question: "Können die Raffstoren bei der Reinigung beschädigt werden?",
        answer:
          "Das Verfahren ist materialschonend. Wir arbeiten ohne Hochdruck, reinigen Lamelle für Lamelle und prüfen die Anlage vor Beginn auf sichtbare Schäden.",
      },
      {
        question: "Kann ich meine Raffstoren selbst reinigen?",
        answer:
          "Kleine, gut erreichbare Anlagen ja – aber ohne Hochdruckreiniger und ohne scharfe Reiniger, die Lamellen verbiegen leicht. Bei Höhe oder vielen Behängen empfehlen wir den Fachbetrieb.",
      },
      {
        question: "Übernehmt ihr auch große Gewerbeobjekte?",
        answer:
          "Ja. Gerade Objekte mit vielen Behängen sind unser Alltag. Termine stimmen wir auf Ihren Betrieb ab, als Projektauftrag kommen wir auch überregional.",
      },
    ],
    unterhaltsreinigung: [
      {
        question: "Was umfasst eine professionelle Unterhaltsreinigung im Büro?",
        answer:
          "Grundlage sind intervalbasierte Arbeiten: Böden, Sanitäranlagen, Küchenzonen, Staub und Verbrauchsmaterial. Umfang und Rhythmus werden im Objektprogramm festgehalten – transparent für Facility und Geschäftsführung.",
      },
      {
        question: "Wie gehen Sie mit sensiblen Bereichen (z. B. Praxis, Kanzlei) um?",
        answer:
          "Wir arbeiten mit klaren Zonenregeln, Desinfektionsplänen wo nötig und geschulten Teams. Zugriffe und Schlüsselprozesse sind dokumentiert; Ausfälle werden über die Saubermatik-Plattform abgefangen.",
      },
    ],
    "treppenhausreinigung": [
      {
        question: "Wie oft sollte ein Treppenhaus in einer WEG gereinigt werden?",
        answer:
          "Üblich sind 1- bis 2-wöchige Intervalle, bei stark frequentierten Objekten auch wöchentlich. Wir stimmen das mit Verwaltung und Hausgeld ab und dokumentieren die Leistung pro Termin.",
      },
      {
        question: "Wer haftet bei Beschädigungen in der Gemeinschaftsfläche?",
        answer:
          "Wir arbeiten versichert und materialgerecht. Reklamationen laufen über feste Ansprechpartner und – wo sinnvoll – Fotodokumentation vor/nach der Reinigung.",
      },
    ],
    hausmeisterservice: [
      {
        question: "Was ist der Unterschied zwischen Hausmeister und Reinigung?",
        answer:
          "Der Hausmeisterservice ergänzt Reinigung um Kleinreparaturen, Kontrollgänge, Schlüssel- und Lieferantenlogik. Beides lässt sich in einem SLA bündeln – weniger Schnittstellen für die Verwaltung.",
      },
      {
        question: "Wie schnell reagieren Sie bei Störungen (z. B. defekte Tür)?",
        answer:
          "Über vereinbarte Meldewege und Eskalationsketten priorisieren wir Einsätze. Digitale Tickets reduzieren Informationsverlust zwischen Mieter, Verwaltung und Dienstleister.",
      },
    ],
    gruenanlagenpflege: [
      {
        question: "Ist Grünanlagenpflege mit Winterdienst kombinierbar?",
        answer:
          "Ja – viele Objekte bündeln Außenanlagen und Streupflicht. Wir koordinieren Jahreszeiten, Maschineneinsatz und Personal so, dass rechtliche und versicherungstechnische Anforderungen erfüllt bleiben.",
      },
    ],
    winterdienst: [
      {
        question: "Welche Dokumentation braucht der Winterdienst für Haftungsfragen?",
        answer:
          "Einsatzzeiten, Streumittel, Wegezustände und Wetterereignisse sollten nachvollziehbar sein. Wir liefern Touren- und Einsatznachweise im vereinbarten Format – digital oder exportierbar.",
      },
    ],
    grundreinigung: [
      {
        question: "Wann ist eine Grund- oder Baureinigung sinnvoll?",
        answer:
          "Nach Bau oder Sanierung, vor Übergaben oder bei Wechsel des Nutzers. Ziel ist besenreine bis abnahmefertige Zustände – abgestimmt auf Oberflächen und den Zeitplan der Gewerke.",
      },
    ],
    fassadenreinigung: [
      {
        question: "Welche Verfahren nutzen Sie für sensible Fassaden?",
        answer:
          "Materialgerecht von Niederdruck über Gel-Pflege bis zu Teil-Nassverfahren – immer unter Berücksichtigung von Arbeitssicherheit, Gewässerschutz und Denkmalschutzvorgaben, falls relevant.",
      },
    ],
    entruempelung: [
      {
        question: "Was passiert mit dem Sperrmüll bei einer Haushaltsauflösung?",
        answer:
          "Wir trennen Wertstoffe, Sperrmüll und Reststoffe fachgerecht und koordinieren Container oder Termine mit Entsorgern. So bleiben Objekte besenrein für Übergabe oder Weitervermietung.",
      },
    ],
    sonstiges: [
      {
        question: "Ich weiß nicht, welche Leistung passt – wie starte ich?",
        answer:
          "Wählen Sie „Sonstiges“ im Kurzformular und beschreiben Sie kurz Objekttyp und Ziel. Wir ordnen das Anliegen in ein klares Leistungsbild mit Zeit- und Kostenrahmen ein.",
      },
    ],
  };

  const specific = bySlug[slug];
  if (specific && specific.length > 0) {
    // Wortgetreue FAQs (E2 Raffstore): ohne angehängten commonClosing.
    if (slug === "raffstore-lamellenreinigung") {
      return specific;
    }
    return specific.map((p) => ({
      ...p,
      answer: `${p.answer} ${commonClosing}`,
    }));
  }

  return [
    {
      question: `Was beinhaltet ${slug.replace(/-/g, " ")} konkret bei Saubermatik?`,
      answer: `Umfang und Rhythmus stimmen wir individuell ab – inklusive digitaler Objektdokumentation. ${commonClosing}`,
    },
  ];
}
