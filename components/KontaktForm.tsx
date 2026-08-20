"use client";

import type { FormEvent } from "react";
import { useCallback, useState } from "react";
import { apiUrl } from "@/lib/config/api";
import {
  LEAD_TOPIC_OPTIONS,
  type LeadSubmission,
} from "@/lib/lead/submission";

type Props = {
  className?: string;
};

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

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

const inputClass =
  "mt-1 w-full rounded-sm border border-zinc-300 bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

export function KontaktForm({ className = "" }: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadEmailSent, setLeadEmailSent] = useState(true);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMessage(null);

      const payload: LeadSubmission & { website: string } = {
        name: name.trim(),
        company: company.trim(),
        email: email.trim(),
        phone: phone.trim(),
        topic: topic.trim(),
        location: location.trim(),
        message: message.trim(),
        website,
      };

      if (!payload.name || !payload.email || !payload.message) {
        setErrorMessage("Bitte Name, E-Mail und Anliegen ausfüllen.");
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(apiUrl("/api/lead"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data: unknown = await response.json().catch(() => null);
        const apiMessage =
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
            apiMessage ??
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
    [company, email, location, message, name, phone, topic, website],
  );

  if (isSuccess) {
    return (
      <section
        className={classNames(
          "min-h-[22rem] rounded-sm border border-zinc-300 bg-white p-6 sm:min-h-[24rem] sm:p-8",
          className,
        )}
        aria-live="polite"
        id="kontakt-anfrage"
      >
        <p className="text-sm font-semibold text-secondary">Anfrage gesendet</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Vielen Dank. Wir melden uns innerhalb eines Werktags.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Sie hören von einem festen Ansprechpartner – ohne Druck, ohne
          Kleingedrucktes. Wenn es schneller gehen muss, rufen Sie uns direkt
          an oder schreiben Sie uns per WhatsApp.
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
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section
      className={classNames(
        "min-h-[22rem] rounded-sm border border-zinc-300 bg-white p-6 sm:min-h-[24rem] sm:p-8",
        className,
      )}
      id="kontakt-anfrage"
      aria-labelledby="kontakt-form-title"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-primary">
        Anfrage
      </p>
      <h2
        id="kontakt-form-title"
        className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-xl"
      >
        Schreiben Sie uns
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Rückmeldung innerhalb eines Werktags. Bei Spezialanfragen auch direkt
        über die Geschäftsführung.
      </p>

      <form className="relative mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          aria-hidden
        >
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(ev) => setWebsite(ev.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-foreground">
            Name
            <input
              className={inputClass}
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
              className={inputClass}
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
              className={inputClass}
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
            Telefon (optional)
            <input
              className={inputClass}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              disabled={isLoading}
            />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Worum geht es? (optional)
            <select
              className={inputClass}
              name="topic"
              value={topic}
              onChange={(ev) => setTopic(ev.target.value)}
              disabled={isLoading}
            >
              <option value="">Bitte wählen</option>
              {LEAD_TOPIC_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium text-foreground">
            Ort oder PLZ (optional)
            <input
              className={inputClass}
              name="location"
              autoComplete="address-level2"
              value={location}
              onChange={(ev) => setLocation(ev.target.value)}
              disabled={isLoading}
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-foreground">
          Anliegen
          <textarea
            className={`${inputClass} min-h-[8rem] resize-y`}
            name="message"
            rows={5}
            maxLength={4000}
            placeholder="Kurz Ihr Objekt, der gewünschte Umfang und wann wir uns melden sollen …"
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
            disabled={isLoading}
            required
          />
        </label>

        {errorMessage ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <div className="flex justify-end">
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
    </section>
  );
}
