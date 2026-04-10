"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="bg-wire py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono text-[12px] text-signal uppercase tracking-[0.04em] mb-6">
            05 / KONTAKT
          </p>
          <h2 className="font-grotesk font-bold leading-[0.9] -tracking-[0.02em]">
            <span className="block text-white text-[56px] md:text-[80px] xl:text-[96px]">LASSEN</span>
            <span className="block text-white text-[56px] md:text-[80px] xl:text-[96px]">SIE UNS</span>
            <span className="block text-volt text-[56px] md:text-[80px] xl:text-[96px]">REDEN.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left info */}
          <div className="md:col-span-5 space-y-10">
            <p className="text-zincc text-[16px] leading-[1.6] max-w-[360px]">
              Rufen Sie an, schreiben Sie eine E-Mail oder nutzen Sie unser
              Kontaktformular. Wir melden uns innerhalb von 24 Stunden.
            </p>

            <div>
              <p className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] mb-3">STANDORT</p>
              <p className="text-white text-[16px] leading-[1.6]">
                HAUPTSTRASSE 23<br />
                A-7431 BAD TATZMANNSDORF<br />
                <span className="text-zincc">BURGENLAND · OSTERREICH</span>
              </p>
            </div>

            <div>
              <p className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] mb-3">TELEFON</p>
              <a
                href="tel:+4333538080"
                className="font-mono font-medium text-[24px] text-white hover:text-volt transition-colors"
              >
                +43 3353 8080
              </a>
            </div>

            <div>
              <p className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] mb-3">E-MAIL</p>
              <a
                href="mailto:office@elektro-schweitzer.at"
                className="font-grotesk font-medium text-[18px] text-current hover:text-volt transition-colors"
              >
                office@elektro-schweitzer.at
              </a>
            </div>

            <div>
              <p className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] mb-3">OFFNUNGSZEITEN</p>
              <p className="text-white text-[15px]">Mo – Fr · 08:00 – 12:00 & 14:30 – 18:00</p>
              <p className="font-mono text-[12px] text-zincc tracking-[0.04em] mt-1">
                SA, SO & FEIERTAG GESCHLOSSEN
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/elektro.schweitzer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-white hover:text-volt transition-colors tracking-[0.04em]"
              >
                INSTAGRAM
              </a>
              <span className="text-steel">·</span>
              <a
                href="https://www.facebook.com/ElektroSchweitzer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-white hover:text-volt transition-colors tracking-[0.04em]"
              >
                FACEBOOK
              </a>
              <span className="text-steel">·</span>
              <a
                href="https://www.linkedin.com/company/elektro-schweitzer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-white hover:text-volt transition-colors tracking-[0.04em]"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="md:col-span-7">
            {sent ? (
              <div className="py-20">
                <p className="font-mono text-[14px] text-signal uppercase tracking-[0.04em]">
                  ANFRAGE GESENDET — WIR MELDEN UNS INNERHALB 24 STUNDEN.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8"
              >
                <div>
                  <label className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] block mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-steel text-white py-3 text-[16px] focus:border-volt outline-none transition-colors placeholder:text-zincc/40"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] block mb-2">
                      E-MAIL *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-steel text-white py-3 text-[16px] focus:border-volt outline-none transition-colors placeholder:text-zincc/40"
                      placeholder="email@beispiel.at"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] block mb-2">
                      TELEFON
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-steel text-white py-3 text-[16px] focus:border-volt outline-none transition-colors placeholder:text-zincc/40"
                      placeholder="+43 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] block mb-2">
                    BETREFF *
                  </label>
                  <select
                    required
                    className="w-full bg-transparent border-b border-steel text-white py-3 text-[16px] focus:border-volt outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-wire">Bitte wahlen</option>
                    <option value="photovoltaik" className="bg-wire">Photovoltaik</option>
                    <option value="smart-home" className="bg-wire">Smart Home</option>
                    <option value="sicherheit" className="bg-wire">Sicherheitstechnik</option>
                    <option value="installation" className="bg-wire">Elektroinstallation</option>
                    <option value="sonstiges" className="bg-wire">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] block mb-2">
                    NACHRICHT *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-steel text-white py-3 text-[16px] focus:border-volt outline-none transition-colors resize-none placeholder:text-zincc/40"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-volt hover:bg-red-700 text-white font-grotesk font-semibold text-[16px] uppercase tracking-wider px-10 py-4 transition-colors rounded-sm"
                >
                  → Anfrage senden
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 border border-steel">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d16.2270!3d47.3370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGF1cHRzdHJhw59lIDIzLCA3NDMxIEJhZCBUYXR6bWFubnNkb3Jm!5e0!3m2!1sde!2sat!4v1700000000000"
            width="100%"
            height="360"
            style={{ border: 0, display: "block", filter: "grayscale(0.4)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Elektro Schweitzer Standort"
          />
        </div>
      </div>
    </section>
  );
}
