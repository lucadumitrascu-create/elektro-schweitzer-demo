export default function SideLabel() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex items-center gap-3 pointer-events-none">
      <div className="flex flex-col items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-led text-signal" />
        <div className="w-px h-16 bg-grid" />
      </div>
      <p
        className="font-mono text-[9px] tracking-[0.25em] text-mute uppercase whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        ELEKTRO SCHWEITZER / BAD TATZMANNSDORF / BGLD / EST. 1974
      </p>
    </div>
  );
}
