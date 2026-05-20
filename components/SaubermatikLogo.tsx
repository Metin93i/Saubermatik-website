import Image from "next/image";
import Link from "next/link";

export type SaubermatikLogoProps = {
  /** Footer: Logo auf hellem Untergrund (dunkle Schrift im PNG). */
  variant?: "onLight" | "onDark";
};

/** Logo-Intrinsic 1301×229 – Breite skaliert über h-* + w-auto */
const LOGO_WIDTH = 1301;
const LOGO_HEIGHT = 229;

export function SaubermatikLogo({ variant = "onLight" }: SaubermatikLogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="Saubermatik – Reinigungsservice"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority
      className="h-12 w-auto max-w-[min(100%,18rem)] object-contain object-left sm:h-14 md:h-16"
      style={{ width: "auto" }}
    />
  );

  return (
    <Link
      href="/"
      className="relative z-50 flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label="Saubermatik – Startseite"
    >
      {variant === "onDark" ? (
        <span className="inline-flex rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-white/20">
          {image}
        </span>
      ) : (
        image
      )}
    </Link>
  );
}
