"use client";

import { motion } from "framer-motion";
import { Shield, Sun, Radio } from "lucide-react";

const pillars = [
  {
    num: "01",
    Icon: Shield,
    title: "Sicherheit",
    subtitle: "Schutz, der hält",
    desc: "Wir schützen, was Ihnen wichtig ist. Von der klassischen Alarmanlage bis zur modernen Videoüberwachung — ein Meister kümmert sich persönlich.",
    items: [
      "Alarmanlagen & Einbruchschutz",
      "Blitzschutz & Überspannungsschutz",
      "Videoüberwachungssysteme",
      "Rauchmelder & Brandschutz",
      "Prüfprotokolle & E-Befund",
    ],
  },
  {
    num: "02",
    Icon: Sun,
    title: "Energie",
    subtitle: "Strom, der sich rechnet",
    desc: "Photovoltaik, Infrarotheizung, Elektroinstallation — nachhaltige Energielösungen, die zum Haus und zur Geldbörse passen. Geplant, installiert, gewartet.",
    items: [
      "Photovoltaik & Speicherlösungen",
      "Infrarotheizungen",
      "Elektroinstallation Neubau & Sanierung",
      "LED-Beleuchtung",
      "Zählerkasten & Verteilerbau",
    ],
  },
  {
    num: "03",
    Icon: Radio,
    title: "Komfort",
    subtitle: "Technik, die man versteht",
    desc: "Smart Home, SAT-Anlagen, Multimedia — moderne Haustechnik, verständlich erklärt und sauber umgesetzt. Weil gute Technik unsichtbar sein darf.",
    items: [
      "Smart Home Systeme",
      "SAT-Anlagen & Empfangstechnik",
      "Multimedia & Netzwerktechnik",
      "Sprechanlagen & Türkommunikation",
      "Beratung & Wartung",
    ],
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="bg-kalkstein py-28 md:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <p className="font-mono text-[11px] tracking-[0.18em] text-kupfer uppercase mb-6">
            02 / Leistungen
          </p>
          <h2
            className="font-display text-[44px] md:text-[64px] xl:text-[80px] text-schiefer leading-[0.95] -tracking-[0.01em]"
            style={{ fontWeight: 400 }}
          >
            Drei Bereiche.
            <br />
            <span className="italic text-kupfer">Ein Meister.</span>
          </h2>
          <p className="font-sans text-[16px] md:text-[17px] text-werkbank leading-[1.7] mt-6">
            Ob Sicherheitstechnik, Photovoltaik oder Smart Home — wir bieten
            durchdachte Lösungen aus einer Hand. Immer persönlich, immer mit
            Meisterqualität.
          </p>
        </motion.div>

        {/* Service sheets — laid out like data sheets */}
        <div>
          {pillars.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="border-t border-moertel py-12 md:py-16 group"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-10">
                <div className="md:col-span-3 flex flex-col gap-6">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-kupfer uppercase">
                    {p.num} &nbsp;/&nbsp; 03
                  </p>
                  <p.Icon size={28} strokeWidth={1} className="text-kupfer" />
                  <div>
                    <h3
                      className="font-display text-[32px] md:text-[40px] text-schiefer leading-none"
                      style={{ fontWeight: 400 }}
                    >
                      {p.title}
                    </h3>
                    <p className="font-display italic text-[16px] text-werkbank mt-1">
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <p className="font-sans text-[15px] text-werkbank leading-[1.7] max-w-[400px]">
                    {p.desc}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-4">
                    Leistungsumfang
                  </p>
                  <ul className="space-y-2.5">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-[14px] text-schiefer flex items-start gap-3"
                      >
                        <span className="block w-1 h-1 rounded-full bg-kupfer mt-[9px] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-moertel" />
        </div>
      </div>
    </section>
  );
}
