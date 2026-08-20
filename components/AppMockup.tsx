type Props = {
  className?: string;
};

export function AppMockup({ className = "" }: Props) {
  return (
    <div className={className}>
      <p className="text-xs font-bold uppercase tracking-wide text-foreground">
        Saubermatik-Plattform
      </p>
      <p className="mt-1 text-xs leading-snug text-muted sm:text-sm sm:leading-6">
        Dokumentierte Einsätze über die Plattform — am Rechner und über mobile
        Endgeräte (Handy, auch Platform-App).
      </p>
    </div>
  );
}
