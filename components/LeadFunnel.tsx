"use client";

import type { FormEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FUNNEL_SERVICE_OPTIONS, SERVICES } from "@/lib/config/services";
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
   * Slug (z. B. `unterhaltsreinigung`), Kurzlabel oder voller Leistungstitel –
   * bei Treffer startet der Funnel bei der Flächenwahl (Schritt 1 entfällt).
   */
  initialServiceType?: string;
};

type StepIndex = 0 | 1 | 2 | 3;

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

/** Erkennt Slug, Kurzlabel oder vollen Titel aus der zentralen Service-Konfiguration. */
function resolveInitialServiceType(raw?: string): LeadServiceType | null {
  if (!raw?.trim()) return null;
  const t = raw.trim();
  if ((LEAD_SERVICE_TYPES as readonly string[]).includes(t)) {
    return t as LeadServiceType;
  }
  const needle = compactKey(t);
  for (const opt of FUNNEL_SERVICE_OPTIONS) {
    if (compactKey(opt.label) === needle || compactKey(opt.value) === needle) {
      return opt.value;
    }
  }
  for (const s of SERVICES) {
    if (
      compactKey(s.slug) === needle ||
      compactKey(s.title) === needle ||
      compactKey(s.funnelLabel) === needle
    ) {
      return s.slug;
    }
  }
  return null;
}

function serviceLabel(value: LeadServiceType): string {
  return SERVICES.find((s) => s.slug === value)?.title ?? value;
}

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const choiceButtonClass =
  "rounded-sm border border-zinc-200 bg-background px-4 py-3 text-left text-sm font-bold text-foreground transition hover:border-primary hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const serviceTileClass =
  "flex min-h-[4.5rem] flex-col items-start justify-center gap-0.5 rounded-sm border border-zinc-200 bg-background px-2.5 py-2.5 text-left transition hover:border-primary hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:min-h-[5rem] sm:gap-1 sm:px-3 sm:py-3";

const choiceButtonActiveClass = "border-primary bg-primary/5";

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

export function LeadFunnel({ className, initialServiceType }: LeadFunnelProps) {
  const initialResolved = useMemo(
    () => resolveInitialServiceType(initialServiceType),
    [initialServiceType],
  );

  const [step, setStep] = useState<StepIndex>(() => (initialResolved ? 1 : 0));
  const [serviceType, setServiceType] = useState<LeadServiceType | null>(
    () => initialResolved,
  );
  const [areaSize, setAreaSize] = useState<LeadAreaSize | null>(null);
  const [timing, setTiming] = useState<LeadTiming | null>(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [objectNotes, setObjectNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("saubermatik-calc-prefill");
      if (!raw) return;
      const data = JSON.parse(raw) as {
        service?: LeadServiceType;
        objectNotes?: string;
      };
      if (data.objectNotes) setObjectNotes(data.objectNotes);
      if (
        data.service &&
        (LEAD_SERVICE_TYPES as readonly string[]).includes(data.service)
      ) {
        setServiceType(data.service);
        setStep(1);
      }
      sessionStorage.removeItem("saubermatik-calc-prefill");
    } catch {
      /* ignore malformed prefill */
    }
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadEmailSent, setLeadEmailSent] = useState(true);

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
        ...(objectNotes.trim() ? { objectNotes: objectNotes.trim() } : {}),
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

        const emailedFlag =
          !data || typeof data !== "object"
            ? true
            : "emailed" in data
              ? (data as { emailed: unknown }).emailed === true
              : true;

        setLeadEmailSent(emailedFlag);
        setIsSuccess(true);
      } catch {
        setErrorMessage(
          "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [areaSize, company, email, name, objectNotes, phone, serviceType, timing],
  );

  if (isSuccess) {
    return (
      <section
        className={classNames(
          "min-h-[26rem] rounded-sm border border-zinc-300 bg-white p-6 sm:min-h-[28rem] sm:p-8",
          className,
        )}
        aria-live="polite"
      >
        <p className="text-sm font-semibold text-secondary">Anfrage gesendet</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Vielen Dank! Wir analysieren Ihr Objekt und melden uns innerhalb von
          60 Minuten bei Ihnen!
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Sie hören von uns mit einem konkreten Vorschlag – ohne Druck, ohne
          Kleingedrucktes. Wenn es schneller gehen muss, rufen Sie uns direkt
          an.
        </p>
        {!leadEmailSent ? (
          <div
            className="mt-5 rounded-sm border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950"
            role="status"
          >
            <p>
              <strong className="font-semibold">Ein Moment:</strong> Ihre
              Angaben sind bei uns angekommen. Die automatische
              Büro-Benachrichtigung konnte auf diesem System gerade nicht
              ausgelöst werden – rufen Sie uns bitte kurz an oder schreiben Sie
              uns direkt per E-Mail, damit wir Ihre Anfrage sicher aufnehmen.
            </p>
            <p className="mt-2 text-xs leading-5 text-amber-900/85">
              Für den Betrieb der Seite: In den Server-Umgebungsvariablen{" "}
              <code className="rounded bg-amber-100/90 px-1 font-mono text-[11px]">
                RESEND_API_KEY
              </code>{" "}
              und{" "}
              <code className="rounded bg-amber-100/90 px-1 font-mono text-[11px]">
                LEAD_EMAIL_RECIPIENT
              </code>{" "}
              setzen und den Dienst neu starten bzw. neu deployen.
            </p>
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section
      className={classNames(
        "min-h-[26rem] rounded-sm border border-zinc-300 bg-white p-6 sm:min-h-[28rem] sm:p-8",
        className,
      )}
      id="kontakt-anfrage"
      aria-labelledby="lead-funnel-title"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Kurz-Anfrage
          </p>
          <h2
            id="lead-funnel-title"
            className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-xl"
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

      <div className="mt-6 min-h-[20rem] sm:min-h-[19rem]">
        {step === 0 && (
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
            {FUNNEL_SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={classNames(
                  serviceTileClass,
                  serviceType === opt.value && choiceButtonActiveClass,
                )}
                onClick={() => {
                  setServiceType(opt.value);
                  setStep(1);
                }}
                aria-label={`Leistung ${opt.label} wählen`}
              >
                <span className="text-lg leading-none" aria-hidden>
                  {opt.emoji}
                </span>
                <span className="text-[11px] font-semibold leading-snug text-foreground sm:text-xs">
                  {opt.label}
                </span>
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
                  className="mt-1 w-full rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
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
                  className="mt-1 w-full rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
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
                  className="mt-1 w-full rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
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
                  className="mt-1 w-full rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
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

            <label className="block text-sm font-medium text-foreground">
              Zusätzliche Objekthinweise (optional)
              <textarea
                className="mt-1 min-h-[5.5rem] w-full resize-y rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                name="objectNotes"
                rows={3}
                maxLength={2000}
                placeholder="z. B. Zugang, Parkplatz, Haustiere, sensible Bereiche …"
                value={objectNotes}
                onChange={(ev) => setObjectNotes(ev.target.value)}
                disabled={isLoading}
              />
            </label>

            {isError ? (
              <p className="text-sm font-medium text-red-700" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              {canGoBack ? (
                <button
                  type="button"
                  className="text-sm font-semibold text-secondary underline-offset-4 hover:underline disabled:pointer-events-none disabled:opacity-50"
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
                aria-label="Anfrage absenden"
                className="inline-flex h-11 min-w-[10.5rem] items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
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
            className="text-sm font-semibold text-secondary underline-offset-4 hover:underline"
            onClick={goBack}
          >
            Zurück
          </button>
        </div>
      ) : null}
    </section>
  );
}
