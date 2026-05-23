import type { Metadata } from "next";
import Link from "next/link";
import { FreshnessBadge } from "@/components/FreshnessBadge";
import { GeoImage } from "@/components/GeoImage";
import { SeoCrossLinks } from "@/components/SeoCrossLinks";
import { REMOTE_IMAGE_BLUR_DATA_URL } from "@/lib/image-blur";

const imgStuttgartHero =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200";

export const metadata: Metadata = {
  title: "Fensterreinigung & Gebäudereinigung Stuttgart",
  description:
    "Professionelle Fenster- und Glasreinigung sowie Gebäudereinigung für Stuttgart – mit Logistik über B14/B27, Stadtteile wie Degerloch, Vaihingen und Bad Cannstatt, digitaler Objektsteuerung aus der Zollernalb.",
  alternates: { canonical: "/standorte/stuttgart" },
};

const chunks = [
  {
    id: "einleitung",
    title: "Warum Saubermatik für Stuttgart?",
    body: `Stuttgart ist kein „Nebenbei“-Markt für uns: Die Region ist über die B14 und B27 eng mit dem Zollernalbkreis und unserem Stützpunkt Meßstetten verbunden. Genau diese Logistik nutzen wir, um Gewerbeimmobilien, Praxen, Kanzleien und repräsentative Eingänge in Stadtteilen wie Degerloch, Vaihingen oder Bad Cannstatt termintreu zu betreuen. Anders als anonyme Großanbieter arbeiten wir mit festen Ansprechpartnern und digital dokumentierten Touren – Sie sehen, was wann erledigt wurde, statt nur zu hören, dass „jemand da war“.`,
  },
  {
    id: "glas-mitte",
    title: "Wie schnell ist eine Glasreinigung in Stuttgart-Mitte verfügbar?",
    body: `In der Innenstadt und rund um die City entscheidet weniger die „Dauer der Reinigung“, sondern Zugang, Parklogistik und Zeitfenster. Üblich sind Vorlaufzeiten von wenigen Werktagen bis zwei Wochen – abhängig von Höhe der Scheiben, Aufzugs- und Zugangssituation sowie Ihren Öffnungszeiten. Für wiederkehrende Objekte planen wir fixe Slots (z. B. früh oder nach Ladenschluss), damit Glasflächen dauerhaft repräsentativ bleiben, ohne den Tagesbetrieb zu stören. Kurzfristige Einsätze sind möglich, wenn Kapazität und Sicherheitskonzept passen – sprechen Sie uns direkt an.`,
  },
  {
    id: "industrie",
    title: "Industriegebiete, Gewerbe und Glasfassaden",
    body: `Rund um Feuerbach, Möhringen oder die Gewerbeachsen an der B27 fallen andere Anforderungen an: größere Flächen, mehr Verkehrsfilm, teils Außenaufzüge oder Sonderzugänge. Hier kombinieren wir Unterhalts- und Glasprogramme mit klaren Checklisten und Arbeitssicherheit. Wo Außenfassaden betroffen sind, stimmen wir Verfahren materialgerecht ab – von der Schonung sensibler Beschichtungen bis zu dokumentierten Einsätzen für Ihre Facility-Dokumentation. So bleibt die „Entity-Density“ Ihres Objekts hoch: Reinigung, Sicherheit und Nachweis aus einer Hand.`,
  },
  {
    id: "logistik",
    title: "Anbindung B14 / B27 und regionale Teams",
    body: `Die Bundesstraßen B14 und B27 sind für uns keine Marketing-Floskeln, sondern reale Einsatzkorridore: Sie verbinden Heidenheim, Schwäbisch Hall und den Zollernalbkreis mit dem Ballungsraum Stuttgart. Das erlaubt stabile Tourenplanung und Ersatzlogistik, wenn einmal ein Team ausfällt – die Saubermatik-Plattform verteilt Aufgaben neu, bevor Qualität leidet. Für Sie heißt das: weniger Koordinationsstress, kürzere Reaktionswege und eine Reinigung, die auch unter Druck nicht zur Lotterie wird.`,
  },
  {
    id: "cta",
    title: "Nächster Schritt",
    body: `Ob Fensterreinigung Stuttgart, Gebäudereinigung für Ihre Liegenschaft oder ein kombiniertes Objektprogramm: Wir übersetzen Ihr Gebäude in ein klares Leistungsbild mit messbaren Intervallen. Nutzen Sie die Fenster- und Glasreinigung als Einstieg oder wählen Sie direkt die passende Leistung – wir verknüpfen alles mit derselben digitalen Steuerung wie in der Region Zollernalb.`,
  },
] as const;

export default function StandortStuttgartPage() {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-secondary">
        <Link href="/" className="hover:underline">
          Start
        </Link>
        <span className="text-muted"> / </span>
        <span className="text-muted">Standort</span>
        <span className="text-muted"> / </span>
        <span>Stuttgart</span>
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Fensterreinigung Stuttgart &amp; Gebäudereinigung mit
        Zollernalb-Logistik
      </h1>
      <FreshnessBadge className="mt-4" />
      <p className="mt-4 text-lg leading-8 text-muted">
        Hyper-lokale Präsenz: Degerloch, Vaihingen, Bad Cannstatt,
        Industriezonen und die Achsen{" "}
        <strong className="text-foreground">B14 / B27</strong> fließen in unsere
        Einsatzplanung ein – für Glas, Büro und Objekt.
      </p>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-none ">
        <GeoImage
          src={imgStuttgartHero}
          alt="Glasfassade und Gewerbegebäude in Stuttgart – professionelle Fensterreinigung"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
          priority
          placeholder="blur"
          blurDataURL={REMOTE_IMAGE_BLUR_DATA_URL}
          contentLocation="Stuttgart, Baden-Württemberg"
          author="Saubermatik"
          imageId="geo-stuttgart-hero"
        />
      </div>

      <div className="mt-10 space-y-12">
        {chunks.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 border-b border-foreground/10 pb-10 last:border-0"
          >
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/leistungen/fenster-glasreinigung"
          className="inline-flex h-11 items-center justify-center rounded-none bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Fenster- &amp; Glasreinigung
        </Link>
        <Link
          href="/kontakt#kontakt-anfrage"
          className="inline-flex h-11 items-center justify-center rounded-none border border-foreground/15 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/60 hover:bg-secondary/5"
        >
          Objekt in Stuttgart anfragen
        </Link>
        <Link
          href="/expertise"
          className="inline-flex h-11 items-center justify-center rounded-none border border-foreground/15 px-5 text-sm font-semibold text-foreground transition hover:border-secondary/60 hover:bg-secondary/5"
        >
          Expertise &amp; Standards
        </Link>
      </div>
      <SeoCrossLinks type="service" />
    </article>
  );
}
