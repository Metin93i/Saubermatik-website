"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import type { LeadServiceType } from "@/lib/lead/submission";

type CalcCategory = "buero" | "glas" | "treppe";

const CATEGORIES: readonly {
  id: CalcCategory;
  label: string;
  emoji: string;
  service: LeadServiceType;
  ratePerSqm: number;
}[] = [
  { id: "buero", label: "Büro / Unterhalt", emoji: "🏢", service: "unterhaltsreinigung", ratePerSqm: 1.85 },
  { id: "glas", label: "Fenster & Glas", emoji: "🪟", service: "fenster-glasreinigung", ratePerSqm: 2.4 },
  { id: "treppe", label: "Treppenhaus", emoji: "🪜", service: "treppenhausreinigung", ratePerSqm: 2.1 },
] as const;

const MIN_SQM = 50;
const MAX_SQM = 2500;
const STEP_SQM = 25;

function formatEuro(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

type Props = {
  className?: string;
  funnelHref?: string;
};

export function EngagementCalculator({
  className,
  funnelHref = "#kontakt-anfrage",
}: Props) {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [category, setCategory] = useState<CalcCategory | null>(null);
  const [sqm, setSqm] = useState(250);

  const selected = useMemo(
    () => CATEGORIES.find((c) => c.id === category) ?? null,
    [category],
  );

  const estimate = useMemo(() => {
    if (!selected) return null;
    const monthly = Math.round(sqm * selected.ratePerSqm);
    const min = Math.round(monthly * 0.9);
    const max = Math.round(monthly * 1.15);
    return { min, max, monthly };
  }, [selected, sqm]);

  const goToFunnel = useCallback(() => {
    const el = document.querySelector(funnelHref);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [funnelHref]);

  const choiceClass =
    "rounded-xl border border-foreground/15 bg-background px-4 py-3 text-left text-sm font-semibold shadow-md transition hover:border-secondary/50 hover:bg-secondary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

  return (
    <section
      className={
        className ??
        "rounded-2xl border border-foreground/10 bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8"
      }
      aria-labelledby="engagement-calculator-heading"
    >
      <p className="text-sm font-semibold text-secondary">Kosten-Richtwert</p>
      <h2
        id="engagement-calculator-heading"
        className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
      >
        In 3 Schritten zur groben Monats-Schätzung
      </h2>
      <p className="mt-2 text-sm text-muted">
        Unverbindlich – für eine verbindliche Offerte starten Sie danach die
        Objekt-Anfrage.
      </p>

      <div
        className="mt-6 flex gap-2"
        role="tablist"
        aria-label="Rechner-Schritte"
      >
        {(["Objekt", "Fläche", "Ergebnis"] as const).map((label, i) => (
          <span
            key={label}
            role="tab"
            aria-selected={step === i}
            className={
              step === i
                ? "rounded-full bg-secondary/15 px-3 py-1 text-xs font-bold text-secondary"
                : "rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-muted"
            }
          >
            {i + 1}. {label}
          </span>
        ))}
      </div>

      {step === 0 ? (
        <div className="mt-6">
          <p className="text-sm font-medium text-foreground">
            Was soll gereinigt werden?
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`${choiceClass} ${category === c.id ? "border-secondary bg-secondary/10 ring-2 ring-secondary/30" : ""}`}
                onClick={() => setCategory(c.id)}
                aria-pressed={category === c.id}
                aria-label={`${c.label} auswählen`}
              >
                <span className="text-lg" aria-hidden>
                  {c.emoji}
                </span>
                <span className="mt-1 block">{c.label}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50 sm:w-auto sm:px-8"
            disabled={!category}
            onClick={() => setStep(1)}
            aria-label="Weiter zur Flächenangabe"
          >
            Weiter
          </button>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="mt-6">
          <label
            htmlFor="calc-sqm"
            className="text-sm font-medium text-foreground"
          >
            Geschätzte Fläche:{" "}
            <strong className="text-foreground">{sqm} m²</strong>
          </label>
          <input
            id="calc-sqm"
            type="range"
            min={MIN_SQM}
            max={MAX_SQM}
            step={STEP_SQM}
            value={sqm}
            onChange={(e) => setSqm(Number(e.target.value))}
            className="mt-4 w-full accent-secondary"
            aria-valuemin={MIN_SQM}
            aria-valuemax={MAX_SQM}
            aria-valuenow={sqm}
            aria-label="Quadratmeter-Schieberegler"
          />
          <div className="mt-2 flex justify-between text-xs text-muted">
            <span>{MIN_SQM} m²</span>
            <span>{MAX_SQM} m²</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-foreground/15 px-5 text-sm font-semibold text-foreground hover:bg-secondary/5"
              onClick={() => setStep(0)}
              aria-label="Zurück zur Objektauswahl"
            >
              Zurück
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              onClick={() => setStep(2)}
              aria-label="Schätzung berechnen"
            >
              Schätzung anzeigen
            </button>
          </div>
        </div>
      ) : null}

      {step === 2 && selected && estimate ? (
        <div className="mt-6" aria-live="polite">
          <p className="text-sm text-muted">
            Richtwert für{" "}
            <strong className="text-foreground">{selected.label}</strong> bei{" "}
            {sqm} m² (monatlich, netto-orientiert):
          </p>
          <p className="mt-3 text-3xl font-bold text-foreground">
            {formatEuro(estimate.min)} – {formatEuro(estimate.max)}
          </p>
          <p className="mt-2 text-xs text-muted">
            Mittelwert ca. {formatEuro(estimate.monthly)}. Endpreis nach
            Begehung, Zugang und Intervall.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={goToFunnel}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-secondary text-sm font-bold text-secondary-foreground shadow-md hover:bg-secondary/90"
              aria-label="Zur Objekt-Anfrage scrollen"
            >
              Jetzt verbindlich anfragen →
            </button>
            <Link
              href="/kontakt#kontakt-anfrage"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-foreground/15 px-5 text-sm font-semibold text-foreground hover:bg-secondary/5"
            >
              Kontaktseite
            </Link>
          </div>
          <button
            type="button"
            className="mt-4 text-sm font-medium text-secondary underline-offset-4 hover:underline"
            onClick={() => {
              setStep(0);
              setCategory(null);
            }}
            aria-label="Rechner neu starten"
          >
            Neu berechnen
          </button>
        </div>
      ) : null}
    </section>
  );
}
