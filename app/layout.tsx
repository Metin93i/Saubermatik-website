import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const metadataBaseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.saubermatik-reinigung.de"
).replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: "Saubermatik Gebäudereinigung | Meßstetten & Zollernalb",
    template: "%s | Saubermatik Gebäudereinigung",
  },
  description:
    "Gründliche Gebäudereinigung in der Region Zollernalb: Büro, Glas, Außenanlagen und Bauendreinigung – mit digitaler Objektsteuerung und festen Ansprechpartnern.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Saubermatik Gebäudereinigung",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} light h-full scroll-smooth antialiased`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        {/* Hard-lock brand tokens – prevents post-hydration teal overrides */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root,:host,html,.dark,html.dark,html[data-theme="dark"]{--primary:#f97316!important;--secondary:#f97316!important;--accent:#f97316!important;--color-primary:#f97316!important;--color-secondary:#f97316!important;--color-accent:#f97316!important;--primary-foreground:#09090b!important;--secondary-foreground:#09090b!important;color-scheme:light!important}`,
          }}
        />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex flex-1 flex-col max-md:pb-[5.75rem]">{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
