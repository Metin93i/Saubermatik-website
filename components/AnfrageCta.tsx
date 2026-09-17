import { LeitstandButton } from "@/components/LeitstandButton";
import { SITE_WHATSAPP_HREF } from "@/lib/config/site";
import { getBusinessPhone } from "@/lib/phone";

type Props = {
  title?: string;
  text?: string;
  note?: string;
  className?: string;
};

/**
 * Einheitlicher Lead-CTA außerhalb von /kontakt.
 * Dunkle Leitstand-Klammer — ohne Umbau der Aufrufer-Seiten.
 */
export function AnfrageCta({
  title = "Anfrage stellen",
  text = "Beschreiben Sie uns kurz Ihr Anliegen – wir melden uns innerhalb eines Werktags. Fester Ansprechpartner statt Callcenter.",
  note,
  className = "",
}: Props) {
  const { display, telHref } = getBusinessPhone();

  return (
    <div
      className={`surface-nacht rounded-[18px] border border-[rgba(103,191,255,0.18)] px-6 py-10 text-center sm:px-10 ${className}`}
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-text-dunkel">{text}</p>
      {note ? (
        <p className="mt-2 text-sm leading-6 text-text-dunkel">{note}</p>
      ) : null}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <LeitstandButton variant="primary" href="/kontakt#kontakt-anfrage">
          Anfrage stellen
        </LeitstandButton>
        {telHref ? (
          <LeitstandButton variant="secondary-on-dark" href={telHref}>
            Anrufen · {display}
          </LeitstandButton>
        ) : null}
        <LeitstandButton
          variant="secondary-on-dark"
          href={SITE_WHATSAPP_HREF}
          external
        >
          WhatsApp
        </LeitstandButton>
      </div>
    </div>
  );
}
