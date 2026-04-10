import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elektro Schweitzer · Elektrotechnik seit 1974 · Bad Tatzmannsdorf, Burgenland",
  description:
    "Elektroinstallation, Photovoltaik, Smart Home und Sicherheitstechnik aus Bad Tatzmannsdorf. Ihr Meisterbetrieb mit über 50 Jahren Erfahrung in Burgenland.",
  openGraph: {
    title: "Elektro Schweitzer · Elektrotechnik seit 1974 · Bad Tatzmannsdorf",
    description:
      "Elektroinstallation, Photovoltaik, Smart Home und Sicherheitstechnik aus Bad Tatzmannsdorf. Ihr Meisterbetrieb mit über 50 Jahren Erfahrung in Burgenland.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
