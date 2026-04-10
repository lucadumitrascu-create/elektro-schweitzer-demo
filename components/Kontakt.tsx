"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="bg-sand py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="font-serif text-[48px] md:text-[64px] xl:text-[80px] text-earth leading-[1.05]">
            Lassen Sie uns reden.
          </h2>
          <p className="font-sans text-[17px] text-smoke leading-[1.7] max-w-[560px] mt-4">
            Rufen Sie an, schreiben Sie uns, oder nutzen Sie das Formular. Wir
            melden uns innerhalb von 24 Stunden.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left info */}
          <div className="space-y-8">
            <div>
              <p className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.16em] mb-2">
                Standort
              </p>
              <p className="font-sans text-[17px] text-earth leading-[1.6]">
                Hauptstraße 23
                <br />
                A-7431 Bad Tatzmannsdorf
                <br />
                <span className="text-smoke">Burgenland, Österreich</span>
              </p>
            </div>

            <div>
              <p className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.16em] mb-2">
                Telefon
              </p>
              <a
                href="tel:+4333538080"
                className="font-serif text-[32px] md:text-[36px] text-copper hover:text-earth transition-colors duration-250"
              >
                +43 3353 8080
              </a>
            </div>

            <div>
              <p className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.16em] mb-2">
                E-Mail
              </p>
              <a
                href="mailto:office@elektro-schweitzer.at"
                className="font-sans text-[17px] text-sky hover:text-copper transition-colors duration-250"
              >
                office@elektro-schweitzer.at
              </a>
            </div>

            <div>
              <p className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.16em] mb-2">
                Öffnungszeiten
              </p>
              <p className="font-sans text-[17px] text-earth">
                Mo – Fr · 08:00 – 12:00 & 14:30 – 18:00
              </p>
              <p className="font-sans text-[14px] text-smoke mt-1">
                Sa, So & Feiertag geschlossen
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4">
              <a
                href="https://www.instagram.com/elektro.schweitzer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold text-[14px] text-copper hover:text-earth transition-colors duration-250"
              >
                Instagram
              </a>
              <span className="text-cream">·</span>
              <a
                href="https://www.facebook.com/ElektroSchweitzer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold text-[14px] text-copper hover:text-earth transition-colors duration-250"
              >
                Facebook
              </a>
              <span className="text-cream">·</span>
              <a
                href="https://www.linkedin.com/company/elektro-schweitzer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold text-[14px] text-copper hover:text-earth transition-colors duration-250"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="bg-warm border border-leaf/30 rounded-lg p-10">
                <p className="font-sans text-[16px] text-leaf">
                  ✓ Anfrage gesendet — wir melden uns innerhalb von 24 Stunden.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.14em] block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-warm border border-cream rounded-lg text-earth px-4 py-3 text-[16px] focus:border-copper outline-none transition-colors duration-250 placeholder:text-smoke/40"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.14em] block mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-warm border border-cream rounded-lg text-earth px-4 py-3 text-[16px] focus:border-copper outline-none transition-colors duration-250 placeholder:text-smoke/40"
                      placeholder="email@beispiel.at"
                    />
                  </div>
                  <div>
                    <label className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.14em] block mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-warm border border-cream rounded-lg text-earth px-4 py-3 text-[16px] focus:border-copper outline-none transition-colors duration-250 placeholder:text-smoke/40"
                      placeholder="+43 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.14em] block mb-2">
                    Betreff *
                  </label>
                  <select
                    required
                    className="w-full bg-warm border border-cream rounded-lg text-earth px-4 py-3 text-[16px] focus:border-copper outline-none transition-colors duration-250 appearance-none"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="photovoltaik">Photovoltaik</option>
                    <option value="smart-home">Smart Home</option>
                    <option value="sicherheit">Sicherheitstechnik</option>
                    <option value="installation">Elektroinstallation</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="font-sans font-semibold text-[12px] uppercase text-smoke tracking-[0.14em] block mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-warm border border-cream rounded-lg text-earth px-4 py-3 text-[16px] focus:border-copper outline-none transition-colors duration-250 placeholder:text-smoke/40 resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky hover:bg-sky/90 text-white font-sans font-semibold text-[15px] py-[14px] rounded-lg transition-colors duration-250"
                >
                  Anfrage absenden →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-warm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d16.2270!3d47.3370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGF1cHRzdHJhw59lIDIzLCA3NDMxIEJhZCBUYXR6bWFubnNkb3Jm!5e0!3m2!1sde!2sat!4v1700000000000"
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort Elektro Schweitzer"
          />
        </div>
      </div>
    </section>
  );
}
