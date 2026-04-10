"use client";

import { motion } from "framer-motion";
import { Shield, Sun, Wifi } from "lucide-react";

const cards = [
  {
    Icon: Shield,
    title: "Sicherheit & Schutz",
    desc: "Wir schützen, was Ihnen wichtig ist. Professionelle Sicherheitstechnik für Ihr Zuhause und Ihren Betrieb.",
    items: [
      "Alarmanlagen & Einbruchschutz",
      "Blitzschutz & Überspannungsschutz",
      "Videoüberwachungssysteme",
      "Rauchmelder & Brandschutz",
      "Prüfprotokolle & E-Befund",
    ],
  },
  {
    Icon: Sun,
    title: "Energie & Effizienz",
    desc: "Nachhaltig und kosteneffizient. Wir installieren die Energielösungen von morgen — heute.",
    items: [
      "Photovoltaik & Speicherlösungen",
      "Infrarotheizungen",
      "LED-Beleuchtungslösungen",
      "Elektroinstallation Neubau & Sanierung",
      "Zählerkasten & Verteileraufbau",
    ],
  },
  {
    Icon: Wifi,
    title: "Komfort & Kommunikation",
    desc: "Ihr Zuhause, intelligent vernetzt. Moderne Haustechnik für mehr Lebensqualität.",
    items: [
      "Smart Home Systeme",
      "SAT-Anlagen & Empfangstechnik",
      "Multimedia & Netzwerktechnik",
      "Haushaltsgeräte & Beratung",
      "Sprechanlagen & Türkommunikation",
    ],
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="bg-sand py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.16em] mb-3">
            Was wir für Sie tun
          </p>
          <h2 className="font-serif text-[36px] md:text-[48px] xl:text-[56px] text-earth leading-[1.1]">
            Drei Bereiche, eine Kompetenz.
          </h2>
          <p className="font-sans text-[17px] text-smoke leading-[1.7] max-w-[560px] mt-4">
            Ob Sicherheit, Energie oder Komfort — wir bieten Ihnen durchdachte
            Lösungen aus einer Hand. Immer persönlich, immer professionell.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-warm rounded-lg shadow-warm hover:shadow-warm-lg p-10 transition-all duration-250 hover:-translate-y-1 border-t-[3px] border-transparent hover:border-copper"
            >
              <c.Icon size={36} strokeWidth={1.5} className="text-copper" />
              <h3 className="font-serif text-[24px] text-earth mt-5">{c.title}</h3>
              <p className="font-sans text-[15px] text-smoke leading-[1.6] mt-3">{c.desc}</p>
              <ul className="mt-6 space-y-[10px]">
                {c.items.map((s) => (
                  <li key={s} className="font-sans text-[15px] text-earth flex items-start gap-3">
                    <span className="text-copper mt-[7px] block w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="inline-block mt-6 font-sans font-semibold text-[14px] text-copper hover:text-earth transition-colors duration-250"
              >
                Mehr erfahren →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA band */}
      <div className="border-y border-cream mt-20 py-12 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <h3 className="font-serif text-[28px] md:text-[32px] text-earth">
            Welche Lösung passt zu Ihnen?
          </h3>
          <a
            href="#kontakt"
            className="bg-sky hover:bg-sky/90 text-white font-sans font-semibold text-[15px] px-7 py-[14px] rounded-lg transition-colors duration-250"
          >
            Jetzt kostenlos beraten lassen →
          </a>
        </div>
      </div>
    </section>
  );
}
