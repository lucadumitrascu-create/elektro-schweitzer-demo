"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-[72px] bg-warm transition-all duration-300 ${
          scrolled ? "shadow-warm" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-serif text-[22px] md:text-[24px] text-earth">Elektro Schweitzer</span>
            <span className="font-sans font-semibold text-[10px] md:text-[11px] text-smoke uppercase tracking-[0.18em] mt-1">
              Elektrotechnik
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans font-semibold text-[14px] text-earth hover:text-copper transition-colors duration-250"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="font-sans font-semibold text-[14px] text-copper border-b border-copper/40 hover:border-copper transition-colors duration-250 pb-0.5"
            >
              Beratung anfragen
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-earth"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-warm flex flex-col justify-center px-8 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="font-serif text-3xl text-earth py-3 hover:text-copper transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#kontakt"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 inline-block bg-sky text-white font-sans font-semibold text-[15px] px-6 py-3 rounded-lg w-fit"
            >
              Beratung anfragen →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
