import Image from "next/image";
import React from "react";
import fast from "../assets/about gifs/fast.gif";
import secure from "../assets/about gifs/secure.gif";
import friendly from "../assets/about gifs/friendly.gif";

const about = [
  {
    gif: fast,
    heading: "Fast",
    paragraph:
      "Store preferred chains and tokens on the blockchain, reducing effort and enabling frequent, efficient token transfers.",
    gradient: "bg-gradient-to-b from-[#ffffff00] via-[#ffffff00] to-[#AF85E3]",
  },
  {
    gif: secure,
    heading: "Secure",
    paragraph:
      "Built on Superchain Interop, SmartDisperse inherits robust security features, ensuring reliable support and assistance in case of any issues.",
    gradient: "bg-gradient-to-b from-[#ffffff00] via-[#ffffff00] to-[#6FF2F2]",
  },
  {
    gif: friendly,
    heading: "User Friendly",
    paragraph:
      "SmartDisperse prioritizes speed and efficiency by leveraging the superchain's advanced interop features to optimize your token transfers.",
    gradient: "bg-gradient-to-b from-[#ffffff00] via-[#ffffff00] to-[#8B94E2]",
  },
];

const About = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute top-[100px] left-[-200PX] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#AF85E34D] to-[#ffffff00]"></div>
      <div className="backdrop-blur-[20px] bg-gradient-to-b from-[#00061266] to-[#000612] flex flex-col items-center my-10">
        <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-normal text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
          About SmartDisperse
        </h2>
        <p className="my-6 text-[9px] xs:text-xs sm:text-sm bw:text-base w-[70%] xl:w-full mx-auto font-light tracking-wide text-center">
          SmartDisperse leverages Superchain Interop to enable seamless
          cross-chain interoperability within the superchain ecosystem.{" "}
        </p>
        <div className="flex flex-wrap w-[95%] xl:w-[85%] items-center justify-center gap-10 sm:gap-6 xl:gap-8 my-10">
          {about.map((about, index) => (
            <div
              key={index}
              className={`${about.gradient} p-[1px] flex items-center justify-center rounded-2xl hover:shadow-[0px_0px_30px_10px_#FFFFFF40] hover:p-[0px] hover:translate-y-[-6px] sm:hover:translate-y-[-3px] transition-all duration-300`}
            >
              <div className="flex flex-col items-start rounded-2xl w-[270px] 2xs:w-[290px] xs:w-[320px] lg:w-[300px] xl:w-[320px] h-[400px] xs:h-[500px] overflow-hidden bg-gradient-to-b from-[#00061266] to-[#000E28]">
                <div className="w-full h-[220px] xs:h-[260px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={about.gif}
                    alt={about.heading}
                    unoptimized
                    className="h-[260px] xs:h-[300px] w-auto"
                  ></Image>
                </div>
                <h1 className="font-medium text-base xs:text-lg tracking-wider px-8 py-8 text-left w-full">
                  {about.heading}
                </h1>
                <p className="text-[9px] xs:text-sm tracking-wider px-8 text-left">
                  {about.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
