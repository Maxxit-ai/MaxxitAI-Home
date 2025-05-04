"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import maxxitIcon from "../../../public/img/maxxit_icon.svg";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import route from "@/app/assets/images/walkthrough svgs/walkthroughRoute.svg";
import mobileroute from "@/app/assets/images/walkthrough svgs/mobileRoute.svg";

import iconlogo from "@/app/assets/images/herosection svg/iconlogo.svg";
import step1 from "@/app/assets/images/walkthrough svgs/step1.svg";
import step2 from "@/app/assets/images/walkthrough svgs/step2.svg";
import step3 from "@/app/assets/images/walkthrough svgs/step3.svg";
import step4 from "@/app/assets/images/walkthrough svgs/step4.svg";
import step5 from "@/app/assets/images/walkthrough svgs/step5.svg";
import step6 from "@/app/assets/images/walkthrough svgs/step6.svg";
import step7 from "@/app/assets/images/walkthrough svgs/step7.svg";

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
        y: 60,
      });
    });

    // Create timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".walkthrough-container",
        start: "top 20%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate each step's elements sequentially
    Object.values(elementRefs).forEach((refs, stepIndex) => {
      const delay = stepIndex * 0.9; // Delay between steps

      // Animate icon
      timeline.to(
        refs.icon.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        delay
      );

      // Animate line
      timeline.to(
        refs.line.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        delay + 0.1
      );

      // Animate text
      timeline.to(
        refs.text.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        delay + 0.2
      );
    });

    return () => {
      timeline.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-[800px] sm:h-[900px] bw:h-[800px] 1300:h-[1000px] relative walkthrough-container">
      <div className="absolute top-0 left-0 walkthrough-bg w-full h-[900px] z-10"></div>
      <div className="flex flex-col items-center justify-center z-30 relative overflow-hidden">
        <h2 className="text-[20px] 4xs:text-[30px] md:text-[40px] bw:text-[50px] mb-[50px] font-medium tracking-wide text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
          Maxxit Walkthrough
        </h2>
        <div className="relative w-[300px] sm:w-[600px] bw:w-[890px] 1300:w-[1300px] 2xl:w-[1530px] h-[800px] ml-[-40px] bw:mx-auto overflow-hidden">
          {/* logo and route */}
          <div className="absolute top-[calc(1%)] left-[calc(50%-29px)] bw:top-[13%] bw:left-[7px] 1300:top-[13%] 1300:left-[11%] z-20">
            <div
              className="rounded-full p-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(175, 133, 227, 1), rgba(111, 242, 242, 1), rgba(104, 224, 153, 1))",
              }}
            >
              <div className="rounded-full bg-white p-0.5">
                <Image
                  src={maxxitIcon}
                  alt="logo"
                  className="w-[50px] h-[50px] 1300:w-[80px] 1300:h-[80px] rounded-full"
                ></Image>
              </div>
            </div>
          </div>
          <div className="hidden bw:flex absolute left-[60px] top-[calc(10%+55px)] 1300:top-[calc(10%+80px)] 1300:left-[calc(10%+88px)] w-[800px] 1300:w-[950px] 2xl:w-[1130px] h-max z-10">
            <Image src={route} alt="route" className="w-full h-auto"></Image>
          </div>
          <div className="flex bw:hidden absolute top-[calc(0%+70px)] left-[calc(50%-95px)] mx-auto z-10">
            <Image src={mobileroute} alt="route"></Image>
          </div>
          <div className="absolute top-[80%] left-[60.5%] sm:top-[87%] sm:left-[57.3%] flex bw:hidden bg-white w-[7px] h-[7px] rounded-full"></div>

          {/* Step 1 */}
          <div
            className="absolute top-[13%] left-[72%] sm:top-[14%] sm:left-[59%] bw:top-[18%] bw:left-[22%] 1300:top-[23%] 2xl:top-[25%] 1300:left-[30%] z-20"
            ref={elementRefs.step1.icon}
          >
            <Image
              src={step1}
              alt="step1"
              className="w-[50px] h-[50px] bw:w-auto bw:h-auto"
            ></Image>
          </div>
          <div
            className="w-[2px] h-[30px] bw:h-[80px] absolute top-[9.8%] left-[79.5%] sm:top-[10.5%] sm:left-[63%] bw:top-[calc(18%-77px)] bw:left-[calc(22%+27px)] 1300:top-[calc(23%-77px)] 2xl:top-[calc(25%-77px)] 1300:left-[calc(30%+27px)] bg-[#49494ACC]"
            ref={elementRefs.step1.line}
          ></div>
          <div
            className="bg-[#2D164A] text-[8px] bw:text-xs px-[8px] py-[3px] bw:px-4 bw:py-3 rounded bw:rounded-md text-white absolute top-[8%] left-[69%] sm:top-[9%] sm:left-[58%] bw:top-[calc(19%-100px)] bw:left-[19%] 1300:top-[calc(23%-100px)] 2xl:top-[calc(25%-100px)] 1300:left-[26.5%]"
            ref={elementRefs.step1.text}
          >
            Login with X (Twitter)
          </div>

          {/* Step 2 */}
          <div
            className="absolute top-[23.5%] left-[65%] sm:top-[25%] sm:left-[65%] bw:top-[26%] bw:left-[17%] 1300:top-[32%] 2xl:top-[36%] 1300:left-[25%] z-20"
            ref={elementRefs.step2.icon}
          >
            <Image
              src={step2}
              alt="step2"
              className="w-[50px] h-[50px] bw:w-auto bw:h-auto"
            ></Image>
          </div>
          <div
            className="h-[30px] w-[2px] bw:w-[80px] bw:h-[3px] absolute top-[29%] left-[73%] sm:top-[31%] sm:left-[69%] bw:top-[calc(26%+25px)] bw:left-[calc(17%-70px)] 1300:top-[calc(32%+25px)] 2xl:top-[calc(36%+25px)] 1300:left-[calc(25%-73px)] bg-[#49494ACC]"
            ref={elementRefs.step2.line}
          ></div>
          <div
            className="bg-[#0E3F3F] text-[8px] text-center bw:text-xs px-[8px] py-[3px] bw:px-6 bw:py-3 rounded bw:rounded-md text-white absolute top-[32%] left-[64%] sm:top-[34%] sm:left-[64%] bw:top-[27%] bw:left-[0%] 1300:top-[32%] 2xl:top-[calc(36%)] 1300:left-[12%]"
            ref={elementRefs.step2.text}
          >
            Connect Telegram
          </div>

          {/* Step 3 */}
          <div
            className="absolute top-[23.5%] left-[32%] sm:top-[25%] sm:left-[39%] bw:top-[29%] bw:left-[41%] 1300:top-[35%] 1300:left-[42%] 2xl:top-[40%] 2xl:left-[40%] z-20"
            ref={elementRefs.step3.icon}
          >
            <Image
              src={step3}
              alt="step3"
              className="w-[50px] h-[50px] bw:w-auto bw:h-auto"
            ></Image>
          </div>
          <div
            className="w-[2px] h-[30px] bw:h-[80px] absolute top-[20.2%] left-[39.7%] sm:top-[21.5%] sm:left-[43%] bw:top-[calc(29%+53px)] bw:left-[calc(41%+30px)] 1300:top-[calc(35%+53px)] 1300:left-[calc(42%+30px)] 2xl:top-[calc(40%+50px)] 2xl:left-[calc(40%+30px)] bg-[#49494ACC]"
            ref={elementRefs.step3.line}
          ></div>
          <div
            className="bg-[#282C4C] text-[8px] bw:text-xs px-[8px] py-[3px] bw:px-4 bw:py-3 rounded bw:rounded-md text-white text-center absolute top-[18%] left-[16%] sm:top-[20%] sm:left-[32%] bw:top-[calc(29%+130px)] bw:left-[calc(41%-90px)] 1300:top-[calc(35%+130px)] 1300:left-[calc(46%-90px)] 2xl:top-[calc(40%+130px)] 2xl:left-[calc(43%-90px)]"
            ref={elementRefs.step3.text}
          >
            Start with Free Credits
            {/* <br />
            (same-chain/cross-chain) */}
          </div>

          {/* Step 4 */}
          <div
            className="absolute top-[34%] left-[35%] sm:top-[37%] sm:left-[48%] bw:top-[31.5%] 1300:top-[39%] 2xl:top-[44%] bw:left-[56%] z-20"
            ref={elementRefs.step4.icon}
          >
            <Image
              src={step4}
              alt="step4"
              className="w-[50px] h-[50px] bw:w-auto bw:h-auto"
            ></Image>
          </div>
          <div
            className="w-[30px] h-[2px] bw:w-[2px] bw:h-[100px] 1300:h-[180px] absolute top-[37%] left-[49%] sm:top-[40%] sm:left-[55%] bw:top-[19.4%] 1300:top-[17%] 2xl:top-[22%] bw:left-[calc(56%+32px)] bg-[#49494ACC]"
            ref={elementRefs.step4.line}
          ></div>
          <div
            className="bg-[#173A25] text-[8px] bw:text-xs px-[8px] py-[3px] bw:px-4 bw:py-3 rounded bw:rounded-md text-white absolute top-[36%] left-[59%] sm:top-[39%] sm:left-[59%] bw:top-[15%] 1300:top-[17%] 2xl:top-[calc(21%)] bw:left-[52%]"
            ref={elementRefs.step4.text}
          >
            Browse Top Accounts
          </div>

          {/* Step 5 */}
          <div
            className="absolute top-[44%] left-[45%] sm:top-[48%] sm:left-[52%] bw:top-[24.5%] bw:left-[72%] 1300:top-[31%] 2xl:top-[35%] 1300:left-[70%] z-20"
            ref={elementRefs.step5.icon}
          >
            <Image
              src={step5}
              alt="step5"
              className="w-[50px] h-[50px] bw:w-auto bw:h-auto"
            ></Image>
          </div>
          <div
            className="w-[30px] bw:w-[80px] h-[2.5px] absolute top-[47%] left-[37.5%] sm:top-[50%] sm:left-[48%] bw:top-[29%] bw:left-[79.5%] 1300:top-[35%] 1300:left-[calc(75.3%)] 2xl:top-[calc(39%)] 2xl:left-[calc(74.6%)] bg-[#49494ACC]"
            ref={elementRefs.step5.line}
          ></div>
          <div
            className="bg-[#2D164A] text-[8px] bw:text-xs text-center px-[8px] py-[3px] bw:px-4 1300:px-6 bw:py-3 rounded bw:rounded-md text-white absolute top-[46%] left-[11%] sm:top-[49%] sm:left-[35%] bw:top-[26%] bw:left-[83.5%] 1300:top-[calc(32%)] 1300:left-[80.2%] 2xl:top-[calc(35.5%)] 2xl:left-[79.5%]"
            ref={elementRefs.step5.text}
          >
            Get Verified Signals
            {/* <br />
            not noise */}
          </div>

          {/* Step 6 */}
          <div
            className="absolute top-[58.7%] left-[78%] sm:top-[64%] sm:left-[65%] bw:top-[47%] bw:left-[65%] 1300:top-[58%] 1300:left-[65%] 2xl:top-[69%] 2xl:left-[63%] z-20"
            ref={elementRefs.step6.icon}
          >
            <Image
              src={step6}
              alt="step6"
              className="w-[50px] h-[50px] bw:w-auto bw:h-auto"
            ></Image>
          </div>
          <div
            className="w-[2px] h-[30px] bw:h-[100px] absolute top-[55.3%] left-[86%] sm:top-[60.5%] sm:left-[69%] bw:top-[59%] bw:left-[calc(70%+5px)] 1300:top-[69%] 1300:left-[calc(68%+10px)] 2xl:top-[calc(79.5%)] 2xl:left-[calc(65%+20px)] bg-[#49494ACC]"
            ref={elementRefs.step6.line}
          ></div>
          <div
            className="bg-[#0E3F3F] text-[8px] bw:text-xs px-[8px] py-[3px] bw:px-4 bw:py-3 text-center rounded bw:rounded-md text-white absolute top-[53%] left-[70%] sm:top-[58.2%] sm:left-[63%] bw:top-[68%] bw:left-[63%] 1300:top-[78%] 1300:left-[64%] 2xl:top-[calc(92%)] 2xl:left-[60.5%]"
            ref={elementRefs.step6.text}
          >
            Track Your Signal Performance
            {/* <br />
            market-tested calls */}
          </div>

          {/* Step 7 */}
          <div
            className="absolute top-[65.7%] left-[64%] sm:top-[71.5%] sm:left-[59%] bw:top-[49%] bw:left-[90%] 1300:top-[57%] 2xl:top-[66.5%] 1300:left-[85.5%] z-20"
            ref={elementRefs.step7.icon}
          >
            <Image
              src={step7}
              alt="step7"
              className="w-[50px] h-[50px] bw:w-auto bw:h-auto"
            ></Image>
          </div>
          <div
            className="h-[2px] w-[30px] bw:w-[2px] bw:h-[80px] absolute top-[68.5%] left-[56.5%] sm:top-[74%] sm:left-[55%] bw:top-[60%] bw:left-[95%] 1300:top-[70%] 1300:left-[89.5%] 2xl:top-[calc(79%)] 2xl:left-[calc(89%)] bg-[#49494ACC]"
            ref={elementRefs.step7.line}
          ></div>
          <div
            className="bg-[#282C4C] text-[8px] bw:text-xs text-center px-[8px] py-[3px] bw:px-6 1300:px-8 bw:py-3 rounded bw:rounded-md text-white absolute top-[67%] left-[30%] sm:top-[72%] sm:left-[44%] bw:top-[70%] bw:left-[84.5%] 1300:top-[80%] 1300:left-[84%] 2xl:top-[88%] 2xl:left-[84.5%]"
            ref={elementRefs.step7.text}
          >
            For Creators — <br />
            Earn by Being Right
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
