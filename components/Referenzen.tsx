"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    num: "Ref. 01",
    type: "Photovoltaik",
    year: "2024",
    name: "Familie Wagner",
    desc: "12-kWp-Anlage mit Speicher für ein Einfamilienhaus. Von der Beratung bis zur Inbetriebnahme in sechs Wochen.",
    data: [
      ["Leistung", "12 kWp"],
      ["Speicher", "8 kWh"],
      ["Ort", "Bad Tatzmannsdorf"],
    ],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=80",
  },
  {
    num: "Ref. 02",
    type: "Smart Home",
    year: "2024",
    name: "Villa Oberwart",
    desc: "KNX-Komplettinstallation für vierzehn Räume: Licht, Beschattung, Heizung und Sicherheit — zentral steuerbar.",
    data: [
      ["System", "KNX"],
      ["Räume", "14"],
      ["Ort", "Oberwart"],
    ],
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1000&q=80",
  },
  {
    num: "Ref. 03",
    type: "Sicherheitstechnik",
    year: "2023",
    name: "Gewerbebetrieb Pinkafeld",
    desc: "Einbruchmeldeanlage mit zwölf Kameras und Perimeterschutz für einen regionalen Produktionsbetrieb.",
    data: [
      ["Kameras", "12"],
      ["Typ", "Perimeter"],
      ["Ort", "Pinkafeld"],
    ],
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1000&q=80",
  },
  {
    num: "Ref. 04",
    type: "Elektroinstallation",
    year: "2024",
    name: "Mehrfamilienhaus Neubau",
    desc: "Komplette Elektrik für sechs Wohneinheiten. Neuinstallation nach aktuellen Normen, inklusive Zählerkasten.",
    data: [
      ["Einheiten", "6"],
      ["Typ", "Neubau"],
      ["Ort", "Güssing"],
    ],
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000&q=80",
  },
];

export default function Referenzen() {
  return (
    <section id="referenzen" className="bg-moertel/40 py-28 md:py-40 border-y border-moertel">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <p className="font-mono text-[11px] tracking-[0.18em] text-kupfer uppercase mb-6">
            03 / Referenzen
          </p>
          <h2
            className="font-display text-[44px] md:text-[64px] xl:text-[80px] text-schiefer leading-[0.95] -tracking-[0.01em]"
            style={{ fontWeight: 400 }}
          >
            Projekte aus
            <br />
            <span className="italic text-kupfer">der Region.</span>
          </h2>
          <p className="font-sans text-[16px] md:text-[17px] text-werkbank leading-[1.7] mt-6">
            Ein Auszug unserer Installationen der letzten Jahre — jedes Projekt
            mit derselben Sorgfalt wie das erste von 1974.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: "easeOut" }}
              className={`group ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  style={{ filter: "sepia(8%) saturate(0.9)" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="mt-5 grid grid-cols-12 gap-3">
                <div className="col-span-12">
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-kupfer uppercase">
                      {p.num}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase">
                      {p.type} &middot; {p.year}
                    </p>
                  </div>
                  <h3
                    className="font-display text-[28px] md:text-[32px] text-schiefer leading-[1.1] -tracking-[0.01em]"
                    style={{ fontWeight: 400 }}
                  >
                    {p.name}
                  </h3>
                  <p className="font-sans text-[14px] text-werkbank leading-[1.65] mt-3 max-w-[460px]">
                    {p.desc}
                  </p>

                  <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-moertel pt-4">
                    {p.data.map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[9px] tracking-[0.18em] text-werkbank uppercase">
                          {k}
                        </dt>
                        <dd className="font-mono text-[12px] text-schiefer mt-0.5">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
