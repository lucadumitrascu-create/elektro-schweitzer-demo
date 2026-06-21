"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Zap } from "lucide-react";

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
    const h = () => setScrolled(window.scrollY > 24);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper/85 backdrop-blur-md border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-xl flex h-[72px] items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-electric text-white shadow-electric">
              <Zap size={18} strokeWidth={2.5} fill="currentColor" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[17px] font-700 font-bold tracking-tight text-ink">
                Elektro Schweitzer
              </span>
              <span className="text-[11px] font-medium text-muted">
                Meisterbetrieb seit 1974
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-graphite transition-colors hover:text-electric"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+4333538080" className="btn-electric !px-5 !py-2.5 text-[14px]">
              <Phone size={15} strokeWidth={2.5} />
              +43 3353 8080
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-lg text-ink lg:hidden"
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-28 lg:hidden"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * (i + 1), duration: 0.25 }}
                  className="border-b border-hairline py-5 font-display text-[30px] font-semibold tracking-tight text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="tel:+4333538080"
              onClick={() => setOpen(false)}
              className="btn-electric mt-10 w-full justify-center text-[16px]"
            >
              <Phone size={17} strokeWidth={2.5} />
              +43 3353 8080
            </a>
            <p className="mt-6 text-center text-[14px] text-muted">
              Notdienst 24/7 · wenn es brennt, sind wir da.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
