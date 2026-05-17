# Lead-Funnel Spezifikation (`components/LeadFunnel.tsx`)

## Zweck

Das Multi-Step-Formular maximiert **Conversion im Above-the-Fold**-Bereich: wenig kognitive Last, klare Micro-Commitments (Klicks statt Freitext), Kontaktdaten erst am Ende.

## Schritte

| Schritt | Frage | Eingabe |
|--------:|-------|---------|
| 1 | Was dürfen wir für Sie reinigen? | Raster mit **8** Leistungen (Slug-basiert, siehe `lib/config/services.ts`) |
| 2 | Wie groß ist die Fläche ungefähr? | Buttons: Bis 100 m², 100–500 m², Über 500 m² |
| 3 | Wann sollen wir starten? | Buttons: Sofort, Nächster Monat, Preisvergleich |
| 4 | Kontaktdaten | Felder: Name, Firma (optional), E-Mail, Telefon + Submit |

### Typisierung

Gemeinsame Typen und serverseitige Validierung liegen in `lib/lead/submission.ts`. Die UI-Komponente importiert und re-exportiert:

- `LeadServiceType`, `LeadAreaSize`, `LeadTiming`  
- `LeadFunnelSubmission` (kombiniert alle Antworten)  
- `LeadFunnelProps` (`className?`, `initialServiceType?`)

## API: `POST /api/lead`

**Datei:** `app/api/lead/route.ts`  
**Content-Type:** `application/json`

### Request-Body (Payload)

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| `serviceType` | `LeadServiceType` | ja | Slug einer Leistung, z. B. `unterhaltsreinigung`, `fenster-glasreinigung`, `treppenhausreinigung`, `hausmeisterservice`, `gruenanlagenpflege`, `winterdienst`, `grundreinigung`, `fassadenreinigung` |
| `areaSize` | `LeadAreaSize` | ja | `bis-100` \| `100-500` \| `ueber-500` |
| `timing` | `LeadTiming` | ja | `sofort` \| `naechster-monat` \| `preisvergleich` |
| `name` | string | ja | getrimmt, max. 200 Zeichen |
| `company` | string | nein | optional, max. 200 Zeichen |
| `email` | string | ja | getrimmt, einfache Formatprüfung |
| `phone` | string | ja | getrimmt, 5–40 Zeichen |

Validierung erfolgt zentral über `parseLeadSubmission()` in `lib/lead/submission.ts` (keine leeren Pflichtfelder, Enum-Werte, E-Mail-Struktur).

### Erfolgsantwort (`HTTP 200`)

```json
{
  "ok": true,
  "message": "Anfrage erfolgreich übermittelt.",
  "emailed": true
}
```

- `emailed: true` – Resend hat die Benachrichtigungs-Mail akzeptiert.  
- `emailed: false` – Anfrage ist gültig angenommen, aber z. B. ohne `RESEND_API_KEY` (Entwicklung: strukturierter **Console-Log**) oder ohne vollständige Mail-Konfiguration; die UI bleibt funktionsfähig (`HTTP 200`).

### Fehlerantworten

- **`400`** – Validierungsfehler, Body enthält `{ "ok": false, "message": "<Grund>" }`.  
- **`400`** – Ungültiges JSON: `{ "ok": false, "message": "Ungültiges JSON." }`.  
- **`502`** – Resend meldet einen Fehler trotz gesetztem Key: `{ "ok": false, "message": "…" }`.

### UI-Verhalten (`LeadFunnel`)

- **`isLoading`:** Submit-Button deaktiviert, Spinner + Text „Wird gesendet…“, Eingaben gesperrt.  
- **`isSuccess`:** Dankesseite mit 60-Minuten-Versprechen (kein weiteres Absenden nötig).  
- **`isError`:** Server- oder Netzwerkmeldung unter dem Formular (`role="alert"`).

## E-Mail-Integration (Resend, Produktion)

**Paket:** `resend` (offizieller Node-Client).  
**HTML-Template & Betreff:** `lib/lead/email.ts` (`buildGfLeadNotificationHtml`, `getLeadEmailSubject`).  
**Versand:** `app/api/lead/route.ts` initialisiert `new Resend(process.env.RESEND_API_KEY)` und ruft `resend.emails.send` mit festem Absender **`RESEND_FROM_LIVE`** (`Saubermatik Anfragen <anfragen@mail.saubermatik-reinigung.de>`) und Empfänger **`LEAD_EMAIL_RECIPIENT`** auf.

### Umgebungsvariablen (Live-System)

| Variable | Pflicht (Live) | Rolle |
|----------|------------------|--------|
| **`RESEND_API_KEY`** | **ja** | API-Key aus dem Resend-Dashboard (nur Server, nie im Client). |
| **`RESEND_FROM_EMAIL`** | optional | Legacy: wird ignoriert, sofern der Code den festen Live-Absender nutzt (`Saubermatik Anfragen <anfragen@mail.saubermatik-reinigung.de>`). |
| **`LEAD_EMAIL_RECIPIENT`** | **ja** | Postfach des Geschäftsführers / der Zentrale für Lead-Benachrichtigungen. |

**Hinweis:** Solange `RESEND_API_KEY` fehlt (typisch lokal), loggt die Route den Lead **strukturiert** per `console.dir` und antwortet mit **`HTTP 200`** und `emailed: false`, damit das Formular nicht „hängen bleibt“.

**Abwärtskompatibilität:** Ist `LEAD_EMAIL_RECIPIENT` nicht gesetzt, wird optional `LEAD_NOTIFICATION_EMAIL` als Empfänger-Fallback gelesen (Migration alter Deployments).

## Hinweise

- Rate-Limiting, Honeypot oder Turnstile sind für Produktion empfohlen (noch nicht implementiert).  
- **DSGVO:** Zweckbindung, Speicherdauer, AV-Vertrag mit Subprozessor dokumentieren; Einwilligung nur falls Marketing-Kanal.
