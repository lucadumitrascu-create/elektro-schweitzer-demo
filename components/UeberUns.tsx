"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UeberUns() {
  return (
    <section id="ueber-uns" className="bg-panel py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono text-[12px] text-steel uppercase tracking-[0.04em] mb-6">
            04 / UBER UNS
          </p>
          <h2 className="font-grotesk font-bold leading-[0.95] -tracking-[0.015em]">
            <span className="block text-steel text-[40px] md:text-[56px] xl:text-[64px]">FAMILIE.</span>
            <span className="block text-steel text-[40px] md:text-[56px] xl:text-[64px]">HANDWERK.</span>
            <span className="block text-volt text-[40px] md:text-[56px] xl:text-[64px]">VERANTWORTUNG.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=80"
                alt="Das Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <p className="font-mono text-[11px] text-zincc tracking-[0.04em] mt-3">
              DAS TEAM · BAD TATZMANNSDORF
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <div className="space-y-6 text-steel text-[16px] leading-[1.7] max-w-[600px]">
              <p>
                Was 1974 als Ein-Mann-Betrieb in Bad Tatzmannsdorf begann, ist
                heute ein Familienunternehmen mit einem eingespielten Team aus
                Technikern, Meistern und Lehrlingen.
              </p>
              <p>
                Elektro Schweitzer steht fur das, was gute Elektrotechnik
                ausmacht: saubere Arbeit, ehrliche Beratung und Losungen, die
                jahrelang funktionieren. Ohne Schnickschnack, aber mit vollem
                Einsatz.
              </p>
              <p>
                Ob Einfamilienhaus oder Gewerbeobjekt, ob Neuinstallation oder
                Sanierung — wir behandeln jedes Projekt, als ware es unser
                eigenes Zuhause.
              </p>
            </div>

            <div className="border-t border-steel/15 mt-10 pt-6 flex flex-wrap gap-x-10 gap-y-3">
              <p className="font-mono text-[12px] text-zincc tracking-[0.04em]">
                MITGLIED DER WKO BURGENLAND
              </p>
              <p className="font-mono text-[12px] text-zincc tracking-[0.04em]">
                MEISTERBETRIEB NACH § 94 GEWO
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
