import { SaubermatikLogo } from "@/components/SaubermatikLogo";
import { SiteHeaderNav } from "@/components/SiteHeaderNav";
import { SITE_WHATSAPP_HREF } from "@/lib/config/site";
import { getBusinessPhone } from "@/lib/phone";

export function SiteHeader() {
  const { display, telHref } = getBusinessPhone();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <SaubermatikLogo />
        <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            {telHref ? (
              <a
                href={telHref}
                className="whitespace-nowrap text-sm font-semibold text-slate-700 transition hover:text-slate-900"
              >
                {display}
              </a>
            ) : null}
            <a
              href={SITE_WHATSAPP_HREF}
              className="whitespace-nowrap rounded-sm border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <SiteHeaderNav />
        </div>
      </div>
    </header>
  );
}
