"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-wire min-h-[90vh]">
      {/* Mobile: image top */}
      <div className="md:hidden relative h-[40vh]">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
          alt="Elektriker bei der Arbeit"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Desktop split */}
      <div className="grid md:grid-cols-12 md:min-h-[90vh]">
        {/* Left content */}
        <div className="md:col-span-7 flex flex-col justify-center px-6 lg:px-10 xl:pl-20 pt-16 pb-16 md:pt-[100px] md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-mono text-[12px] tracking-[0.04em] text-signal uppercase mb-8"
          >
            ELEKTROTECHNIK · SEIT 1974 · BURGENLAND
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-grotesk font-bold uppercase leading-[0.9] -tracking-[0.02em]"
          >
            <span className="block text-white text-[56px] md:text-[72px] xl:text-[96px]">STROM IST</span>
            <span className="block text-white text-[56px] md:text-[72px] xl:text-[96px] md:ml-12">UNSERE</span>
            <span className="block text-volt text-[56px] md:text-[72px] xl:text-[96px]">SPRACHE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-zincc text-[16px] leading-[1.6] max-w-[480px] mt-10"
          >
            Elektroinstallation, Photovoltaik, Smart Home und Sicherheitstechnik
            aus Bad Tatzmannsdorf. Seit über 50 Jahren für Burgenland und
            Umgebung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <a
              href="#kontakt"
              className="bg-volt hover:bg-red-700 text-white font-grotesk font-semibold text-[14px] uppercase tracking-wider px-8 py-4 transition-colors rounded-sm"
            >
              Kostenlose Beratung →
            </a>
            <a
              href="#leistungen"
              className="border border-white/30 text-white hover:bg-panel hover:text-steel font-grotesk font-semibold text-[14px] uppercase tracking-wider px-8 py-4 transition-colors rounded-sm"
            >
              Unsere Leistungen ↓
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="mt-20 flex flex-wrap gap-3 items-center"
          >
            <span className="font-mono text-[12px] text-zincc tracking-[0.04em]">50+ JAHRE ERFAHRUNG</span>
            <span className="text-steel">|</span>
            <span className="font-mono text-[12px] text-zincc tracking-[0.04em]">3.000+ PROJEKTE</span>
            <span className="text-steel">|</span>
            <span className="font-mono text-[12px] text-zincc tracking-[0.04em]">MEISTERBETRIEB</span>
          </motion.div>
        </div>

        {/* Right image */}
        <div className="hidden md:block md:col-span-5 relative border-l border-steel">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
            alt="Elektriker bei der Arbeit"
            fill
            className="object-cover"
            priority
            sizes="42vw"
          />
          <p className="absolute bottom-6 right-6 font-mono text-[11px] tracking-[0.04em] text-steel uppercase bg-wire/70 px-2 py-1">
            BAD TATZMANNSDORF · BGLD
          </p>
        </div>
      </div>
    </section>
  );
}
