const MONTHS_DE = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
] as const;

/** z. B. „Mai 2026“ — für Freshness-Signale im UI. */
export function getCurrentMonthYear(): string {
  const now = new Date();
  return `${MONTHS_DE[now.getMonth()]} ${now.getFullYear()}`;
}

/** ISO-Datum (YYYY-MM-DD) für Schema.org `dateModified` — 1. des aktuellen Monats. */
export function getSchemaDateModified(): string {
  const now = new Date();
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1));
  return d.toISOString().slice(0, 10);
}
