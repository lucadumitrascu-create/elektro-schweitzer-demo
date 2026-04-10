"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="bg-kalkstein py-28 md:py-40 border-t border-moertel">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.18em] text-kupfer uppercase mb-6">
            06 / Kontakt
          </p>
          <h2
            className="font-display text-[52px] md:text-[80px] xl:text-[112px] text-schiefer leading-[0.9] -tracking-[0.02em]"
            style={{ fontWeight: 400 }}
          >
            Lassen Sie uns
            <br />
            <span className="italic text-kupfer">reden.</span>
          </h2>
          <p className="font-sans text-[16px] md:text-[17px] text-werkbank leading-[1.7] mt-6 max-w-[520px]">
            Rufen Sie an, schreiben Sie uns, oder nutzen Sie das Formular. Wir
            melden uns innerhalb von 24 Stunden — persönlich, nicht per Bot.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-3">
                Standort
              </p>
              <p className="font-sans text-[16px] text-schiefer leading-[1.6]">
                Hauptstraße 23
                <br />
                A-7431 Bad Tatzmannsdorf
                <br />
                <span className="text-werkbank">Burgenland &middot; Österreich</span>
              </p>
            </div>

            <div className="w-16 h-px bg-kupfer" />

            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-3">
                Telefon
              </p>
              <a
                href="tel:+4333538080"
                className="font-display text-[36px] md:text-[48px] text-schiefer hover:text-kupfer transition-colors duration-250"
                style={{ fontWeight: 400 }}
              >
                +43 3353 8080
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-3">
                E-Mail
              </p>
              <a
                href="mailto:office@elektro-schweitzer.at"
                className="font-sans text-[17px] text-kupfer hover:text-schiefer transition-colors duration-250"
              >
                office@elektro-schweitzer.at
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mb-3">
                Öffnungszeiten
              </p>
              <p className="font-sans text-[15px] text-schiefer leading-[1.6]">
                Mo – Fr &nbsp;·&nbsp; 08:00 – 12:00
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &amp; 14:30 – 18:00
              </p>
              <p className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase mt-2">
                Sa, So &amp; Feiertag geschlossen
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-kupfer/40 px-8 py-16 max-w-xl">
                <p className="font-mono text-[11px] tracking-[0.18em] text-kupfer uppercase mb-4">
                  Anfrage übermittelt
                </p>
                <p
                  className="font-display text-[28px] md:text-[32px] text-schiefer leading-[1.25]"
                  style={{ fontWeight: 400 }}
                >
                  Vielen Dank. Wir melden uns{" "}
                  <span className="italic text-kupfer">innerhalb 24 Stunden</span>
                  — persönlich.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8 max-w-xl"
              >
                <div>
                  <label className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase block mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-moertel text-schiefer py-3 text-[16px] focus:border-kupfer outline-none transition-colors duration-250 placeholder:text-werkbank/40 font-sans"
                    placeholder="Frau / Herr Mustermann"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase block mb-3">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-moertel text-schiefer py-3 text-[16px] focus:border-kupfer outline-none transition-colors duration-250 placeholder:text-werkbank/40 font-sans"
                      placeholder="mail@beispiel.at"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase block mb-3">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-moertel text-schiefer py-3 text-[16px] focus:border-kupfer outline-none transition-colors duration-250 placeholder:text-werkbank/40 font-sans"
                      placeholder="+43 ..."
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase block mb-3">
                    Bereich *
                  </label>
                  <select
                    required
                    className="w-full bg-transparent border-b border-moertel text-schiefer py-3 text-[16px] focus:border-kupfer outline-none transition-colors duration-250 appearance-none font-sans"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="sicherheit">Sicherheit &amp; Schutz</option>
                    <option value="energie">Energie &amp; Photovoltaik</option>
                    <option value="komfort">Komfort &amp; Smart Home</option>
                    <option value="installation">Elektroinstallation</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.18em] text-werkbank uppercase block mb-3">
                    Ihr Anliegen *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-moertel text-schiefer py-3 text-[16px] focus:border-kupfer outline-none transition-colors duration-250 placeholder:text-werkbank/40 font-sans resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Frage..."
                  />
                </div>
                <button
                  type="submit"
                  className="font-sans text-[15px] text-schiefer hover:text-kupfer transition-colors duration-250 group"
                >
                  <span className="text-kupfer mr-2">→</span>
                  Anfrage absenden
                  <span className="block w-full h-px bg-schiefer mt-1 group-hover:bg-kupfer transition-colors" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 border-y border-moertel">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d16.2270!3d47.3370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGF1cHRzdHJhw59lIDIzLCA3NDMxIEJhZCBUYXR6bWFubnNkb3Jm!5e0!3m2!1sde!2sat!4v1700000000000"
            width="100%"
            height="420"
            style={{ border: 0, display: "block", filter: "sepia(12%) saturate(0.85)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort Elektro Schweitzer Bad Tatzmannsdorf"
          />
        </div>
      </div>
    </section>
  );
}
