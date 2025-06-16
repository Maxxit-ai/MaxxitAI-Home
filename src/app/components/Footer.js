"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full border-t-[1.5px] border-t-[#ffffff74] bg-[#000612] text-white relative overflow-hidden mt-[7rem]">
      {/* Decorative lines container - fixed height for mobile, responsive for larger screens */}
      <div className="relative h-[100px] md:h-[300px] bw:h-[350px]">
      {/* Decorative lines */}
      <div className="absolute bg-[#252525CC] w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[90px] xs:h-[100px] md:h-[160px] bw:h-[180px] top-0 left-[25%]"></div>
      <div className="absolute w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[30px] xs:h-[40px] left-[25%] footer-line-1"></div>

      <div className="absolute bg-[#252525CC] w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[90px] xs:h-[100px] md:h-[160px] bw:h-[180px] top-0 left-[50%] xs:left-[40%]"></div>
      <div className="absolute w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[30px] xs:h-[40px] left-[50%] xs:left-[40%] footer-line-2"></div>

      <div className="absolute bg-[#252525CC] w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[90px] xs:h-[100px] md:h-[160px] bw:h-[180px] top-0 left-[75%]"></div>
      <div className="absolute w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[30px] xs:h-[40px] left-[75%] footer-line-1"></div>

      <div className="absolute bg-[#252525CC] w-[60px] xs:w-[100px] md:w-[160px] bw:w-[180px] h-[1.5px] 2xs:h-[2px] md:h-[3px] top-[33%] left-0"></div>
      <div className="absolute h-[1.5px] 2xs:h-[2px] md:h-[3px] w-[30px] xs:w-[40px] top-[33%] footer-line-3"></div>

      <div className="absolute bg-[#252525CC] w-[60px] xs:w-[100px] md:w-[160px] bw:w-[180px] h-[1.5px] 2xs:h-[2px] md:h-[3px] top-[66%] right-0"></div>
      <div className="absolute h-[1.5px] 2xs:h-[2px] md:h-[3px] w-[30px] xs:w-[40px] top-[66%] footer-line-4"></div>

      <div className="absolute bg-[#252525CC] w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[90px] xs:h-[100px] md:h-[160px] bw:h-[180px] bottom-0 left-[40%]"></div>
      <div className="absolute w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[30px] xs:h-[40px] left-[40%] footer-line-5"></div>

      <div className="absolute bg-[#252525CC] w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[90px] xs:h-[100px] md:h-[160px] bw:h-[180px] bottom-0 left-[66%]"></div>
      <div className="absolute w-[1.5px] 2xs:w-[2px] md:w-[3px] h-[30px] xs:h-[40px] left-[66%] footer-line-6"></div>

      <div className="flex items-center justify-center space-x-6 sm:space-x-7 md:space-x-10 text-xs 3xs:text-sm md:text-base bw:text-lg tracking-wider my-4 sm:my-6 bw:my-8"></div>

        {/* Large text - visible on all screens, positioned within decorative lines */}
      <div className="parent-div">
        <p
          className="footer-text text-[10vw] font-semibold font-napzerRounded tracking-[0.13em]"
          data-text="Maxxit AI"
        >
          Maxxit AI
        </p>
      </div>

        {/* Bottom Section for larger screens - positioned absolutely */}
        <div className="hidden md:flex justify-between items-end w-[90%] sm:w-[85%] mx-auto absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-[1000]">
        
        {/* Left Side - Social Icons + Copyright */}
        <div className="flex flex-col items-start gap-3">
          {/* Social Icons */}
          <div className="flex items-center gap-2 xs:gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <a
              href="https://github.com/MaxxitAI"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#ffffff4d] p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:bg-[#333]"
              title="GitHub"
            >
              <FaGithub className="text-[12px] xs:text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] bw:text-[24px] cursor-pointer" />
            </a>
            <a
              href="https://t.me/+XcOX2uNUxnIzNzFl"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#ffffff4d] p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:bg-[#333]"
              title="Telegram"
            >
              <FaTelegramPlane className="text-[12px] xs:text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] bw:text-[24px] cursor-pointer" />
            </a>
            <a
              href="https://x.com/MaxxitAI"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#ffffff4d] p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:bg-[#333]"
              title="Twitter"
            >
              <FaXTwitter className="text-[12px] xs:text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] bw:text-[24px] cursor-pointer" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-[#ffffff] text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
            Copyright @ 2025 Maxxit | All rights reserved
          </p>
        </div>

        {/* Right Side - All Links (Legal + Navigation) */}
        <div className="flex flex-col items-end gap-3 sm:gap-4">
          {/* Legal Links Row */}
          <div className="flex items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg">
            <Link href="/terms-of-use" className="hover:text-[#AAC9FA] transition-colors duration-300">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#AAC9FA] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-[#AAC9FA] transition-colors duration-300">
              Disclaimer
            </Link>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg">
              <Link href="/about" className="hover:text-[#AAC9FA] transition-colors duration-300">
                About
              </Link>
              <Link href="/analysts" className="hover:text-[#AAC9FA] transition-colors duration-300">
                Analysts
              </Link>
              
              <Link href="https://maxxit.gitbook.io/maxxit-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#AAC9FA] transition-colors duration-300">
                Docs
              </Link>
              <Link 
                href="https://app.maxxit.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#AAC9FA] transition-colors duration-300"
              >
                Launch App
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Mobile Content Section - Outside decorative lines (Navigation and Social only) */}
      <div className="md:hidden bg-[#000612] px-4 py-6 border-t border-[#ffffff20]">
        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="hover:text-[#AAC9FA] transition-colors duration-300">
              About
            </Link>
            <Link href="/analysts" className="hover:text-[#AAC9FA] transition-colors duration-300">
              Analysts
            </Link>
            <Link href="https://maxxit.gitbook.io/maxxit-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#AAC9FA] transition-colors duration-300">
              Docs
            </Link>
            <Link 
              href="https://app.maxxit.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#AAC9FA] transition-colors duration-300"
            >
              Launch App
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <Link href="/terms-of-use" className="hover:text-[#AAC9FA] transition-colors duration-300">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#AAC9FA] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-[#AAC9FA] transition-colors duration-300">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://github.com/MaxxitAI"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ffffff4d] p-3 rounded-full transition-all duration-300 transform hover:bg-[#333] hover:scale-110"
            title="GitHub"
          >
            <FaGithub className="text-lg cursor-pointer" />
          </a>
          <a
            href="https://t.me/+XcOX2uNUxnIzNzFl"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ffffff4d] p-3 rounded-full transition-all duration-300 transform hover:bg-[#333] hover:scale-110"
            title="Telegram"
          >
            <FaTelegramPlane className="text-lg cursor-pointer" />
          </a>
          <a
            href="https://x.com/MaxxitAI"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ffffff4d] p-3 rounded-full transition-all duration-300 transform hover:bg-[#333] hover:scale-110"
            title="Twitter"
          >
            <FaXTwitter className="text-lg cursor-pointer" />
          </a>
        </div>

        {/* Mobile Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-400">
            Copyright @ 2025 Maxxit | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;