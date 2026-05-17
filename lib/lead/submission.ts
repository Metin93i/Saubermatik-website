/** Gemeinsame Typen & Parser für Lead-Funnel UI und `POST /api/lead` (nur Server/Shared, kein `"use client"`). */

export const LEAD_SERVICE_TYPES = [
  "buero-gewerbe",
  "glas-fenster",
  "treppenhaus",
  "bauendreinigung",
] as const;

export type LeadServiceType = (typeof LEAD_SERVICE_TYPES)[number];

export const LEAD_AREA_SIZES = ["bis-100", "100-500", "ueber-500"] as const;

export type LeadAreaSize = (typeof LEAD_AREA_SIZES)[number];

export const LEAD_TIMINGS = [
  "sofort",
  "naechster-monat",
  "preisvergleich",
] as const;

export type LeadTiming = (typeof LEAD_TIMINGS)[number];

export type LeadFunnelSubmission = {
  serviceType: LeadServiceType;
  areaSize: LeadAreaSize;
  timing: LeadTiming;
  name: string;
  company: string;
  email: string;
  phone: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isLeadServiceType(v: unknown): v is LeadServiceType {
  return (
    typeof v === "string" &&
    (LEAD_SERVICE_TYPES as readonly string[]).includes(v)
  );
}

function isLeadAreaSize(v: unknown): v is LeadAreaSize {
  return typeof v === "string" && (LEAD_AREA_SIZES as readonly string[]).includes(v);
}

function isLeadTiming(v: unknown): v is LeadTiming {
  return typeof v === "string" && (LEAD_TIMINGS as readonly string[]).includes(v);
}

/** Einfache RFC-5322-nahe Prüfung (ohne externe Lib). */
export function isValidEmailFormat(email: string): boolean {
  const trimmed = email.trim();
  if (trimmed.length < 5 || trimmed.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

export type ParseLeadResult =
  | { ok: true; data: LeadFunnelSubmission }
  | { ok: false; error: string; status: number };

export function parseLeadSubmission(body: unknown): ParseLeadResult {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Ungültiger JSON-Body.", status: 400 };
  }

  const o = body as Record<string, unknown>;

  if (!isLeadServiceType(o.serviceType)) {
    return { ok: false, error: "Ungültige Dienstleistung.", status: 400 };
  }
  if (!isLeadAreaSize(o.areaSize)) {
    return { ok: false, error: "Ungültige Flächenangabe.", status: 400 };
  }
  if (!isLeadTiming(o.timing)) {
    return { ok: false, error: "Ungültiger Startzeitpunkt.", status: 400 };
  }

  if (!isNonEmptyString(o.name)) {
    return { ok: false, error: "Name fehlt.", status: 400 };
  }
  if (!isNonEmptyString(o.email) || !isValidEmailFormat(o.email)) {
    return { ok: false, error: "Ungültige E-Mail-Adresse.", status: 400 };
  }
  if (!isNonEmptyString(o.phone)) {
    return { ok: false, error: "Telefon fehlt.", status: 400 };
  }

  const name = String(o.name).trim();
  const email = String(o.email).trim();
  const phone = String(o.phone).trim();
  if (name.length > 200) {
    return { ok: false, error: "Name zu lang.", status: 400 };
  }
  if (phone.length < 5 || phone.length > 40) {
    return { ok: false, error: "Telefonnummer ungültig.", status: 400 };
  }

  const company =
    typeof o.company === "string" ? o.company.trim().slice(0, 200) : "";

  return {
    ok: true,
    data: {
      serviceType: o.serviceType,
      areaSize: o.areaSize,
      timing: o.timing,
      name,
      company,
      email,
      phone,
    },
  };
}
