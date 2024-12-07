import Image from "next/image";
import Link from "next/link";
import React from "react";
import smartdisperse from "@/app/assets/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full mx-auto p-3 flex items-center justify-between">
        {/* logo */}
        <div className="w-[200px] h-auto">
          <Link href="/">
            <Image src={smartdisperse} alt="Smart Disperse"></Image>
          </Link>
        </div>

        {/* nav links */}
        <div className="flex items-center space-x-10 text-lg tracking-wider">
          <Link href="/">
            <span>Milestone</span>
          </Link>
          <Link href="/">
            <span>Docs</span>
          </Link>
        </div>

        {/* launch button */}
        <div className="gradient-background rounded-[15px] p-[2px] flex items-center justify-center overflow-hidden">
          <button className="bg-[#000612] hover:bg-transparent hover:text-black font-semibold flex items-center justify-center rounded-[14px] px-4 py-[13px] tracking-wider">
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
