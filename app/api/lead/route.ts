import { sendLeadViaResend } from "@/lib/lead/email";
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

  const emailResult = await sendLeadViaResend(parsed.data);

  if (emailResult.sent === false && emailResult.reason === "provider_error") {
    return Response.json(
      {
        ok: false,
        message:
          "Die Anfrage konnte technisch nicht per E-Mail weitergeleitet werden. Bitte später erneut versuchen oder telefonisch melden.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message: "Anfrage erfolgreich übermittelt.",
    emailed: emailResult.sent,
  });
}
