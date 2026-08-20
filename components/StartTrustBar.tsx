import {
  HardHatIcon,
  MonitorIcon,
  ShieldCheckIcon,
  UserCheckIcon,
} from "@/components/BrandIcons";

const CHIPS = [
  {
    icon: ShieldCheckIcon,
    text: "Betriebshaftpflicht bis 10 Mio. € – Nachweis auf Anfrage",
  },
  {
    icon: HardHatIcon,
    text: "Höhenarbeit geschult nach DGUV 112-198/199",
  },
  {
    icon: MonitorIcon,
    text: "Eigene Plattform: dokumentierte Einsätze im Kundenportal",
  },
  {
    icon: UserCheckIcon,
    text: "Fester Ansprechpartner · Mo–Sa 08:00–22:00 erreichbar",
  },
] as const;

export function StartTrustBar() {
  return (
    <section
      className="border-b border-zinc-200 bg-zinc-50 py-4 sm:py-5"
      aria-label="Vertrauensfakten"
    >
      <ul className="mx-auto grid w-full max-w-[100rem] grid-cols-2 gap-3 px-4 sm:px-8 lg:grid-cols-4 lg:gap-4 lg:px-16">
        {CHIPS.map((chip) => (
          <li
            key={chip.text}
            className="flex items-start gap-2 text-xs leading-5 text-foreground sm:text-sm sm:leading-6"
          >
            <chip.icon className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
            <span>{chip.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
