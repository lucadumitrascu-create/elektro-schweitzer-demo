"use client";

import { Phone } from "lucide-react";

export default function PhoneBar() {
  return (
    <>
      {/* Mobile: bottom full-width */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] h-14 bg-wire border-t border-steel flex items-center justify-between px-4 md:hidden">
        <a href="tel:+4333538080" className="flex items-center gap-2 text-white">
          <Phone size={16} className="text-volt" />
          <span className="font-mono text-[15px] tracking-wider">+43 3353 8080</span>
        </a>
        <a
          href="tel:+4333538080"
          className="bg-volt text-white font-grotesk font-semibold text-[12px] uppercase tracking-wider px-4 py-2 rounded-sm"
        >
          Anrufen
        </a>
      </div>

      {/* Desktop: top right floating */}
      <div className="hidden md:flex fixed top-4 right-4 z-[60] h-12 bg-wire border border-steel items-center px-5 gap-4">
        <Phone size={14} className="text-volt" />
        <a href="tel:+4333538080" className="font-mono text-[13px] text-white tracking-wider hover:text-volt transition-colors">
          +43 3353 8080
        </a>
        <span className="text-zincc">|</span>
        <a href="tel:+4333538080" className="font-grotesk font-semibold text-[12px] text-volt uppercase tracking-wider hover:text-white transition-colors">
          Anrufen →
        </a>
      </div>
    </>
  );
}
