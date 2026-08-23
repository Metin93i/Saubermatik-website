import Link from "next/link";
import type { ReactNode } from "react";

export type LeitstandButtonVariant =
  | "primary"
  | "secondary-on-dark"
  | "secondary-on-light";

const VARIANT_CLASS: Record<LeitstandButtonVariant, string> = {
  primary: "btn-primary",
  "secondary-on-dark": "btn-secondary-on-dark",
  "secondary-on-light": "btn-secondary",
};

type Props = {
  variant: LeitstandButtonVariant;
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function LeitstandButton({
  variant,
  href,
  children,
  className = "",
  external = false,
}: Props) {
  const cls = `${VARIANT_CLASS[variant]} ${className}`.trim();
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
