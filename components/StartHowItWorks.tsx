const STEPS = [
  "Anfrage stellen – per Formular, Telefon oder WhatsApp",
  "Kostenlose Besichtigung – wir schauen uns Ihr Objekt an",
  "Angebot & Start – klar kalkuliert, mit festem Ansprechpartner",
] as const;

export function StartHowItWorks() {
  return (
    <section
      className="bg-hell py-12 sm:py-14"
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
              className="flex gap-3 rounded-[14px] border border-[#e1e4e9] bg-white p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-nacht text-sm font-bold text-white">
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
