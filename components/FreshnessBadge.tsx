import { getCurrentMonthYear } from "@/lib/utils/date";

type Props = {
  className?: string;
};

/** Dezentes Freshness-Signal für Hero-Bereiche (Dynamic Freshness Hack). */
export function FreshnessBadge({ className }: Props) {
  return (
    <p
      className={className ?? "mt-3 text-xs font-medium text-muted sm:text-sm"}
    >
      Dokumentierte Qualitätsstandards – Stand:{" "}
      <time dateTime={new Date().toISOString().slice(0, 7)}>
        {getCurrentMonthYear()}
      </time>
    </p>
  );
}
