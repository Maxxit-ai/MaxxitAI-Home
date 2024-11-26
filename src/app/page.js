import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CryptoConnector from "./components/ConnectorImage";
import ConnectorImage from "./components/ConnectorImage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConnectorImage />
    </>
  );
}
