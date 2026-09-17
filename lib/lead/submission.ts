/** Gemeinsame Typen & Parser für Kontaktformular und `POST /api/lead`. */

export const LEAD_TOPIC_OPTIONS = [
  "Büro & Gewerbe",
  "Praxis & Gesundheitswesen",
  "Wohnanlage & Hausverwaltung",
  "Privathaushalt",
  "Sonstiges",
] as const;

export type LeadTopic = (typeof LEAD_TOPIC_OPTIONS)[number];

export type LeadSubmission = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  /** Optional: „Worum geht es?“ */
  topic: string;
  /** Optional: Ort oder PLZ */
  location: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function parseOptionalTopic(v: unknown): string {
  if (typeof v !== "string") return "";
  const trimmed = v.trim();
  if (trimmed.length === 0) return "";
  return (LEAD_TOPIC_OPTIONS as readonly string[]).includes(trimmed)
    ? trimmed
    : "";
}

function parseOptionalLocation(v: unknown): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, 80);
}

/** Einfache RFC-5322-nahe Prüfung (ohne externe Lib). */
export function isValidEmailFormat(email: string): boolean {
  const trimmed = email.trim();
  if (trimmed.length < 5 || trimmed.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

export type ParseLeadResult =
  | { ok: true; data: LeadSubmission; spam: boolean }
  | { ok: false; error: string; status: number };

export function parseLeadSubmission(body: unknown): ParseLeadResult {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Ungültiger JSON-Body.", status: 400 };
  }

  const o = body as Record<string, unknown>;

  /** Honeypot: ausgefüllt = Bot. Stille Annahme, kein Versand. */
  const honeypot =
    typeof o.website === "string" ? o.website.trim() : "";
  if (honeypot.length > 0) {
    return {
      ok: true,
      spam: true,
      data: {
        name: "honeypot",
        company: "",
        email: "honeypot@invalid.local",
        phone: "",
        message: "",
        topic: "",
        location: "",
      },
    };
  }

  if (!isNonEmptyString(o.name)) {
    return { ok: false, error: "Name fehlt.", status: 400 };
  }
  if (!isNonEmptyString(o.email) || !isValidEmailFormat(o.email)) {
    return { ok: false, error: "Ungültige E-Mail-Adresse.", status: 400 };
  }
  if (!isNonEmptyString(o.message)) {
    return { ok: false, error: "Anliegen fehlt.", status: 400 };
  }

  const name = String(o.name).trim();
  const email = String(o.email).trim();
  const message = String(o.message).trim();
  if (name.length > 200) {
    return { ok: false, error: "Name zu lang.", status: 400 };
  }
  if (message.length > 4000) {
    return {
      ok: false,
      error: "Anliegen: maximal 4000 Zeichen.",
      status: 400,
    };
  }

  const company =
    typeof o.company === "string" ? o.company.trim().slice(0, 200) : "";

  let phone = "";
  if (o.phone !== undefined && o.phone !== null && o.phone !== "") {
    if (typeof o.phone !== "string") {
      return { ok: false, error: "Ungültige Telefonnummer.", status: 400 };
    }
    phone = o.phone.trim();
    if (phone.length > 0 && (phone.length < 5 || phone.length > 40)) {
      return { ok: false, error: "Telefonnummer ungültig.", status: 400 };
    }
  }

  return {
    ok: true,
    spam: false,
    data: {
      name,
      company,
      email,
      phone,
      message,
      topic: parseOptionalTopic(o.topic),
      location: parseOptionalLocation(o.location),
    },
  };
}
