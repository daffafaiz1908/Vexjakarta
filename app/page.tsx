import HeroSection from "./components/HeroSection";
import UpcomingEvents from "./components/UpcomingEvents";
import AboutSection from "./components/AboutSection";
import ValueSlider from "./components/ValueSlider";
import Gallery from "./components/Gallery";
import HowToBuy from "./components/HowToBuy";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UpcomingEvents />
      <AboutSection />
      <ValueSlider />
      <Gallery />
      <HowToBuy />
      <FAQ />
      <Footer />
    </>
  );
}
