import React from "react";
import optimism from "../assets/chains svg/optimism.svg";
import ethereum from "../assets/chains svg/ethereum.svg";
import base from "../assets/chains svg/base.svg";
import mode from "../assets/chains svg/mode.svg";
import scroll from "../assets/chains svg/scroll.svg";
import Image from "next/image";

const chains = [
  {
    name: "Optimism",
    img: optimism,
    // color: "#D00505",
  },
  {
    name: "Ethereum",
    img: ethereum,
    // color: "#5594E5",
  },
  {
    name: "Base",
    img: base,
    // color: "#0B59FF",
  },
  {
    name: "Mode",
    img: mode,
    // color: "#DFFE00",
  },
  {
    name: "Scroll",
    img: scroll,
    // color: "#EBC28E",
  },
];

const ChainList = () => {
  return (
    <div className="flex my-16 w-[100%] justify-between gap-[64px] px-[32px]">
      {chains.map((chain, index) => (
        // <div key={index} className="flex items-center justify-center w-[200px] filter grayscale hover:grayscale-0 transition-all duration-300">
        <div key={index} className="flex items-center justify-center w-[200px]">
          <Image src={chain.img} alt={chain.name} className="w-24 h-24"></Image>
          <p
            className="text-nowrap text-lg italic text-white"
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
