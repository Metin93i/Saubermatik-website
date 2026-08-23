import Image from "next/image";

type Props = {
  className?: string;
};

const PORTAL_ITEMS = [
  "Übersicht über alle Objekte",
  "Einsätze mit Nachweis",
  "Offene Meldungen im Blick",
] as const;

const QR_ITEMS = [
  "Für Mieter und Verwaltung",
  "Ohne App, ohne Anmeldung",
  "Alles wird dokumentiert",
] as const;

const STEPS = [
  { n: "1", title: "Scannen", text: "QR-Code im Objekt erfassen" },
  { n: "2", title: "Melden", text: "Anliegen kurz beschreiben" },
  { n: "3", title: "Erledigt", text: "dokumentiert im Portal" },
] as const;

export function SecureOpsFlyerCard({ className = "" }: Props) {
  return (
    <div
      className={`rounded-[20px] border border-[rgba(103,191,255,0.22)] bg-navy p-6 sm:p-8 ${className}`}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/images/secureops-schild-icon.png"
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 object-contain mix-blend-screen"
        />
        <div>
          <p className="font-display text-xl font-bold leading-none text-white">
            Secure<span className="text-glow">Ops</span>
          </p>
          <p className="mt-1 text-xs text-text-dunkel">by Saubermatik</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="font-display text-sm font-bold text-glow">01</p>
          <h3 className="mt-1 text-lg font-bold text-white">Kundenportal</h3>
          <p className="mt-2 text-sm leading-6 text-text-dunkel">
            Ihre gesamte Objektbetreuung an einem Ort – jederzeit einsehbar.
          </p>
          <ul className="mt-4 space-y-2">
            {PORTAL_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-white"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-secureops"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-bold text-glow">02</p>
          <h3 className="mt-1 text-lg font-bold text-white">QR-Meldesystem</h3>
          <p className="mt-2 text-sm leading-6 text-text-dunkel">
            Scannen, melden – landet sofort bei unserem Team.
          </p>
          <ul className="mt-4 space-y-2">
            {QR_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-white"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-secureops"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid items-center gap-6 rounded-2xl bg-navy-inset p-5 sm:grid-cols-[auto_1fr] sm:p-6">
        <div className="mx-auto w-fit rounded-xl bg-white p-3">
          <Image
            src="/images/qr-secureops.png"
            alt="QR-Code zum Scannen im Objekt"
            width={120}
            height={120}
            className="h-[120px] w-[120px]"
          />
          <p className="mt-2 text-center text-[11px] leading-4 text-zinc-600">
            Mit dem Handy scannen
          </p>
        </div>
        <ol className="space-y-4">
          {STEPS.map((step) => (
            <li key={step.n} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secureops text-xs font-bold text-white">
                {step.n}
              </span>
              <div>
                <p className="font-bold text-white">{step.title}</p>
                <p className="text-sm text-text-dunkel">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
