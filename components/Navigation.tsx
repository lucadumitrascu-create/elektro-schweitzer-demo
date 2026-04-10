"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "LEISTUNGEN", idx: "01", href: "#leistungen" },
  { label: "REFERENZEN", idx: "02", href: "#referenzen" },
  { label: "UNTERNEHMEN", idx: "03", href: "#unternehmen" },
  { label: "KONTAKT", idx: "04", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-colors duration-300 ${
          scrolled ? "bg-panel/95 backdrop-blur-sm border-b border-grid" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal animate-pulse-led text-signal" />
              <span className="font-sans font-semibold text-[15px] text-bone tracking-[0.02em]">
                ELEKTRO SCHWEITZER
              </span>
            </div>
            <span className="hidden md:inline font-mono text-[10px] tracking-[0.18em] text-mute uppercase border-l border-grid pl-3">
              EST. 1974
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.15em] text-bone/60 hover:text-copper transition-colors"
              >
                <span className="text-copper/50 group-hover:text-copper">[{l.idx}]</span>
                {l.label}
              </a>
            ))}
            <a
              href="tel:+4333538080"
              className="ml-4 font-mono text-[11px] tracking-[0.15em] text-copper hover:text-signal transition-colors border border-copper/40 hover:border-signal px-4 py-2"
            >
              +43 3353 8080
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-bone"
            aria-label="Menü"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-panel schematic-grid flex flex-col justify-center px-8 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                className="flex items-baseline gap-3 font-sans font-semibold text-[32px] text-bone py-3 hover:text-copper transition-colors"
              >
                <span className="font-mono text-[12px] text-copper">[{l.idx}]</span>
                {l.label}
              </motion.a>
            ))}
            <a
              href="tel:+4333538080"
              className="mt-8 font-mono text-[14px] tracking-[0.15em] text-copper border border-copper px-4 py-3 inline-block w-fit"
            >
              +43 3353 8080
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
