import React from "react";
import optimism from "../assets/chains svg/optimism2.svg";
import ethereum from "../assets/chains svg/ethereum2.svg";
import base from "../assets/chains svg/base2.svg";
import unichain from "../assets/chains svg/unichain2.svg";
import worldcoin from "../assets/chains svg/worldcoin2.svg";
import zora from "../assets/chains svg/zora2.svg";
import Image from "next/image";

const chains = [
  {
    name: "Optimism",
    img: optimism,
    color: "#D00505",
  },
  {
    name: "Ethereum",
    img: ethereum,
    color: "#5594E5",
  },
  {
    name: "Base",
    img: base,
    color: "#0B59FF",
  },
  {
    name: "Unichain",
    img: unichain,
    color: "#F50DB4",
  },
  {
    name: "Worldcoin",
    img: worldcoin,
    color: "#E5E5E5",
  },
  {
    name: "Zora",
    img: zora,
    color: "#2B5DF0",
  },
];

const ChainList = () => {
  return (
    <div className="flex my-6 xs:my-12 md:my-16 w-[100%] justify-between gap-[25px] xs:gap-[35px] bw:gap-[50px] lg:gap-[64px] px-[14px] md:px-[20px]">
      {chains.map((chain, index) => (
        <div key={index} className="flex items-center justify-center w-[50px] xs:w-[100px] md:w-[120px] bw:w-[160px] lg:w-[180px] xl:w-[200px] filter grayscale hover:grayscale-0 transition-all duration-300">
          <Image src={chain.img} alt={chain.name} className="w-[20px] h-[20px] xs:w-[30px] xs:h-[30px] md:w-[50px] md:h-[50px] bw:w-[65px] bw:h-[65px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px]"></Image>
          <p
            className="text-nowrap text-[9px] md:text-xs bw:text-base lg:text-lg italic text-white"
            style={{ color: chain.color }}
          >
            {chain.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChainList;
