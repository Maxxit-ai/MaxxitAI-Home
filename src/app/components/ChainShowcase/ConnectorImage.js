"use client";
import React, { useState } from "react";

// import iconlogo from "../../assets/images/herosection svg/iconlogo.svg";
import maxxitIcon from "../../assets/images/navbar/maxxit_logo.svg";
import icon1 from "../../assets/images/herosection svg/icon1.svg";
import icon2 from "../../assets/images/herosection svg/icon2.svg";
import icon3 from "../../assets/images/herosection svg/icon3.svg";
import icon4 from "../../assets/images/herosection svg/icon4.svg";
import icon5 from "../../assets/images/herosection svg/icon5.svg";
import icon6 from "../../assets/images/herosection svg/icon6.svg";

import icon1_2 from "../../assets/images/herosection svg/icon1_2.svg";
import icon2_2 from "../../assets/images/herosection svg/icon2_2.svg";
import icon3_2 from "../../assets/images/herosection svg/icon3_2.svg";
import icon4_2 from "../../assets/images/herosection svg/icon4_2.svg";
import icon5_2 from "../../assets/images/herosection svg/icon5_2.svg";
import icon6_2 from "../../assets/images/herosection svg/icon6_2.svg";
import Image from "next/image";

const ConnectorImage = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const getIcon = (index, defaultIcon, hoverIcon) => {
    return hoveredIcon === index ? hoverIcon : defaultIcon;
  };

  return (
    <div className="relative bg-transparent w-[90%] xs:w-[75%] sm:w-[80%] md:w-[74%] lg:w-[70%] h-[600px] my-0 lg:my-10 mr-5 xs:mr-3 lg:mr-0 mt-[-120px] xs:mt-[-75px] bw:mt-[-50px] lg:mt-0">
      {/* line to connect icons */}
      <div className="absolute left-[calc(27%+22px)] 2xs:left-[calc(27%+25px)] sm:left-[calc(27%+30px)] md:left-[calc(27%+35px)] bw:left-[calc(27%+40px)] lg:left-[calc(27%+45px)] top-[calc(17%+94px)] 2xs:top-[calc(17%+97px)] xs:top-[calc(12%+96px)] sm:top-[calc(11%+100px)] md:top-[calc(10%+100px)] bw:top-[calc(10%+90px)] h-[calc(45%-58px)] 2xs:h-[calc(45%-60px)] xs:h-[calc(55%-60px)] sm:h-[calc(62%-75px)] md:h-[calc(66%-75px)] bw:h-[calc(71%-75px)] lg:h-[calc(75%-90px)] w-[3px] bg-[#49494ACC]"></div>
      <div className="absolute left-[calc(67%+22px)] 2xs:left-[calc(67%+25px)] sm:left-[calc(67%+30px)] md:left-[calc(67%+35px)] bw:left-[calc(67%+40px)] lg:left-[calc(67%+45px)] top-[calc(21%+94px)] 2xs:top-[calc(21%+97px)] xs:top-[calc(17%+96px)] sm:top-[calc(16%+100px)] md:top-[calc(15%+100px)] bw:top-[calc(15%+90px)] h-[calc(47%-58px)] 2xs:h-[calc(47%-60px)] xs:h-[calc(55%-60px)] sm:h-[calc(62%-75px)] md:h-[calc(66%-75px)] bw:h-[calc(71%-75px)] lg:h-[calc(75%-90px)] w-[3px] bg-[#49494ACC]"></div>
      <div className="absolute left-[calc(7%+45px)] 2xs:left-[calc(7%+50px)]  sm:left-[calc(7%+60px)] md:left-[calc(7%+70px)] bw:left-[calc(7%+80px)] lg:left-[calc(7%+90px)] top-[calc(47%+23px)] 2xs:top-[calc(47%+25px)] sm:top-[calc(47%+30px)] md:top-[calc(47%+35px)] bw:top-[calc(47%+40px)] lg:top-[calc(47%+45px)] w-[calc(42%-56px)] 2xs:w-[calc(42%-60px)] sm:w-[calc(40%-60px)] md:w-[calc(40%-70px)] bw:w-[calc(40%-80px)] lg:w-[calc(40%-90px)] h-[3px] bg-[#49494ACC]"></div>
      <div className="absolute left-[calc(47%+50px)] sm:left-[calc(47%+60px)] md:left-[calc(47%+70px)] bw:left-[calc(47%+80px)] lg:left-[calc(47%+90px)] top-[calc(47%+23px)] 2xs:top-[calc(47%+25px)] sm:top-[calc(47%+30px)] md:top-[calc(47%+35px)] bw:top-[calc(47%+40px)] lg:top-[calc(47%+45px)] w-[calc(42%-57px)] sm:w-[calc(40%-60px)]  md:w-[calc(40%-70px)] bw:w-[calc(40%-80px)] lg:w-[calc(40%-90px)] h-[3px] bg-[#49494ACC]"></div>

      {/* holder-left */}
      <div className="absolute top-[calc(47%+18px)] 2xs:top-[calc(47%+20px)] sm:top-[calc(47%+24px)] md:top-[calc(47%+29px)] bw:top-[calc(47%+33px)] lg:top-[calc(47%+35px)] left-[calc(47%-6px)] sm:left-[calc(47%-7px)] md:left-[calc(47%-8px)] lg:left-[calc(47%-10px)] w-[6px] h-[12px] sm:w-[7px] sm:h-[14px] md:w-[8px] md:h-[16px] lg:w-[10px] lg:h-[20px] overflow-hidden z-30">
        <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>
      {/* holder-right */}
      <div className="absolute top-[calc(47%+18px)] 2xs:top-[calc(47%+20px)] sm:top-[calc(47%+24px)] md:top-[calc(47%+29px)] bw:top-[calc(47%+33px)] lg:top-[calc(47%+35px)] left-[calc(47%+45px)] 2xs:left-[calc(47%+50px)] sm:left-[calc(47%+60px)] md:left-[calc(47%+70px)] bw:left-[calc(47%+80px)] lg:left-[calc(47%+90px)] w-[5.8px] h-[12px] sm:-[7px] sm:h-[14px] md:w-[8px] md:h-[16px] lg:w-[10px] lg:h-[20px] overflow-hidden z-30 rotate-180">
        <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>

      {/* icon1 to logo */}
      <div className="flow-line1 absolute"></div>
      {/* icon2 to logo */}
      <div className="flow-line2 absolute"></div>
      {/* icon3 to logo */}
      <div className="flow-line3 absolute"></div>
      {/* icon4 to logo */}
      <div className="flow-line4 absolute"></div>
      {/* icon5 to logo */}
      <div className="flow-line5 absolute"></div>
      {/* icon6 to logo */}
      <div className="flow-line6 absolute"></div>

      {/* icons */}
      <div
        className="absolute top-[25%] xs:top-[20%] sm:top-[18%] md:top-[15%] bw:top-[12%] lg:top-[10%] left-[27%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto"
        onMouseEnter={() => setHoveredIcon(1)}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Image src={getIcon(1, icon1, icon1_2)} alt="icon5" />
      </div>
      <div
        className="absolute top-[29%] xs:top-[25%] sm:top-[23%] md:top-[20%] bw:top-[17%] lg:top-[15%] left-[67%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto"
        onMouseEnter={() => setHoveredIcon(2)}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Image src={getIcon(2, icon2, icon2_2)} alt="icon5" />
      </div>
      <div
        className="absolute top-[47%] left-[7%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto"
        onMouseEnter={() => setHoveredIcon(3)}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Image src={getIcon(3, icon3, icon3_2)} alt="icon5" />
      </div>

      {/* inner container holds the actual bg and the image */}
      {/* <div
        className="absolute top-[47%] left-[47%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] rounded-full p-1"
        style={{
          background:
            "linear-gradient(to right, rgba(175, 133, 227, 1), rgba(111, 242, 242, 1), rgba(104, 224, 153, 1))",
        }}
      >
        <div className="rounded-full p-0.5">
          <Image
            src={maxxitIcon}
            alt=""
            className="rounded-full w-full h-auto"
          ></Image>
        </div>
      </div> */}

      <div
        className="border-[3px] border-cyan-300 border-solid absolute top-[47%] left-[47%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] rounded-full p-1"
        // style={{
        //   background:
        //     "linear-gradient(to right, rgba(175, 133, 227, 0.5), rgba(111, 242, 242, 0.8), rgba(104, 224, 153, 0.8))",
        // }}
      >
        <div className="rounded-full p-0.5">
          <Image
            src={maxxitIcon}
            alt=""
            className="rounded-full w-full h-auto"
          ></Image>
        </div>
      </div>

      <div
        className="absolute top-[47%] left-[87%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto"
        onMouseEnter={() => setHoveredIcon(4)}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Image src={getIcon(4, icon4, icon4_2)} alt="icon5" />
      </div>
      <div
        className="absolute top-[68%] xs:top-[73%] sm:top-[77%] md:top-[80%] bw:top-[83%] lg:top-[85%] left-[27%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto"
        onMouseEnter={() => setHoveredIcon(5)}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Image src={getIcon(5, icon5, icon5_2)} alt="icon5" />
      </div>
      <div
        className="absolute top-[74%] xs:top-[78%] sm:top-[82%] md:top-[85%] bw:top-[88%] lg:top-[90%] left-[67%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto"
        onMouseEnter={() => setHoveredIcon(6)}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Image src={getIcon(6, icon6, icon6_2)} alt="icon6" />
      </div>
    </div>
  );
};

export default ConnectorImage;
