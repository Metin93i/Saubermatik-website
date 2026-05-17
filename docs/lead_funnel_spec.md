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

Exportierte Typen (strikt, für Props & Payload):

- `LeadServiceType`, `LeadAreaSize`, `LeadTiming`  
- `LeadFunnelSubmission` (kombiniert alle Antworten)  
- `LeadFunnelProps` (`className?`, `onSubmit?`)

## Datenfluss / Backend-Anbindung (geplant)

**Aktueller Stand:** Die Komponente ist eine **Client Component** (`"use client"`). Ohne `onSubmit`-Prop wird nach erfolgreicher Validierung nur der **Success-State** angezeigt (kein Server-Call).

**Empfohlene Produktions-Anbindung (headless, ohne DB im Frontend):**

1. **Route Handler** `app/api/lead/route.ts` (oder externes CRM/Webhook).  
2. `onSubmit` in der Parent-Komponente (Server-seitig nicht direkt möglich – daher Wrapper-Pattern):  
   - Option A: `LeadFunnel` bleibt rein clientseitig; auf der Startseite übergibt ein kleiner Client-Wrapper `onSubmit`, der `fetch("/api/lead", { method: "POST", body: JSON.stringify(payload) })` ausführt.  
   - Option B: Direkt `fetch` zu CRM (HubSpot, Pipedrive, Make/Zapier-Webhook) – **nur** mit serverseitigem Secret-Proxy empfohlen, damit keine Tokens im Browser landen.

3. **Validierung serverseitig** mit Schema (z. B. Zod) + Rate-Limiting + Honeypot/Turnstile gegen Spam.

4. **DSGVO**: Zweckbindung, Speicherdauer, AV-Vertrag mit Subprozessor dokumentieren; Einwilligung nur falls Marketing-Kanal.

## UX-Details

- „Zurück“ ab Schritt 2.  
- Fokus-Ringe und große Touch-Targets (Mobile First).  
- Fehlertexte bei Validierungs- oder Netzwerkfehlern.
