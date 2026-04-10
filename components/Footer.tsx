export default function Footer() {
  return (
    <footer className="bg-wire border-t border-steel">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 py-12 border-b border-steel">
          <div>
            <p className="font-grotesk font-bold text-[24px] text-white">ELEKTRO SCHWEITZER</p>
            <p className="font-mono text-[12px] text-zincc uppercase tracking-[0.04em] mt-1">
              SEIT 1974 · BAD TATZMANNSDORF
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/elektro.schweitzer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-zincc hover:text-volt transition-colors tracking-[0.04em]"
            >
              INSTAGRAM
            </a>
            <span className="text-steel">·</span>
            <a
              href="https://www.facebook.com/ElektroSchweitzer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-zincc hover:text-volt transition-colors tracking-[0.04em]"
            >
              FACEBOOK
            </a>
            <span className="text-steel">·</span>
            <a
              href="https://www.linkedin.com/company/elektro-schweitzer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-zincc hover:text-volt transition-colors tracking-[0.04em]"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-steel">
          <div>
            <p className="font-mono text-[11px] text-zincc uppercase tracking-[0.04em] mb-4">LEISTUNGEN</p>
            <ul className="space-y-2 text-white/60 text-[13px]">
              <li>Sicherheit & Schutz</li>
              <li>Energie & Effizienz</li>
              <li>Komfort & Kommunikation</li>
              <li>Photovoltaik</li>
              <li>Smart Home</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] text-zincc uppercase tracking-[0.04em] mb-4">UNTERNEHMEN</p>
            <ul className="space-y-2">
              {[{ l: "Uber uns", h: "#ueber-uns" }, { l: "Team", h: "#ueber-uns" }, { l: "Projekte", h: "#projekte" }].map((x) => (
                <li key={x.l}>
                  <a href={x.h} className="text-white/60 hover:text-volt transition-colors text-[13px]">{x.l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] text-zincc uppercase tracking-[0.04em] mb-4">KONTAKT</p>
            <div className="text-white/60 text-[13px] space-y-2">
              <p>Hauptstrasse 23</p>
              <p>7431 Bad Tatzmannsdorf</p>
              <p className="pt-2">
                <a href="tel:+4333538080" className="hover:text-volt transition-colors">+43 3353 8080</a>
              </p>
              <p>
                <a href="mailto:office@elektro-schweitzer.at" className="hover:text-volt transition-colors">
                  office@elektro-schweitzer.at
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] text-zincc uppercase tracking-[0.04em] mb-4">RECHTLICHES</p>
            <ul className="space-y-2">
              {["Impressum", "Datenschutz", "AGB"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/60 hover:text-volt transition-colors text-[13px]">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 3 */}
        <div className="py-4">
          <p className="font-mono text-[11px] text-zincc/60 uppercase tracking-[0.04em]">
            © 2026 ELEKTRO SCHWEITZER GMBH · HAUPTSTRASSE 23 · A-7431 BAD TATZMANNSDORF · BURGENLAND
          </p>
        </div>
      </div>
    </footer>
  );
}
