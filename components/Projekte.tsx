"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    label: "PHOTOVOLTAIK · 2024",
    name: "Photovoltaik Familie Wagner",
    desc: "Komplette 12-kWp-Anlage mit Speicher für ein Einfamilienhaus. Von der Beratung bis zur Inbetriebnahme in sechs Wochen.",
    data: "12 kWp · Mit Speicher · Bad Tatzmannsdorf",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=80",
  },
  {
    label: "SMART HOME · 2024",
    name: "Smart Home Villa Oberwart",
    desc: "KNX-Komplettinstallation für 14 Räume: Licht, Beschattung, Heizung und Sicherheit zentral steuerbar.",
    data: "KNX System · 14 Räume · Oberwart",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1000&q=80",
  },
  {
    label: "SICHERHEITSTECHNIK · 2023",
    name: "Alarmanlage Gewerbebetrieb",
    desc: "Einbruchmeldeanlage mit 12-Kamera-Videoüberwachung und Perimeterschutz für einen regionalen Betrieb.",
    data: "12 Kameras · Perimeterschutz · Burgenland",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1000&q=80",
  },
  {
    label: "INSTALLATION · 2024",
    name: "Elektroinstallation Neubau",
    desc: "Komplette Elektrik für ein Mehrfamilienhaus mit sechs Wohneinheiten. Neuinstallation nach aktuellen Normen.",
    data: "6 Einheiten · Neuinstallation · 2024",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000&q=80",
  },
];

export default function Projekte() {
  return (
    <section id="projekte" className="bg-warm py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.16em] mb-3">
            Unsere Arbeit
          </p>
          <h2 className="font-serif text-[36px] md:text-[48px] xl:text-[56px] text-earth leading-[1.1]">
            Projekte aus der Region.
          </h2>
          <p className="font-sans text-[17px] text-smoke leading-[1.7] max-w-[560px] mt-4">
            Ein Auszug unserer Installationen — jedes Projekt mit derselben
            Sorgfalt wie das erste.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: "easeOut" }}
              className="group rounded-lg overflow-hidden border border-cream bg-warm hover:shadow-warm-lg transition-all duration-300 border-t-[3px] border-t-transparent hover:border-t-copper"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  style={{ filter: "sepia(5%)" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-7">
                <p className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.14em]">
                  {p.label}
                </p>
                <h3 className="font-serif text-[22px] text-earth mt-2">{p.name}</h3>
                <p className="font-sans text-[15px] text-smoke leading-[1.6] mt-2">{p.desc}</p>
                <p className="font-sans font-semibold text-[13px] text-copper mt-4">{p.data}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
