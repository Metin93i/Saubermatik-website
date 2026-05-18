type KontaktFormFallbackProps = {
  isCareer: boolean;
};

/** Server-renderbarer Platzhalter für `Suspense` (kein `useSearchParams` hier). */
export function KontaktFormFallback({ isCareer }: KontaktFormFallbackProps) {
  return (
    <div
      className="flex min-h-[28rem] items-center justify-center rounded-2xl border border-dashed border-foreground/15 bg-slate-50/80 px-6 py-12 text-center shadow-inner"
      aria-hidden
    >
      <p className="text-sm font-medium text-muted">
        {isCareer
          ? "Bewerbungsformular wird geladen…"
          : "Anfrageformular wird geladen…"}
      </p>
    </div>
  );
}
