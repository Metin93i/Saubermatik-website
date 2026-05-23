# Lead-Funnel Spezifikation (`components/LeadFunnel.tsx`)

## Einbindung auf `/kontakt` (Dual-Funnel)

- **Standard (`/kontakt`):** `LeadFunnel` (Kunden-Leads), Anker-ID **`kontakt-anfrage`**. Deep-Link von Unterseiten: **`/kontakt#kontakt-anfrage`**.
- **Karriere (`/kontakt?type=karriere`):** `CareerForm` (Bewerbungen), Anker **`bewerbung`**. Deep-Link z. B. **`/kontakt?type=karriere#bewerbung`** (siehe `/karriere`).
- **Technik:** Server liest `searchParams` für linke Spalte; rechte Spalte: **`Suspense`** + `KontaktFormSwitch` mit **`useSearchParams`** (siehe `docs/architecture.md`).
- **Startseite:** Funnel im Hero mit **`#kontakt-anfrage`**; **`HeroQuickSearch`** darüber scrollt je nach Leistung zum **`EngagementCalculator`** (`#engagement-calculator-section`) oder zum Funnel (Prefill via **`lib/hero/quick-search.ts`**).

## Zweck

Das Multi-Step-Formular maximiert **Conversion im Above-the-Fold**-Bereich: wenig kognitive Last, klare Micro-Commitments (Klicks statt Freitext), Kontaktdaten erst am Ende.

## Schritte

| Schritt | Frage | Eingabe |
|--------:|-------|---------|
| 1 | Was dürfen wir für Sie reinigen? | Raster mit **10** Leistungs-Kacheln (Slug-basiert, siehe `lib/config/services.ts`, inkl. `entruempelung`, `sonstiges`) |
| 2 | Wie groß ist die Fläche ungefähr? | Buttons: Bis 100 m², 100–500 m², Über 500 m² |
| 3 | Wann sollen wir starten? | Buttons: Sofort, Nächster Monat, Preisvergleich |
| 4 | Kontaktdaten | Felder: Name, Firma (optional), E-Mail, Telefon; optional **Zusätzliche Objekthinweise** (`textarea`, max. 2000 Zeichen) + Submit |

### Typisierung

Gemeinsame Typen und serverseitige Validierung liegen in `lib/lead/submission.ts`. Die UI-Komponente importiert und re-exportiert:

- `LeadServiceType`, `LeadAreaSize`, `LeadTiming`  
- `LeadFunnelSubmission` (inkl. optionalem Feld **`objectNotes`**)  
- `LeadFunnelProps` (`className?`, `initialServiceType?`)

## API: `POST /api/lead`

**Datei:** `app/api/lead/route.ts`  
**Content-Type:** `application/json`

### Request-Body (Payload)

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| `serviceType` | `LeadServiceType` | ja | Slug einer Leistung aus `LEAD_SERVICE_TYPES` (u. a. `entruempelung`, `sonstiges`, `unterhaltsreinigung`, … — vollständige Liste aus `lib/config/services.ts`) |
| `areaSize` | `LeadAreaSize` | ja | `bis-100` \| `100-500` \| `ueber-500` |
| `timing` | `LeadTiming` | ja | `sofort` \| `naechster-monat` \| `preisvergleich` |
| `name` | string | ja | getrimmt, max. 200 Zeichen |
| `company` | string | nein | optional, max. 200 Zeichen |
| `email` | string | ja | getrimmt, einfache Formatprüfung |
| `phone` | string | ja | getrimmt, 5–40 Zeichen |
| `objectNotes` | string | nein | optional, max. 2000 Zeichen; erscheint im Lead-Mail-Template als eigener Block |

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
**HTML-Template & Betreff:** `lib/lead/email.ts` (`buildGfLeadNotificationHtml` inkl. optionalem Block **Zusätzliche Objekthinweise**, `getLeadEmailSubject`).  
**Versand:** `app/api/lead/route.ts` initialisiert `new Resend(process.env.RESEND_API_KEY)` und ruft `resend.emails.send` mit festem Absender **`RESEND_FROM_LIVE`** (`Saubermatik Anfragen <anfragen@mail.saubermatik-reinigung.de>`) und Empfänger **`LEAD_EMAIL_RECIPIENT`** auf.

### Umgebungsvariablen (Live-System)

| Variable | Pflicht (Live) | Rolle |
|----------|------------------|--------|
| **`RESEND_API_KEY`** | **ja** | API-Key aus dem Resend-Dashboard (nur Server, nie im Client). |
| **`RESEND_FROM_EMAIL`** | optional | Legacy: wird ignoriert, sofern der Code den festen Live-Absender nutzt (`Saubermatik Anfragen <anfragen@mail.saubermatik-reinigung.de>`). |
| **`CAREER_EMAIL_RECIPIENT`** | empfohlen | Separates HR-Postfach für **`POST /api/career`**. Fallback: `LEAD_EMAIL_RECIPIENT`. |
| **`LEAD_EMAIL_RECIPIENT`** | **ja** | Postfach des Geschäftsführers / der Zentrale für Lead-Benachrichtigungen (`POST /api/lead`). |

**Hinweis:** Solange `RESEND_API_KEY` fehlt (typisch lokal), loggt die Route den Lead **strukturiert** per `console.dir` und antwortet mit **`HTTP 200`** und `emailed: false`, damit das Formular nicht „hängen bleibt“.

**Abwärtskompatibilität:** Ist `LEAD_EMAIL_RECIPIENT` nicht gesetzt, wird optional `LEAD_NOTIFICATION_EMAIL` als Empfänger-Fallback gelesen (Migration alter Deployments).

### Troubleshooting: „Postfach bleibt leer“

1. **Browser:** DevTools → Netzwerk → `POST /api/lead` → Antwortbody: `emailed: true` oder `false`. Bei `false` siehe Server-Logs (`hasApiKey` / `hasRecipient` beim Start der Verarbeitung).  
2. **Lokal:** `.env.local` im **Projektroot**, danach **`npm run dev` neu starten**. Ohne `RESEND_API_KEY` landet der Lead nur in der **Konsole**, nicht im Postfach.  
3. **Vercel o. Ä.:** Umgebungsvariablen im Dashboard setzen und **Redeploy**.  
4. **Resend:** [Dashboard](https://resend.com/emails) → Logs; Spam-Ordner prüfen.  
5. **API-Key:** Nach Leak im Chat Key **rotieren** – alter Key kann deaktiviert sein.

## API: `POST /api/career` (Bewerbungen)

**Datei:** `app/api/career/route.ts`  
**Content-Type:** `application/json`

### Request-Body

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| `name` | string | ja | max. 200 Zeichen |
| `email` | string | ja | gültige E-Mail |
| `phone` | string | ja | 5–40 Zeichen |
| `about` | string | ja | Freitext „Über mich“, max. 6000 Zeichen |

**Antwort:** analog zu `/api/lead` mit `{ ok, message, emailed? }`.  
**E-Mail:** `lib/career/email.ts` — Betreff `📝 BEWERBUNG: [Name]`, HTML für HR.

## Hinweise

- Rate-Limiting, Honeypot oder Turnstile sind für Produktion empfohlen (noch nicht implementiert).  
- **DSGVO:** Zweckbindung, Speicherdauer, AV-Vertrag mit Subprozessor dokumentieren; Einwilligung nur falls Marketing-Kanal.
