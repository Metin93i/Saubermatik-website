const CHIPS = [
  {
    dot: "bg-orange",
    text: "Höhenarbeit geschult nach DGUV 112-198/199",
  },
  {
    dot: "bg-secureops",
    text: "Eigene Plattform: dokumentierte Einsätze im Kundenportal",
  },
  {
    dot: "bg-orange",
    text: "Fester Ansprechpartner · Mo–Sa 08:00–22:00 erreichbar",
  },
] as const;

export function StartTrustBar() {
  return (
    <section
      className="relative z-10 mx-auto w-full max-w-[100rem] -translate-y-14 px-4 sm:px-8 lg:px-16"
      aria-label="Vertrauensfakten"
    >
      <ul className="grid gap-4 rounded-[18px] border border-[#e1e4e9] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(19,24,29,0.08)] sm:grid-cols-3 sm:px-6 sm:py-6">
        {CHIPS.map((chip) => (
          <li
            key={chip.text}
            className="flex items-start gap-2.5 text-sm leading-6 text-foreground"
          >
            <span
              className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${chip.dot}`}
              aria-hidden
            />
            <span>{chip.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
