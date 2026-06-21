import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustStrip from "@/components/TrustStrip";
import Leistungen from "@/components/Leistungen";
import Referenzen from "@/components/Referenzen";
import FuenfGruende from "@/components/FuenfGruende";
import Unternehmen from "@/components/Unternehmen";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <TrustStrip />
        <Leistungen />
        <Referenzen />
        <FuenfGruende />
        <Unternehmen />
        <Kontakt />
        <Footer />
      </main>
    </>
  );
}
