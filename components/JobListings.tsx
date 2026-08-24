/**
 * Öffentliche Stellenliste. Es gibt in diesem Repo keine Jobs-API;
 * ohne externes Backend bleibt der Leerzustand.
 */
export function JobListings() {
  return (
    <p className="rounded-sm border border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-sm text-muted sm:text-base">
      Aktuell keine offenen Stellen.
    </p>
  );
}
