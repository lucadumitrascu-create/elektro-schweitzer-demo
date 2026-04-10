"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-kalkstein relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-36 md:pt-48 pb-20 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <div className="lg:col-span-7 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-mono text-[11px] tracking-[0.18em] text-kupfer uppercase mb-8"
            >
              01 / Manifest &nbsp;&middot;&nbsp; Elektrotechnik aus Burgenland
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-[56px] md:text-[88px] xl:text-[112px] text-schiefer leading-[0.95] -tracking-[0.01em]"
              style={{ fontWeight: 400 }}
            >
              Strom ist
              <br />
              <span className="italic text-kupfer" style={{ fontVariationSettings: '"SOFT" 100' }}>
                Vertrauens&shy;sache.
              </span>
              <br />
              Seit 1974.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-10 flex items-start gap-6"
            >
              <div className="mt-3 w-20 h-px bg-kupfer flex-shrink-0" />
              <p className="font-sans text-[16px] md:text-[17px] text-werkbank leading-[1.7] max-w-[480px]">
                Drei Generationen Elektrotechnik aus Bad Tatzmannsdorf. Sicherheit,
                Energie und Komfort — Meisterqualität für Ihr Zuhause und Ihren
                Betrieb in Burgenland und Umgebung.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-8 mt-12"
            >
              <a
                href="#kontakt"
                className="font-sans text-[14px] text-schiefer hover:text-kupfer transition-colors duration-250 group"
              >
                <span className="text-kupfer mr-2">→</span>
                Beratung anfragen
                <span className="block w-full h-px bg-schiefer mt-1 group-hover:bg-kupfer transition-colors" />
              </a>
              <a
                href="#leistungen"
                className="font-sans text-[14px] text-werkbank hover:text-kupfer transition-colors duration-250"
              >
                ↓ &nbsp;Leistungen ansehen
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-[440px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 border border-moertel" style={{ transform: "translate(12px, 12px)" }} />
              <div className="relative h-full overflow-hidden shadow-2xl shadow-schiefer/10">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80"
                  alt="Meister bei der Arbeit im Werkstatt"
                  fill
                  className="object-cover"
                  style={{ filter: "sepia(8%) saturate(0.95)" }}
                  priority
                  sizes="(max-width: 1024px) 80vw, 440px"
                />
              </div>
              <div className="absolute -bottom-8 left-0 right-0 flex justify-between px-1">
                <p className="font-mono text-[10px] tracking-[0.15em] text-werkbank uppercase">
                  Fig. 01
                </p>
                <p className="font-mono text-[10px] tracking-[0.15em] text-werkbank uppercase">
                  Werkstatt &middot; 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
