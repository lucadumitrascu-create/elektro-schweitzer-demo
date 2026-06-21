"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.6, ease },
};

const labelClass = "text-[14px] font-medium text-graphite mb-1.5 block";
const inputClass =
  "w-full bg-surface border border-hairline rounded-xl px-4 py-3 text-ink focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-colors";

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="shrink-0 grid place-items-center h-11 w-11 rounded-xl bg-electric-tint text-electric">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-wide text-muted mb-1">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="bg-paper py-20 md:py-28">
      <div className="container-xl">
        {/* Header */}
        <motion.div {...fadeUp} className="max-w-2xl mb-14 md:mb-16">
          <span className="chip mb-5">Kontakt</span>
          <h2 className="display font-display font-bold text-ink text-[44px] md:text-[64px]">
            Lassen Sie uns <span className="text-electric">reden.</span>
          </h2>
          <p className="text-graphite text-[17px] md:text-[18px] leading-relaxed mt-5">
            Rufen Sie an, schreiben Sie uns oder nutzen Sie das Formular.
            Antwortzeit unter 24 Stunden, immer von einem Menschen.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - info */}
          <motion.div
            {...fadeUp}
            className="bg-surface border border-hairline rounded-2xl shadow-card p-7"
          >
            <div className="space-y-7">
              <InfoRow icon={MapPin} label="Standort">
                <p className="text-ink leading-relaxed">
                  Hauptstraße 23
                  <br />
                  A-7431 Bad Tatzmannsdorf
                  <br />
                  <span className="text-muted">Burgenland · Österreich</span>
                </p>
              </InfoRow>

              <div className="h-px bg-hairline" />

              <InfoRow icon={Phone} label="Telefon">
                <a
                  href="tel:+4333538080"
                  className="font-display font-bold text-[28px] md:text-[34px] text-electric hover:text-electric-ink transition-colors leading-none"
                >
                  +43 3353 8080
                </a>
              </InfoRow>

              <InfoRow icon={Mail} label="E-Mail">
                <a
                  href="mailto:office@elektro-schweitzer.at"
                  className="text-ink hover:text-electric transition-colors break-all"
                >
                  office@elektro-schweitzer.at
                </a>
              </InfoRow>

              <InfoRow icon={Clock} label="Öffnungszeiten">
                <p className="text-ink leading-relaxed">
                  Mo-Fr  08:00-12:00 und 14:30-18:00
                  <br />
                  <span className="text-muted">
                    Sa, So, Feiertag geschlossen
                  </span>
                </p>
              </InfoRow>
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div {...fadeUp}>
            {sent ? (
              <div className="bg-surface border border-hairline rounded-2xl shadow-card p-7 md:p-9">
                <span className="grid place-items-center h-14 w-14 rounded-2xl bg-electric-tint text-electric mb-5">
                  <CheckCircle size={28} strokeWidth={1.75} />
                </span>
                <h3 className="font-display font-bold text-ink text-[26px] md:text-[30px]">
                  Vielen Dank!
                </h3>
                <p className="text-graphite text-[17px] leading-relaxed mt-3">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="bg-surface border border-hairline rounded-2xl shadow-card p-7 md:p-9"
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="k-name" className={labelClass}>
                      Name *
                    </label>
                    <input
                      id="k-name"
                      name="name"
                      type="text"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="k-email" className={labelClass}>
                        E-Mail *
                      </label>
                      <input
                        id="k-email"
                        name="email"
                        type="email"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="k-phone" className={labelClass}>
                        Telefon
                      </label>
                      <input
                        id="k-phone"
                        name="phone"
                        type="tel"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="k-bereich" className={labelClass}>
                      Bereich *
                    </label>
                    <select
                      id="k-bereich"
                      name="bereich"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Bitte wählen
                      </option>
                      <option value="sicherheit">Sicherheit & Schutz</option>
                      <option value="energie">Energie & Photovoltaik</option>
                      <option value="komfort">Komfort & Smart Home</option>
                      <option value="installation">Elektroinstallation</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="k-nachricht" className={labelClass}>
                      Nachricht *
                    </label>
                    <textarea
                      id="k-nachricht"
                      name="nachricht"
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-electric w-full justify-center"
                  >
                    Anfrage senden
                    <ArrowRight size={18} strokeWidth={2} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          {...fadeUp}
          className="mt-10 md:mt-12 rounded-2xl overflow-hidden border border-hairline"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d16.2270!3d47.3370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGF1cHRzdHJhw59lIDIzLCA3NDMxIEJhZCBUYXR6bWFubnNkb3Jm!5e0!3m2!1sde!2sat!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 0, display: "block", filter: "grayscale(0.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort Elektro Schweitzer"
          />
        </motion.div>
      </div>
    </section>
  );
}
