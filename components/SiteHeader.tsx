import { SaubermatikLogo } from "@/components/SaubermatikLogo";
import { SiteHeaderNav } from "@/components/SiteHeaderNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-2.5 lg:px-8">
        <SaubermatikLogo />
        <div className="flex min-w-0 flex-1 justify-end">
          <SiteHeaderNav />
        </div>
      </div>
    </header>
  );
}
