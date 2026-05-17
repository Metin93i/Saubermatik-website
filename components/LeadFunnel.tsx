"use client";

import type { FormEvent } from "react";
import { useCallback, useMemo, useState } from "react";

export type LeadServiceType =
  | "buero-gewerbe"
  | "glas-fenster"
  | "treppenhaus"
  | "bauendreinigung";

export type LeadAreaSize = "bis-100" | "100-500" | "ueber-500";

export type LeadTiming = "sofort" | "naechster-monat" | "preisvergleich";

export type LeadFunnelSubmission = {
  serviceType: LeadServiceType;
  areaSize: LeadAreaSize;
  timing: LeadTiming;
  name: string;
  company: string;
  email: string;
  phone: string;
};

export type LeadFunnelProps = {
  /** Zusätzliche Tailwind-Klassen für den äußeren Wrapper */
  className?: string;
  /** Wird nach erfolgreicher Validierung aufgerufen (z. B. `fetch` an API/CRM). */
  onSubmit?: (payload: LeadFunnelSubmission) => void | Promise<void>;
};

type StepIndex = 0 | 1 | 2 | 3;

const SERVICE_OPTIONS: ReadonlyArray<{
  value: LeadServiceType;
  label: string;
}> = [
  { value: "buero-gewerbe", label: "Büro / Gewerbe" },
  { value: "glas-fenster", label: "Glas / Fenster" },
  { value: "treppenhaus", label: "Treppenhaus" },
  { value: "bauendreinigung", label: "Bauendreinigung" },
];

const AREA_OPTIONS: ReadonlyArray<{ value: LeadAreaSize; label: string }> = [
  { value: "bis-100", label: "Bis 100 m²" },
  { value: "100-500", label: "100–500 m²" },
  { value: "ueber-500", label: "Über 500 m²" },
];

const TIMING_OPTIONS: ReadonlyArray<{ value: LeadTiming; label: string }> = [
  { value: "sofort", label: "Sofort" },
  { value: "naechster-monat", label: "Nächster Monat" },
  { value: "preisvergleich", label: "Preisvergleich" },
];

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const choiceButtonClass =
  "rounded-xl border border-foreground/15 bg-background px-4 py-3 text-left text-sm font-semibold text-foreground shadow-sm transition hover:border-secondary/60 hover:bg-secondary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

const choiceButtonActiveClass =
  "border-secondary bg-secondary/10 ring-2 ring-secondary/30";

export function LeadFunnel({ className, onSubmit }: LeadFunnelProps) {
  const [step, setStep] = useState<StepIndex>(0);
  const [serviceType, setServiceType] = useState<LeadServiceType | null>(null);
  const [areaSize, setAreaSize] = useState<LeadAreaSize | null>(null);
  const [timing, setTiming] = useState<LeadTiming | null>(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const canGoBack = step > 0 && !isComplete;

  const stepTitle = useMemo(() => {
    if (isComplete) return "Vielen Dank!";
    switch (step) {
      case 0:
        return "Was dürfen wir für Sie reinigen?";
      case 1:
        return "Wie groß ist die Fläche ungefähr?";
      case 2:
        return "Wann sollen wir starten?";
      default:
        return "Ihre Kontaktdaten";
    }
  }, [isComplete, step]);

  const goBack = useCallback(() => {
    setSubmitError(null);
    setStep((s) => (s > 0 ? ((s - 1) as StepIndex) : s));
  }, []);

  const handleFinalSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitError(null);

      if (!serviceType || !areaSize || !timing) {
        setSubmitError("Bitte alle Schritte ausfüllen.");
        return;
      }

      const payload: LeadFunnelSubmission = {
        serviceType,
        areaSize,
        timing,
        name: name.trim(),
        company: company.trim(),
        email: email.trim(),
        phone: phone.trim(),
      };

      if (!payload.name || !payload.email || !payload.phone) {
        setSubmitError("Bitte Name, E-Mail und Telefon ausfüllen.");
        return;
      }

      setIsSubmitting(true);
      try {
        if (onSubmit) {
          await onSubmit(payload);
        }
        setIsComplete(true);
      } catch {
        setSubmitError(
          "Senden ist fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [areaSize, company, email, name, onSubmit, phone, serviceType, timing],
  );

  if (isComplete) {
    return (
      <section
        className={classNames(
          "rounded-2xl border border-foreground/10 bg-white p-6 shadow-lg sm:p-8",
          className,
        )}
        aria-live="polite"
      >
        <p className="text-sm font-semibold text-secondary">Anfrage gesendet</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-primary sm:text-2xl">
          Wir melden uns schnellstmöglich bei Ihnen.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Wenn Sie noch etwas ergänzen möchten, rufen Sie uns gerne direkt an
          oder senden Sie eine kurze Nachricht mit Ihrem Objektstandort.
        </p>
      </section>
    );
  }

  return (
    <section
      className={classNames(
        "rounded-2xl border border-foreground/10 bg-white p-6 shadow-lg sm:p-8",
        className,
      )}
      id="kontakt-anfrage"
      aria-labelledby="lead-funnel-title"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Kurz-Anfrage
          </p>
          <h2
            id="lead-funnel-title"
            className="mt-2 text-lg font-bold tracking-tight text-primary sm:text-xl"
          >
            {stepTitle}
          </h2>
        </div>
        <p className="text-xs font-medium text-muted">Schritt {step + 1} / 4</p>
      </div>

      <div className="mt-6">
        {step === 0 && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={classNames(
                  choiceButtonClass,
                  serviceType === opt.value && choiceButtonActiveClass,
                )}
                onClick={() => {
                  setServiceType(opt.value);
                  setStep(1);
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {AREA_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={classNames(
                  choiceButtonClass,
                  areaSize === opt.value && choiceButtonActiveClass,
                )}
                onClick={() => {
                  setAreaSize(opt.value);
                  setStep(2);
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {TIMING_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={classNames(
                  choiceButtonClass,
                  timing === opt.value && choiceButtonActiveClass,
                )}
                onClick={() => {
                  setTiming(opt.value);
                  setStep(3);
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <form className="space-y-4" onSubmit={handleFinalSubmit} noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-foreground">
                Name
                <input
                  className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none ring-secondary/40 transition focus:ring-2"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  required
                />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Firma (optional)
                <input
                  className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none ring-secondary/40 transition focus:ring-2"
                  name="company"
                  autoComplete="organization"
                  value={company}
                  onChange={(ev) => setCompany(ev.target.value)}
                />
              </label>
              <label className="block text-sm font-medium text-foreground">
                E-Mail
                <input
                  className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none ring-secondary/40 transition focus:ring-2"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Telefon
                <input
                  className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none ring-secondary/40 transition focus:ring-2"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(ev) => setPhone(ev.target.value)}
                  required
                />
              </label>
            </div>

            {submitError ? (
              <p className="text-sm font-medium text-red-700" role="alert">
                {submitError}
              </p>
            ) : null}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              {canGoBack ? (
                <button
                  type="button"
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  onClick={goBack}
                >
                  Zurück
                </button>
              ) : (
                <span />
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Wird gesendet…" : "Anfrage senden"}
              </button>
            </div>
          </form>
        )}
      </div>

      {step < 3 && canGoBack ? (
        <div className="mt-6">
          <button
            type="button"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            onClick={goBack}
          >
            Zurück
          </button>
        </div>
      ) : null}
    </section>
  );
}
