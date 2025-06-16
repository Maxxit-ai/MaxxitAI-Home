"use client";
import React, { useState, useEffect } from "react";

import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/Hero/HeroSection";
import Usecase from "./components/Usecase";
import Walkthrough from "./components/Walkthrough";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ChainConnectorMain from "./components/ChainShowcase/ChainConnectorMain";
import TopTweetsCarousel from "./components/TweetsCarousel/TopTweetsCarousel";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the loader has already been shown in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (hasSeenLoader) {
      // If already seen, don't show loader
      setLoading(false);
    } else {
      // If not seen, show loader for 2 seconds then mark as seen
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasSeenLoader', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return (
      <div className="bg-black flex items-center justify-center w-full h-[100vh] overflow-hidden">
        <div className="w-[200px] h-max overflow-hidden">
          <Image
            src="/loader.gif"
            alt="Loading..."
            width={400}
            height={400}
            className="w-auto h-auto object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <TopTweetsCarousel />
      <Usecase />
      <Walkthrough />
      <div className="hidden sm:flex">
        <GetStarted />
      </div>
      <ChainConnectorMain />
      <Footer />
    </div>
  );
}
