"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const dur = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setVal(Math.floor(t * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "JAHRE ERFAHRUNG" },
  { value: 3000, suffix: "+", label: "ABGESCHLOSSENE PROJEKTE" },
  { value: 24, suffix: "H", label: "NOTDIENST ERREICHBAR" },
  { value: 100, suffix: "%", label: "MEISTERBETRIEB QUALITAT" },
];

export default function SocialProof() {
  return (
    <section className="bg-panel py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center py-6 md:py-0 ${
                i < stats.length - 1 ? "md:border-r border-zincc/20" : ""
              }`}
            >
              <p className="font-grotesk font-bold text-[44px] md:text-[64px] text-steel leading-[1] -tracking-[0.02em]">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="font-mono text-[11px] md:text-[12px] text-zincc tracking-[0.04em] mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center font-mono text-[11px] text-zincc/70 italic mt-10">
          — Ihr zuverlassiger Partner in Burgenland und Umgebung —
        </p>
      </div>
    </section>
  );
}
