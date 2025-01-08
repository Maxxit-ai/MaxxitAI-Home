"use client";
import React, { useState } from "react";

const GetStarted = () => {
  const getstarted = [
    {
      heading: "Cross Chain",
      paragraph:
        "Unlocking Cross-Chain Transactions: Seamlessly Connect Blockchain",
      gradient: "gradient-1",
      lineGradient:
        "bg-gradient-to-r from-[#040C1D] via-[#6FF2F2] to-[#030C1D]",
      glowColor: "rgba(111, 242, 242, 0.3)", // Matching #6FF2F2
    },
    {
      heading: "Same Chain",
      paragraph:
        "Streamlining Same-Chain Transactions: Enhancing Efficiency and Accessibility",
      gradient: "gradient-2",
      lineGradient:
        "bg-gradient-to-r from-[#040C1D] via-[#AF85E3] to-[#030C1D]",
      glowColor: "rgba(175, 133, 227, 0.3)", // Matching #AF85E3
    },
    {
      heading: "Documentation",
      paragraph:
        "Unraveling SmartDisperse: A Comprehensive Guide to Seamless Cross-Chain Communication",
      gradient: "gradient-3",
      lineGradient:
        "bg-gradient-to-r from-[#040C1D] via-[#68E099] to-[#030C1D]",
      glowColor: "rgba(104, 224, 153, 0.3)", // Matching #68E099
    },
  ];

  const Card = ({ item }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
  
    return (
      <div className="rounded-2xl w-full h-[160px] xs:w-[210px] xs:h-[210px] sm:w-[280px] sm:h-[200px] md:w-[330px] md:h-[200px] bw:w-[262px] bw:h-[305px] lg:w-[295px] lg:h-[330px] xl:w-[350px] xl:h-[370px] overflow-hidden bg-[#050E21] p-4 flex items-center justify-center relative group">
        <div
          className={`w-full h-full rounded-2xl ${item.gradient} bg-gradient-to-b p-[0.8px] flex items-center justify-center relative overflow-hidden`}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            "--x": `${position.x}px`,
            "--y": `${position.y}px`,
            "--glow-color": item.glowColor,
          }}
        >
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(120px circle at var(--x) var(--y), var(--glow-color), transparent 40%)`,
            }}
          />
          <div className="w-full h-full rounded-2xl bg-[#050E21] p-3 bw:p-6 flex flex-col items-center justify-center relative">
            <h1 className="font-medium text-[12px] md:text-[20px] lg:text-[22px] text-wrap tracking-wide text-center xs:text-left w-full mb-3 mt-0 xl:my-5">
              {item.heading}
            </h1>
            <div className={`w-full h-[1.3px] ${item.lineGradient} my-2 bw:my-7`}></div>
            <p className="text-[9px] md:text-[13px] lg:text-[16px] tracking-wider text-center xs:text-left mt-3 mb-0 xl:my-4">
              {item.paragraph}
            </p>
            <div
              className="absolute inset-[1px] rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: `radial-gradient(200px circle at var(--x) var(--y), var(--glow-color), transparent 60%)`,
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative h-[720px] overflow-hidden">
      <div className="getstarted-background h-[700px] absolute top-[-10%] z-10"></div>
      <div className="bg-gradient-to-b from-[#00061280] to-[#000612] w-full h-[700px] absolute top-[-10%] left-0 z-20"></div>
      <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] font-medium tracking-wide mt-24 mb-0 text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent relative z-30">
        Get Started Now
      </h2>
      <div className="flex flex-wrap w-[92%] xl:w-[85%] items-center justify-center gap-3 my-9 sm:my-16 mx-auto z-30 relative">
        {getstarted.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
