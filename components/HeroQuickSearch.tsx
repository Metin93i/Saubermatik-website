"use client";

import { useCallback, useId, useState, type FormEvent } from "react";
import type { ServiceSlug } from "@/lib/config/services";
import {
  navigateFromQuickSearch,
  QUICK_SEARCH_CITY_OPTIONS,
  QUICK_SEARCH_SERVICE_OPTIONS,
  resolveLocationLabel,
} from "@/lib/hero/quick-search";

type Props = {
  className?: string;
};

const fieldClass =
  "h-11 w-full min-w-0 rounded-sm border border-zinc-300 bg-white px-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

export function HeroQuickSearch({ className = "" }: Props) {
  const formId = useId();
  const serviceId = `${formId}-service`;
  const locationId = `${formId}-location`;
  const customLocationId = `${formId}-custom-location`;

  const [service, setService] = useState<ServiceSlug>("unterhaltsreinigung");
  const [cityValue, setCityValue] = useState<string>("balingen");
  const [customLocation, setCustomLocation] = useState("");

  const showCustomLocation = cityValue === "__custom__";

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const locationLabel = resolveLocationLabel(cityValue, customLocation);
      navigateFromQuickSearch(service, locationLabel);
    },
    [cityValue, customLocation, service],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-sm border border-zinc-300 bg-white p-3 sm:p-4 ${className}`}
      aria-labelledby={`${formId}-legend`}
    >
      <p
        id={`${formId}-legend`}
        className="text-xs font-bold uppercase tracking-widest text-primary"
      >
        Direkt die richtige Lösung finden
      </p>

      <div className="mt-3 flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-2">
        <div className="flex min-w-0 flex-1 flex-col gap-1 lg:max-w-[14rem]">
          <label htmlFor={serviceId} className="text-xs font-bold text-muted">
            Ich suche…
          </label>
          <select
            id={serviceId}
            name="service"
            className={fieldClass}
            value={service}
            onChange={(e) => setService(e.target.value as ServiceSlug)}
          >
            {QUICK_SEARCH_SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1 lg:max-w-[12rem]">
          <label htmlFor={locationId} className="text-xs font-bold text-muted">
            in / Standort
          </label>
          <select
            id={locationId}
            name="location"
            className={fieldClass}
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          >
            {QUICK_SEARCH_CITY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
            <option value="__custom__">PLZ / anderer Ort…</option>
          </select>
        </div>

        {showCustomLocation ? (
          <div className="flex min-w-0 flex-1 flex-col gap-1 lg:max-w-[11rem]">
            <label
              htmlFor={customLocationId}
              className="text-xs font-bold text-muted"
            >
              PLZ / Ort
            </label>
            <input
              id={customLocationId}
              name="customLocation"
              type="text"
              inputMode="text"
              autoComplete="postal-code"
              placeholder="z. B. 72336"
              className={fieldClass}
              value={customLocation}
              onChange={(e) => setCustomLocation(e.target.value)}
            />
          </div>
        ) : null}

        <button
          type="submit"
          className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-sm bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:w-auto lg:min-w-[11rem]"
        >
          Preis berechnen
        </button>
      </div>
    </form>
  );
}
