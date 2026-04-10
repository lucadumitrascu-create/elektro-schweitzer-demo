"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

const readings = [
  { value: 50, suffix: "+", unit: "YR", label: "IM HANDWERK", sub: "Seit 1974" },
  { value: 3000, suffix: "+", unit: "PRJ", label: "INSTALLATIONEN", sub: "Burgenland &amp; Umgebung" },
  { value: 3, suffix: "", unit: "GEN", label: "GENERATIONEN", sub: "Familienbetrieb" },
  { value: 24, suffix: "", unit: "HR", label: "NOTDIENST", sub: "Wenn es brennt" },
];

export default function TrustStrip() {
  return (
    <section className="bg-panel border-b border-grid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
          <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
            TRUST METRICS &middot; LIVE READOUT
          </p>
          <div className="h-px bg-grid flex-grow" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {readings.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className={`relative ${i < 3 ? "md:border-r md:border-grid md:pr-8" : ""}`}
            >
              <div className="flex items-baseline gap-2 mb-3">
                <p
                  className="font-sans font-semibold text-[56px] md:text-[72px] xl:text-[88px] text-bone leading-[0.85] -tracking-[0.02em]"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <Counter target={r.value} suffix={r.suffix} />
                </p>
                <p className="font-mono text-[11px] tracking-[0.15em] text-copper uppercase">
                  {r.unit}
                </p>
              </div>
              <div className="h-px bg-grid mb-3" />
              <p className="font-mono text-[10px] tracking-[0.18em] text-bone uppercase">
                {r.label}
              </p>
              <p className="font-mono text-[10px] tracking-[0.1em] text-mute mt-1">
                {r.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
