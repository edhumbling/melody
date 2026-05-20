import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Plus_Jakarta_Sans, Rye } from "next/font/google";
import { MotionSystem } from "@/components/MotionSystem";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CustomCursor } from "@/components/CustomCursor";
import { AmbientSoundController } from "@/components/AmbientSoundController";
import { site } from "@/lib/site-content";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const editorial = Bodoni_Moda({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
});

const reeler = Rye({
  variable: "--font-reeler",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://melodyamoabeng.com"),
  title: {
    default: `${site.name} - Personal Site`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} - Personal Site`,
    description: site.description,
    url: "https://melodyamoabeng.com",
    siteName: site.name,
    images: [
      {
        url: "/melody-og.svg",
        width: 1200,
        height: 630,
        alt: `${site.name} monogram share preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Personal Site`,
    description: site.description,
    images: ["/melody-og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${editorial.variable} ${reeler.variable} h-full antialiased`}
    >
      <body>
        <div className="ambient-glow-wrap">
          <div className="ambient-glow-orb orb-1" />
          <div className="ambient-glow-orb orb-2" />
          <div className="ambient-glow-orb orb-3" />
        </div>
        <CustomCursor />
        <AmbientSoundController />
        <MotionSystem />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

