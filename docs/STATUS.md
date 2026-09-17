# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-24** · Branch `fix/lead-relative-url`.

## Live-Stand

- Kontrast-Fix (PR #23): dunkle Flächen als `.surface-hero` / `.surface-navy` / `.surface-nacht`.
- Header: Kundenportal vorübergehend ausgeblendet.
- Lead-Formular postet same-origin an `/api/lead` (kein externes API-Host).

## Erledigt (dieser PR)

- `KontaktForm` und `CareerForm` fetchen relative Routen `/api/lead` bzw. `/api/career`.
- Externe API-Basis-URL (Client-Env) aus Code, Env-Vorlage und Docs entfernt.
- Hartes IP-Fallback in `lib/config/platform.ts` entfernt.

## Nächste Schritte

- PR mergen, Live-Formular unter HTTPS prüfen.
- Kundenportal im Header wieder einblenden, sobald freigegeben.

## Offen & Risiken

- Stellenliste auf `/karriere` zeigt Leerzustand; es gibt in diesem Repo keine Jobs-API.
