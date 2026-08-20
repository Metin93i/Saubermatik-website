type Props = {
  className?: string;
};

export function EsgComplianceStatement({ className = "" }: Props) {
  return (
    <article
      className={`rounded-sm border border-zinc-300 bg-white p-3 sm:p-4 ${className}`}
      aria-labelledby="esg-compliance-heading"
    >
      <h2
        id="esg-compliance-heading"
        className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:text-xs"
      >
        Verfahren &amp; Mittel
      </h2>
      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm sm:leading-6">
        Wir arbeiten mit einem 4-Farb-Tuchsystem und setzen
        Reinigungs- und Desinfektionsmittel nach anerkannten Standards ein –
        abgestimmt auf Ihr Objekt, ohne Prüfzeichen als Werbeaussage. Wo es passt,
        nutzen wir chemiefreies entmineralisiertes Reinwasser. Den Umfang der
        Dokumentation vereinbaren wir mit Ihnen.
      </p>
    </article>
  );
}
