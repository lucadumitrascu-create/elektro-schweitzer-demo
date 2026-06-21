"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facts: Array<[string, string]> = [
  ["Gegründet", "1974"],
  ["Generationen", "3"],
  ["Zertifizierung", "Meister § 94"],
  ["Mitgliedschaft", "WKO Burgenland"],
  ["Standort", "Bad Tatzmannsdorf"],
  ["Bereiche", "Sicherheit · Energie · Komfort"],
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Unternehmen() {
  return (
    <section id="unternehmen" className="bg-paper py-20 md:py-28">
      <div className="container-xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease }}
            className="relative order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-hairline shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85"
                alt="Team von Elektro Schweitzer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Tasteful corner card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              className="absolute -bottom-5 -right-5 rounded-2xl border border-hairline bg-surface px-5 py-4 shadow-card"
            >
              <p className="display font-display text-[28px] font-bold leading-none text-electric">
                3.
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-graphite">
                Generation
              </p>
            </motion.div>
          </motion.div>

          {/* Text + facts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="order-2"
          >
            <span className="chip">Unternehmen</span>

            <h2 className="display mt-5 font-display text-[40px] font-bold leading-[1.05] text-ink md:text-[56px]">
              Familie. Handwerk.{" "}
              <span className="text-electric">Verantwortung.</span>
            </h2>

            <div className="mt-7 max-w-[580px] space-y-5 text-[16px] leading-[1.75] text-graphite">
              <p>
                Was 1974 als Ein-Mann-Betrieb in Bad Tatzmannsdorf begann, ist
                heute ein Familienunternehmen in dritter Generation, mit einem
                eingespielten Team aus Technikerinnen, Meistern und Lehrlingen.
              </p>
              <p>
                Elektro Schweitzer steht für das, was gute Elektrotechnik
                ausmacht: saubere Arbeit, ehrliche Beratung und Lösungen, die
                jahrelang funktionieren. Ohne Schnickschnack, aber mit vollem
                Einsatz.
              </p>
              <p>
                Ob Einfamilienhaus oder Gewerbeobjekt, Neuinstallation oder
                Sanierung: wir behandeln jedes Projekt, als wäre es unser eigenes
                Zuhause. Das ist unser Versprechen an Burgenland.
              </p>
            </div>

            <dl className="mt-10 grid max-w-[580px] grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
              {facts.map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-baseline justify-between gap-4 border-t border-hairline py-3"
                >
                  <dt className="text-[13px] text-muted">{key}</dt>
                  <dd className="text-right text-[15px] font-semibold text-ink">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
