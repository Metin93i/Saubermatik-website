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
        Nachhaltiges Facility Management &amp; ESG-Compliance
      </h2>
      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm sm:leading-6">
        Wir sichern Ihre Nachhaltigkeitsziele. Durch den gezielten Einsatz von
        chemiefreiem entmineralisiertem Reinwasser (Osmose-Verfahren) und
        VAH-gelisteten, biologisch abbaubaren Desinfektionsmitteln garantieren
        wir nicht nur Sauberkeit, sondern auch aktiven Umweltschutz. Unsere
        dokumentierten Prozesse liefern Ihnen die notwendigen Rohdaten für Ihre
        CSRD- und ESG-Nachweise. Volle Transparenz, rechtssicher kalkuliert.
      </p>
    </article>
  );
}
