import type { LeadFunnelSubmission } from "@/lib/lead/submission";

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Lesbare HTML-Mail für interne Benachrichtigung (Resend o. Ä.). */
export function buildLeadEmailHtml(lead: LeadFunnelSubmission): string {
  const rows: [string, string][] = [
    ["Dienstleistung", lead.serviceType],
    ["Fläche", lead.areaSize],
    ["Start / Timing", lead.timing],
    ["Name", lead.name],
    ["Firma", lead.company || "—"],
    ["E-Mail", lead.email],
    ["Telefon", lead.phone],
  ];
  const bodyRows = rows
    .map(
      ([k, v]) =>
        `<tr><th style="text-align:left;padding:8px;border:1px solid #e2e8f0;">${escapeHtml(k)}</th><td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif">
  <h1 style="color:#0c2745">Neue Lead-Anfrage (Saubermatik)</h1>
  <table style="border-collapse:collapse;max-width:560px">${bodyRows}</table>
  </body></html>`;
}

export type SendLeadEmailResult =
  | { sent: true }
  | { sent: false; reason: "missing_api_key" | "missing_config" | "provider_error" };

/**
 * Versand über Resend HTTP API (kein SDK nötig).
 * Setze `RESEND_API_KEY` (Secret) und typischerweise `RESEND_FROM_EMAIL`, `LEAD_NOTIFICATION_EMAIL`.
 */
export async function sendLeadViaResend(
  lead: LeadFunnelSubmission,
): Promise<SendLeadEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey) {
    console.warn(
      "[lead/email] RESEND_API_KEY ist nicht gesetzt – kein E-Mail-Versand.",
    );
    return { sent: false, reason: "missing_api_key" };
  }
  if (!from || !to) {
    console.warn(
      "[lead/email] RESEND_FROM_EMAIL oder LEAD_NOTIFICATION_EMAIL fehlt.",
    );
    return { sent: false, reason: "missing_config" };
  }

  const subject = `Neue Anfrage: ${lead.name} (${lead.serviceType})`;
  const html = buildLeadEmailHtml(lead);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    console.error("[lead/email] Resend-Fehler:", response.status, errText);
    return { sent: false, reason: "provider_error" };
  }

  return { sent: true };
}
