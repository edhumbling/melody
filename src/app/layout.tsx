import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { NeuralFooter } from "@/components/NeuralFooter";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const name = "Melody Nyarko Amoabeng";
const description =
  "AML, KYC, and Fraud Analyst profile for Melody Nyarko Amoabeng, covering financial crime investigations, SAR drafting, transaction monitoring, sanctions, and risk review experience.";

export const metadata: Metadata = {
  metadataBase: new URL("https://melodyamoabeng.com"),
  title: {
    default: `${name} - AML/KYC/Fraud Analyst`,
    template: `%s - ${name}`,
  },
  description,
  openGraph: {
    title: `${name} - AML/KYC/Fraud Analyst`,
    description,
    url: "https://melodyamoabeng.com",
    siteName: name,
  },
  twitter: {
    card: "summary",
    title: `${name} - AML/KYC/Fraud Analyst`,
    description,
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
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Navigation />
        {children}
        <div style={{ padding: '0 16px', maxWidth: 1480, margin: '0 auto', paddingBottom: 32 }}>
          <NeuralFooter />
        </div>
      </body>
    </html>
  );
}

