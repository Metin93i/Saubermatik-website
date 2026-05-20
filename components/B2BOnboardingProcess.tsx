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
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Enterprise-Onboarding
          </p>
          <h2
            id="b2b-onboarding-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
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

        <ol className="mt-12 grid gap-6 lg:grid-cols-2">
          {B2B_ONBOARDING_STEPS.map((step) => (
            <li
              key={step.id}
              id={`onboarding-${step.id}`}
              className="relative flex flex-col rounded-2xl border border-foreground/10 bg-white p-6 shadow-md ring-1 ring-black/5 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-md shadow-primary/20"
                  aria-hidden
                >
                  {step.position}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    {step.tagline}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-muted sm:text-[15px]">
                {step.body}
              </p>
              <p className="mt-4 rounded-lg border border-secondary/25 bg-secondary/5 px-3 py-2 text-xs font-semibold text-foreground">
                Ergebnis: {step.deliverable}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/kontakt#kontakt-anfrage"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
          >
            Onboarding starten
          </Link>
          <Link
            href="/qualitaetsmanagement"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-foreground/15 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5"
          >
            Qualitätsmanagement
          </Link>
        </div>
      </div>
    </section>
  );
}
