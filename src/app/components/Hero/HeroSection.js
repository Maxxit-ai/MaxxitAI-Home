import React, { useRef, useEffect } from "react";
import Navbar from "../Navbar";
import ConnectorImage from "../ChainShowcase/ConnectorImage";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import StarGrid from "./StarGrid";
import gsap from "gsap";
// import intro from "@/app/assets/videos/Maxxit_intro.mp4"

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate the heading with staggered effect
    tl.fromTo(
      ".hero-heading-part",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3 },
      0.3
    );

    // Animate the paragraph
    tl.fromTo(
      ".hero-paragraph",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      1
    );

    // Animate the video
    tl.fromTo(
      ".hero-video-container",
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 },
      1.2
    );

    // Animate the buttons
    tl.fromTo(
      ".hero-buttons .button",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
      1.4
    );
  }, []);

  return (
    <>
      <div className="w-full" ref={heroRef}>
        <div className="w-[85%] mx-auto">
          {/* <Navbar /> */}
          <div className="relative grid place-items-center text-center">
            <StarGrid />
            <h1 className="text-[8vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-center mb-5 sm:mb-10 mt-6 sm:mt-20 flex items-center justify-center gap-3 flex-wrap w-full">
              <span className="hero-heading-part block w-full bg-gradient-to-br from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
                Insights that Lead with
              </span>
              <br />

              <span className="hero-heading-part gradient-border-animation rounded-[30px] sm:rounded-[40px] overflow-hidden p-[2px] flex">
                <span className="gradient-bg-animation flex rounded-[30px] sm:rounded-[40px] p-[2px]">
                  <span className="gradient-text-animation rounded-[30px] sm:rounded-[40px] px-3 sm:px-4 py-3 sm:py-6 overflow-hidden">
                    Proven Intelligence
                  </span>
                </span>
              </span>
            </h1>
            <p className="hero-paragraph text-center pb-10 w-[90%] sm:w-[70%] mx-auto text-[10px] sm:text-sm lg:text-2xl tracking-wide">
              Say goodbye to guesswork. Our AI analyzes Twitter trends and
              delivers precise trading signals—helping you stay ahead with
              real-time crypto insights.
            </p>

            <div className="hero-video-container w-full max-w-4xl mx-auto relative">
              <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
              <div className="p-[3px] rounded-xl overflow-hidden relative bg-gradient-to-br from-[#63A7FA] via-[#6ff2f2] to-[#4185F3]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#63A7FA]/30 via-[#6ff2f2]/30 to-[#4185F3]/30 opacity-50 z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden border-2 border-[#000612]">
                  <video
                    className="rounded-lg w-full max-w-full h-auto"
                    src="/videos/Maxxit_intro.mp4"
                    autoPlay
                    controls
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>

            {/* <div className="hero-buttons flex items-center justify-center gap-3 xs:gap-5 bw:gap-7 mx-auto my-8 relative">
              <Link
                href="https://app.maxxit.ai/"
                target="_blank"
                className="button"
              >
                <button className="text-[#000612] font-semibold gradient-background rounded-[10px] xs:rounded-[15px] w-[90px] xs:w-[130px] bw:w-[170px] px-[8px] xs:px-[10px] py-[10px] xs:py-[12px] bw:py-[16px] bw:px-[17px] flex items-center justify-evenly group text-[10px] xs:text-sm bw:text-base text-nowrap">
                  <FaChevronRight className="hidden group-hover:inline-block right-arrow" />
                  <span className="transition-all duration-1000 ease-in-out group-hover:translate-x-[2px]">
                    Get Started
                  </span>
                </button>
              </Link>

              <div className="button gradient-background rounded-[10px] xs:rounded-[15px] p-[1px] pb-[1.5px] pl-[1.5px] flex items-center justify-center overflow-hidden w-max">
                <button className="bg-[#000612] font-semibold rounded-[9px] xs:rounded-[14px] w-[85px] xs:w-[125px] bw:w-[170px] px-[8px] xs:px-[9px] bw:px-[15px] py-[8px] xs:py-[9px] bw:py-[14px] tracking-wider flex items-center justify-evenly group text-[10px] xs:text-sm bw:text-base text-nowrap">
                  <FaChevronRight className="hidden group-hover:inline-block right-arrow" />
                  <span className="transition-all duration-1000 ease-in-out group-hover:translate-x-[2px]">
                    Learn More
                  </span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="image-background relative">
        <div className="absolute w-full flex items-center justify-center">
          <ConnectorImage />
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
