import React from "react";
import Navbar from "./Navbar";
import ConnectorImage from "./ConnectorImage";
import { FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div className="hero-background w-full">
        <div className="w-[85%] mx-auto my-16">
          <Navbar />
          <h1 className="text-[8vw] sm:text-4xl bw:text-5xl lg:text-6xl xl:text-7xl font-medium text-center mb-5 sm:mb-10 mt-20 flex items-center justify-center gap-3 flex-wrap w-full">
            <span className="gradient-border-animation rounded-[30px] sm:rounded-[40px] overflow-hidden p-[2px] flex ">
              <span className="gradient-bg-animation flex rounded-[30px] sm:rounded-[40px] p-[2px]">
                <span className="gradient-text-animation rounded-[30px] sm:rounded-[40px] px-3 sm:px-4 py-3 sm:py-6 overflow-hidden">
                  Cross-Chain
                </span>
              </span>
            </span>

            <span className="bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          <p className="text-center w-[90%] sm:w-[80%] mx-auto text-[10px] sm:text-sm lg:text-lg tracking-wide">
            SmartDisperse, now powered by Superchain Interop, redefines token
            transfers with cutting-edge features for seamless cross-chain
            interoperability within the superchain ecosystem. Our solution
            minimizes gas fees, saves time, and streamlines operations, making
            cross-chain token transfers as simple and efficient as same-chain
            transfers.
          </p>

          <div className="flex items-center justify-center gap-3 xs:gap-5 bw:gap-7 mx-auto my-8">
            <button className="text-[#000612] font-semibold gradient-background rounded-[10px] xs:rounded-[15px] w-[90px] xs:w-[130px] bw:w-[170px] px-[8px] xs:px-[10px] py-[10px] xs:py-[12px] bw:py-[16px] bw:px-[17px] flex items-center justify-evenly group text-[10px] xs:text-sm bw:text-base">
              <FaChevronRight className="hidden group-hover:inline-block right-arrow" />
              <span className="transition-all duration-1000 ease-in-out group-hover:translate-x-[2px]">
                Get Started
              </span>
            </button>

            <div className="gradient-background rounded-[10px] xs:rounded-[15px] p-[1px] pb-[1.5px] pl-[1.5px] flex items-center justify-center overflow-hidden w-max">
              <button className="bg-[#000612] font-semibold rounded-[9px] xs:rounded-[14px] w-[85px] xs:w-[125px] bw:w-[170px] px-[8px] xs:px-[9px] bw:px-[15px] py-[8px] xs:py-[9px] bw:py-[14px] tracking-wider flex items-center justify-evenly group text-[10px] xs:text-sm bw:text-base">
                <FaChevronRight className="hidden group-hover:inline-block right-arrow" />
                <span className="transition-all duration-1000 ease-in-out group-hover:translate-x-[2px]">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="image-background relative">
        <div className="absolute w-full">
          <ConnectorImage />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
