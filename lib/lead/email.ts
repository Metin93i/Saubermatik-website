import { SERVICES } from "@/lib/config/services";
import type { LeadAreaSize, LeadFunnelSubmission, LeadTiming } from "@/lib/lead/submission";

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const AREA_LABELS: Record<LeadAreaSize, string> = {
  "bis-100": "Bis ca. 100 m²",
  "100-500": "Ca. 100–500 m²",
  "ueber-500": "Über ca. 500 m²",
};

const TIMING_LABELS: Record<LeadTiming, string> = {
  sofort: "Sofort / dringend",
  "naechster-monat": "Nächster Monat",
  preisvergleich: "Erst Preisvergleich / Beratung",
};

function serviceTitle(slug: string): string {
  return SERVICES.find((s) => s.slug === slug)?.title ?? slug;
}

export function getLeadEmailSubject(lead: LeadFunnelSubmission): string {
  return `Neuer Lead über Saubermatik.de – ${serviceTitle(lead.serviceType)} – ${lead.name}`;
}

/** HTML-E-Mail für den Geschäftsführer (Resend). */
export function buildGfLeadNotificationHtml(lead: LeadFunnelSubmission): string {
  const rows: [string, string][] = [
    ["Leistung", serviceTitle(lead.serviceType)],
    ["Fläche", AREA_LABELS[lead.areaSize]],
    ["Start / Timing", TIMING_LABELS[lead.timing]],
    ["Name", lead.name],
    ["Firma", lead.company.trim() || "—"],
    ["E-Mail", lead.email],
    ["Telefon", lead.phone],
  ];
  const bodyRows = rows
    .map(
      ([k, v]) =>
        `<tr><th style="text-align:left;padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;width:160px;font-size:14px;color:#0f172a;">${escapeHtml(k)}</th><td style="padding:10px 12px;border:1px solid #e2e8f0;font-size:14px;color:#334155;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;background:#f1f5f9;font-family:system-ui,-apple-system,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 40px rgba(15,39,69,0.08);">
          <tr>
            <td style="background:#0c2745;padding:20px 24px;">
              <p style="margin:0;font-size:13px;font-weight:600;color:#5eead4;letter-spacing:0.02em;">Saubermatik · Lead-Benachrichtigung</p>
              <h1 style="margin:8px 0 0;font-size:20px;line-height:1.3;color:#f8fafc;">Neuer Lead über Saubermatik.de!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">Es liegt eine neue Anfrage aus dem Lead-Funnel vor. Daten im Überblick:</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${bodyRows}</table>
              <p style="margin:20px 0 0;font-size:13px;color:#64748b;">Gesendet automatisch · Antworten Sie dem Kunden direkt auf die angegebene E-Mail-Adresse.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
