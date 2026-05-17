import { Resend } from "resend";
import {
  buildGfLeadNotificationHtml,
  getLeadEmailSubject,
} from "@/lib/lead/email";
import { parseLeadSubmission } from "@/lib/lead/submission";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "Ungültiges JSON." },
      { status: 400 },
    );
  }

  const parsed = parseLeadSubmission(json);
  if (!parsed.ok) {
    return Response.json(
      { ok: false, message: parsed.error },
      { status: parsed.status },
    );
  }

  const lead = parsed.data;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const recipient =
    process.env.LEAD_EMAIL_RECIPIENT?.trim() ||
    process.env.LEAD_NOTIFICATION_EMAIL?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey) {
    console.log(
      "[lead] Kein RESEND_API_KEY – Fallback: Lead strukturiert geloggt (HTTP 200 für UI).",
    );
    console.dir(
      { receivedAt: new Date().toISOString(), ...lead },
      { depth: null },
    );
    return Response.json({
      ok: true,
      message:
        "Anfrage übermittelt. (Entwicklung: E-Mail nicht konfiguriert – Daten in der Server-Konsole.)",
      emailed: false,
    });
  }

  if (!from || !recipient) {
    console.warn(
      "[lead] RESEND_API_KEY gesetzt, aber RESEND_FROM_EMAIL oder LEAD_EMAIL_RECIPIENT fehlt – Lead:",
    );
    console.dir(
      { receivedAt: new Date().toISOString(), ...lead },
      { depth: null },
    );
    return Response.json({
      ok: true,
      message:
        "Anfrage übermittelt. (Hinweis: Absender oder Empfänger fehlt – siehe Server-Logs.)",
      emailed: false,
    });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: recipient,
    subject: getLeadEmailSubject(lead),
    html: buildGfLeadNotificationHtml(lead),
  });

  if (error) {
    console.error("[lead] Resend:", error);
    return Response.json(
      {
        ok: false,
        message:
          "Die Benachrichtigungs-E-Mail konnte nicht versendet werden. Bitte später erneut versuchen oder telefonisch melden.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message: "Anfrage erfolgreich übermittelt.",
    emailed: true,
  });
}
