import Link from "next/link";
import { SITE_WHATSAPP_HREF } from "@/lib/config/site";
import { getBusinessPhone } from "@/lib/phone";

type Props = {
  title?: string;
  text?: string;
  className?: string;
};

const primaryBtn =
  "inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90";

const secondaryBtn =
  "inline-flex h-12 items-center justify-center rounded-sm border border-zinc-300 bg-white px-6 text-sm font-semibold text-foreground transition hover:border-secondary/50 hover:bg-secondary/5";

/**
 * Einheitlicher Lead-CTA außerhalb von /kontakt:
 * „Anfrage stellen“ → Formular, plus Telefon und WhatsApp.
 */
export function AnfrageCta({
  title = "Anfrage stellen",
  text = "Beschreiben Sie uns kurz Ihr Anliegen – wir melden uns innerhalb eines Werktags. Fester Ansprechpartner statt Callcenter.",
  className = "",
}: Props) {
  const { display, telHref } = getBusinessPhone();

  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-muted">{text}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/kontakt#kontakt-anfrage" className={primaryBtn}>
          Anfrage stellen
        </Link>
        {telHref ? (
          <a href={telHref} className={secondaryBtn}>
            Anrufen · {display}
          </a>
        ) : null}
        <a
          href={SITE_WHATSAPP_HREF}
          className={secondaryBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
