import Image from "next/image";
import Link from "next/link";

export type SaubermatikLogoProps = {
  /** Footer: Logo auf hellem Untergrund (schwarze Schrift im PNG). */
  variant?: "onLight" | "onDark";
};

export function SaubermatikLogo({ variant = "onLight" }: SaubermatikLogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="Saubermatik"
      width={300}
      height={300}
      priority
      className="h-10 w-auto object-contain object-left sm:h-12"
    />
  );

  return (
    <Link
      href="/"
      className="relative z-50 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label="Saubermatik – Startseite"
    >
      {variant === "onDark" ? (
        <span className="inline-flex rounded-lg bg-white px-3 py-1.5 shadow-sm ring-1 ring-white/20">
          {image}
        </span>
      ) : (
        image
      )}
    </Link>
  );
}
