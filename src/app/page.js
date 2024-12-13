import About from "./components/About";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import SupportedChains from "./components/SupportedChains";
import Usecase from "./components/Usecase";
import Walkthrough from "./components/Walkthrough";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SupportedChains />
      <About />
      <Usecase />
      <Walkthrough />
      <GetStarted />
      <Footer />
    </>
  );
}
