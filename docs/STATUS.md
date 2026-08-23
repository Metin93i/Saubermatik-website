# STATUS · saubermatik-website

Living Doc nach Bau-Schritten. Stand: **2026-08-23** · Branch `fix/kontrast-flyerhero-v2`.

## Live-Stand

- Kontrast-Fix: dunkle Flächen als `.surface-hero` / `.surface-navy` / `.surface-nacht` (Farbe + Raster + Verlauf in einer Klasse). Hero nach Flyer Seite 2 mit SecureOps-Karte und QR.
- Header: Kundenportal vorübergehend ausgeblendet.

## Erledigt (dieser PR)

- Token-Registrierung im `@theme` verifiziert; `--color-brand-orange` + `--color-navy-inset`.
- Buttons über `LeitstandButton`-Varianten.
- Start-Hero ~90vh: Zeile 1 Copy+CTAs, Zeile 2 SecureOps-Flyer-Karte + Foto.
- Trust-Karte: drei Flyer-Punkte + DGUV-Faktenzeile.
- `/secureops`-Hero: Navy-Fläche, HTML-Wortmarke statt Bild-Logo.

## Nächste Schritte

- Sichtprüfung Inhaber: `/`, `/secureops`, `/kontakt`.
- Kundenportal im Header wieder einblenden, sobald freigegeben.

## Offen & Risiken

- QR-Label auf weißer Mini-Kachel nutzt dunkles Grau (nicht `--text-dunkel`), weil `--text-dunkel` für dunkle Flächen gedacht ist.
