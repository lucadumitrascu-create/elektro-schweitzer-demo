"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    type: "Photovoltaik",
    name: "Familie Wagner",
    desc: "12-kWp-Anlage mit Speicher für ein Einfamilienhaus. Von der Beratung bis zur Inbetriebnahme in sechs Wochen.",
    data: [
      ["Leistung", "12,0 kWp"],
      ["Speicher", "8,0 kWh"],
      ["Ort", "Bad Tatzmannsdorf"],
      ["Dauer", "6 Wochen"],
    ],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=85",
  },
  {
    type: "Smart Home",
    name: "Villa Oberwart",
    desc: "KNX-Komplettinstallation für vierzehn Räume: Licht, Beschattung, Heizung und Sicherheit, zentral steuerbar.",
    data: [
      ["System", "KNX"],
      ["Räume", "14"],
      ["Ort", "Oberwart"],
      ["Jahr", "2024"],
    ],
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1000&q=85",
  },
  {
    type: "Sicherheit",
    name: "Gewerbebetrieb Pinkafeld",
    desc: "Einbruchmeldeanlage mit zwölf Kameras und Perimeterschutz für einen regionalen Produktionsbetrieb.",
    data: [
      ["Kameras", "12"],
      ["Typ", "Perimeter"],
      ["Ort", "Pinkafeld"],
      ["Jahr", "2023"],
    ],
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1000&q=85",
  },
  {
    type: "Installation",
    name: "Mehrfamilienhaus Neubau",
    desc: "Komplette Elektrik für sechs Wohneinheiten. Neuinstallation nach aktuellen Normen, inklusive Zählerkasten.",
    data: [
      ["Einheiten", "6"],
      ["Typ", "Neubau"],
      ["Ort", "Güssing"],
      ["Jahr", "2024"],
    ],
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000&q=85",
  },
];

export default function Referenzen() {
  return (
    <section id="referenzen" className="bg-paper py-20 md:py-28">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <span className="chip mb-5">Referenzen</span>
          <h2 className="display font-display font-bold text-[40px] md:text-[56px] text-ink leading-[1.05]">
            Installiert.{" "}
            <span className="text-electric">Verifiziert.</span>
          </h2>
          <p className="font-sans text-graphite text-[17px] mt-4">
            Eine Auswahl an Projekten aus dem Burgenland und Umgebung.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 2) * 0.1,
              }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-2xl border border-hairline overflow-hidden shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="chip absolute left-4 top-4 backdrop-blur-sm bg-surface/90">
                  {p.type}
                </span>
              </div>

              <h3 className="font-display font-bold text-[22px] text-ink mt-5">
                {p.name}
              </h3>
              <p className="font-sans text-graphite text-[15px] leading-[1.65] mt-2 max-w-[480px]">
                {p.desc}
              </p>

              <dl className="mt-5 flex flex-wrap items-stretch border-t border-hairline pt-4">
                {p.data.map(([k, v], idx) => (
                  <div
                    key={k}
                    className={
                      idx === 0
                        ? "pr-5"
                        : "px-5 border-l border-hairline"
                    }
                  >
                    <dt className="font-sans text-muted text-[12px] uppercase tracking-wide">
                      {k}
                    </dt>
                    <dd className="font-sans text-ink font-semibold text-[14px] mt-1">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
