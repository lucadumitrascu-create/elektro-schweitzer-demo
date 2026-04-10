import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Leistungen from "@/components/Leistungen";
import Projekte from "@/components/Projekte";
import WarumWir from "@/components/WarumWir";
import UeberUns from "@/components/UeberUns";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <Leistungen />
        <Projekte />
        <WarumWir />
        <UeberUns />
        <Kontakt />
        <Footer />
      </main>
    </>
  );
}
