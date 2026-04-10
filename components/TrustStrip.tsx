"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

const stats = [
  { value: 50, suffix: "+", label: "Jahre im Handwerk", sub: "Seit 1974" },
  { value: 3000, suffix: "+", label: "Abgeschlossene Projekte", sub: "Burgenland & Umgebung" },
  { value: 3, suffix: "", label: "Generationen Familie", sub: "Vater, Sohn, Enkel" },
  { value: 24, suffix: "h", label: "Notdienst", sub: "Wenn es brennt" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-moertel bg-kalkstein">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.18em] text-kupfer uppercase mb-12"
        >
          — Seit einem halben Jahrhundert in Burgenland —
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className={`${i < 3 ? "md:border-r border-moertel" : ""} md:pr-6`}
            >
              <p
                className="font-display text-[64px] md:text-[80px] xl:text-[96px] text-schiefer leading-[0.9] -tracking-[0.02em]"
                style={{ fontWeight: 400 }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="font-sans text-[14px] text-schiefer mt-4 font-medium">{s.label}</p>
              <p className="font-mono text-[10px] tracking-[0.15em] text-werkbank uppercase mt-1">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
