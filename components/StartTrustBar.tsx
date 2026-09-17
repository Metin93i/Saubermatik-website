const POINTS = [
  {
    title: "Feste Ansprechpartner",
    text: "Ein Team, das Ihre Objekte kennt – persönlich erreichbar.",
  },
  {
    title: "Digitales Kundenportal",
    text: "Alle Objekte, Einsätze und Nachweise im Überblick.",
  },
  {
    title: "Dokumentierte Qualität",
    text: "Einsätze digital protokolliert und nachvollziehbar – Umfang je Objekt.",
  },
] as const;

export function StartTrustBar() {
  return (
    <section
      className="relative z-10 mx-auto w-full max-w-[100rem] -translate-y-14 px-4 sm:px-8 lg:px-16"
      aria-label="Vertrauensfakten"
    >
      <div className="rounded-[18px] border border-[#e1e4e9] bg-white px-5 py-6 shadow-[0_18px_40px_rgba(19,24,29,0.08)] sm:px-8 sm:py-7">
        <ul className="grid gap-6 sm:grid-cols-3">
          {POINTS.map((point) => (
            <li key={point.title} className="flex items-start gap-3">
              <span
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-[3px] bg-brand-orange"
                aria-hidden
              />
              <div>
                <p className="font-display text-base font-bold text-foreground">
                  {point.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-[#e1e4e9] pt-4 text-xs leading-5 text-muted sm:text-sm">
          Höhenarbeit geschult nach DGUV 112-198/199 · Fester Ansprechpartner
          Mo–Sa 08:00–22:00 erreichbar
        </p>
      </div>
    </section>
  );
}
