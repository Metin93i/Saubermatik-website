# Lead-Funnel Spezifikation (`components/LeadFunnel.tsx`)

## Zweck

Das Multi-Step-Formular maximiert **Conversion im Above-the-Fold**-Bereich: wenig kognitive Last, klare Micro-Commitments (Klicks statt Freitext), Kontaktdaten erst am Ende.

## Schritte

| Schritt | Frage | Eingabe |
|--------:|-------|---------|
| 1 | Was dürfen wir für Sie reinigen? | Buttons: Büro/Gewerbe, Glas/Fenster, Treppenhaus, Bauendreinigung |
| 2 | Wie groß ist die Fläche ungefähr? | Buttons: Bis 100 m², 100–500 m², Über 500 m² |
| 3 | Wann sollen wir starten? | Buttons: Sofort, Nächster Monat, Preisvergleich |
| 4 | Kontaktdaten | Felder: Name, Firma (optional), E-Mail, Telefon + Submit |

### Typisierung

Gemeinsame Typen und serverseitige Validierung liegen in `lib/lead/submission.ts`. Die UI-Komponente importiert und re-exportiert:

- `LeadServiceType`, `LeadAreaSize`, `LeadTiming`  
- `LeadFunnelSubmission` (kombiniert alle Antworten)  
- `LeadFunnelProps` (`className?`)

## API: `POST /api/lead`

**Datei:** `app/api/lead/route.ts`  
**Content-Type:** `application/json`

### Request-Body (Payload)

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| `serviceType` | `LeadServiceType` | ja | `buero-gewerbe` \| `glas-fenster` \| `treppenhaus` \| `bauendreinigung` |
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
- `emailed: false` – Anfrage ist gültig angenommen, aber z. B. `RESEND_API_KEY` oder Absender/Empfänger-Env fehlt (siehe unten); kein Provider-Fehler.

### Fehlerantworten

- **`400`** – Validierungsfehler, Body enthält `{ "ok": false, "message": "<Grund>" }`.  
- **`400`** – Ungültiges JSON: `{ "ok": false, "message": "Ungültiges JSON." }`.  
- **`502`** – Resend liefert einen Fehler trotz gesetztem Key: `{ "ok": false, "message": "…" }`.

### UI-Verhalten (`LeadFunnel`)

- **`isLoading`:** Submit-Button deaktiviert, Spinner + Text „Wird gesendet…“, Eingaben gesperrt.  
- **`isSuccess`:** Dankesseite mit 60-Minuten-Versprechen (kein weiteres Absenden nötig).  
- **`isError`:** Server- oder Netzwerkmeldung unter dem Formular (`role="alert"`).

## E-Mail-Integration (Resend)

**Modul:** `lib/lead/email.ts`

- **`RESEND_API_KEY`** (Secret, nur Server): Bearer-Token für `https://api.resend.com/emails`. Ohne Key: kein Versand, API liefert dennoch `200` mit `emailed: false`.  
- **`RESEND_FROM_EMAIL`:** verifizierte Absender-Adresse (Resend-Domain).  
- **`LEAD_NOTIFICATION_EMAIL`:** Zielpostfach für neue Leads.

HTML wird in `buildLeadEmailHtml()` aus dem Payload gebaut; der Versand ist in `sendLeadViaResend()` gekapselt.

## Hinweise

- Rate-Limiting, Honeypot oder Turnstile sind für Produktion empfohlen (noch nicht implementiert).  
- **DSGVO:** Zweckbindung, Speicherdauer, AV-Vertrag mit Subprozessor dokumentieren; Einwilligung nur falls Marketing-Kanal.
