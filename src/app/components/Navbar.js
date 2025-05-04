"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import maxxit from "@/app/assets/images/navbar/maxxit_logo.svg";

import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleButtonClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "Button",
        event_label: "Launch Button",
        value: 1,
        debug_mode: true,
      });
      console.log("Launch App button clicked!");
    } else {
      console.warn("Google Analytics is not initialized.");
    }
  };

  return (
    <nav>
      <div className="w-[80%] mx-auto px-2 py-8 pb-6 sm:pt-12 flex items-center justify-between">
        {/* logo */}
        <div className="max-[360px]:w-[100px] w-[120px] sm:w-[180px] lg:w-[200px] h-auto">
          <Link href="/" className="flex items-end gap-2">
            <Image src={maxxit} alt="Smart Disperse" className="w-8 sm:w-14 lg:w-20" />
            <div className="text-2xl sm:text-6xl lg:text-7xl font-napzerRounded bg-gradient-to-b from-[#AAC9FA] to-[#E1EAF9] bg-clip-text text-transparent">
              maxxit
            </div>
          </Link>
        </div>

        {/* launch button */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <Link href="https://app.maxxit.ai/" target="_blank">
            <div className="gradient-background max-[360px]:rounded-[9px] rounded-[11px] lg:rounded-[15px] max-[360px]:p-[1px] p-[2px] flex items-center justify-center overflow-hidden">
              <button
                onClick={handleButtonClick}
                className="bg-[#000612] hover:bg-transparent hover:text-black max-[360px]:text-[8px] text-[10px] min-[500px]:text-sm sm:font-semibold flex items-center justify-center max-[360px]:rounded-[8px] rounded-[10px] lg:rounded-[14px] px-3 lg:px-4 py-[6px] sm:py-[10px] lg:py-[13px] tracking-wider hover:scale-105 hover:shadow-[0px_4px_20px_rgba(0,255,255,0.6)]  transition-all duration-300 ease-out"
              >
                Launch App
              </button>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
