import Link from "next/link";

export type SaubermatikLogoProps = {
  href?: string;
  className?: string;
  /** `onDark`: Footer / dunkle Flächen — hoher Kontrast zu WCAG. */
  variant?: "onLight" | "onDark";
};

/**
 * CSS-Wordmark ohne Bild — skalierbar, scharf, konsistent mit dem Theme.
 */
export function SaubermatikLogo({
  href = "/",
  className = "",
  variant = "onLight",
}: SaubermatikLogoProps) {
  const isDark = variant === "onDark";
  const first = isDark ? "text-primary-foreground" : "text-primary";
  const second = isDark
    ? "text-[color:var(--logo-on-dark-accent)]"
    : "text-[color:var(--logo-accent)]";

  const inner = (
    <span
      className={`inline-flex select-none items-baseline gap-0 font-sans text-[1.02rem] tracking-[-0.05em] sm:text-[1.08rem] ${className}`}
      translate="no"
    >
      <span className={`font-extrabold uppercase leading-none ${first}`}>
        SAUBER
      </span>
      <span className={`font-extrabold uppercase leading-none ${second}`}>
        MATIK
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--logo-focus-ring)]"
        aria-label="Saubermatik – Startseite"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
