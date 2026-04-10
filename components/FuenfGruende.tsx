"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "MEISTERBETRIEB SEIT 1974",
    desc: "Über fünfzig Jahre Erfahrung in allen Bereichen der Elektrotechnik. Drei Generationen Handwerk, die ihre Kundinnen und Kunden beim Namen kennen.",
  },
  {
    num: "02",
    title: "ALLES AUS EINER HAND",
    desc: "Von der Beratung über die Planung bis zur Installation und Wartung — ein Ansprechpartner für Ihr gesamtes Projekt. Keine Subunternehmer, keine Ausreden.",
  },
  {
    num: "03",
    title: "REGIONAL VERWURZELT",
    desc: "In Bad Tatzmannsdorf zuhause, in ganz Burgenland und Umgebung im Einsatz. Wir kennen die Region, das Wetter und die Menschen.",
  },
  {
    num: "04",
    title: "DIE ZUKUNFT INSTALLIEREN",
    desc: "Photovoltaik, Smart Home, E-Mobilität — wir bringen die Technik von morgen in Ihr Zuhause, verständlich erklärt und sauber umgesetzt.",
  },
  {
    num: "05",
    title: "NOTDIENST & VERLÄSSLICHKEIT",
    desc: "Im Ernstfall erreichbar — weil Strom keine Öffnungszeiten kennt. Und im Alltag: pünktlich, ordentlich, fair.",
  },
];

export default function FuenfGruende() {
  return (
    <section className="bg-panel schematic-grid-dense py-28 md:py-36 border-b border-grid relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-led text-signal" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-signal uppercase">
              SEC. 04 &middot; WARUM SCHWEITZER
            </p>
          </div>
          <h2 className="font-sans font-semibold text-[52px] md:text-[80px] xl:text-[104px] text-bone leading-[0.9] -tracking-[0.025em]">
            Fünf gute
            <br />
            <span className="text-copper">Gründe.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12">
          <div className="md:col-span-10 md:col-start-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="border-t border-grid py-10 group hover:bg-trace/40 transition-colors duration-300"
              >
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 md:col-span-2">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-copper uppercase">
                      REASON
                    </p>
                    <p className="font-sans font-semibold text-[48px] md:text-[56px] text-copper/80 group-hover:text-copper leading-none -tracking-[0.02em] mt-1 transition-colors">
                      {r.num}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-10">
                    <h3 className="font-sans font-semibold text-[22px] md:text-[28px] text-bone -tracking-[0.01em] leading-[1.2]">
                      {r.title}
                    </h3>
                    <p className="font-sans text-[15px] text-bone/60 leading-[1.7] mt-3 max-w-[640px]">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-grid" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <h3 className="font-sans font-semibold text-[28px] md:text-[40px] text-bone leading-[1.1] max-w-xl -tracking-[0.01em]">
            Überzeugt?
            <br />
            <span className="text-copper">Reden wir.</span>
          </h3>
          <a
            href="#kontakt"
            className="bg-copper text-panel font-mono text-[12px] tracking-[0.15em] uppercase px-6 py-4 hover:bg-signal transition-colors duration-200 self-start md:self-auto"
          >
            [ KONTAKT → ]
          </a>
        </motion.div>
      </div>
    </section>
  );
}
