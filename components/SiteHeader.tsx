import { SaubermatikLogo } from "@/components/SaubermatikLogo";
import { SiteHeaderNav } from "@/components/SiteHeaderNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <SaubermatikLogo />
        <div className="flex min-w-0 flex-1 justify-end">
          <SiteHeaderNav />
        </div>
      </div>
    </header>
  );
}
