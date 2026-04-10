"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Meisterbetrieb seit 1974",
    desc: "Über 50 Jahre Erfahrung in allen Bereichen der Elektrotechnik. Drei Generationen Handwerksqualität aus Bad Tatzmannsdorf.",
  },
  {
    title: "Alles aus einer Hand",
    desc: "Von der ersten Beratung über die Planung bis zur Installation und Wartung. Ein Ansprechpartner — keine Subunternehmer.",
  },
  {
    title: "Regional verwurzelt",
    desc: "In Bad Tatzmannsdorf zuhause, in ganz Burgenland und Umgebung im Einsatz. Wir kennen die Region und die Menschen.",
  },
  {
    title: "Zukunft installieren",
    desc: "Photovoltaik, Smart Home, E-Mobilität: Wir bringen die Technik von morgen in Ihr Zuhause — verständlich erklärt und sauber umgesetzt.",
  },
  {
    title: "Notdienst & Verlässlichkeit",
    desc: "Im Ernstfall erreichbar — weil Strom keine Öffnungszeiten kennt. Und im Alltag: pünktlich, ordentlich, fair.",
  },
];

export default function WarumWir() {
  return (
    <section className="bg-earth py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="font-sans font-semibold text-[12px] uppercase text-copper tracking-[0.16em] mb-3">
            Warum Schweitzer?
          </p>
          <h2 className="font-serif text-[48px] md:text-[64px] xl:text-[80px] text-warm leading-[1.05]">
            Fünf gute Gründe.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="border-l-2 border-copper pl-6 max-w-2xl"
            >
              <h3 className="font-serif text-[24px] text-warm">
                {String(i + 1).padStart(2, "0")}  {r.title}
              </h3>
              <p className="font-sans text-[16px] text-white/70 leading-[1.65] mt-2">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 flex flex-col sm:flex-row sm:items-center gap-6"
        >
          <h3 className="font-serif text-[28px] md:text-[32px] text-warm">Überzeugt?</h3>
          <a
            href="#kontakt"
            className="bg-sky hover:bg-sky/90 text-white font-sans font-semibold text-[15px] px-7 py-[14px] rounded-lg transition-colors duration-250 self-start"
          >
            Jetzt Kontakt aufnehmen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
