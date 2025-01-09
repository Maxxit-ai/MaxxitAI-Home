"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import smartdisperse from "@/app/assets/logo.svg";
import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="w-full mx-auto px-2 py-1 sm:p-3 flex items-center justify-between">
        {/* logo */}
        <div className="max-[360px]:w-[100px] w-[120px] sm:w-[180px] lg:w-[200px] h-auto">
        <Link href="/">
            <Image src={smartdisperse} alt="Smart Disperse"></Image>
          </Link>
        </div>

        {/* nav links */}
        {/* <div className="hidden md:flex items-center space-x-10 text-base lg:text-lg tracking-wider">
          <Link href="/" className="relative group">
            <span className="hover-effect hover:font-medium">Milestone</span>
          </Link>
          <Link href="/" className="relative group">
            <span className="hover-effect hover:font-medium">Docs</span>
          </Link>
        </div> */}

        {/* launch button */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <div className="gradient-background max-[360px]:rounded-[9px] rounded-[11px] lg:rounded-[15px] max-[360px]:p-[1px] p-[2px] flex items-center justify-center overflow-hidden">
            <button className="bg-[#000612] hover:bg-transparent hover:text-black max-[360px]:text-[8px] text-[10px] min-[500px]:text-sm sm:font-semibold flex items-center justify-center max-[360px]:rounded-[8px] rounded-[10px] lg:rounded-[14px] px-3 lg:px-4 py-[6px] sm:py-[10px] lg:py-[13px] tracking-wider hover:scale-105 hover:shadow-[0px_4px_20px_rgba(0,255,255,0.6)]  transition-all duration-300 ease-out">
              Launch App
            </button>
          </div>

          {/* mobile menu icon */}
          {/* <div className="flex flex-col md:hidden items-center relative">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-[20px] sm:text-[30px] hover:scale-110 transition-transform duration-200"
            >
              {isMobileMenuOpen ? <CgClose /> : <TbMenu2 />}
            </button>
          </div> */}

          {/* mobile menu */}
          {/* {isMobileMenuOpen && (
            <div className="md:hidden absolute z-50 right-[10px] top-[130px] flex flex-col items-start justify-evenly text-[10px] min-[500px]:text-sm tracking-wider bg-[#000612] w-[180px] h-[60px] min-[500px]:w-[200px] min-[500px]:h-[100px] border border-[#1a202c] shadow-lg rounded-lg">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center justify-centerhover:font-medium hover:bg-[#1a202c] px-6 py-3 rounded-md transition-colors duration-200 w-[180px] min-[500px]:w-[200px] h-[30px] min-[500px]:h-[50px]">
                  Milestone
                </div>
              </Link>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center justify-centerhover:font-medium hover:bg-[#1a202c] px-6 py-3 rounded-md transition-colors duration-200 w-[180px] min-[500px]:w-[200px] h-[30px] min-[500px]:h-[50px]">
                  Docs
                </div>
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
