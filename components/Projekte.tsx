"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "PHOTOVOLTAIK FAMILIE WAGNER",
    desc: "Komplette 12 kWp Anlage mit Speicher fur ein Einfamilienhaus.",
    type: "PHOTOVOLTAIK",
    year: "2024",
    data: "12 kWp · MIT SPEICHER · BAD TATZMANNSDORF",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=80",
  },
  {
    name: "SMART HOME VILLA OBERWART",
    desc: "KNX-Komplettinstallation: Licht, Beschattung, Heizung, Sicherheit.",
    type: "SMART HOME",
    year: "2024",
    data: "KNX SYSTEM · 14 RAUME · OBERWART",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1000&q=80",
  },
  {
    name: "ALARMANLAGE GEWERBE",
    desc: "Einbruchmeldeanlage mit Videouberwachung fur einen Gewerbebetrieb.",
    type: "SICHERHEITSTECHNIK",
    year: "2024",
    data: "12 KAMERAS · PERIMETERSCHUTZ · BURGENLAND",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1000&q=80",
  },
  {
    name: "ELEKTROINSTALLATION NEUBAU",
    desc: "Komplette Elektrik fur ein Mehrfamilienhaus, 6 Wohneinheiten.",
    type: "INSTALLATION",
    year: "2024",
    data: "6 EINHEITEN · NEUINSTALLATION · 2024",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000&q=80",
  },
];

export default function Projekte() {
  return (
    <section id="projekte" className="bg-panel py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="font-mono text-[12px] text-steel uppercase tracking-[0.04em] mb-6">
            02 / PROJEKTE
          </p>
          <h2 className="font-grotesk font-bold leading-[0.95] -tracking-[0.015em]">
            <span className="block text-steel text-[40px] md:text-[56px] xl:text-[64px]">AUSGEFUHRT.</span>
            <span className="block text-volt text-[40px] md:text-[56px] xl:text-[64px]">BEWAHRT.</span>
          </h2>
          <p className="text-zincc text-[16px] leading-[1.6] max-w-[480px] mt-6">
            Ein Auszug unserer Installationen in der Region.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-white border border-zincc/15 hover:border-volt transition-colors duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 bg-wire/80 backdrop-blur-sm px-3 py-1.5">
                  <p className="font-mono text-[11px] text-white tracking-[0.04em]">
                    {p.type} · {p.year}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-grotesk font-semibold text-[20px] text-steel">{p.name}</h3>
                <p className="text-zincc text-[14px] leading-[1.5] mt-2">{p.desc}</p>
                <p className="font-mono text-[12px] text-zincc tracking-[0.04em] mt-4 pt-4 border-t border-zincc/10">
                  {p.data}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="font-mono text-[13px] text-steel hover:text-volt uppercase tracking-[0.04em] transition-colors"
          >
            Alle Referenzen ansehen →
          </a>
        </div>
      </div>
    </section>
  );
}
