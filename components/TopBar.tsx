export default function TopBar() {
  return (
    <div className="bg-sand border-b border-cream h-12 flex items-center justify-center px-4">
      <p className="font-sans font-semibold text-[13px] md:text-[14px] text-earth text-center">
        <span className="hidden md:inline">Meisterbetrieb seit 1974 · Bad Tatzmannsdorf · </span>
        <a href="tel:+4333538080" className="text-copper hover:underline">
          +43 3353 8080
        </a>
      </p>
    </div>
  );
}
