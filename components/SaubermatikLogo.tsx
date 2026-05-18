import Image from "next/image";
import Link from "next/link";

export type SaubermatikLogoProps = {
  href?: string;
  className?: string;
  /** `onDark`: Footer – Logo auf hellem Container (schwarze Schrift im PNG). */
  variant?: "onLight" | "onDark";
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--logo-focus-ring)]";

export function SaubermatikLogo({
  href = "/",
  className = "",
  variant = "onLight",
}: SaubermatikLogoProps) {
  const isDark = variant === "onDark";

  const image = (
    <Image
      src="/logo.png"
      alt="Saubermatik – Reinigungsservice"
      width={280}
      height={72}
      className={`h-9 w-auto object-contain sm:h-10 md:h-12 ${className}`}
      priority
    />
  );

  const inner = isDark ? (
    <span className="inline-flex rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-white/20">
      {image}
    </span>
  ) : (
    image
  );

  if (href) {
    return (
      <Link href={href} className={`inline-flex shrink-0 ${focusRing}`} aria-label="Saubermatik – Startseite">
        {inner}
      </Link>
    );
  }

  return inner;
}
