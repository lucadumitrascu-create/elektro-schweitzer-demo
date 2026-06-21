"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "Meisterbetrieb seit 1974",
    desc: "Über fünfzig Jahre Erfahrung in allen Bereichen der Elektrotechnik. Drei Generationen Handwerk, die ihre Kundinnen und Kunden beim Namen kennen.",
  },
  {
    num: "02",
    title: "Alles aus einer Hand",
    desc: "Von der Beratung über die Planung bis zur Installation und Wartung: ein Ansprechpartner für Ihr gesamtes Projekt. Keine Subunternehmer, keine Ausreden.",
  },
  {
    num: "03",
    title: "Regional verwurzelt",
    desc: "In Bad Tatzmannsdorf zuhause, in ganz Burgenland und Umgebung im Einsatz. Wir kennen die Region, das Wetter und die Menschen.",
  },
  {
    num: "04",
    title: "Die Zukunft installieren",
    desc: "Photovoltaik, Smart Home, E-Mobilität: wir bringen die Technik von morgen in Ihr Zuhause, verständlich erklärt und sauber umgesetzt.",
  },
  {
    num: "05",
    title: "Notdienst & Verlässlichkeit",
    desc: "Im Ernstfall erreichbar, weil Strom keine Öffnungszeiten kennt. Und im Alltag: pünktlich, ordentlich, fair.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FuenfGruende() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="chip mb-6">Warum Schweitzer</span>
          <h2 className="display font-display font-bold text-ink text-[40px] md:text-[56px]">
            Fünf gute <span className="text-electric">Gründe.</span>
          </h2>
        </motion.div>

        {/* Card grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {reasons.map((r, i) => (
            <motion.article
              key={r.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              className={`group rounded-2xl border border-hairline bg-surface p-7 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover ${
                i === 4 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-electric-tint">
                  <span className="stat-num text-electric text-[22px] leading-none">
                    {r.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-[20px] leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-graphite text-[15px] leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-electric-tint p-8 md:flex-row md:items-center md:p-10"
        >
          <h3 className="font-display font-bold text-ink text-[26px] md:text-[32px]">
            Überzeugt? <span className="text-electric">Reden wir.</span>
          </h3>
          <a href="#kontakt" className="btn-electric shrink-0">
            Kontakt aufnehmen
            <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
