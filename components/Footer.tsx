import { Zap, Phone, Mail, MapPin } from "lucide-react";

const leistungen = [
  "Sicherheit",
  "Energie",
  "Komfort",
  "Photovoltaik",
  "Smart Home",
  "Notdienst 24/7",
];

const unternehmen = [
  { label: "Über uns", href: "#unternehmen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Kontakt", href: "#kontakt" },
];

const rechtliches = ["Impressum", "Datenschutz", "AGB"];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-hairline pt-14 pb-8">
      <div className="container-xl">
        {/* Brand row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric text-white">
              <Zap className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <div>
              <p className="font-display font-bold text-[22px] text-ink leading-tight">
                Elektro Schweitzer
              </p>
              <p className="text-[14px] text-muted mt-0.5">
                Meisterbetrieb für Elektrotechnik · Bad Tatzmannsdorf, seit 1974
              </p>
            </div>
          </div>

          <a href="#kontakt" className="btn-electric self-start md:self-auto">
            Angebot anfragen
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-hairline mt-10 pt-12">
          {/* Columns */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {/* Leistungen */}
            <div>
              <h3 className="font-display font-semibold text-[14px] text-ink mb-4">
                Leistungen
              </h3>
              <ul className="space-y-2.5">
                {leistungen.map((item) => (
                  <li key={item}>
                    <a
                      href="#leistungen"
                      className="text-graphite hover:text-electric text-[15px] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unternehmen */}
            <div>
              <h3 className="font-display font-semibold text-[14px] text-ink mb-4">
                Unternehmen
              </h3>
              <ul className="space-y-2.5">
                {unternehmen.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-graphite hover:text-electric text-[15px] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="font-display font-semibold text-[14px] text-ink mb-4">
                Kontakt
              </h3>
              <ul className="space-y-2.5 text-[15px]">
                <li className="flex items-start gap-2 text-graphite">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted" />
                  <span>
                    Hauptstraße 23
                    <br />
                    A-7431 Bad Tatzmannsdorf
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+4333538080"
                    className="flex items-center gap-2 text-graphite hover:text-electric transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-muted" />
                    +43 3353 8080
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:office@elektro-schweitzer.at"
                    className="flex items-center gap-2 text-graphite hover:text-electric transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-muted" />
                    office@elektro-schweitzer.at
                  </a>
                </li>
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h3 className="font-display font-semibold text-[14px] text-ink mb-4">
                Rechtliches
              </h3>
              <ul className="space-y-2.5">
                {rechtliches.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-graphite hover:text-electric text-[15px] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hairline mt-12 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted text-[13px]">
            © 2026 Elektro Schweitzer GmbH · Hauptstraße 23 · 7431 Bad Tatzmannsdorf
          </p>
          <p className="flex items-center gap-1.5 text-muted text-[13px]">
            <Zap className="h-3.5 w-3.5 text-electric" strokeWidth={2.25} />
            Meisterbetrieb seit 1974
          </p>
        </div>
      </div>
    </footer>
  );
}
