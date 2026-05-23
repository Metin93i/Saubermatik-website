"use client";

import type { FormEvent } from "react";
import { useCallback, useState } from "react";

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export type CareerFormProps = {
  className?: string;
};

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

export function CareerForm({ className }: CareerFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailSent, setEmailSent] = useState(true);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMessage(null);

      if (!name.trim() || !email.trim() || !phone.trim() || !about.trim()) {
        setErrorMessage("Bitte alle Felder ausfüllen.");
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch("/api/career", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            about: about.trim(),
          }),
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

        setEmailSent(emailedFlag);
        setIsSuccess(true);
      } catch {
        setErrorMessage(
          "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [about, email, name, phone],
  );

  if (isSuccess) {
    return (
      <section
        className={classNames(
          "min-h-[26rem] rounded-sm border border-zinc-200 bg-white p-6 sm:min-h-[28rem] sm:p-8",
          className,
        )}
        aria-live="polite"
      >
        <p className="text-sm font-semibold text-secondary">
          Bewerbung gesendet
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Vielen Dank! Unser Team prüft Ihre Angaben und meldet sich bei Ihnen.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Sie erhalten in der Regel innerhalb weniger Werktage Rückmeldung.
        </p>
        {!emailSent ? (
          <div
            className="mt-5 rounded-sm border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950"
            role="status"
          >
            <p>
              Ihre Daten sind bei uns angekommen; die automatische
              E-Mail-Benachrichtigung konnte nicht ausgelöst werden. Bitte
              kontaktieren Sie uns kurz telefonisch.
            </p>
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section
      className={classNames(
        "min-h-[26rem] rounded-sm border border-zinc-200 bg-white p-6 sm:min-h-[28rem] sm:p-8",
        className,
      )}
      id="bewerbung"
      aria-labelledby="career-form-title"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        Karriere
      </p>
      <h2
        id="career-form-title"
        className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-xl"
      >
        Schnellbewerbung
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Kein Anschreiben als PDF nötig – wir lesen jedes seriöse Profil. Alle
        Felder sind Pflicht.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <label className="block text-sm font-medium text-foreground">
          Name
          <input
            className="mt-1 w-full rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none ring-secondary/40 transition focus:ring-2"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            disabled={isLoading}
            required
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Telefon
          <input
            className="mt-1 w-full rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none ring-secondary/40 transition focus:ring-2"
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
        <label className="block text-sm font-medium text-foreground">
          E-Mail
          <input
            className="mt-1 w-full rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none ring-secondary/40 transition focus:ring-2"
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
          Über mich
          <textarea
            className="mt-1 min-h-[8rem] w-full resize-y rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none ring-secondary/40 transition focus:ring-2"
            name="about"
            rows={5}
            maxLength={6000}
            placeholder="Berufserfahrung, Verfügbarkeit, warum Saubermatik …"
            value={about}
            onChange={(ev) => setAbout(ev.target.value)}
            disabled={isLoading}
            required
          />
        </label>

        {errorMessage ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-secondary px-5 text-sm font-bold text-secondary-foreground transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <SubmitSpinner />
              Wird gesendet…
            </>
          ) : (
            "Bewerbung absenden"
          )}
        </button>
      </form>
    </section>
  );
}
