"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UeberUns() {
  return (
    <section id="ueber-uns" className="bg-warm py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.16em] mb-3">
            Wer wir sind
          </p>
          <h2 className="font-serif text-[36px] md:text-[48px] xl:text-[56px] text-earth leading-[1.1]">
            Familie. Handwerk. Verantwortung.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-warm-lg" style={{ transform: "rotate(-0.5deg)" }}>
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80"
                alt="Das Team von Elektro Schweitzer"
                fill
                className="object-cover"
                style={{ filter: "sepia(5%)" }}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <p className="font-sans text-[13px] text-smoke mt-4 ml-1">Das Team · Bad Tatzmannsdorf</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <div className="space-y-6 font-sans text-[17px] text-earth leading-[1.7]">
              <p>
                Was 1974 als Ein-Mann-Betrieb in Bad Tatzmannsdorf begann, ist
                heute ein Familienunternehmen mit einem eingespielten Team aus
                Technikern, Meistern und Lehrlingen.
              </p>
              <p>
                Elektro Schweitzer steht für saubere Arbeit, ehrliche Beratung und
                Lösungen, die jahrelang funktionieren. Ohne Schnickschnack, aber
                mit vollem Einsatz.
              </p>
              <p>
                Ob Einfamilienhaus oder Gewerbeobjekt, Neuinstallation oder
                Sanierung — wir behandeln jedes Projekt, als wäre es unser eigenes
                Zuhause.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-cream max-w-xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
              <p className="font-sans text-[14px] text-smoke">Mitglied der WKO Burgenland</p>
              <span className="hidden sm:inline text-cream">·</span>
              <p className="font-sans text-[14px] text-smoke">Meisterbetrieb nach § 94 GewO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
