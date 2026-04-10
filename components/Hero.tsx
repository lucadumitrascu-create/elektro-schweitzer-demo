"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Counter from "./Counter";

const stats = [
  { value: 50, suffix: "+", label: "Jahre Erfahrung" },
  { value: 3000, suffix: "+", label: "Projekte" },
  { value: 24, suffix: "h", label: "Notdienst" },
  { value: 100, suffix: "%", label: "Meisterqualität" },
];

export default function Hero() {
  return (
    <section className="bg-warm relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-20 md:pt-[140px] pb-20 md:pb-[120px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-sans font-semibold text-[12px] uppercase text-copper tracking-[0.16em] mb-4"
            >
              Elektrotechnik aus Burgenland
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="font-serif text-[48px] md:text-[64px] xl:text-[80px] text-earth leading-[1.05]"
            >
              Strom ist Vertrauens&shy;sache.
              <br />
              Seit 1974.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-6 mb-6"
            >
              <div className="w-20 h-px bg-copper" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="font-sans text-[17px] text-smoke leading-[1.7] max-w-[540px]"
            >
              Elektroinstallation, Photovoltaik, Smart Home und Sicherheitstechnik.
              Persönlich, kompetent und regional — für Privathaushalte und Betriebe
              in Bad Tatzmannsdorf und Umgebung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#kontakt"
                className="bg-sky hover:bg-sky/90 text-white font-sans font-semibold text-[15px] px-7 py-[14px] rounded-lg transition-colors duration-250"
              >
                Kostenlose Beratung anfragen
              </a>
              <a
                href="#leistungen"
                className="border border-cream text-earth hover:bg-sand font-sans font-semibold text-[15px] px-7 py-[14px] rounded-lg transition-colors duration-250"
              >
                Unsere Leistungen →
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 order-first lg:order-last"
          >
            <div className="relative aspect-[4/5] max-w-[420px] mx-auto float-anim">
              <div className="absolute inset-0 rounded-lg overflow-hidden shadow-warm-lg">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80"
                  alt="Elektriker Meister bei der Arbeit"
                  fill
                  className="object-cover"
                  style={{ filter: "sepia(5%)" }}
                  priority
                  sizes="(max-width: 1024px) 80vw, 400px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center md:text-left py-4 md:py-0 px-2 md:px-6 ${
                i < stats.length - 1 ? "md:border-r border-cream" : ""
              }`}
            >
              <p className="font-serif text-[40px] md:text-[48px] text-copper leading-none">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="font-sans text-[14px] text-smoke mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
