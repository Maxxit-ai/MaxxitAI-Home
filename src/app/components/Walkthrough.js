"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import route from "@/app/assets/walkthrough svgs/walkthroughRoute.svg";
import mobileroute from "@/app/assets/walkthrough svgs/mobileRoute.svg";

import iconlogo from "@/app/assets/herosection svg/iconlogo.svg";
import step1 from "@/app/assets/walkthrough svgs/step1.svg";
import step2 from "@/app/assets/walkthrough svgs/step2.svg";
import step3 from "@/app/assets/walkthrough svgs/step3.svg";
import step4 from "@/app/assets/walkthrough svgs/step4.svg";
import step5 from "@/app/assets/walkthrough svgs/step5.svg";
import step6 from "@/app/assets/walkthrough svgs/step6.svg";
import step7 from "@/app/assets/walkthrough svgs/step7.svg";

gsap.registerPlugin(ScrollTrigger);

const Walkthrough = () => {
  const elementRefs = {
    step1: {
      icon: useRef(null),
      line: useRef(null),
      text: useRef(null),
    },
    step2: {
      icon: useRef(null),
      line: useRef(null),
      text: useRef(null),
    },
    step3: {
      icon: useRef(null),
      line: useRef(null),
      text: useRef(null),
    },
    step4: {
      icon: useRef(null),
      line: useRef(null),
      text: useRef(null),
    },
    step5: {
      icon: useRef(null),
      line: useRef(null),
      text: useRef(null),
    },
    step6: {
      icon: useRef(null),
      line: useRef(null),
      text: useRef(null),
    },
    step7: {
      icon: useRef(null),
      line: useRef(null),
      text: useRef(null),
    },
  };

  useEffect(() => {
    // Set initial states
    Object.values(elementRefs).forEach(({ icon, line, text }) => {
      gsap.set([icon.current, line.current, text.current], {
        opacity: 0,
        y: 60
      });
    });

    // Create timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".walkthrough-container",
        start: "top 20%",
        end: "bottom 70%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate each step's elements sequentially
    Object.values(elementRefs).forEach((refs, stepIndex) => {
      const delay = stepIndex * 0.9; // Delay between steps
      
      // Animate icon
      timeline.to(refs.icon.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }, delay);
      
      // Animate line
      timeline.to(refs.line.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }, delay + 0.1);
      
      // Animate text
      timeline.to(refs.text.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }, delay + 0.2);
    });

    return () => {
      timeline.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-[1000px] relative walkthrough-container">
      <div className="absolute top-0 left-0 walkthrough-bg w-full h-[900px] z-10"></div>
      <div className="flex flex-col items-center justify-center z-30 relative">
        <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] mb-[50px] font-medium tracking-wide text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
          SmartDisperse Walkthrough
        </h2>
        <div className="relative w-full h-[800px] mx-auto">
          {/* logo and route */}
          <div className="absolute top-[calc(10%)] left-[calc(50%-50px)] md:top-[10%] md:left-[10%] z-20">
            <Image src={iconlogo} alt="logo" className="w-[100px] h-[100px]"></Image>
          </div>
          <div className="hidden md:flex absolute top-[calc(10%+80px)] left-[calc(10%+88px)] z-10">
            <Image src={route} alt="route"></Image>
          </div>
          <div className="flex md:hidden absolute top-[calc(10%+100px)] left-[calc(50%-100px)] mx-auto z-10">
            <Image src={mobileroute} alt="route"></Image>
          </div>

          {/* Step 1 */}
          <div className="absolute top-[25%] left-[30%] z-20" ref={elementRefs.step1.icon}>
            <Image src={step1} alt="step1"></Image>
          </div>
          <div className="w-[2px] h-[80px] absolute top-[calc(25%-77px)] left-[calc(30%+27px)] bg-[#49494ACC]" ref={elementRefs.step1.line}></div>
          <div className="bg-[#2D164A] text-xs px-4 py-3 rounded-md text-white absolute top-[calc(25%-100px)] left-[26.5%]" ref={elementRefs.step1.text}>
            Connect Wallet
          </div>

          {/* Step 2 */}
          <div className="absolute top-[36%] left-[25%] z-20" ref={elementRefs.step2.icon}>
            <Image src={step2} alt="step2"></Image>
          </div>
          <div className="w-[80px] h-[3px] absolute top-[calc(36%+25px)] left-[calc(25%-73px)] bg-[#49494ACC]" ref={elementRefs.step2.line}></div>
          <div className="bg-[#0E3F3F] text-xs px-6 py-3 rounded-md text-white absolute top-[calc(36%)] left-[12%]" ref={elementRefs.step2.text}>
            Select Chain
          </div>

          {/* Step 3 */}
          <div className="absolute top-[40%] left-[40%] z-20" ref={elementRefs.step3.icon}>
            <Image src={step3} alt="step3"></Image>
          </div>
          <div className="w-[2px] h-[80px] absolute top-[calc(40%+50px)] left-[calc(40%+30px)] bg-[#49494ACC]" ref={elementRefs.step3.line}></div>
          <div className="bg-[#282C4C] text-xs px-4 py-3 rounded-md text-white text-center absolute top-[calc(40%+130px)] left-[calc(40%-90px)]" ref={elementRefs.step3.text}>
            Select Transactions Type
            <br />
            (same-chain/cross-chain)
          </div>

          {/* Step 4 */}
          <div className="absolute top-[44%] left-[56%] z-20" ref={elementRefs.step4.icon}>
            <Image src={step4} alt="step4"></Image>
          </div>
          <div className="w-[2px] h-[180px] absolute top-[22%] left-[calc(56%+32px)] bg-[#49494ACC]" ref={elementRefs.step4.line}></div>
          <div className="bg-[#173A25] text-xs px-4 py-3 rounded-md text-white absolute top-[calc(21%)] left-[52%]" ref={elementRefs.step4.text}>
            List your transaction
          </div>

          {/* Step 5 */}
          <div className="absolute top-[35%] left-[70%] z-20" ref={elementRefs.step5.icon}>
            <Image src={step5} alt="step5"></Image>
          </div>
          <div className="w-[80px] h-[2.5px] absolute top-[calc(39%)] left-[calc(74.6%)] bg-[#49494ACC]" ref={elementRefs.step5.line}></div>
          <div className="bg-[#2D164A] text-xs text-center px-6 py-3 rounded-md text-white absolute top-[calc(35.5%)] left-[79.5%]" ref={elementRefs.step5.text}>
            Verify the Recipient
            <br />
            address & amount
          </div>

          {/* Step 6 */}
          <div className="absolute top-[68%] xl:top-[69%] left-[63%] z-20" ref={elementRefs.step6.icon}>
            <Image src={step6} alt="step6"></Image>
          </div>
          <div className="w-[2px] h-[100px] absolute top-[calc(79.5%)] xl:top-[calc(80.7%)] left-[calc(65%+20px)] bg-[#49494ACC]" ref={elementRefs.step6.line}></div>
          <div className="bg-[#0E3F3F] text-xs px-4 py-3 rounded-md text-white absolute top-[calc(92%)] left-[60.5%]" ref={elementRefs.step6.text}>
            Send Transactions
          </div>

          {/* Step 7 */}
          <div className="absolute top-[66.5%] left-[86.2%] z-20" ref={elementRefs.step7.icon}>
            <Image src={step7} alt="step7"></Image>
          </div>
          <div className="w-[2px] h-[80px] absolute top-[calc(79%)] left-[calc(89.8%)] bg-[#49494ACC]" ref={elementRefs.step7.line}></div>
          <div className="bg-[#282C4C] text-xs text-center px-8 py-3 rounded-md text-white absolute top-[88%] left-[85%]" ref={elementRefs.step7.text}>
            View History of
            <br />
            Transactions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;