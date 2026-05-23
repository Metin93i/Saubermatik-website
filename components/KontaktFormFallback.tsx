type KontaktFormFallbackProps = {
  isCareer: boolean;
};

/** Server-renderbarer Platzhalter für `Suspense` (kein `useSearchParams` hier). */
export function KontaktFormFallback({ isCareer }: KontaktFormFallbackProps) {
  return (
    <div
      className="flex min-h-[28rem] items-center justify-center rounded-sm border border-dashed border-zinc-300 bg-zinc-100 px-6 py-12 text-center"
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
