"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTelegramPlane, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="w-full border-t-[1.5px] border-t-[#ffffff74] h-[550px] flex flex-col justify-between bg-[#000612] text-white relative overflow-hidden">
      {/* lines */}
      <div className="absolute bg-[#252525CC] w-[3px] h-[180px] top-0 left-[25%]"></div>
      <div className="absolute w-[3px] h-[40px] left-[25%] footer-line-1"></div>

      <div className="absolute bg-[#252525CC] w-[3px] h-[180px] top-0 left-[40%]"></div>
      <div className="absolute w-[3px] h-[40px] left-[40%] footer-line-2"></div>

      <div className="absolute bg-[#252525CC] w-[3px] h-[180px] top-0 left-[75%]"></div>
      <div className="absolute w-[3px] h-[40px] left-[75%] footer-line-1"></div>

      <div className="absolute bg-[#252525CC] w-[180px] h-[3px] top-[33%] left-0"></div>
      <div className="absolute h-[3px] w-[40px] top-[33%] footer-line-3"></div>

      <div className="absolute bg-[#252525CC] w-[180px] h-[3px] top-[66%] right-0"></div>
      <div className="absolute h-[3px] w-[40px] top-[66%] footer-line-4"></div>

      <div className="absolute bg-[#252525CC] w-[3px] h-[180px] bottom-0 left-[40%]"></div>
      <div className="absolute w-[3px] h-[40px] left-[40%] footer-line-5"></div>

      <div className="absolute bg-[#252525CC] w-[3px] h-[180px] bottom-0 left-[66%]"></div>
      <div className="absolute w-[3px] h-[40px] left-[66%] footer-line-6"></div>

      <div className="flex items-center justify-center space-x-10 text-lg tracking-wider my-8">
        <Link href="/" className="relative group">
          <span className="hover-effect hover:font-medium">Milestone</span>
        </Link>
        <Link href="/" className="relative group">
          <span className="hover-effect hover:font-medium">Docs</span>
        </Link>
      </div>

      {/* <div
        className="w-full h-[200px] flex items-center justify-center mx-auto relative overflow-hidden group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[8.5vw] font-semibold tracking-wide text-[#0a0b1b] group-hover:text-transparent bg-transparent group-hover:bg-gradient-to-r from-[#68E099] via-[#8B94E2] to-[#AF85E3] bg-clip-text">
            Smart Disperse
          </p>
        </div>

        <p
          className="text-[8.5vw] text-[#0a0b1b] font-semibold tracking-wide absolute"
          style={{
            WebkitMaskImage: isHovering
              ? `radial-gradient(
                  circle 300px at ${mousePosition.x}px ${mousePosition.y}px, 
                  transparent 0%, 
                  black 100%
                )`
              : "none",
            maskImage: isHovering
              ? `radial-gradient(
                  circle 300px at ${mousePosition.x}px ${mousePosition.y}px, 
                  transparent 0%, 
                  black 100%
                )`
              : "none",
          }}
        >
          Smart Disperse
        </p>
      </div> */}

      <div className="parent-div">
        <p className="footer-text text-[8.5vw] font-semibold tracking-wide" data-text="Smart Disperse">Smart Disperse</p>
      </div>

      <div className="flex justify-between items-center w-[85%] mx-auto my-8">
        <p className="text-[#ffffff]">
          Copyright @ 2024 Smart - Disperse | All rights reserved
        </p>
        <div className="flex items-center justify-center gap-5">
          <FaTelegramPlane
            className="text-[24px] hover:text-[#24A1DE] cursor-pointer transition-colors"
            title="Telegram"
          />
          <FaDiscord
            className="text-[24px] hover:text-[#5865F2] cursor-pointer transition-colors"
            title="Discord"
          />
          <FaXTwitter
            className="text-[24px] hover:text-[#515151] cursor-pointer transition-colors"
            title="Twitter"
          />
          <FaLinkedinIn
            className="text-[24px] hover:text-[#0077B5] cursor-pointer transition-colors"
            title="Linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
