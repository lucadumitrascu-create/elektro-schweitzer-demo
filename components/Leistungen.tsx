"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Cpu } from "lucide-react";

const blocks = [
  {
    code: "SEC-01",
    num: "01",
    Icon: Shield,
    title: "SICHERHEIT",
    subtitle: "Protection Systems",
    desc: "Wir schützen, was Ihnen wichtig ist. Alarmanlagen, Blitzschutz, Videoüberwachung — professionell geplant, normgerecht umgesetzt.",
    items: [
      { code: "1.1", name: "Alarmanlagen & Einbruchschutz" },
      { code: "1.2", name: "Blitzschutz & Überspannungsschutz" },
      { code: "1.3", name: "Videoüberwachungssysteme" },
      { code: "1.4", name: "Rauchmelder & Brandschutz" },
      { code: "1.5", name: "Prüfprotokolle & E-Befund" },
    ],
  },
  {
    code: "ENG-02",
    num: "02",
    Icon: Zap,
    title: "ENERGIE",
    subtitle: "Power & Efficiency",
    desc: "Photovoltaik, Infrarotheizung, Elektroinstallation. Nachhaltige Energielösungen, die Kosten senken und Haus und Betrieb fit für morgen machen.",
    items: [
      { code: "2.1", name: "Photovoltaik & Speicherlösungen" },
      { code: "2.2", name: "Infrarotheizungen" },
      { code: "2.3", name: "Elektroinstallation Neubau & Sanierung" },
      { code: "2.4", name: "LED-Beleuchtung" },
      { code: "2.5", name: "Zählerkasten & Verteilerbau" },
    ],
  },
  {
    code: "CTL-03",
    num: "03",
    Icon: Cpu,
    title: "KOMFORT",
    subtitle: "Control & Communication",
    desc: "Smart Home, SAT-Anlagen, Multimedia, Türkommunikation. Moderne Haustechnik, verständlich erklärt und sauber umgesetzt.",
    items: [
      { code: "3.1", name: "Smart Home Systeme" },
      { code: "3.2", name: "SAT-Anlagen & Empfangstechnik" },
      { code: "3.3", name: "Multimedia & Netzwerktechnik" },
      { code: "3.4", name: "Sprechanlagen & Türkommunikation" },
      { code: "3.5", name: "Beratung & Wartung" },
    ],
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="bg-panel schematic-grid py-28 md:py-36 border-b border-grid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
              SEC. 02 &middot; LEISTUNGEN &middot; 03 MODULES
            </p>
          </div>
          <h2 className="font-sans font-semibold text-[44px] md:text-[64px] xl:text-[80px] text-bone leading-[0.95] -tracking-[0.02em]">
            Drei Module.
            <br />
            <span className="text-copper">Ein Meister.</span>
          </h2>
          <p className="font-mono text-[13px] text-mute leading-[1.7] mt-6 max-w-[520px]">
            Sicherheit, Energie und Komfort — drei Bereiche, geplant und ausgeführt
            von einem Betrieb. Keine Subunternehmer, keine Schnittstellen­verluste.
          </p>
        </motion.div>

        <div>
          {blocks.map((b, i) => (
            <motion.article
              key={b.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="border-t border-grid py-14 md:py-16 group relative"
            >
              {/* Module code top */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
                  MOD. {b.code}
                </span>
                <div className="h-px bg-grid flex-grow" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
                  {b.num} / 03
                </span>
              </div>

              <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                  <div className="flex items-start gap-4">
                    <div className="border border-copper/40 p-3">
                      <b.Icon size={24} strokeWidth={1.25} className="text-copper" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-[32px] md:text-[40px] text-bone leading-none -tracking-[0.015em]">
                        {b.title}
                      </h3>
                      <p className="font-mono text-[11px] tracking-[0.15em] text-mute uppercase mt-2">
                        {b.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4">
                  <p className="font-sans text-[15px] text-bone/70 leading-[1.7] max-w-[380px]">
                    {b.desc}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase mb-4">
                    &gt; LEISTUNGSUMFANG
                  </p>
                  <ul className="space-y-2">
                    {b.items.map((item) => (
                      <li
                        key={item.code}
                        className="group/row flex items-baseline gap-3 font-mono text-[12px] tracking-[0.02em] hover:text-copper transition-colors"
                      >
                        <span className="text-copper/50 group-hover/row:text-copper text-[10px]">
                          [{item.code}]
                        </span>
                        <span className="text-bone/80 group-hover/row:text-bone">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-grid" />
        </div>
      </div>
    </section>
  );
}
