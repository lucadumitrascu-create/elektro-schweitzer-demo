import SideLabel from "@/components/SideLabel";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
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
      <SideLabel />
      <Navigation />
      <main>
        <Hero />
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
