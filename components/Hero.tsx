"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";

const trust = [
  { Icon: Award, label: "Meister § 94" },
  { Icon: ShieldCheck, label: "3. Generation" },
  { Icon: Clock, label: "Notdienst 24/7" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-28 pb-16 md:pt-36 md:pb-24">
      {/* soft electric wash, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-electric/10 blur-[120px]"
      />

      <div className="container-xl relative grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
        {/* LEFT */}
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="display font-display text-[52px] font-bold text-ink md:text-[76px] xl:text-[88px]"
          >
            Strom, der
            <br />
            verbindet. <span className="text-electric">Seit 1974.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-7 max-w-[520px] text-[17px] leading-[1.6] text-graphite"
          >
            Drei Generationen Elektrotechnik aus dem Burgenland. Sicherheit, Energie
            und Komfort: geplant, installiert und gewartet mit der Präzision eines
            Meisterbetriebs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#kontakt" className="btn-electric group">
              Angebot anfragen
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href="#leistungen" className="btn-ghost">
              Unsere Leistungen
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36, ease }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {trust.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-[14px] font-medium text-graphite">
                <Icon size={17} strokeWidth={2} className="text-electric" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative lg:col-span-6"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-hairline bg-surface shadow-card sm:aspect-[5/5]">
            <Image
              src="https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?w=1100&q=85"
              alt="Meisterhand beim Verdrahten eines Verteilerkastens"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 92vw, 560px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>

          {/* floating trust card — entrance via framer, perpetual float via CSS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="absolute -bottom-5 -left-3 sm:-left-6"
          >
            <div className="float-slow flex items-center gap-3 rounded-2xl border border-hairline bg-surface/95 px-4 py-3 shadow-card backdrop-blur-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric-tint text-electric">
                <Clock size={20} strokeWidth={2.25} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-[18px] font-bold text-ink">
                  <span className="stat-num">24/7</span> Notdienst
                </p>
                <p className="text-[13px] text-muted">Wenn es brennt, sind wir da.</p>
              </div>
            </div>
          </motion.div>

          {/* small year tag */}
          <div className="float-slower absolute -right-3 top-5 rounded-xl border border-hairline bg-surface px-3.5 py-2 shadow-card sm:-right-5">
            <p className="font-display text-[15px] font-bold text-electric">
              seit <span className="stat-num">1974</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
