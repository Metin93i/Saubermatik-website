"use client";

import { useRouter } from "next/navigation";
import { useCallback, useId, useState, type FormEvent } from "react";
import type { ServiceSlug } from "@/lib/config/services";
import {
  QUICK_SEARCH_CITY_OPTIONS,
  QUICK_SEARCH_SERVICE_OPTIONS,
  resolveQuickSearchRoute,
  type QuickSearchCitySlug,
} from "@/lib/hero/quick-search";

type Props = {
  className?: string;
};

const fieldClass =
  "h-12 w-full min-w-0 rounded-sm border border-zinc-300 bg-white px-3 text-sm font-semibold text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

export function HeroQuickSearch({ className = "" }: Props) {
  const router = useRouter();
  const formId = useId();
  const serviceId = `${formId}-service`;
  const locationId = `${formId}-location`;

  const [serviceSlug, setServiceSlug] = useState<ServiceSlug>(
    "unterhaltsreinigung",
  );
  const [citySlug, setCitySlug] = useState<QuickSearchCitySlug>("");

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const href = resolveQuickSearchRoute(serviceSlug, citySlug);
      router.push(href);
    },
    [citySlug, router, serviceSlug],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-sm border border-zinc-300 bg-white p-4 shadow-sm sm:p-5 ${className}`}
      aria-labelledby={`${formId}-legend`}
    >
      <p
        id={`${formId}-legend`}
        className="text-xs font-bold uppercase tracking-widest text-primary"
      >
        Direkt die richtige Lösung finden
      </p>

      <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end">
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <label htmlFor={serviceId} className="text-xs font-bold text-muted">
            Ich suche…
          </label>
          <select
            id={serviceId}
            name="service"
            className={fieldClass}
            value={serviceSlug}
            onChange={(e) => setServiceSlug(e.target.value as ServiceSlug)}
          >
            {QUICK_SEARCH_SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <label htmlFor={locationId} className="text-xs font-bold text-muted">
            in / Standort
          </label>
          <select
            id={locationId}
            name="location"
            className={fieldClass}
            value={citySlug}
            onChange={(e) => setCitySlug(e.target.value as QuickSearchCitySlug)}
          >
            <option value="">Region gesamt (Leistung)</option>
            {QUICK_SEARCH_CITY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
            <option value="__custom__">Alle Standorte anzeigen</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-sm bg-primary px-6 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:w-auto lg:min-w-[12rem]"
        >
          Jetzt finden
        </button>
      </div>
    </form>
  );
}
