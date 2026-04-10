"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const specs: Array<[string, string]> = [
  ["LOCATION", "BAD TATZMANNSDORF"],
  ["REGION", "BURGENLAND, AT"],
  ["ESTABLISHED", "1974"],
  ["GENERATIONS", "III"],
  ["CERTIFICATION", "MEISTER § 94"],
  ["STATUS", "OPERATIONAL"],
];

export default function Hero() {
  return (
    <section className="relative bg-panel schematic-grid border-b border-grid overflow-hidden">
      {/* Signal line at top */}
      <div className="absolute top-[72px] left-0 right-0 h-px bg-grid">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-copper to-transparent animate-scan-line" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* LEFT — content */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-signal animate-pulse-led text-signal" />
              </span>
              <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
                SEC. 01 &middot; MANIFEST &middot; REV. 2026.04
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="font-sans font-semibold text-bone leading-[0.95] -tracking-[0.025em] text-[48px] md:text-[72px] xl:text-[96px]"
            >
              Strom, der
              <br />
              verbindet.
              <br />
              <span className="text-copper">Seit 1974.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex gap-5"
            >
              <div className="w-1 bg-copper flex-shrink-0 self-stretch" />
              <p className="font-sans text-[15px] md:text-[16px] text-bone/70 leading-[1.65] max-w-[520px]">
                Drei Generationen Elektrotechnik aus Bad Tatzmannsdorf.
                Sicherheit, Energie und Komfort — geplant, installiert und
                gewartet mit der Präzision eines Meisterbetriebs.
              </p>
            </motion.div>

            {/* Spec sheet */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="mt-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-grid flex-grow" />
                <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
                  SPECIFICATION SHEET
                </p>
                <div className="h-px bg-grid flex-grow max-w-[60px]" />
              </div>
              <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 max-w-2xl">
                {specs.map(([k, v]) => (
                  <div key={k} className="flex items-baseline gap-2">
                    <dt className="font-mono text-[10px] tracking-[0.15em] text-mute uppercase whitespace-nowrap">
                      {k}
                    </dt>
                    <span className="flex-1 border-b border-dotted border-grid mb-1 min-w-[8px]" />
                    <dd className="font-mono text-[11px] tracking-[0.1em] text-bone uppercase whitespace-nowrap">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              <a
                href="#kontakt"
                className="group flex items-center gap-3 bg-copper text-panel font-mono text-[12px] tracking-[0.15em] uppercase px-6 py-4 hover:bg-signal transition-colors duration-200"
              >
                <span>Projekt anfragen</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#leistungen"
                className="font-mono text-[12px] tracking-[0.15em] uppercase text-bone/70 hover:text-copper transition-colors duration-200 border-b border-grid hover:border-copper pb-1"
              >
                Leistungen [ 03 ]
              </a>
            </motion.div>
          </div>

          {/* RIGHT — image with pin callouts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Corner brackets — technical instrument frame */}
              <svg className="absolute -top-2 -left-2 w-5 h-5 text-copper z-10" viewBox="0 0 20 20" fill="none">
                <path d="M0 6V0H6" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg className="absolute -top-2 -right-2 w-5 h-5 text-copper z-10" viewBox="0 0 20 20" fill="none">
                <path d="M14 0H20V6" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg className="absolute -bottom-2 -left-2 w-5 h-5 text-copper z-10" viewBox="0 0 20 20" fill="none">
                <path d="M0 14V20H6" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg className="absolute -bottom-2 -right-2 w-5 h-5 text-copper z-10" viewBox="0 0 20 20" fill="none">
                <path d="M14 20H20V14" stroke="currentColor" strokeWidth="1" />
              </svg>

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?w=900&q=85"
                  alt="Meisterhände beim Verdrahten"
                  fill
                  className="object-cover grayscale contrast-110"
                  style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.85)" }}
                  priority
                  sizes="(max-width: 1024px) 90vw, 440px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel/60 via-transparent to-transparent" />
              </div>

              {/* Label strip bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-panel/90 backdrop-blur-sm border-t border-copper/40 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-led text-signal" />
                  <p className="font-mono text-[10px] tracking-[0.15em] text-bone uppercase">
                    FIG. 01 / WIRING IN PROGRESS
                  </p>
                </div>
                <p className="font-mono text-[10px] tracking-[0.15em] text-mute uppercase">
                  47.3°N
                </p>
              </div>
            </div>

            {/* Pin callout — decorative technical detail */}
            <div className="hidden lg:flex absolute -left-24 top-12 items-center gap-2">
              <p className="font-mono text-[9px] tracking-[0.15em] text-copper uppercase">
                230V / 50Hz
              </p>
              <div className="w-16 h-px bg-copper" />
              <div className="w-1.5 h-1.5 rounded-full bg-copper" />
            </div>
            <div className="hidden lg:flex absolute -left-20 bottom-28 items-center gap-2">
              <p className="font-mono text-[9px] tracking-[0.15em] text-mute uppercase">
                CU 2.5mm²
              </p>
              <div className="w-12 h-px bg-mute" />
              <div className="w-1.5 h-1.5 rounded-full bg-mute" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom technical strip */}
      <div className="border-t border-grid">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-led text-signal" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
              SYSTEM LIVE &middot; Mo–Fr 08:00–18:00 &middot; NOTDIENST 24/7
            </p>
          </div>
          <a href="tel:+4333538080" className="font-mono text-[11px] tracking-[0.15em] text-copper hover:text-signal transition-colors">
            [ CALL +43 3353 8080 ]
          </a>
        </div>
      </div>
    </section>
  );
}
