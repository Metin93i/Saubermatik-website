"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import type { LeadServiceType } from "@/lib/lead/submission";

type CalcCategory = "buero" | "glas" | "treppe" | "hausverwaltung";

const CATEGORIES: readonly {
  id: CalcCategory;
  label: string;
  emoji: string;
  service: LeadServiceType;
  ratePerSqm?: number;
  isB2b?: boolean;
}[] = [
  {
    id: "buero",
    label: "Büro / Unterhalt",
    emoji: "🏢",
    service: "unterhaltsreinigung",
    ratePerSqm: 1.85,
  },
  {
    id: "glas",
    label: "Fenster & Glas",
    emoji: "🪟",
    service: "fenster-glasreinigung",
    ratePerSqm: 2.4,
  },
  {
    id: "treppe",
    label: "Treppenhaus",
    emoji: "🪜",
    service: "treppenhausreinigung",
    ratePerSqm: 2.1,
  },
  {
    id: "hausverwaltung",
    label: "Hausverwaltung / Wohnanlage (MFH)",
    emoji: "🏘️",
    service: "hausmeisterservice",
    isB2b: true,
  },
] as const;

const MIN_SQM = 50;
const MAX_SQM = 2500;
const STEP_SQM = 25;

const MIN_WE = 4;
const MAX_WE = 100;
const STEP_WE = 1;

const CALC_PREFILL_KEY = "saubermatik-calc-prefill";

function formatEuro(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** B2B: gestaffelter Richtwert pro WE/Monat (Treppenhaus + Hausmeister-Light + Grün-Basis). */
function ratePerWe(units: number): number {
  if (units <= 20) return 18;
  if (units <= 50) return 16;
  return 14;
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
  const [weUnits, setWeUnits] = useState(24);

  const selected = useMemo(
    () => CATEGORIES.find((c) => c.id === category) ?? null,
    [category],
  );

  const isB2b = selected?.isB2b === true;

  const estimate = useMemo(() => {
    if (!selected) return null;
    if (isB2b) {
      const monthly = Math.round(weUnits * ratePerWe(weUnits));
      const min = Math.round(monthly * 0.88);
      const max = Math.round(monthly * 1.18);
      return { min, max, monthly, unitLabel: `${weUnits} WE` };
    }
    const rate = selected.ratePerSqm ?? 0;
    const monthly = Math.round(sqm * rate);
    const min = Math.round(monthly * 0.9);
    const max = Math.round(monthly * 1.15);
    return { min, max, monthly, unitLabel: `${sqm} m²` };
  }, [selected, sqm, weUnits, isB2b]);

  const goToFunnel = useCallback(() => {
    if (selected && estimate && typeof sessionStorage !== "undefined") {
      const note = isB2b
        ? `Kalkulator (Hausverwaltung): ca. ${weUnits} WE, Richtwert ${formatEuro(estimate.min)}–${formatEuro(estimate.max)}/Monat.`
        : `Kalkulator: ${selected.label}, ca. ${sqm} m², Richtwert ${formatEuro(estimate.min)}–${formatEuro(estimate.max)}/Monat.`;
      sessionStorage.setItem(
        CALC_PREFILL_KEY,
        JSON.stringify({ service: selected.service, objectNotes: note }),
      );
    }
    const el = document.querySelector(funnelHref);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [funnelHref, selected, estimate, isB2b, sqm, weUnits]);

  const choiceClass =
    "rounded-xl border border-foreground/15 bg-background px-4 py-3 text-left text-sm font-semibold shadow-md transition hover:border-secondary/50 hover:bg-secondary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

  const stepLabels = isB2b
    ? (["Objekt", "WE", "Ergebnis"] as const)
    : (["Objekt", "Fläche", "Ergebnis"] as const);

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
        className="mt-6 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Rechner-Schritte"
      >
        {stepLabels.map((label, i) => (
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
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
            aria-label={
              isB2b ? "Weiter zur WE-Angabe" : "Weiter zur Flächenangabe"
            }
          >
            Weiter
          </button>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="mt-6">
          {isB2b ? (
            <>
              <label
                htmlFor="calc-we"
                className="text-sm font-medium text-foreground"
              >
                Anzahl der Wohneinheiten (WE):{" "}
                <strong className="text-foreground">{weUnits} WE</strong>
              </label>
              <input
                id="calc-we"
                type="range"
                min={MIN_WE}
                max={MAX_WE}
                step={STEP_WE}
                value={weUnits}
                onChange={(e) => setWeUnits(Number(e.target.value))}
                className="mt-4 w-full accent-secondary"
                aria-valuemin={MIN_WE}
                aria-valuemax={MAX_WE}
                aria-valuenow={weUnits}
                aria-label="Wohneinheiten-Schieberegler"
              />
              <div className="mt-2 flex justify-between text-xs text-muted">
                <span>{MIN_WE} WE</span>
                <span>{MAX_WE} WE</span>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">
                B2B-Richtwert für Mehrfamilienhäuser (Treppenhaus, Hausmeister,
                Grünpflege-Basis). Verbindliche Offerte nach Objekt-Audit.
              </p>
            </>
          ) : (
            <>
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
            </>
          )}
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
            {estimate.unitLabel} (monatlich, netto-orientiert):
          </p>
          <p className="mt-3 text-3xl font-bold text-foreground">
            {formatEuro(estimate.min)} – {formatEuro(estimate.max)}
          </p>
          <p className="mt-2 text-xs text-muted">
            Mittelwert ca. {formatEuro(estimate.monthly)}. Endpreis nach
            Begehung, Zugang und Intervall.
            {isB2b ? " Inkl. dokumentierter Leistungsnachweise für die NK-Abrechnung." : null}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={goToFunnel}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-secondary text-sm font-bold text-secondary-foreground shadow-md hover:bg-secondary/90"
              aria-label="Zur Objekt-Anfrage scrollen"
            >
              {isB2b ? "Liegenschaft anfragen →" : "Jetzt verbindlich anfragen →"}
            </button>
            <Link
              href={
                isB2b
                  ? "/zielgruppen/hausverwaltungen#kontakt-anfrage"
                  : "/kontakt#kontakt-anfrage"
              }
              className="inline-flex h-12 items-center justify-center rounded-xl border border-foreground/15 px-5 text-sm font-semibold text-foreground hover:bg-secondary/5"
            >
              {isB2b ? "Hausverwaltungs-Silo" : "Kontaktseite"}
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
