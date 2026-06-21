"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Cpu, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
};

const services: Service[] = [
  {
    Icon: Shield,
    title: "Sicherheit",
    desc: "Wir schützen, was Ihnen wichtig ist: Alarmanlagen, Blitzschutz und Videoüberwachung, professionell geplant und normgerecht umgesetzt.",
    items: [
      "Alarmanlagen & Einbruchschutz",
      "Blitzschutz & Überspannungsschutz",
      "Videoüberwachungssysteme",
      "Rauchmelder & Brandschutz",
      "Prüfprotokolle & E-Befund",
    ],
  },
  {
    Icon: Zap,
    title: "Energie",
    desc: "Photovoltaik, Infrarotheizung und Elektroinstallation. Nachhaltige Lösungen, die Kosten senken und Haus und Betrieb fit für morgen machen.",
    items: [
      "Photovoltaik & Speicherlösungen",
      "Infrarotheizungen",
      "Elektroinstallation Neubau & Sanierung",
      "LED-Beleuchtung",
      "Zählerkasten & Verteilerbau",
    ],
  },
  {
    Icon: Cpu,
    title: "Komfort",
    desc: "Smart Home, SAT-Anlagen, Multimedia und Türkommunikation. Moderne Haustechnik, verständlich erklärt und sauber umgesetzt.",
    items: [
      "Smart Home Systeme",
      "SAT-Anlagen & Empfangstechnik",
      "Multimedia & Netzwerktechnik",
      "Sprechanlagen & Türkommunikation",
      "Beratung & Wartung",
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const tile = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.6, delay: i * 0.08, ease },
});

export default function Leistungen() {
  const [featured, ...rest] = services;

  return (
    <section id="leistungen" className="bg-paper py-20 md:py-28">
      <div className="container-xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <span className="chip mb-5">Leistungen</span>
          <h2 className="display font-display font-bold text-ink text-[40px] md:text-[56px]">
            Drei Bereiche. <span className="text-electric">Ein Meister.</span>
          </h2>
          <p className="mt-5 max-w-[560px] text-graphite text-base leading-relaxed md:text-lg">
            Sicherheit, Energie und Komfort: geplant und ausgeführt von einem
            Betrieb. Keine Subunternehmer, keine Schnittstellenverluste.
          </p>
        </motion.div>

        {/* Bento grid: wide featured tile on top, two tiles below */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Featured electric tile - spans both columns on lg */}
          <motion.article
            {...tile(0)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-electric bg-electric p-7 text-white shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover md:p-9 lg:col-span-2 lg:flex-row lg:gap-12"
          >
            <div className="lg:max-w-[360px] lg:shrink-0">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <featured.Icon size={24} strokeWidth={1.75} className="text-white" />
              </span>
              <h3 className="mt-6 font-display font-bold text-[26px] leading-tight">
                {featured.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                {featured.desc}
              </p>
            </div>

            <ul className="mt-7 grid flex-1 grid-cols-1 gap-x-8 gap-y-3 self-center sm:grid-cols-2 lg:mt-0">
              {featured.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/15">
                    <Check size={13} strokeWidth={3} className="text-white" />
                  </span>
                  <span className="text-[15px] leading-snug text-white/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Two standard tiles below */}
          {rest.map((service, idx) => (
            <motion.article
              key={service.title}
              {...tile(idx + 1)}
              className="group flex flex-col rounded-2xl border border-hairline bg-surface p-7 shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover md:p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric-tint">
                <service.Icon size={24} strokeWidth={1.75} className="text-electric" />
              </span>
              <h3 className="mt-6 font-display font-bold text-[26px] leading-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                {service.desc}
              </p>

              <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-electric-tint">
                      <Check size={13} strokeWidth={3} className="text-electric" />
                    </span>
                    <span className="text-[15px] leading-snug text-graphite">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
