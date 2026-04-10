export default function SideLabel() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-30 hidden xl:block pointer-events-none">
      <p
        className="font-mono text-[10px] tracking-[0.2em] text-werkbank/60 uppercase whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Elektro Schweitzer &middot; Bad Tatzmannsdorf &middot; Burgenland &middot; Est. 1974
      </p>
    </div>
  );
}
