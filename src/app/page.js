"use client";
import React, { useState, useEffect } from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/Hero/HeroSection";
import SupportedChains from "./components/SupportedChains";
import Usecase from "./components/Usecase";
import Walkthrough from "./components/Walkthrough";
import Image from "next/image";
import Navbar from "./components/Navbar";
import ChainConnectorMain from "./components/ChainShowcase/ChainConnectorMain";
// import Script from "next/script";
// import Head from "next/head";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
      {/* <SupportedChains /> */}
      <About />
      <Usecase />
      <Walkthrough />
      <GetStarted />
      <ChainConnectorMain />
      <Footer />
    </div>
  );
}
