"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "MEISTERBETRIEB SEIT 1974",
    desc: "Uber 50 Jahre Erfahrung in allen Bereichen der Elektrotechnik. Drei Generationen Handwerksqualitat.",
  },
  {
    num: "02",
    title: "ALLES AUS EINER HAND",
    desc: "Von der Beratung uber die Planung bis zur Installation und Wartung. Ein Ansprechpartner fur alle Gewerke.",
  },
  {
    num: "03",
    title: "REGIONAL VERWURZELT",
    desc: "In Bad Tatzmannsdorf zuhause, in ganz Burgenland und Umgebung im Einsatz. Kurze Wege, schnelle Reaktion.",
  },
  {
    num: "04",
    title: "ZUKUNFTSORIENTIERT",
    desc: "Photovoltaik, Smart Home, E-Mobilitat: Wir installieren heute, was morgen Standard ist.",
  },
  {
    num: "05",
    title: "NOTDIENST & VERLASSLICHKEIT",
    desc: "Im Ernstfall erreichbar. Weil Strom keine Offnungszeiten kennt.",
  },
];

export default function WarumWir() {
  return (
    <section className="bg-wire py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono text-[12px] text-signal uppercase tracking-[0.04em] mb-6">
            03 / WARUM SCHWEITZER
          </p>
          <h2 className="font-grotesk font-bold text-white text-[40px] md:text-[56px] xl:text-[64px] -tracking-[0.015em]">
            FUNF GRUNDE.
          </h2>
        </motion.div>

        <div>
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="border-t border-steel py-8 md:py-10"
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-2">
                  <p className="font-mono text-[40px] md:text-[64px] text-steel leading-[1]">{r.num}</p>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h3 className="font-grotesk font-semibold text-[20px] md:text-[24px] text-white -tracking-[0.005em]">
                    {r.title}
                  </h3>
                  <p className="text-zincc text-[15px] leading-[1.6] mt-3 max-w-[640px]">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-steel" />
        </div>

        {/* CTA */}
        <div className="border-y border-signal mt-20 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h3 className="font-grotesk font-bold text-[24px] md:text-[32px] text-white -tracking-[0.01em]">
            Uberzeugt? Sprechen wir uber Ihr Projekt.
          </h3>
          <a
            href="#kontakt"
            className="bg-volt hover:bg-red-700 text-white font-grotesk font-semibold text-[14px] uppercase tracking-wider px-8 py-4 transition-colors rounded-sm whitespace-nowrap self-start md:self-auto"
          >
            Jetzt Kontakt aufnehmen →
          </a>
        </div>
      </div>
    </section>
  );
}
