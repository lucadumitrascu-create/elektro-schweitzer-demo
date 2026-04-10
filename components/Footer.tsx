export default function Footer() {
  return (
    <footer className="bg-schiefer pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mb-16 pb-10 border-b border-kalkstein/10">
          <p
            className="font-display text-[48px] md:text-[72px] xl:text-[96px] text-kalkstein leading-[0.9] -tracking-[0.02em]"
            style={{ fontWeight: 400 }}
          >
            Elektro Schweitzer
          </p>
          <p className="font-mono text-[11px] tracking-[0.18em] text-spaet uppercase mt-4">
            Meisterbetrieb &middot; Bad Tatzmannsdorf &middot; Est. 1974
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-spaet uppercase mb-5">
              Leistungen
            </p>
            <ul className="space-y-2.5 text-kalkstein/60 font-sans text-[13px]">
              <li>Sicherheit &amp; Schutz</li>
              <li>Energie &amp; Effizienz</li>
              <li>Komfort &amp; Kommunikation</li>
              <li>Photovoltaik</li>
              <li>Smart Home</li>
              <li>Notdienst</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-spaet uppercase mb-5">
              Unternehmen
            </p>
            <ul className="space-y-2.5">
              {[
                { l: "Über uns", h: "#unternehmen" },
                { l: "Referenzen", h: "#referenzen" },
                { l: "Leistungen", h: "#leistungen" },
                { l: "Kontakt", h: "#kontakt" },
              ].map((x) => (
                <li key={x.l}>
                  <a
                    href={x.h}
                    className="text-kalkstein/60 hover:text-kupfer transition-colors duration-250 font-sans text-[13px]"
                  >
                    {x.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-spaet uppercase mb-5">
              Kontakt
            </p>
            <div className="text-kalkstein/60 font-sans text-[13px] space-y-2">
              <p>Hauptstraße 23</p>
              <p>A-7431 Bad Tatzmannsdorf</p>
              <p className="pt-2">
                <a
                  href="tel:+4333538080"
                  className="hover:text-kupfer transition-colors duration-250"
                >
                  +43 3353 8080
                </a>
              </p>
              <p>
                <a
                  href="mailto:office@elektro-schweitzer.at"
                  className="hover:text-kupfer transition-colors duration-250"
                >
                  office@elektro-schweitzer.at
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-spaet uppercase mb-5">
              Rechtliches
            </p>
            <ul className="space-y-2.5">
              {["Impressum", "Datenschutz", "AGB"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-kalkstein/60 hover:text-kupfer transition-colors duration-250 font-sans text-[13px]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-kalkstein/10">
          <p className="font-mono text-[10px] tracking-[0.12em] text-kalkstein/30 uppercase">
            © 2026 Elektro Schweitzer GmbH &middot; Hauptstraße 23 &middot; A-7431 Bad Tatzmannsdorf &middot; Burgenland &middot; Österreich
          </p>
        </div>
      </div>
    </footer>
  );
}
