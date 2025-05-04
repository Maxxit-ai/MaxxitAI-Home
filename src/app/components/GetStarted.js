"use client";
import React, { useState } from "react";

const GetStarted = () => {
  const getstarted = [
    {
      heading: "Endless Exploration",
      paragraph:
        "Analyze Crypto Twitter with unmatched speed. Our AI extracts predictions, trends, and insights in real time, keeping you ahead of every market move",
      gradient: "gradient-1",
      lineGradient:
        "bg-gradient-to-r from-[#040C1D] via-[#6FF2F2] to-[#030C1D]",
      glowColor: "rgba(111, 242, 242, 0.3)", // Matching #6FF2F2
    },
    {
      heading: "AI-Driven Clutter Free Insights",
      paragraph:
        "Eliminate data overload with actionable precision. Our platform turns scattered crypto trends into clear insights—far beyond just another search engine.",
      gradient: "gradient-2",
      lineGradient:
        "bg-gradient-to-r from-[#040C1D] via-[#AF85E3] to-[#030C1D]",
      glowColor: "rgba(175, 133, 227, 0.3)", // Matching #AF85E3
    },
    {
      heading: "AI-Powered Trading Signals",
      paragraph:
        "Simplify trading with AI-driven insights. We scan Twitter for relevant discussions, analyze trends using AI, and generate high-quality signals to optimize your trading strategy.",
      gradient: "gradient-3",
      lineGradient:
        "bg-gradient-to-r from-[#040C1D] via-[#FFF099] to-[#030C1D]",
      glowColor: "rgba(255, 240, 153, 0.39)", // Matching #68E099
    },
    {
      heading: "Actionable Dashboard",
      paragraph:
        "Simplify trading with AI-analyzed signals. Track performance, monitor market impact, and gain real-time insights with the Impact Leaderboard and Heartbeat Dashboards.",
      gradient: "gradient-4",
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
      <div className="group relative flex h-[160px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#050E21] p-4 sm:h-[200px] sm:w-[280px] md:h-[200px] md:w-[330px] lg:h-[330px] lg:w-[295px] xl:h-[385px] xl:w-[275px]">
        <div
          className={`h-full w-full rounded-2xl ${item.gradient} relative flex items-center justify-center overflow-hidden bg-gradient-to-b p-[0.8px]`}
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
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(120px circle at var(--x) var(--y), var(--glow-color), transparent 40%)`,
            }}
          />
          <div className="relative flex h-full w-full flex-col items-center justify-center rounded-2xl bg-[#050E21] p-3">
            <div className="flex h-[110px] items-center">
              <h1 className="mb-3 mt-0 w-full text-wrap text-center text-[12px] font-medium tracking-wide md:text-[20px] lg:text-[22px] xl:my-5">
                {item.heading}
              </h1>
            </div>
            <div
              className={`h-[1.3px] w-full ${item.lineGradient} my-2`}
            ></div>
            <div className="flex h-[200px] items-center">
              <p className="mb-0 mt-3 text-center text-[9px] tracking-wider md:text-[13px] lg:text-[14px] xl:my-4">
                {item.paragraph}
              </p>
            </div>
            <div
              className="absolute inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
    <div className="px-4 py-8 first:pt-6 md:px-6 md:py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="-mt-[3rem]">
          <div className="relative w-full">
            <div className="absolute z-10 h-[700px]"></div>
            <h2 className="4xs:text-[30px] bw:text-[50px] relative z-30 bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-center text-[20px] font-medium tracking-wide text-transparent md:text-[40px] Heading">
              Our Key Features
            </h2>
            <div className="relative z-30 mx-auto flex w-full flex-wrap items-center justify-between gap-3 xl:w-full mt-[5rem]">
              {getstarted.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
