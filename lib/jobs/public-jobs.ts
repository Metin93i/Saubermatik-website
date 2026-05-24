/** Öffentliche Stellenanzeige aus dem SaaS-Backend (`GET /jobs/public`). */
export type PublicJob = {
  id: string;
  title: string;
  location: string;
  description: string;
};

function pickString(obj: Record<string, unknown>, keys: readonly string[]): string {
  for (const key of keys) {
    const val = obj[key];
    if (typeof val === "string" && val.trim()) return val.trim();
  }
  return "";
}

function normalizeJob(raw: unknown): PublicJob | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;

  const idRaw = obj.id ?? obj.uuid ?? obj.job_id;
  const title = pickString(obj, ["title", "job_title", "name", "position"]);
  if (!title) return null;

  const id =
    typeof idRaw === "string" || typeof idRaw === "number"
      ? String(idRaw)
      : title;

  const location = pickString(obj, [
    "location",
    "standort",
    "city",
    "ort",
    "workplace",
  ]);

  const description = pickString(obj, [
    "description",
    "short_description",
    "summary",
    "excerpt",
    "content",
  ]);

  return { id, title, location, description };
}

export function parsePublicJobsPayload(data: unknown): PublicJob[] {
  const list = (() => {
    if (Array.isArray(data)) return data;
    if (data && typeof data === "object") {
      const obj = data as Record<string, unknown>;
      for (const key of ["jobs", "data", "results", "items"] as const) {
        if (Array.isArray(obj[key])) return obj[key];
      }
    }
    return [];
  })();

  return list
    .map(normalizeJob)
    .filter((job): job is PublicJob => job !== null);
}

/** Kurzer Auszug für Kacheln (Plaintext, max. Zeichen). */
export function excerptJobDescription(text: string, max = 140): string {
  const plain = text
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= max) return plain;
  return `${plain.slice(0, max).trimEnd()}…`;
}

export function buildJobApplyMailto(jobTitle: string): string {
  const to =
    process.env.NEXT_PUBLIC_CAREER_EMAIL?.trim() ||
    "info@saubermatik-reinigung.de";
  const subject = encodeURIComponent(`Bewerbung: ${jobTitle}`);
  return `mailto:${to}?subject=${subject}`;
}
