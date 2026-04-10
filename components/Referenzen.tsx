"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    ref: "REF-01.2024",
    type: "PHOTOVOLTAIK",
    name: "Familie Wagner",
    desc: "12-kWp-Anlage mit Speicher für ein Einfamilienhaus. Von der Beratung bis zur Inbetriebnahme in sechs Wochen.",
    data: [
      ["PWR", "12.0 kWp"],
      ["STOR", "8.0 kWh"],
      ["LOC", "Bad Tatzmannsdorf"],
      ["DUR", "06 W"],
    ],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=85",
  },
  {
    ref: "REF-02.2024",
    type: "SMART HOME",
    name: "Villa Oberwart",
    desc: "KNX-Komplettinstallation für vierzehn Räume: Licht, Beschattung, Heizung und Sicherheit — zentral steuerbar.",
    data: [
      ["SYS", "KNX"],
      ["RMS", "14"],
      ["LOC", "Oberwart"],
      ["YR", "2024"],
    ],
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1000&q=85",
  },
  {
    ref: "REF-03.2023",
    type: "SICHERHEIT",
    name: "Gewerbebetrieb Pinkafeld",
    desc: "Einbruchmeldeanlage mit zwölf Kameras und Perimeterschutz für einen regionalen Produktionsbetrieb.",
    data: [
      ["CAM", "12"],
      ["TYP", "Perimeter"],
      ["LOC", "Pinkafeld"],
      ["YR", "2023"],
    ],
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1000&q=85",
  },
  {
    ref: "REF-04.2024",
    type: "INSTALLATION",
    name: "Mehrfamilienhaus Neubau",
    desc: "Komplette Elektrik für sechs Wohneinheiten. Neuinstallation nach aktuellen Normen, inklusive Zählerkasten.",
    data: [
      ["UNIT", "6"],
      ["TYP", "Neubau"],
      ["LOC", "Güssing"],
      ["YR", "2024"],
    ],
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000&q=85",
  },
];

export default function Referenzen() {
  return (
    <section id="referenzen" className="bg-trace py-28 md:py-36 border-b border-grid">
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
              SEC. 03 &middot; REFERENZEN &middot; INDEX 04
            </p>
          </div>
          <h2 className="font-sans font-semibold text-[44px] md:text-[64px] xl:text-[80px] text-bone leading-[0.95] -tracking-[0.02em]">
            Installiert.
            <br />
            <span className="text-copper">Verifiziert.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-16">
          {projects.map((p, i) => (
            <motion.article
              key={p.ref}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-4">
                <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
                  {p.ref}
                </p>
                <div className="h-px bg-grid flex-grow" />
                <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
                  {p.type}
                </p>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden border border-grid group-hover:border-copper/40 transition-colors duration-300">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  style={{ filter: "grayscale(85%) contrast(1.05)" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="font-sans font-semibold text-[22px] md:text-[24px] text-bone mt-5 -tracking-[0.01em]">
                {p.name}
              </h3>
              <p className="font-sans text-[14px] text-bone/60 leading-[1.65] mt-2 max-w-[480px]">
                {p.desc}
              </p>

              <dl className="mt-5 grid grid-cols-4 gap-3 border-t border-grid pt-4">
                {p.data.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[9px] tracking-[0.18em] text-mute uppercase">
                      {k}
                    </dt>
                    <dd className="font-mono text-[11px] text-copper mt-0.5">
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
