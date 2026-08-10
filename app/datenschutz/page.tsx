import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Saubermatik Reinigungsservice: Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Datenschutzerklärung
      </h1>
      <p className="mt-4 text-base font-semibold text-foreground">
        Stand: Juli 2026
      </p>

      <div className="mt-10 space-y-10 text-base leading-7 text-muted">
        <section>
          <h2 className="text-xl font-bold text-foreground">
            1. Verantwortlicher
          </h2>
          <p className="mt-4">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
            ist:
          </p>
          <p className="mt-4 text-foreground">
            Saubermatik Reinigungsservice
            <br />
            Inhaber: Metin Altinsoy
            <br />
            Schelmenwasenstraße 11
            <br />
            72469 Meßstetten
            <br />
            Telefon: +49 151 29860059
            <br />
            E-Mail: info@saubermatik-reinigung.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p className="mt-4">
            Wir verarbeiten personenbezogene Daten unserer Besucherinnen und
            Besucher nur, soweit dies zur Bereitstellung einer funktionsfähigen
            Website sowie zur Bearbeitung von Anfragen und Bewerbungen
            erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1
            lit. b DSGVO (Vertrag/Anbahnung), Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse) sowie – bei Bewerbungen – § 26 BDSG.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            3. Hosting und Server-Logfiles
          </h2>
          <p className="mt-4">
            Diese Website wird auf Servern der Hostinger-Unternehmensgruppe
            (Hostinger International Ltd.) betrieben. Beim Aufruf der Website
            verarbeitet der Server automatisch technische Zugriffsdaten (sog.
            Server-Logfiles): IP-Adresse, Datum und Uhrzeit des Zugriffs,
            aufgerufene Seite, Referrer-URL, verwendeter Browser und
            Betriebssystem. Diese Daten dienen der Sicherstellung des Betriebs,
            der Stabilität und der Sicherheit der Website (Art. 6 Abs. 1 lit. f
            DSGVO) und werden nicht mit anderen Datenquellen zusammengeführt.
            Logdaten werden nach den üblichen Rotationszyklen gelöscht. Mit
            unserem Hosting-Anbieter besteht ein Vertrag zur
            Auftragsverarbeitung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            4. Verschlüsselung
          </h2>
          <p className="mt-4">
            Diese Website nutzt eine TLS-Verschlüsselung (erkennbar an
            „https://“ und dem Schloss-Symbol im Browser). Daten, die Sie an uns
            übermitteln, können dadurch nicht von Dritten mitgelesen werden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            5. Kontaktaufnahme per Telefon oder E-Mail
          </h2>
          <p className="mt-4">
            Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir
            die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten, Inhalt
            der Anfrage) zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b
            und f DSGVO). Die Daten werden gelöscht, sobald sie für die
            Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            6. Anfrage-Formular (Objekt-Anfrage)
          </h2>
          <p className="mt-4">
            Über unser Anfrage-Formular können Sie uns eine Objekt- bzw.
            Angebotsanfrage senden. Verarbeitet werden die im Formular
            eingegebenen Angaben (z. B. Objektart, Fläche, Leistungswunsch,
            Name, Kontaktdaten, Nachricht). Zweck ist die Bearbeitung Ihrer
            Anfrage und die Angebotserstellung (Art. 6 Abs. 1 lit. b DSGVO).
          </p>
          <p className="mt-4">
            Für den technischen Versand der Formulareingaben an unser Postfach
            setzen wir den Dienst{" "}
            <strong className="font-semibold text-foreground">Resend</strong>{" "}
            (Resend, Inc., USA) als Auftragsverarbeiter ein. Mit Resend besteht
            ein Auftragsverarbeitungsvertrag; die Übermittlung in die USA
            erfolgt auf Grundlage der EU-Standardvertragsklauseln bzw. einer
            Zertifizierung nach dem EU-U.S. Data Privacy Framework. Ihre Daten
            werden ausschließlich zum Zweck der Zustellung der Anfrage
            verarbeitet.
          </p>
          <p className="mt-4">
            Anfragedaten speichern wir, bis Ihr Anliegen abschließend bearbeitet
            ist; darüber hinaus nur, soweit gesetzliche
            Aufbewahrungspflichten (z. B. bei Vertragsschluss) bestehen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            7. Bewerbungen (Karriere-Formular)
          </h2>
          <p className="mt-4">
            Über unser Karriere-Formular können Sie sich bei uns bewerben.
            Verarbeitet werden die von Ihnen angegebenen Bewerberdaten.
            Rechtsgrundlage ist § 26 Abs. 1 BDSG in Verbindung mit Art. 6 Abs. 1
            lit. b DSGVO (Entscheidung über die Begründung eines
            Beschäftigungsverhältnisses). Der technische Versand erfolgt
            ebenfalls über den unter Ziffer 6 beschriebenen Dienst Resend.
          </p>
          <p className="mt-4">
            Kommt es nicht zu einer Einstellung, löschen wir Ihre
            Bewerbungsunterlagen spätestens sechs Monate nach Abschluss des
            Bewerbungsverfahrens, sofern keine gesetzlichen Pflichten oder Ihre
            Einwilligung (z. B. Talentpool) einer längeren Speicherung zugrunde
            liegen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            8. Kartendarstellung (OpenStreetMap)
          </h2>
          <p className="mt-4">
            Auf unserer Kontaktseite binden wir eine Anfahrtskarte von
            OpenStreetMap ein (OpenStreetMap Foundation, Vereinigtes Königreich).
            Beim Laden der Karte wird Ihre IP-Adresse an die Server von
            OpenStreetMap übermittelt. Die Einbindung erfolgt im Interesse einer
            verständlichen Anfahrtsdarstellung (Art. 6 Abs. 1 lit. f DSGVO). Für
            das Vereinigte Königreich besteht ein Angemessenheitsbeschluss der
            EU-Kommission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">9. Bilder</h2>
          <p className="mt-4">
            Bildmaterial dieser Website wird über unseren eigenen Server
            ausgeliefert (Bildoptimierung des eingesetzten Web-Frameworks). Beim
            Seitenaufruf baut Ihr Browser dafür keine direkte Verbindung zu
            externen Bilddiensten auf.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            10. Schriftarten
          </h2>
          <p className="mt-4">
            Die verwendeten Schriftarten sind lokal auf unserem Server
            eingebunden. Eine Verbindung zu Servern von Google oder anderen
            Schriftanbietern findet beim Besuch dieser Website nicht statt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            11. Cookies und Analyse-Dienste
          </h2>
          <p className="mt-4">
            Diese Website setzt derzeit keine Cookies zu Analyse- oder
            Marketingzwecken ein und verwendet keine Tracking- oder
            Analysedienste. Sollte sich dies ändern, informieren wir an dieser
            Stelle und holen – soweit erforderlich – Ihre Einwilligung ein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            12. Ihre Rechte
          </h2>
          <p className="mt-4">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten: Recht auf Auskunft (Art. 15
            DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung
            der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
            Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO (Art. 21). Eine erteilte Einwilligung können Sie
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p className="mt-4">
            Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an:
            info@saubermatik-reinigung.de.
          </p>
          <p className="mt-4">
            Ihnen steht zudem ein Beschwerderecht bei einer
            Datenschutz-Aufsichtsbehörde zu. Zuständig für uns ist:
            Der Landesbeauftragte für den Datenschutz und die
            Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20,
            70173 Stuttgart, www.baden-wuerttemberg.datenschutz.de.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            13. Aktualität dieser Erklärung
          </h2>
          <p className="mt-4">
            Wir passen diese Datenschutzerklärung an, sobald sich Rechtslage
            oder Funktionsumfang der Website ändern (z. B. Einführung neuer
            Formulare oder Analyse-Werkzeuge).
          </p>
        </section>
      </div>
    </article>
  );
}
