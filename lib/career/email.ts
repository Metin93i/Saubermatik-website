import type { CareerApplication } from "@/lib/career/submission";

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function getCareerEmailSubject(app: CareerApplication): string {
  const safe = app.name.replace(/\s+/g, " ").trim().slice(0, 80);
  return `📝 BEWERBUNG: ${safe}`;
}

/** HTML-Mail für HR / Personal (tabellenbasiert, mailclient-tauglich). */
export function buildCareerHrNotificationHtml(app: CareerApplication): string {
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
              <p style="margin:0;font-size:12px;font-weight:600;color:#fed7aa;letter-spacing:0.12em;text-transform:uppercase;">Saubermatik · HR</p>
              <h1 style="margin:10px 0 0;font-size:22px;line-height:1.25;color:#f8fafc;font-weight:700;">Neue Bewerbung (Website)</h1>
              <p style="margin:8px 0 0;font-size:14px;line-height:1.5;color:#cbd5e1;">Eingang über Karriere-Kanal – bitte im ATS / Postfach weiterverarbeiten.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 18px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0;">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                    <div style="font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Name</div>
                    <div style="margin-top:4px;font-size:16px;font-weight:600;color:#0f172a;">${escapeHtml(app.name)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                    <table role="presentation" width="100%"><tr>
                      <td width="50%" style="padding-right:8px;vertical-align:top;">
                        <div style="font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Telefon</div>
                        <div style="margin-top:4px;font-size:15px;font-weight:600;"><a href="tel:${encodeURIComponent(app.phone.replace(/\s/g, ""))}" style="color:#ea580c;text-decoration:none;">${escapeHtml(app.phone)}</a></div>
                      </td>
                      <td width="50%" style="padding-left:8px;vertical-align:top;">
                        <div style="font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">E-Mail</div>
                        <div style="margin-top:4px;font-size:15px;font-weight:600;"><a href="mailto:${escapeHtml(app.email)}" style="color:#ea580c;text-decoration:none;">${escapeHtml(app.email)}</a></div>
                      </td>
                    </tr></table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0 0;">
                    <div style="font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Über mich / Motivation</div>
                    <div style="margin-top:8px;padding:14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;font-size:14px;line-height:1.55;color:#0f172a;white-space:pre-wrap;">${escapeHtml(app.about)}</div>
                  </td>
                </tr>
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
