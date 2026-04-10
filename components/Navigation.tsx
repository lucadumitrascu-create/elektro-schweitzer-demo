"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Unternehmen", href: "#unternehmen" },
  { label: "Kontakt", href: "#kontakt" },
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
          scrolled ? "bg-kalkstein/95 backdrop-blur-sm border-b border-moertel" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-display text-[22px] md:text-[24px] text-schiefer">
              Elektro Schweitzer
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mt-1">
              Meisterbetrieb &middot; seit 1974
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-[14px] text-schiefer hover:text-kupfer transition-colors duration-250"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+4333538080"
              className="flex items-center gap-2 font-mono text-[13px] text-kupfer hover:text-schiefer transition-colors duration-250"
            >
              <Phone size={14} strokeWidth={1.5} />
              +43 3353 8080
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-schiefer"
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
            className="fixed inset-0 z-40 bg-kalkstein flex flex-col justify-center px-8 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="font-display text-[40px] text-schiefer py-3 hover:text-kupfer transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+4333538080"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex items-center gap-3 font-mono text-[16px] text-kupfer"
            >
              <Phone size={18} strokeWidth={1.5} />
              +43 3353 8080
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
