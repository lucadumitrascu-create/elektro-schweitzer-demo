"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    num: "I",
    title: "Meisterbetrieb seit 1974",
    desc: "Über fünfzig Jahre Erfahrung in allen Bereichen der Elektrotechnik. Drei Generationen Handwerk, die ihre Kundinnen und Kunden beim Namen kennen.",
  },
  {
    num: "II",
    title: "Alles aus einer Hand",
    desc: "Von der Beratung über die Planung bis zur Installation und Wartung — ein Ansprechpartner für Ihr gesamtes Projekt. Keine Subunternehmer, keine Ausreden.",
  },
  {
    num: "III",
    title: "Regional verwurzelt",
    desc: "In Bad Tatzmannsdorf zuhause, in ganz Burgenland und Umgebung im Einsatz. Wir kennen die Region, das Wetter und die Menschen.",
  },
  {
    num: "IV",
    title: "Die Zukunft installieren",
    desc: "Photovoltaik, Smart Home, E-Mobilität: Wir bringen die Technik von morgen in Ihr Zuhause — verständlich erklärt und sauber umgesetzt.",
  },
  {
    num: "V",
    title: "Notdienst und Verlässlichkeit",
    desc: "Im Ernstfall erreichbar — weil Strom keine Öffnungszeiten kennt. Und im Alltag: pünktlich, ordentlich, fair.",
  },
];

export default function FuenfGruende() {
  return (
    <section className="bg-schiefer py-28 md:py-40 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.18em] text-spaet uppercase mb-6">
            04 / Warum Schweitzer
          </p>
          <h2
            className="font-display text-[52px] md:text-[88px] xl:text-[120px] text-kalkstein leading-[0.9] -tracking-[0.02em]"
            style={{ fontWeight: 400 }}
          >
            Fünf gute
            <br />
            <span className="italic text-spaet">Gründe.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-x-10">
          <div className="md:col-span-2 hidden md:block">
            <p className="font-mono text-[10px] tracking-[0.18em] text-spaet/60 uppercase sticky top-32">
              Handschlag&shy;qualität
            </p>
          </div>

          <div className="md:col-span-10 space-y-14">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className="grid grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="col-span-2 md:col-span-1">
                  <p
                    className="font-display text-[32px] md:text-[40px] text-spaet italic leading-none"
                    style={{ fontWeight: 400 }}
                  >
                    {r.num}
                  </p>
                </div>
                <div className="col-span-10 md:col-span-11 border-l border-spaet/30 pl-6 md:pl-10">
                  <h3
                    className="font-display text-[24px] md:text-[32px] text-kalkstein leading-[1.15] -tracking-[0.005em]"
                    style={{ fontWeight: 400 }}
                  >
                    {r.title}
                  </h3>
                  <p className="font-sans text-[15px] md:text-[16px] text-kalkstein/60 leading-[1.7] mt-3 max-w-[620px]">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-24 pt-10 border-t border-spaet/20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <h3
            className="font-display text-[32px] md:text-[44px] text-kalkstein leading-[1.1] max-w-xl"
            style={{ fontWeight: 400 }}
          >
            Überzeugt? Dann reden wir
            <br />
            <span className="italic text-spaet">über Ihr Projekt.</span>
          </h3>
          <a
            href="#kontakt"
            className="font-sans text-[14px] text-kalkstein hover:text-spaet transition-colors duration-250 self-start md:self-auto"
          >
            <span className="text-spaet mr-2">→</span>
            Kontakt aufnehmen
            <span className="block w-full h-px bg-kalkstein/40 mt-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
