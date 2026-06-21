"use client";

import { motion } from "framer-motion";
import { Zap, Award, Users, Clock } from "lucide-react";
import Counter from "./Counter";

const stats = [
  {
    icon: Zap,
    target: 50,
    suffix: "+",
    label: "Jahre im Handwerk",
    sub: "seit 1974",
  },
  {
    icon: Award,
    target: 3000,
    suffix: "+",
    label: "Installationen",
    sub: "Burgenland & Umgebung",
  },
  {
    icon: Users,
    target: 3,
    suffix: "",
    label: "Generationen",
    sub: "Familienbetrieb",
  },
  {
    icon: Clock,
    target: 24,
    suffix: "/7",
    label: "Notdienst",
    sub: "wenn es brennt",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function TrustStrip() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="container-xl">
        <div className="overflow-hidden rounded-2xl bg-electric shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className={[
                    "px-6 py-10 md:px-8 md:py-14",
                    // vertical dividers between columns on desktop
                    i % 4 !== 0 ? "md:border-l md:border-white/20" : "",
                    // 2-col mobile: divider on the right column
                    i % 2 !== 0 ? "border-l border-white/20" : "",
                    // 2-col mobile: divider above the bottom row
                    i >= 2 ? "border-t border-white/20 md:border-t-0" : "",
                  ].join(" ")}
                >
                  <Icon
                    className="h-5 w-5 text-white/80"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <p className="stat-num mt-5 text-white text-[46px] leading-none md:text-[66px]">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </p>
                  <p className="mt-4 font-display font-bold text-white text-base md:text-lg">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-sans text-sm text-white/70">
                    {stat.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
