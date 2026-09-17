import { SaubermatikLogo } from "@/components/SaubermatikLogo";
import { SiteHeaderNav } from "@/components/SiteHeaderNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <SaubermatikLogo />
        <SiteHeaderNav />
      </div>
    </header>
  );
}
