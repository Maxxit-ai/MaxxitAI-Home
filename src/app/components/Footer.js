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
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="w-full border-t-[1.5px] border-t-[#ffffff74] h-[550px] flex flex-col justify-between bg-[#000612] text-white">
      <div className="flex items-center justify-center space-x-10 text-lg tracking-wider my-8">
        <Link href="/" className="hover:text-[#AF85E3] transition-colors">
          <span>Milestone</span>
        </Link>
        <Link href="/" className="hover:text-[#68E099] transition-colors">
          <span>Docs</span>
        </Link>
      </div>

      <div 
        className="w-full h-[200px] flex items-center justify-center mx-auto relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[9.5vw] font-semibold tracking-wide text-transparent bg-gradient-to-r from-[#AF85E3] from-[10%] to-[#68E099] bg-clip-text">
            Smart Disperse
          </p>
        </div>
        
        <p 
          className="text-[9.5vw] text-[#000612] font-semibold tracking-wide absolute"
          style={{
            WebkitMaskImage: isHovering 
              ? `radial-gradient(
                  circle 300px at ${mousePosition.x}px ${mousePosition.y}px, 
                  transparent 0%, 
                  black 100%
                )`
              : 'none',
            maskImage: isHovering 
              ? `radial-gradient(
                  circle 300px at ${mousePosition.x}px ${mousePosition.y}px, 
                  transparent 0%, 
                  black 100%
                )` 
              : 'none'
          }}
        >
          Smart Disperse
        </p>
      </div>

      <div className="flex justify-between items-center w-[85%] mx-auto my-8">
        <p className="text-[#ffffff99]">
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