export default function Footer() {
  return (
    <footer className="bg-earth pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-serif text-[26px] md:text-[28px] text-warm">Elektro Schweitzer</p>
          <p className="font-sans text-[13px] text-white/40 mt-1">
            Meisterbetrieb seit 1974 · Bad Tatzmannsdorf
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="font-sans font-semibold text-[12px] uppercase text-copper tracking-[0.14em] mb-4">
              Leistungen
            </p>
            <ul className="space-y-2 text-white/60 text-[14px]">
              <li>Sicherheit & Schutz</li>
              <li>Energie & Effizienz</li>
              <li>Komfort & Kommunikation</li>
              <li>Photovoltaik</li>
              <li>Smart Home</li>
            </ul>
          </div>
          <div>
            <p className="font-sans font-semibold text-[12px] uppercase text-copper tracking-[0.14em] mb-4">
              Unternehmen
            </p>
            <ul className="space-y-2">
              {[
                { l: "Über uns", h: "#ueber-uns" },
                { l: "Projekte", h: "#projekte" },
                { l: "Kontakt", h: "#kontakt" },
              ].map((x) => (
                <li key={x.l}>
                  <a href={x.h} className="text-white/60 hover:text-copper transition-colors duration-250 text-[14px]">
                    {x.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans font-semibold text-[12px] uppercase text-copper tracking-[0.14em] mb-4">
              Kontakt
            </p>
            <div className="text-white/60 text-[14px] space-y-2">
              <p>Hauptstraße 23</p>
              <p>7431 Bad Tatzmannsdorf</p>
              <p className="pt-2">
                <a href="tel:+4333538080" className="hover:text-copper transition-colors duration-250">
                  +43 3353 8080
                </a>
              </p>
              <p>
                <a href="mailto:office@elektro-schweitzer.at" className="hover:text-copper transition-colors duration-250">
                  office@elektro-schweitzer.at
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-sans font-semibold text-[12px] uppercase text-copper tracking-[0.14em] mb-4">
              Rechtliches
            </p>
            <ul className="space-y-2">
              {["Impressum", "Datenschutz", "AGB"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/60 hover:text-copper transition-colors duration-250 text-[14px]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="font-sans text-[13px] text-white/50">
            © 2026 Elektro Schweitzer GmbH · Hauptstraße 23 · A-7431 Bad
            Tatzmannsdorf · Burgenland
          </p>
        </div>
      </div>
    </footer>
  );
}
