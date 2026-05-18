"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  type ComponentProps,
  type PointerEvent,
} from "react";

export type PrefetchLinkProps = ComponentProps<typeof Link>;

function prefetchPathFromHref(href: PrefetchLinkProps["href"]): string | null {
  if (typeof href !== "string") return null;
  const [path] = href.split("#");
  if (!path || !path.startsWith("/")) return null;
  return path;
}

/**
 * Deaktiviert Default-Prefetch von `Link` und triggert `router.prefetch` bei Pointer-Hover —
 * priorisiert Kern-Routen, ohne jede Link-Intersection zu belasten.
 */
export function PrefetchLink({
  href,
  prefetch = false,
  onPointerEnter,
  ...rest
}: PrefetchLinkProps) {
  const router = useRouter();
  const path = prefetchPathFromHref(href);

  const handlePointerEnter = useCallback(
    (e: PointerEvent<HTMLAnchorElement>) => {
      onPointerEnter?.(e);
      if (path) router.prefetch(path);
    },
    [onPointerEnter, path, router],
  );

  return (
    <Link
      href={href}
      prefetch={prefetch}
      onPointerEnter={handlePointerEnter}
      {...rest}
    />
  );
}
