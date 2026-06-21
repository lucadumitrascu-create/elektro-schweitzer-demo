const items = [
  "Photovoltaik",
  "Smart Home",
  "Alarmanlagen",
  "Blitzschutz",
  "LED-Beleuchtung",
  "KNX-Technik",
  "E-Mobilität",
  "Videoüberwachung",
  "Notdienst 24/7",
  "Zählerkasten",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-hairline bg-surface py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            aria-hidden={dup === 1}
            className="flex items-center"
          >
            {items.map((it) => (
              <li
                key={it}
                className="flex items-center gap-7 whitespace-nowrap px-7 font-display text-[18px] font-semibold text-ink/70 md:text-[20px]"
              >
                {it}
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
