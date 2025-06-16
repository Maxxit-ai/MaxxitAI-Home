"use client";

import React, { useRef, useEffect } from "react";
import StarGrid from "./components/Hero/StarGrid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Home,
  AlertCircle,
  ArrowLeft,
  Search,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Decorative background element component
const BackgroundBlob = ({ className, color, size, delay, duration }) => {
  const blobRef = useRef(null);

  useEffect(() => {
    if (blobRef.current) {
      // Random rotation
      const rotation = Math.random() * 360;

      // Animation with GSAP
      gsap.set(blobRef.current, {
        rotation: rotation,
        scale: 0.8,
        opacity: 0,
      });

      gsap.to(blobRef.current, {
        opacity: 1,
        scale: 1,
        duration: duration || 1.5,
        delay: delay || 0,
        ease: "power2.inOut",
      });

      // Gentle floating animation
      gsap.to(blobRef.current, {
        y: "20px",
        rotation: rotation + 5,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [delay, duration]);

  return (
    <div
      ref={blobRef}
      className={`absolute rounded-full blur-3xl opacity-0 ${className}`}
      style={{
        width: size || "400px",
        height: size || "400px",
        background: color || "rgba(118, 202, 228, 0.03)",
        willChange: "transform, opacity",
      }}
    />
  );
};

const NotFound = () => {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero section animations
      tl.fromTo(
        ".not-found__icon",
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.2 }
      );

      tl.fromTo(
        ".not-found__heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );

      tl.fromTo(
        ".not-found__subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      tl.fromTo(
        ".not-found__description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      );

      tl.fromTo(
        ".not-found__button",
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        "-=0.2"
      );

      // Floating animation for the main icon
      gsap.to(".not-found__icon", {
        y: "10px",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    },
    { scope: container }
  );

  return (
    <div className="min-h-screen bg-[#000612] text-white">
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center text-center text-[#76CAE4] overflow-hidden"
        ref={container}
      >
        {/* Background decorative elements */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top left blob */}
          <BackgroundBlob
            className="left-[-100px] top-[10%]"
            color="rgba(175, 133, 227, 0.04)"
            size="500px"
            delay={0.2}
          />

          {/* Top right blob */}
          <BackgroundBlob
            className="right-[-120px] top-[5%]"
            color="rgba(111, 242, 242, 0.04)"
            size="600px"
            delay={0.5}
          />

          {/* Bottom center blob */}
          <BackgroundBlob
            className="left-[40%] bottom-[5%]"
            color="rgba(111, 242, 242, 0.03)"
            size="550px"
            delay={1}
            duration={0.7}
          />
        </div>

        <div className="relative mx-auto w-full max-w-4xl px-4 py-12 z-10">
          <StarGrid />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12">
            {/* Large 404 Icon */}
            <div className="not-found__icon relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#63A7FA]/10 to-[#4185F3]/10 flex items-center justify-center border border-blue-500/30 backdrop-blur-sm">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#63A7FA]" />
                </div>
              </div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping"></div>
              <div className="absolute inset-4 rounded-full border border-blue-300/10"></div>
            </div>

            {/* 404 Text */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="not-found__heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-0">
                <span className="gradient-text-animation">404</span>
              </h1>
              
              <h2 className="not-found__subtitle text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold opacity-0">
                <span className="bg-gradient-to-r from-[#76CAE4] to-[#63A7FA] bg-clip-text text-transparent">
                  Page Not Found
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="not-found__description max-w-2xl mx-auto opacity-0 space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-200/90">
                Oops! The page you're looking for doesn't exist.
              </p>
              <p className="text-base sm:text-lg text-slate-200/70">
                It might have been moved, deleted, or you entered the wrong URL.
                Let's get you back on track!
              </p>
            </div>

            {/* Action Button */}
            <div className="not-found__button opacity-0">
              <Link href="/">
                <button className="group relative px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-[#000612] font-semibold gradient-background rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 text-lg sm:text-xl">
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:-translate-x-1" />
                  <span>Back to Home</span>
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:scale-110" />
                </button>
              </Link>
            </div>

            {/* Additional helpful links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-8 text-sm sm:text-base">
              <Link 
                href="/about" 
                className="flex items-center gap-2 text-slate-300/80 hover:text-[#76CAE4] transition-colors duration-300"
              >
                <Globe className="w-4 h-4" />
                About Us
              </Link>
              <Link 
                href="/analysts" 
                className="flex items-center gap-2 text-slate-300/80 hover:text-[#76CAE4] transition-colors duration-300"
              >
                <Search className="w-4 h-4" />
                Analysts
              </Link>
              <Link 
                href="https://app.maxxit.ai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300/80 hover:text-[#76CAE4] transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
                Launch App
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound; 