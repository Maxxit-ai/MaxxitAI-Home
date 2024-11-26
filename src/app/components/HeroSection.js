import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="hero-background w-full">
      <div className="w-[85%] mx-auto my-10">
        <Navbar />
        <h1 className="text-7xl font-medium text-center my-20 flex items-center justify-center gap-3 flex-wrap w-full">
          <span className="gradient-border-animation rounded-[40px] overflow-hidden p-[2px] flex ">
            <span className="gradient-bg-animation flex rounded-[40px] p-[2px]">
              <span className="gradient-text-animation rounded-[40px] px-4 py-6 overflow-hidden">
                Cross-Chain
              </span>
            </span>
          </span>

          <span className="bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
            Made Simple
          </span>
        </h1>
        <p className="text-center w-[80%] mx-auto text-lg tracking-wide">
          Smart-Disperse Powerd by CCIP revolutionizes token transfers with
          advanced features for seamless cross-chain interoperability. Our
          solution reduces gas fees, saves time, and simplifies operations,
          making cross-chain token transfers as effortless as same-chain
          transfers.
        </p>
        <div className="flex items-center justify-center gap-7 mx-auto my-5">
          <button className="text-[#000612] font-semibold gradient-background rounded-[15px] px-[26px] py-[16px] w-auto">
            Get Started
          </button>
          <div className="gradient-background rounded-[15px] p-[1px] pb-[1.5px] pl-[1.5px] flex items-center justify-center overflow-hidden w-max">
            <button className="bg-[#000612] font-semibold flex items-center justify-center rounded-[14px] px-[22px] py-[14px] tracking-wider">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
