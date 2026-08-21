const STEPS = [
  "Anfrage stellen – per Formular, Telefon oder WhatsApp",
  "Kostenlose Besichtigung – wir schauen uns Ihr Objekt an",
  "Angebot & Start – klar kalkuliert, mit festem Ansprechpartner",
] as const;

export function StartHowItWorks() {
  return (
    <section
      className="border-t border-foreground/10 bg-white py-12 sm:py-14"
      aria-labelledby="so-einfach-heading"
    >
      <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-8 lg:px-16">
        <h2
          id="so-einfach-heading"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          So einfach geht&apos;s
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {STEPS.map((text, index) => (
            <li
              key={text}
              className="flex gap-3 rounded-sm border border-zinc-200 bg-zinc-50 p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#13181d] text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm font-medium leading-6 text-foreground sm:text-base">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
