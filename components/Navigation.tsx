"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "LEISTUNGEN", href: "#leistungen" },
  { label: "PROJEKTE", href: "#projekte" },
  { label: "ÜBER UNS", href: "#ueber-uns" },
  { label: "KONTAKT", href: "#kontakt" },
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
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled ? "bg-wire border-b border-steel" : "bg-wire/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-1.5">
            <span className="font-grotesk font-bold text-[18px] text-white tracking-tight">ELEKTRO</span>
            <span className="font-grotesk font-bold text-[18px] text-zincc tracking-tight">SCHWEITZER</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 mr-56">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-grotesk text-[13px] text-white/70 hover:text-volt uppercase tracking-wider transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
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
            className="fixed inset-0 z-40 bg-wire flex flex-col justify-center px-10 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                className="font-grotesk font-bold text-3xl text-white hover:text-volt transition-colors py-3"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
