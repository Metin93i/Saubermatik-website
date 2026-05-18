import { isValidEmailFormat } from "@/lib/lead/submission";

export type CareerApplication = {
  name: string;
  email: string;
  phone: string;
  about: string;
};

export type ParseCareerResult =
  | { ok: true; data: CareerApplication }
  | { ok: false; error: string; status: number };

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export function parseCareerSubmission(body: unknown): ParseCareerResult {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Ungültiger JSON-Body.", status: 400 };
  }

  const o = body as Record<string, unknown>;

  if (!isNonEmptyString(o.name)) {
    return { ok: false, error: "Name fehlt.", status: 400 };
  }
  if (!isNonEmptyString(o.email) || !isValidEmailFormat(o.email)) {
    return { ok: false, error: "Ungültige E-Mail-Adresse.", status: 400 };
  }
  if (!isNonEmptyString(o.phone)) {
    return { ok: false, error: "Telefon fehlt.", status: 400 };
  }
  if (!isNonEmptyString(o.about)) {
    return { ok: false, error: "Bitte kurz zu Ihrer Person / Motivation schreiben.", status: 400 };
  }

  const name = String(o.name).trim().slice(0, 200);
  const email = String(o.email).trim();
  const phone = String(o.phone).trim();
  const about = String(o.about).trim();

  if (phone.length < 5 || phone.length > 40) {
    return { ok: false, error: "Telefonnummer ungültig.", status: 400 };
  }
  if (about.length > 6000) {
    return { ok: false, error: "Text „Über mich“: maximal 6000 Zeichen.", status: 400 };
  }

  return { ok: true, data: { name, email, phone, about } };
}
