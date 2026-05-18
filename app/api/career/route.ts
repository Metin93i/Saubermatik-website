import { Resend } from "resend";
import {
  buildCareerHrNotificationHtml,
  getCareerEmailSubject,
} from "@/lib/career/email";
import { parseCareerSubmission } from "@/lib/career/submission";
import { RESEND_FROM_LIVE } from "@/lib/lead/email";

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

  const parsed = parseCareerSubmission(json);
  if (!parsed.ok) {
    return Response.json(
      { ok: false, message: parsed.error },
      { status: parsed.status },
    );
  }

  const app = parsed.data;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const recipient =
    process.env.CAREER_EMAIL_RECIPIENT?.trim() ||
    process.env.LEAD_EMAIL_RECIPIENT?.trim() ||
    process.env.LEAD_NOTIFICATION_EMAIL?.trim();

  console.log("[career] Eingang verarbeitet", {
    hasApiKey: Boolean(apiKey),
    hasRecipient: Boolean(recipient),
  });

  if (!apiKey) {
    console.log(
      "[career] Kein RESEND_API_KEY – Fallback: Bewerbung strukturiert geloggt (HTTP 200 für UI).",
    );
    console.dir({ receivedAt: new Date().toISOString(), ...app }, { depth: null });
    return Response.json({
      ok: true,
      message:
        "Bewerbung übermittelt. (Entwicklung: E-Mail nicht konfiguriert – Daten in der Server-Konsole.)",
      emailed: false,
    });
  }

  if (!recipient) {
    console.warn(
      "[career] RESEND_API_KEY gesetzt, aber CAREER_EMAIL_RECIPIENT / LEAD_EMAIL_RECIPIENT fehlt – Bewerbung:",
    );
    console.dir({ receivedAt: new Date().toISOString(), ...app }, { depth: null });
    return Response.json({
      ok: true,
      message:
        "Bewerbung übermittelt. (Hinweis: Empfänger fehlt – siehe Server-Logs.)",
      emailed: false,
    });
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: RESEND_FROM_LIVE,
    to: [recipient],
    subject: getCareerEmailSubject(app),
    html: buildCareerHrNotificationHtml(app),
  });

  if (error) {
    console.error("[career] Resend send failed:", error);
    return Response.json(
      {
        ok: false,
        message:
          "Die Bewerbungs-E-Mail konnte nicht versendet werden. Bitte später erneut versuchen oder telefonisch melden.",
      },
      { status: 502 },
    );
  }

  console.log("[career] Resend: E-Mail akzeptiert", { id: data?.id ?? null, to: recipient });

  return Response.json({
    ok: true,
    message: "Bewerbung erfolgreich übermittelt.",
    emailed: true,
  });
}
