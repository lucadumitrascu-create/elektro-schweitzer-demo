"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="bg-panel schematic-grid py-28 md:py-36 border-b border-grid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-led text-signal" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-signal uppercase">
              SEC. 06 &middot; KONTAKT &middot; CHANNEL OPEN
            </p>
          </div>
          <h2 className="font-sans font-semibold text-[52px] md:text-[80px] xl:text-[104px] text-bone leading-[0.9] -tracking-[0.025em]">
            Lassen Sie
            <br />
            uns <span className="text-copper">reden.</span>
          </h2>
          <p className="font-mono text-[13px] text-mute leading-[1.7] mt-6 max-w-[520px]">
            Rufen Sie an, schreiben Sie uns, oder nutzen Sie das Formular.
            Antwortzeit: &lt; 24h. Immer von einem Menschen, nie von einem Bot.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left info */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase mb-3">
                &gt; STANDORT
              </p>
              <p className="font-mono text-[13px] text-bone leading-[1.75] tracking-[0.05em]">
                HAUPTSTRASSE 23<br />
                A-7431 BAD TATZMANNSDORF<br />
                <span className="text-mute">BURGENLAND &middot; ÖSTERREICH</span>
              </p>
            </div>

            <div className="w-20 h-px bg-copper" />

            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase mb-3">
                &gt; TEL
              </p>
              <a
                href="tel:+4333538080"
                className="font-sans font-semibold text-[32px] md:text-[40px] text-copper hover:text-signal transition-colors duration-200 leading-none"
              >
                +43 3353 8080
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase mb-3">
                &gt; EMAIL
              </p>
              <a
                href="mailto:office@elektro-schweitzer.at"
                className="font-mono text-[14px] text-bone hover:text-copper transition-colors duration-200"
              >
                office@elektro-schweitzer.at
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase mb-3">
                &gt; HOURS
              </p>
              <p className="font-mono text-[13px] text-bone leading-[1.7] tracking-[0.05em]">
                MO–FR &nbsp;08:00 – 12:00<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14:30 – 18:00<br />
                <span className="text-mute">SA &middot; SO &middot; FT GESCHLOSSEN</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-signal/60 px-8 py-16 max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-2 w-2 rounded-full bg-signal animate-pulse-led text-signal" />
                  <p className="font-mono text-[10px] tracking-[0.2em] text-signal uppercase">
                    TRANSMISSION RECEIVED
                  </p>
                </div>
                <p className="font-sans font-semibold text-[24px] md:text-[28px] text-bone leading-[1.3]">
                  Vielen Dank. Wir melden uns
                  <br />
                  <span className="text-copper">innerhalb 24 Stunden.</span>
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="border border-grid p-8 md:p-10 max-w-xl"
              >
                <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase mb-8 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  ANFRAGEFORMULAR &middot; FORM.06
                </p>

                <div className="space-y-7">
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase block mb-2">
                      &gt; NAME *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-grid text-bone py-2 text-[15px] font-sans focus:border-copper outline-none transition-colors placeholder:text-mute/40"
                      placeholder="_"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-7">
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase block mb-2">
                        &gt; EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-grid text-bone py-2 text-[15px] font-sans focus:border-copper outline-none transition-colors placeholder:text-mute/40"
                        placeholder="_"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase block mb-2">
                        &gt; TEL
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-transparent border-b border-grid text-bone py-2 text-[15px] font-sans focus:border-copper outline-none transition-colors placeholder:text-mute/40"
                        placeholder="_"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase block mb-2">
                      &gt; BEREICH *
                    </label>
                    <select
                      required
                      className="w-full bg-transparent border-b border-grid text-bone py-2 text-[15px] font-sans focus:border-copper outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-panel">-- BITTE WÄHLEN --</option>
                      <option value="sicherheit" className="bg-panel">Sicherheit &amp; Schutz</option>
                      <option value="energie" className="bg-panel">Energie &amp; Photovoltaik</option>
                      <option value="komfort" className="bg-panel">Komfort &amp; Smart Home</option>
                      <option value="installation" className="bg-panel">Elektroinstallation</option>
                      <option value="sonstiges" className="bg-panel">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase block mb-2">
                      &gt; NACHRICHT *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-grid text-bone py-2 text-[15px] font-sans focus:border-copper outline-none transition-colors resize-none placeholder:text-mute/40"
                      placeholder="_"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-copper text-panel font-mono text-[12px] tracking-[0.15em] uppercase py-4 hover:bg-signal transition-colors duration-200 mt-4"
                  >
                    [ TRANSMIT → ]
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 border border-grid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d16.2270!3d47.3370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGF1cHRzdHJhw59lIDIzLCA3NDMxIEJhZCBUYXR6bWFubnNkb3Jm!5e0!3m2!1sde!2sat!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0, display: "block", filter: "grayscale(60%) brightness(0.85) invert(0.92) hue-rotate(180deg)" }}
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
