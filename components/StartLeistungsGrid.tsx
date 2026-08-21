import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import {
  AppWindowIcon,
  BlindsIcon,
  BrushIcon,
  Building2Icon,
  SnowflakeIcon,
  StairsIcon,
  TreesIcon,
  WrenchIcon,
} from "@/components/BrandIcons";

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;

const TILES: readonly {
  href: string;
  title: string;
  icon: IconCmp;
  badge?: string;
}[] = [
  {
    href: "/leistungen/unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    icon: Building2Icon,
  },
  {
    href: "/leistungen/fenster-glasreinigung",
    title: "Glas & Fenster",
    icon: AppWindowIcon,
  },
  {
    href: "/leistungen/raffstore-lamellenreinigung",
    title: "Raffstore & Lamellen",
    icon: BlindsIcon,
    badge: "Spezialität",
  },
  {
    href: "/leistungen/grundreinigung",
    title: "Grundreinigung",
    icon: BrushIcon,
  },
  {
    href: "/leistungen/treppenhausreinigung",
    title: "Treppenhaus",
    icon: StairsIcon,
  },
  {
    href: "/leistungen/hausmeisterservice",
    title: "Hausmeisterservice",
    icon: WrenchIcon,
  },
  {
    href: "/leistungen/gruenanlagenpflege",
    title: "Grünanlagen",
    icon: TreesIcon,
  },
  {
    href: "/leistungen/winterdienst",
    title: "Winterdienst",
    icon: SnowflakeIcon,
  },
];

type Props = {
  className?: string;
};

export function StartLeistungsGrid({ className = "" }: Props) {
  return (
    <section
      className={`border-t border-foreground/10 bg-white py-12 sm:py-14 ${className}`}
      aria-labelledby="leistungs-grid-heading"
    >
      <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-8 lg:px-16">
        <h2
          id="leistungs-grid-heading"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Das reinigen wir für Sie
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:gap-4">
          {TILES.map((tile) => (
            <li key={tile.href}>
              <Link
                href={tile.href}
                className="group flex h-full flex-col rounded-sm border border-zinc-200 bg-white p-4 transition hover:border-primary hover:bg-zinc-50 sm:p-5"
              >
                <tile.icon className="h-6 w-6 text-secondary" />
                <span className="mt-3 flex items-start gap-2 text-sm font-semibold text-foreground group-hover:text-secondary sm:text-base">
                  {tile.title}
                  {tile.badge ? (
                    <span className="rounded-sm bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                      {tile.badge}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/leistungen"
          className="mt-6 inline-flex text-sm font-bold text-secondary transition hover:underline"
        >
          Alle Leistungen →
        </Link>
      </div>
    </section>
  );
}
