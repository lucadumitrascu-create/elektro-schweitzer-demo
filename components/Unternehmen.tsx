"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const data: Array<[string, string]> = [
  ["GEGRÜNDET", "1974"],
  ["GENERATIONEN", "III"],
  ["ZERTIFIZIERUNG", "MEISTER § 94"],
  ["MITGLIEDSCHAFT", "WKO BURGENLAND"],
  ["STANDORT", "BAD TATZMANNSDORF"],
  ["BEREICHE", "03 MODULES"],
];

export default function Unternehmen() {
  return (
    <section id="unternehmen" className="bg-panel py-28 md:py-36 border-b border-grid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
              SEC. 05 &middot; UNTERNEHMEN
            </p>
          </div>
          <h2 className="font-sans font-semibold text-[44px] md:text-[64px] xl:text-[80px] text-bone leading-[0.95] -tracking-[0.025em]">
            Familie.
            <br />
            Handwerk.
            <br />
            <span className="text-copper">Verantwortung.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-5 order-2 md:order-1"
          >
            <div className="relative">
              {/* Corner brackets */}
              <svg className="absolute -top-2 -left-2 w-4 h-4 text-copper z-10" viewBox="0 0 20 20" fill="none">
                <path d="M0 6V0H6" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg className="absolute -top-2 -right-2 w-4 h-4 text-copper z-10" viewBox="0 0 20 20" fill="none">
                <path d="M14 0H20V6" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg className="absolute -bottom-2 -left-2 w-4 h-4 text-copper z-10" viewBox="0 0 20 20" fill="none">
                <path d="M0 14V20H6" stroke="currentColor" strokeWidth="1" />
              </svg>
              <svg className="absolute -bottom-2 -right-2 w-4 h-4 text-copper z-10" viewBox="0 0 20 20" fill="none">
                <path d="M14 20H20V14" stroke="currentColor" strokeWidth="1" />
              </svg>

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85"
                  alt="Team Elektro Schweitzer"
                  fill
                  className="object-cover"
                  style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.9)" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel/60 via-transparent to-transparent" />
              </div>

              <div className="flex items-center justify-between mt-3">
                <p className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase">
                  FIG. 02 &middot; TEAM
                </p>
                <p className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase">
                  REV. 2026
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text + data */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="md:col-span-7 order-1 md:order-2"
          >
            <div className="space-y-5 font-sans text-[15px] md:text-[16px] text-bone/70 leading-[1.75] max-w-[580px]">
              <p>
                Was 1974 als Ein-Mann-Betrieb in Bad Tatzmannsdorf begann, ist
                heute ein Familienunternehmen in dritter Generation — mit einem
                eingespielten Team aus Technikerinnen, Meistern und Lehrlingen.
              </p>
              <p>
                Elektro Schweitzer steht für das, was gute Elektrotechnik ausmacht:
                saubere Arbeit, ehrliche Beratung und Lösungen, die jahrelang
                funktionieren. Ohne Schnickschnack, aber mit vollem Einsatz.
              </p>
              <p>
                Ob Einfamilienhaus oder Gewerbeobjekt, Neuinstallation oder
                Sanierung — wir behandeln jedes Projekt, als wäre es unser eigenes
                Zuhause. Das ist unser Versprechen an Burgenland.
              </p>
            </div>

            <div className="mt-12 border-t border-grid pt-8">
              <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase mb-5">
                COMPANY RECORD
              </p>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-[520px]">
                {data.map(([k, v]) => (
                  <div key={k} className="flex items-baseline gap-2">
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase whitespace-nowrap">
                      {k}
                    </dt>
                    <span className="flex-1 border-b border-dotted border-grid mb-1 min-w-[12px]" />
                    <dd className="font-mono text-[11px] tracking-[0.1em] text-bone uppercase whitespace-nowrap">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
