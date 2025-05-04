"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTelegramPlane, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full border-t-[1.5px] border-t-[#ffffff74] h-[250px] xs:h-[300px] md:h-[450px] bw:h-[550px] flex flex-col justify-between bg-[#000612] text-white relative overflow-hidden">
      {/* lines */}
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

      <div className="flex items-center justify-center space-x-6 sm:space-x-7 md:space-x-10 text-xs 3xs:text-sm md:text-base bw:text-lg tracking-wider my-4 sm:my-6 bw:my-8">
        {/* <Link href="/" className="relative group">
          <span className="hover-effect hover:font-medium">Milestone</span>
        </Link>
        <Link href="/" className="relative group">
          <span className="hover-effect hover:font-medium">Docs</span>
        </Link> */}
      </div>

      <div className="parent-div">
        <p
          className="footer-text text-[10vw] font-semibold font-napzerRounded tracking-[0.13em]"
          data-text="Maxxit AI"
        >
          Maxxit AI
        </p>
      </div>

      <div className="flex justify-between gap-1 items-center w-[85%] mx-auto my-4 sm:my-6 bw:my-8 z-[1000]">
        <p className="text-[#ffffff] text-[6px] 3xs:text-[8px] md:text-xs bw:text-sm xl:text-base">
          Copyright @ 2025 Maxxit | All rights reserved
        </p>
        <div className="flex items-center justify-center gap-2 xs:gap-3 md:gap-4 bw:gap-5">
          <IoDocument
            className="text-[15px] md:text-[20px] bw:text-[24px] hover:text-[#4cc3fe] cursor-pointer transition-colors"
            title="Docs"
          />
          <FaTelegramPlane
            className="text-[15px] md:text-[20px] bw:text-[24px] hover:text-[#24A1DE] cursor-pointer transition-colors"
            title="Telegram"
          />
          <FaDiscord
            className="text-[15px] md:text-[20px] bw:text-[24px] hover:text-[#5865F2] cursor-pointer transition-colors"
            title="Discord"
          />
          <FaXTwitter
            className="text-[15px] md:text-[20px] bw:text-[24px] hover:text-[#515151] cursor-pointer transition-colors"
            title="Twitter"
          />
          <FaLinkedinIn
            className="text-[15px] md:text-[20px] bw:text-[24px] hover:text-[#0077B5] cursor-pointer transition-colors"
            title="Linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
