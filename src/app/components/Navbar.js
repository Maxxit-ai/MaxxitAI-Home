"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import maxxit from "@/app/assets/images/navbar/maxxit_logo.svg";
import { usePathname } from "next/navigation";

import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const isActive = (path) => {
    return pathname === path;
  };

  const NavLinks = ({ isMobile = false }) => (
    <>
      <div
        className={`flex ${
          isMobile ? "w-full" : ""
        } items-center justify-center gap-2 sm:gap-4`}
      >
        <Link href="/about" className={isMobile ? "w-full" : ""}>
          <div
            className={`gradient-background max-[360px]:rounded-[9px] rounded-[11px] lg:rounded-[15px] max-[360px]:p-[1px] p-[2px] flex items-center justify-center overflow-hidden ${
              isMobile ? "w-full" : ""
            } ${
              isActive("/about")
                ? "shadow-[0px_0px_15px_rgba(170,201,250,0.7)]"
                : ""
            }`}
          >
            <button
              onClick={() => {
                handleButtonClick();
                if (isMobile) setMobileMenuOpen(false);
              }}
              className={`${
                isActive("/about")
                  ? "bg-transparent text-black"
                  : "bg-[#000612] hover:bg-transparent hover:text-black"
              } max-[360px]:text-[8px] text-[10px] min-[500px]:text-sm sm:font-semibold flex items-center justify-center max-[360px]:rounded-[8px] rounded-[10px] lg:rounded-[14px] px-3 lg:px-4 py-[6px] sm:py-[10px] lg:py-[13px] tracking-wider hover:scale-105 hover:shadow-[0px_4px_20px_rgba(0,255,255,0.6)] transition-all duration-300 ease-out ${
                isMobile ? "w-full" : ""
              }`}
            >
              About
            </button>
          </div>
        </Link>
      </div>
      <div
        className={`flex ${
          isMobile ? "w-full" : ""
        } items-center justify-center gap-2 sm:gap-4`}
      >
        <Link href="/disclaimer" className={isMobile ? "w-full" : ""}>
          <div
            className={`gradient-background max-[360px]:rounded-[9px] rounded-[11px] lg:rounded-[15px] max-[360px]:p-[1px] p-[2px] flex items-center justify-center overflow-hidden ${
              isMobile ? "w-full" : ""
            } ${
              isActive("/disclaimer")
                ? "shadow-[0px_0px_15px_rgba(170,201,250,0.7)]"
                : ""
            }`}
          >
            <button
              onClick={() => {
                handleButtonClick();
                if (isMobile) setMobileMenuOpen(false);
              }}
              className={`${
                isActive("/disclaimer")
                  ? "bg-transparent text-black"
                  : "bg-[#000612] hover:bg-transparent hover:text-black"
              } max-[360px]:text-[8px] text-[10px] min-[500px]:text-sm sm:font-semibold flex items-center justify-center max-[360px]:rounded-[8px] rounded-[10px] lg:rounded-[14px] px-3 lg:px-4 py-[6px] sm:py-[10px] lg:py-[13px] tracking-wider hover:scale-105 hover:shadow-[0px_4px_20px_rgba(0,255,255,0.6)] transition-all duration-300 ease-out ${
                isMobile ? "w-full" : ""
              }`}
            >
              Disclaimer
            </button>
          </div>
        </Link>
      </div>
      <div
        className={`flex ${
          isMobile ? "w-full" : ""
        } items-center justify-center gap-2 sm:gap-4`}
      >
        <Link
          href="https://app.maxxit.ai/"
          target="_blank"
          className={isMobile ? "w-full" : ""}
        >
          <div
            className={`gradient-background max-[360px]:rounded-[9px] rounded-[11px] lg:rounded-[15px] max-[360px]:p-[1px] p-[2px] flex items-center justify-center overflow-hidden ${
              isMobile ? "w-full" : ""
            }`}
          >
            <button
              onClick={() => {
                handleButtonClick();
                if (isMobile) setMobileMenuOpen(false);
              }}
              className={`bg-[#000612] hover:bg-transparent hover:text-black max-[360px]:text-[8px] text-[10px] min-[500px]:text-sm sm:font-semibold flex items-center justify-center max-[360px]:rounded-[8px] rounded-[10px] lg:rounded-[14px] px-3 lg:px-4 py-[6px] sm:py-[10px] lg:py-[13px] tracking-wider hover:scale-105 hover:shadow-[0px_4px_20px_rgba(0,255,255,0.6)] transition-all duration-300 ease-out ${
                isMobile ? "w-full" : ""
              }`}
            >
              Launch App
            </button>
          </div>
        </Link>
      </div>
    </>
  );

  return (
    <nav className="relative z-50">
      <div className="w-[80%] mx-auto px-2 py-8 pb-6 sm:pt-12 flex items-center justify-between">
        {/* logo */}
        <div className="max-[360px]:w-[100px] w-[120px] sm:w-[180px] lg:w-[200px] h-auto">
          <Link href="/" className="flex items-end gap-2">
            <Image
              src={maxxit}
              alt="Smart Disperse"
              className="w-8 sm:w-14 lg:w-20"
            />
            <div className="text-2xl sm:text-6xl lg:text-7xl font-napzerRounded bg-gradient-to-b from-[#AAC9FA] to-[#E1EAF9] bg-clip-text text-transparent">
              maxxit
            </div>
          </Link>
        </div>

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="gradient-background rounded-full p-[2px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="bg-[#000612] hover:bg-transparent hover:text-[#AAC9FA] rounded-full p-2 text-white transition-all duration-300 ease-out">
              {isMobileMenuOpen ? (
                <CgClose className="w-5 h-5" />
              ) : (
                <TbMenu2 className="w-5 h-5" />
              )}
            </div>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center justify-center gap-2 sm:gap-4">
          <NavLinks />
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed z-50 top-0 right-0 h-full bg-[#000612]/95 border-l border-[#AAC9FA]/20 backdrop-blur-sm sm:w-[400px] xs:w-[350px] w-[300px] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0 animate-slideInRight"
            : "translate-x-full"
        }`}
      >
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between p-6 border-b border-[#AAC9FA]/20">
          <div className="flex items-center">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image src={maxxit} alt="Maxxit" className="w-8" />
            </Link>
            <div className="ml-2 text-xl font-napzerRounded bg-gradient-to-b from-[#AAC9FA] to-[#E1EAF9] bg-clip-text text-transparent">
              maxxit
            </div>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="gradient-background rounded-full p-[1px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <div className="bg-[#000612] hover:bg-transparent hover:text-[#AAC9FA] rounded-full p-1.5 text-white transition-all duration-300 ease-out">
              <CgClose className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Mobile menu content */}
        <div className="p-6 flex flex-col space-y-5">
          <NavLinks isMobile={true} />
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
