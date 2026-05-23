import Link from "next/link";
import {
  B2B_ONBOARDING_STEPS,
  buildB2BOnboardingHowToJsonLd,
} from "@/lib/seo/b2b-onboarding";

type Props = {
  /** Canonical path for HowTo step URLs (e.g. `/` or `/qualitaetsmanagement`). */
  pagePath: string;
  className?: string;
};

export function B2BOnboardingProcess({ pagePath, className = "" }: Props) {
  const howTo = buildB2BOnboardingHowToJsonLd(pagePath);
  const json = JSON.stringify(howTo).replaceAll("<", "\\u003c");

  return (
    <section
      className={className}
      aria-labelledby="b2b-onboarding-heading"
      id="b2b-onboarding"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl border-l-4 border-primary pl-5">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Enterprise-Onboarding
          </p>
          <h2
            id="b2b-onboarding-heading"
            className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl"
          >
            Vier Phasen. Ein verbindlicher Qualitätsstandard.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Für Einkauf, Facility Management und Geschäftsführung: Unser
            Onboarding ist kein Verkaufsgespräch, sondern ein dokumentierter
            Übergabeprozess – von der Bedarfsanalyse bis zum live geschalteten
            SLA-Betrieb.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto border-2 border-zinc-800">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              B2B-Onboarding: vier Phasen im Überblick
            </caption>
            <thead>
              <tr className="border-b-2 border-zinc-800 bg-zinc-950 text-zinc-100">
                <th
                  scope="col"
                  className="w-16 px-4 py-3 text-xs font-bold uppercase tracking-widest"
                >
                  Phase
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest"
                >
                  Schritt
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest"
                >
                  Leistungsinhalt
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest"
                >
                  Ergebnis / Deliverable
                </th>
              </tr>
            </thead>
            <tbody>
              {B2B_ONBOARDING_STEPS.map((step) => (
                <tr
                  key={step.id}
                  id={`onboarding-${step.id}`}
                  className="border-b border-zinc-300 bg-white last:border-b-0"
                >
                  <td className="align-top px-4 py-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-zinc-800 bg-primary text-base font-black text-primary-foreground">
                      {step.position}
                    </span>
                  </td>
                  <td className="align-top px-4 py-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      {step.tagline}
                    </p>
                    <p className="mt-1 text-base font-extrabold text-foreground">
                      {step.title}
                    </p>
                  </td>
                  <td className="align-top px-4 py-5 text-sm leading-7 text-muted">
                    {step.body}
                  </td>
                  <td className="align-top px-4 py-5">
                    <p className="border border-zinc-800 bg-zinc-100 px-3 py-2 text-xs font-bold uppercase tracking-wide text-foreground">
                      {step.deliverable}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/kontakt#kontakt-anfrage"
            className="inline-flex h-11 items-center justify-center border-2 border-zinc-800 bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
          >
            Onboarding starten
          </Link>
          <Link
            href="/qualitaetsmanagement"
            className="inline-flex h-11 items-center justify-center border-2 border-zinc-800 bg-white px-5 text-sm font-bold text-foreground transition hover:bg-zinc-100"
          >
            Qualitätsmanagement
          </Link>
        </div>
      </div>
    </section>
  );
}
