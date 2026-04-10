import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elektro Schweitzer · Meisterbetrieb seit 1974 · Bad Tatzmannsdorf, Burgenland",
  description:
    "Drei Generationen Elektrotechnik aus Bad Tatzmannsdorf. Sicherheit, Energie und Komfort — Meisterbetrieb für Burgenland und Umgebung. Seit 1974.",
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
    <html
      lang="de-AT"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
