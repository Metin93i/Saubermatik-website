"use client";

import type { FormEvent } from "react";
import { useCallback, useMemo, useState } from "react";
import type {
  LeadAreaSize,
  LeadFunnelSubmission,
  LeadServiceType,
  LeadTiming,
} from "@/lib/lead/submission";
import { LEAD_SERVICE_TYPES } from "@/lib/lead/submission";

export type {
  LeadAreaSize,
  LeadFunnelSubmission,
  LeadServiceType,
  LeadTiming,
} from "@/lib/lead/submission";

export type LeadFunnelProps = {
  /** Zusätzliche Tailwind-Klassen für den äußeren Wrapper */
  className?: string;
  /**
   * Bekannter Leistungstyp (z. B. `buero-gewerbe`) oder Anzeige-Label (z. B. `Büro/Gewerbe`).
   * Wird erkannt, startet der Funnel bei der Flächenwahl — Schritt 1 entfällt.
   */
  initialServiceType?: string;
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

function compactKey(s: string): string {
  return s.toLowerCase().replace(/[\s/–—-]+/g, "");
}

/** Erkennt API-Wert oder gängige Schreibweisen des Button-Labels. */
function resolveInitialServiceType(raw?: string): LeadServiceType | null {
  if (!raw?.trim()) return null;
  const t = raw.trim();
  if ((LEAD_SERVICE_TYPES as readonly string[]).includes(t)) {
    return t as LeadServiceType;
  }
  const needle = compactKey(t);
  for (const opt of SERVICE_OPTIONS) {
    if (compactKey(opt.label) === needle || compactKey(opt.value) === needle) {
      return opt.value;
    }
  }
  return null;
}

function serviceLabel(value: LeadServiceType): string {
  return SERVICE_OPTIONS.find((o) => o.value === value)?.label ?? value;
}

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const choiceButtonClass =
  "rounded-xl border border-foreground/15 bg-background px-4 py-3 text-left text-sm font-semibold text-foreground shadow-sm transition hover:border-secondary/60 hover:bg-secondary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

const choiceButtonActiveClass =
  "border-secondary bg-secondary/10 ring-2 ring-secondary/30";

function SubmitSpinner() {
  return (
    <svg
      className="h-4 w-4 shrink-0 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function LeadFunnel({
  className,
  initialServiceType,
}: LeadFunnelProps) {
  const initialResolved = useMemo(
    () => resolveInitialServiceType(initialServiceType),
    [initialServiceType],
  );

  const [step, setStep] = useState<StepIndex>(() =>
    initialResolved ? 1 : 0,
  );
  const [serviceType, setServiceType] = useState<LeadServiceType | null>(
    () => initialResolved,
  );
  const [areaSize, setAreaSize] = useState<LeadAreaSize | null>(null);
  const [timing, setTiming] = useState<LeadTiming | null>(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isError = errorMessage !== null;
  const canGoBack = step > 0 && !isSuccess;

  const stepTitle = useMemo(() => {
    if (isSuccess) return "Vielen Dank!";
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
  }, [isSuccess, step]);

  const goBack = useCallback(() => {
    setErrorMessage(null);
    setStep((s) => (s > 0 ? ((s - 1) as StepIndex) : s));
  }, []);

  const handleFinalSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMessage(null);

      if (!serviceType || !areaSize || !timing) {
        setErrorMessage("Bitte alle Schritte ausfüllen.");
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
        setErrorMessage("Bitte Name, E-Mail und Telefon ausfüllen.");
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data: unknown = await response.json().catch(() => null);
        const message =
          data &&
          typeof data === "object" &&
          "message" in data &&
          typeof (data as { message: unknown }).message === "string"
            ? (data as { message: string }).message
            : null;
        const ok =
          data &&
          typeof data === "object" &&
          "ok" in data &&
          (data as { ok: unknown }).ok === true;

        if (!response.ok || !ok) {
          setErrorMessage(
            message ??
              "Die Übertragung ist fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
          );
          return;
        }

        setIsSuccess(true);
      } catch {
        setErrorMessage(
          "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [areaSize, company, email, name, phone, serviceType, timing],
  );

  if (isSuccess) {
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
          Vielen Dank! Wir analysieren Ihr Objekt und melden uns innerhalb von
          60 Minuten bei Ihnen!
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Sie hören von uns mit einem konkreten Vorschlag – ohne Druck, ohne
          Kleingedrucktes. Wenn es schneller gehen muss, rufen Sie uns direkt
          an.
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
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Kurz-Anfrage
          </p>
          <h2
            id="lead-funnel-title"
            className="mt-2 text-lg font-bold tracking-tight text-primary sm:text-xl"
          >
            {stepTitle}
          </h2>
          {serviceType !== null && step >= 1 && step <= 3 ? (
            <p className="mt-2 text-xs text-muted">
              Leistung:{" "}
              <span className="font-medium text-foreground">
                {serviceLabel(serviceType)}
              </span>
              {" · "}
              <button
                type="button"
                className="font-semibold text-secondary underline-offset-2 hover:underline"
                onClick={() => setStep(0)}
              >
                ändern
              </button>
            </p>
          ) : null}
        </div>
        <p className="shrink-0 text-xs font-medium text-muted">
          Schritt {step + 1} / 4
        </p>
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                  required
                />
              </label>
            </div>

            {isError ? (
              <p className="text-sm font-medium text-red-700" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              {canGoBack ? (
                <button
                  type="button"
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline disabled:pointer-events-none disabled:opacity-50"
                  onClick={goBack}
                  disabled={isLoading}
                >
                  Zurück
                </button>
              ) : (
                <span />
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex h-11 min-w-[10.5rem] items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <SubmitSpinner />
                    Wird gesendet…
                  </>
                ) : (
                  "Anfrage senden"
                )}
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
