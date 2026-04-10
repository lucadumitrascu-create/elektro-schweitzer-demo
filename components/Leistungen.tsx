"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Wifi } from "lucide-react";

const blocks = [
  {
    num: "01",
    Icon: Shield,
    name: "SICHERHEIT & SCHUTZ",
    desc: "Professionelle Sicherheitstechnik fur Ihr Zuhause und Ihren Betrieb. Von der Planung bis zur Wartung.",
    services: [
      "Alarmanlagen & Einbruchschutz",
      "Blitzschutz & Uberspannungsschutz",
      "Videouberwachungssysteme",
      "Rauchmelder & Brandschutz",
      "Prufprotokolle & E-Befund",
    ],
  },
  {
    num: "02",
    Icon: Zap,
    name: "ENERGIE & EFFIZIENZ",
    desc: "Nachhaltige Energielosungen, die Kosten senken und die Umwelt schonen. Beratung, Installation, Wartung.",
    services: [
      "Photovoltaik & Speicherlosungen",
      "Infrarotheizungen",
      "LED-Beleuchtungslosungen",
      "Elektroinstallation Neubau & Sanierung",
      "Zahlerkasten & Verteileraufbau",
    ],
  },
  {
    num: "03",
    Icon: Wifi,
    name: "KOMFORT & KOMMUNIKATION",
    desc: "Intelligente Haustechnik fur modernen Wohnkomfort. Vernetzt, einfach, zukunftssicher.",
    services: [
      "Smart Home Systeme",
      "SAT-Anlagen & Empfangstechnik",
      "Multimedia & Netzwerktechnik",
      "Haushaltsgerate & Beratung",
      "Sprechanlagen & Turkommunikation",
    ],
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="bg-wire py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="font-mono text-[12px] text-signal uppercase tracking-[0.04em] mb-6">
            01 / LEISTUNGEN
          </p>
          <h2 className="font-grotesk font-bold leading-[0.95] -tracking-[0.015em]">
            <span className="block text-white text-[40px] md:text-[56px] xl:text-[64px]">DREI BEREICHE.</span>
            <span className="block text-zincc text-[40px] md:text-[56px] xl:text-[64px]">EINE KOMPETENZ.</span>
          </h2>
          <p className="text-zincc text-[16px] leading-[1.6] max-w-[560px] mt-6">
            Wir decken drei essenzielle Bereiche der Elektrotechnik ab — jeder
            einzelne mit uber 50 Jahren Fachkompetenz.
          </p>
        </motion.div>

        <div>
          {blocks.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="border-t border-steel py-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
                {/* Number + icon */}
                <div className="md:col-span-3">
                  <p className="font-mono text-[64px] md:text-[96px] text-steel leading-[1]">
                    {b.num}
                  </p>
                  <b.Icon className="text-volt mt-4" size={32} strokeWidth={1.5} />
                </div>

                {/* Name + desc */}
                <div className="md:col-span-4">
                  <h3 className="font-grotesk font-bold text-[28px] md:text-[40px] xl:text-[48px] text-white uppercase leading-[1] -tracking-[0.01em]">
                    {b.name}
                  </h3>
                  <p className="text-zincc text-[16px] leading-[1.6] mt-4 max-w-[360px]">
                    {b.desc}
                  </p>
                </div>

                {/* Services list */}
                <ul className="md:col-span-5 space-y-3">
                  {b.services.map((s) => (
                    <li
                      key={s}
                      className="group flex items-center gap-3 cursor-default hover:translate-x-2 transition-transform duration-200 ease-out"
                    >
                      <span className="font-mono text-volt group-hover:text-current transition-colors text-[14px]">→</span>
                      <span className="font-mono text-[13px] text-white tracking-[0.02em]">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-steel" />
        </div>

        {/* CTA banner */}
        <div className="border-y border-signal mt-20 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h3 className="font-grotesk font-bold text-[24px] md:text-[32px] text-white -tracking-[0.01em]">
            Welche Losung passt zu Ihnen?
          </h3>
          <a
            href="#kontakt"
            className="bg-volt hover:bg-red-700 text-white font-grotesk font-semibold text-[14px] uppercase tracking-wider px-8 py-4 transition-colors rounded-sm whitespace-nowrap self-start md:self-auto"
          >
            Kostenlose Beratung vereinbaren →
          </a>
        </div>
      </div>
    </section>
  );
}
