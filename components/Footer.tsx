export default function Footer() {
  return (
    <footer className="bg-panel pt-20 pb-8 border-t border-grid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-14 pb-10 border-b border-grid">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-2 w-2 rounded-full bg-signal animate-pulse-led text-signal" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-signal uppercase">
              SYSTEM LIVE
            </p>
          </div>
          <p className="font-sans font-semibold text-[44px] md:text-[72px] xl:text-[96px] text-bone leading-[0.9] -tracking-[0.025em]">
            ELEKTRO
            <br />
            <span className="text-copper">SCHWEITZER</span>
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-mute uppercase mt-4">
            MEISTERBETRIEB &middot; BAD TATZMANNSDORF &middot; EST. 1974
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase mb-5">
              &gt; LEISTUNGEN
            </p>
            <ul className="space-y-2 text-bone/50 font-mono text-[12px] tracking-[0.02em]">
              <li>Sicherheit</li>
              <li>Energie</li>
              <li>Komfort</li>
              <li>Photovoltaik</li>
              <li>Smart Home</li>
              <li>Notdienst 24/7</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase mb-5">
              &gt; UNTERNEHMEN
            </p>
            <ul className="space-y-2">
              {[
                { l: "Über uns", h: "#unternehmen" },
                { l: "Referenzen", h: "#referenzen" },
                { l: "Leistungen", h: "#leistungen" },
                { l: "Kontakt", h: "#kontakt" },
              ].map((x) => (
                <li key={x.l}>
                  <a
                    href={x.h}
                    className="text-bone/50 hover:text-copper transition-colors duration-200 font-mono text-[12px] tracking-[0.02em]"
                  >
                    {x.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase mb-5">
              &gt; KONTAKT
            </p>
            <div className="text-bone/50 font-mono text-[12px] tracking-[0.02em] space-y-2">
              <p>Hauptstraße 23</p>
              <p>A-7431 Bad Tatzmannsdorf</p>
              <p className="pt-2">
                <a
                  href="tel:+4333538080"
                  className="hover:text-copper transition-colors duration-200"
                >
                  +43 3353 8080
                </a>
              </p>
              <p>
                <a
                  href="mailto:office@elektro-schweitzer.at"
                  className="hover:text-copper transition-colors duration-200"
                >
                  office@elektro-schweitzer.at
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase mb-5">
              &gt; RECHTLICHES
            </p>
            <ul className="space-y-2">
              {["Impressum", "Datenschutz", "AGB"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-bone/50 hover:text-copper transition-colors duration-200 font-mono text-[12px] tracking-[0.02em]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-grid flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-[0.12em] text-mute uppercase">
            © 2026 ELEKTRO SCHWEITZER GMBH &middot; HAUPTSTRASSE 23 &middot; 7431 BAD TATZMANNSDORF
          </p>
          <p className="font-mono text-[10px] tracking-[0.12em] text-mute/60 uppercase">
            v2.1 &middot; REV. 2026.04
          </p>
        </div>
      </div>
    </footer>
  );
}
