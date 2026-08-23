import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { getSiteOrigin } from "@/lib/seo/site-origin";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const metadataBaseUrl = getSiteOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: "Saubermatik Gebäudereinigung | Meßstetten & Zollernalb",
    template: "%s | Saubermatik Gebäudereinigung",
  },
  description:
    "Gründliche Gebäudereinigung aus Meßstetten: Zollernalbkreis, Sigmaringen, Rottweil, Hechingen, Tübingen – Projekte bis Stuttgart und an den Bodensee. Digitale Objektsteuerung, feste Ansprechpartner.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Saubermatik Gebäudereinigung",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saubermatik Gebäudereinigung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
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
      className={`${inter.variable} ${spaceGrotesk.variable} light h-full scroll-smooth antialiased`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        {/* Hard-lock brand tokens – prevents post-hydration teal overrides */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root,:host,html,.dark,html.dark,html[data-theme="dark"]{--primary:#f47920!important;--secondary:#f47920!important;--accent:#f47920!important;--orange:#f47920!important;--color-primary:#f47920!important;--color-secondary:#f47920!important;--color-accent:#f47920!important;--primary-foreground:#09090b!important;--secondary-foreground:#09090b!important;color-scheme:light!important}`,
          }}
        />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex flex-1 flex-col max-md:pb-[5.75rem]">
          {children}
        </main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
