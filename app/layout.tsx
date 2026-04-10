import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elektro Schweitzer · Elektrotechnik seit 1974 · Bad Tatzmannsdorf, Burgenland",
  description:
    "Elektroinstallation, Photovoltaik, Smart Home und Sicherheitstechnik aus Bad Tatzmannsdorf. Meisterbetrieb mit über 50 Jahren Erfahrung in Burgenland.",
  openGraph: {
    title: "Elektro Schweitzer · Elektrotechnik seit 1974 · Bad Tatzmannsdorf",
    description:
      "Elektroinstallation, Photovoltaik, Smart Home und Sicherheitstechnik aus Bad Tatzmannsdorf. Meisterbetrieb mit über 50 Jahren Erfahrung in Burgenland.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="font-grotesk antialiased">{children}</body>
    </html>
  );
}
