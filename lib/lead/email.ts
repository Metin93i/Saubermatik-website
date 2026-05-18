import { SERVICES } from "@/lib/config/services";
import type { LeadAreaSize, LeadFunnelSubmission, LeadTiming } from "@/lib/lead/submission";

/** Verifizierte Resend-Domain (Subdomain mail. zwingend im Absender). */
export const RESEND_FROM_LIVE =
  "Saubermatik Anfragen <anfragen@mail.saubermatik-reinigung.de>" as const;

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

function nameOrCompanyLine(lead: LeadFunnelSubmission): string {
  const company = lead.company.trim();
  if (company) return `${lead.name} / ${company}`;
  return lead.name;
}

export function getLeadEmailSubject(lead: LeadFunnelSubmission): string {
  return `🔴 NEUE ANFRAGE: ${serviceTitle(lead.serviceType)} von ${nameOrCompanyLine(lead)}`;
}

function metricCell(label: string, value: string): string {
  return `<td width="50%" style="vertical-align:top;padding:6px;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <tr><td style="padding:10px 14px 4px;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">${escapeHtml(label)}</td></tr>
    <tr><td style="padding:0 14px 12px;font-size:15px;font-weight:600;line-height:1.35;color:#0f172a;">${escapeHtml(value)}</td></tr>
  </table>
</td>`;
}

/** HTML-E-Mail für info@… – tabellenbasiertes „Grid“ (Mail-Client-tauglich). */
export function buildGfLeadNotificationHtml(lead: LeadFunnelSubmission): string {
  const service = serviceTitle(lead.serviceType);
  const area = AREA_LABELS[lead.areaSize];
  const timing = TIMING_LABELS[lead.timing];

  const gridTop = `<tr>${metricCell("Leistung", service)}${metricCell("Fläche", area)}</tr>
<tr>${metricCell("Zeitpunkt", timing)}${metricCell("Name / Firma", nameOrCompanyLine(lead))}</tr>`;

  const contactRow = `<tr>
  <td colspan="2" style="padding:6px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0;background:#09090b;border-radius:10px;overflow:hidden;">
      <tr>
        <td width="50%" style="padding:14px 16px;border-right:1px solid rgba(248,250,252,0.15);">
          <div style="font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#94a3b8;">Telefon</div>
          <div style="margin-top:6px;font-size:16px;font-weight:600;"><a href="tel:${encodeURIComponent(lead.phone.replace(/\s/g, ""))}" style="color:#fb923c;text-decoration:none;">${escapeHtml(lead.phone)}</a></div>
        </td>
        <td width="50%" style="padding:14px 16px;">
          <div style="font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#94a3b8;">E-Mail</div>
          <div style="margin-top:6px;font-size:16px;font-weight:600;"><a href="mailto:${escapeHtml(lead.email)}" style="color:#fb923c;text-decoration:none;">${escapeHtml(lead.email)}</a></div>
        </td>
      </tr>
    </table>
  </td>
</tr>`;

  const notes = lead.objectNotes?.trim();
  const objectNotesRow = notes
    ? `<tr>
  <td colspan="2" style="padding:6px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
      <tr><td style="padding:10px 14px 4px;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Zusätzliche Objekthinweise</td></tr>
      <tr><td style="padding:0 14px 14px;font-size:14px;line-height:1.5;color:#0f172a;white-space:pre-wrap;">${escapeHtml(notes)}</td></tr>
    </table>
  </td>
</tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;background:#e2e8f0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:28px 14px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 12px 48px rgba(15,39,69,0.12);">
          <tr>
            <td style="background:linear-gradient(135deg,#f97316 0%,#09090b 100%);padding:22px 26px;">
              <p style="margin:0;font-size:12px;font-weight:600;color:#fed7aa;letter-spacing:0.12em;text-transform:uppercase;">Saubermatik · Lead</p>
              <h1 style="margin:10px 0 0;font-size:22px;line-height:1.25;color:#f8fafc;font-weight:700;">Neue Website-Anfrage</h1>
              <p style="margin:8px 0 0;font-size:14px;line-height:1.5;color:#cbd5e1;">Alle Kerninfos auf einen Blick – Antwort direkt an den Kunden.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 18px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                ${gridTop}
                ${contactRow}
                ${objectNotesRow}
              </table>
              <p style="margin:18px 0 0;font-size:12px;line-height:1.5;color:#64748b;text-align:center;">Automatisch gesendet von anfragen@mail.saubermatik-reinigung.de</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
