import React from "react";

import iconlogo from "../assets/herosection svg/iconlogo.svg";
import icon1 from "../assets/herosection svg/icon1.svg";
import icon2 from "../assets/herosection svg/icon2.svg";
import icon3 from "../assets/herosection svg/icon3.svg";
import icon4 from "../assets/herosection svg/icon4.svg";
import icon5 from "../assets/herosection svg/icon5.svg";
import icon6 from "../assets/herosection svg/icon6.svg";
import Image from "next/image";

const ConnectorImage = () => {
  return (
    <div className="relative bg-transparent w-[70%] h-[600px] my-10 mx-auto">
      {/* line to connect icons */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
      >
        <line
          x1="calc(27% + 45px)"
          y1="calc(10% + 90px)"
          x2="calc(27% + 45px)"
          y2="calc(85%)"
          stroke="#49494ACC"
          strokeWidth="3"
        />

        <line
          x1="calc(67% + 45px)"
          y1="calc(15% + 90px)"
          x2="calc(67% + 45px)"
          y2="calc(90%)"
          stroke="#49494ACC"
          strokeWidth="3"
        />

        <line
          x1="calc(7% + 90px)"
          y1="calc(47% + 45px)"
          x2="calc(47%)"
          y2="calc(47% + 45px)"
          stroke="#49494ACC"
          strokeWidth="3"
        />

        <line
          x1="calc(47% + 90px)"
          y1="calc(47% + 45px)"
          x2="calc(87%)"
          y2="calc(47% + 45px)"
          stroke="#49494ACC"
          strokeWidth="3"
        />
      </svg>

      {/* holder-left */}
      <div className="absolute top-[calc(47%+35px)] left-[calc(47%-10px)] w-[10px] h-[20px] overflow-hidden z-30">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>
      {/* holder-right */}
      <div className="absolute top-[calc(47%+35px)] left-[calc(47%+90px)] w-[10px] h-[20px] overflow-hidden z-30 rotate-180">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>

      {/* icon1 to logo */}
      <div className="flow-line1 w-[3px] h-[25px] absolute"></div>
      {/* icon2 to logo */}
      <div className="flow-line2 w-[3px] h-[25px] absolute"></div>
      {/* icon3 to logo */}
      <div className="flow-line3 w-[3px] h-[25px] absolute"></div>
      {/* icon4 to logo */}
      <div className="flow-line4 w-[3px] h-[25px] absolute"></div>
      {/* icon5 to logo */}
      <div className="flow-line5 w-[3px] h-[25px] absolute"></div>
      {/* icon6 to logo */}
      <div className="flow-line6 w-[3px] h-[25px] absolute"></div>

      {/* icons */}
      <div className="absolute top-[10%] left-[27%] w-[90px] h-auto">
        <Image src={icon1} alt=""></Image>
      </div>
      <div className="absolute top-[15%] left-[67%] w-[90px] h-auto">
        <Image src={icon2} alt=""></Image>
      </div>
      <div className="absolute top-[47%] left-[7%] w-[90px] h-auto">
        <Image src={icon3} alt=""></Image>
      </div>

      <div className="absolute top-[47%] left-[47%] w-[90px] h-auto">
        <Image src={iconlogo} alt=""></Image>
      </div>

      <div className="absolute top-[47%] left-[87%] w-[90px] h-auto">
        <Image src={icon4} alt=""></Image>
      </div>
      <div className="absolute top-[85%] left-[27%] w-[90px] h-auto">
        <Image src={icon5} alt=""></Image>
      </div>
      <div className="absolute top-[90%] left-[67%] w-[90px] h-auto">
        <Image src={icon6} alt=""></Image>
      </div>
    </div>
  );
};

export default ConnectorImage;
