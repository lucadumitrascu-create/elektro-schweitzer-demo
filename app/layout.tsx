import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// Distinctive display grotesque (characterful, not the default sans) + a clean,
// slightly warm body grotesque. Deliberately off the common Inter/Geist/Space path.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elektro Schweitzer · Meisterbetrieb seit 1974 · Bad Tatzmannsdorf, Burgenland",
  description:
    "Drei Generationen Elektrotechnik aus Bad Tatzmannsdorf. Sicherheit, Energie und Komfort: Meisterbetrieb für Burgenland und Umgebung. Seit 1974.",
  openGraph: {
    title: "Elektro Schweitzer · Meisterbetrieb seit 1974",
    description:
      "Drei Generationen Elektrotechnik aus Bad Tatzmannsdorf. Sicherheit, Energie und Komfort für Burgenland.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-AT" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
