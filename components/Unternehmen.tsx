"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Unternehmen() {
  return (
    <section id="unternehmen" className="bg-kalkstein py-28 md:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Text — editorial left-bias */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <p className="font-mono text-[11px] tracking-[0.18em] text-kupfer uppercase mb-6">
              05 / Unternehmen
            </p>
            <h2
              className="font-display text-[44px] md:text-[64px] xl:text-[80px] text-schiefer leading-[0.95] -tracking-[0.01em] mb-12"
              style={{ fontWeight: 400 }}
            >
              Familie.
              <br />
              Handwerk.
              <br />
              <span className="italic text-kupfer">Verantwortung.</span>
            </h2>

            <div className="space-y-6 font-sans text-[16px] md:text-[17px] text-werkbank leading-[1.7] max-w-[560px]">
              <p>
                Was 1974 als Ein-Mann-Betrieb in Bad Tatzmannsdorf begann, ist heute
                ein Familienunternehmen in dritter Generation — mit einem eingespielten
                Team aus Technikerinnen, Meistern und Lehrlingen.
              </p>
              <p>
                Elektro Schweitzer steht für das, was gute Elektrotechnik ausmacht:
                saubere Arbeit, ehrliche Beratung und Lösungen, die jahrelang
                funktionieren. Ohne Schnickschnack, aber mit vollem Einsatz.
              </p>
              <p>
                Ob Einfamilienhaus oder Gewerbeobjekt, Neuinstallation oder Sanierung —
                wir behandeln jedes Projekt, als wäre es unser eigenes Zuhause. Das
                ist unser Versprechen an Burgenland.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-moertel grid grid-cols-2 gap-x-6 gap-y-4 max-w-[560px]">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-1">
                  Zertifizierung
                </p>
                <p className="font-sans text-[14px] text-schiefer">
                  Meisterbetrieb nach § 94 GewO
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-1">
                  Mitgliedschaft
                </p>
                <p className="font-sans text-[14px] text-schiefer">
                  WKO Burgenland
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-1">
                  Gegründet
                </p>
                <p className="font-sans text-[14px] text-schiefer">1974</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-1">
                  Generationen
                </p>
                <p className="font-sans text-[14px] text-schiefer">III</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] md:sticky md:top-32">
              <div className="absolute inset-0" style={{ transform: "rotate(-1deg)" }}>
                <div className="absolute inset-0 border border-moertel" style={{ transform: "translate(-10px, 10px)" }} />
                <div className="relative h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80"
                    alt="Das Team von Elektro Schweitzer in der Werkstatt"
                    fill
                    className="object-cover"
                    style={{ filter: "sepia(10%) saturate(0.9)" }}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 left-0 right-0 flex justify-between">
                <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase">
                  Fig. 02
                </p>
                <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase">
                  Das Team &middot; Hauptstraße 23
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
