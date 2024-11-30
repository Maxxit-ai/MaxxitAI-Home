import About from "./components/About";
import HeroSection from "./components/HeroSection";
import SupportedChains from "./components/SupportedChains";
import UseCaseConnector from "./components/UseCaseConnector";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SupportedChains />
      <About />
      <UseCaseConnector />
    </>
  );
}
