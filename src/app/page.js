import About from "./components/About";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import SupportedChains from "./components/SupportedChains";
import Usecase from "./components/Usecase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SupportedChains />
      <About />
      <Usecase />
      <GetStarted />
    </>
  );
}
