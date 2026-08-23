import Link from "next/link";
import { SITE_WHATSAPP_HREF } from "@/lib/config/site";
import { getBusinessPhone } from "@/lib/phone";

type Props = {
  title?: string;
  text?: string;
  note?: string;
  className?: string;
};

/**
 * Einheitlicher Lead-CTA außerhalb von /kontakt:
 * „Anfrage stellen“ → Formular, plus Telefon und WhatsApp.
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
      className={`rounded-[18px] border border-[rgba(103,191,255,0.18)] bg-nacht bg-blueprint px-6 py-10 text-center sm:px-10 ${className}`}
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-text-dunkel">{text}</p>
      {note ? (
        <p className="mt-2 text-sm leading-6 text-text-dunkel">{note}</p>
      ) : null}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/kontakt#kontakt-anfrage" className="btn-primary">
          Anfrage stellen
        </Link>
        {telHref ? (
          <a href={telHref} className="btn-secondary-on-dark">
            Anrufen · {display}
          </a>
        ) : null}
        <a
          href={SITE_WHATSAPP_HREF}
          className="btn-secondary-on-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
