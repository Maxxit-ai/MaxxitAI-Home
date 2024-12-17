import React from "react";
import Image from "next/image";
import route from "@/app/assets/walkthrough svgs/walkthroughRoute.svg";
import iconlogo from "@/app/assets/herosection svg/iconlogo.svg";
import step1 from "@/app/assets/walkthrough svgs/step1.svg";
import step2 from "@/app/assets/walkthrough svgs/step2.svg";
import step3 from "@/app/assets/walkthrough svgs/step3.svg";
import step4 from "@/app/assets/walkthrough svgs/step4.svg";
import step5 from "@/app/assets/walkthrough svgs/step5.svg";
import step6 from "@/app/assets/walkthrough svgs/step6.svg";
import step7 from "@/app/assets/walkthrough svgs/step7.svg";

const Walkthrough = () => {
  return (
    <div className="w-full h-[900px] relative">
      <div className="absolute top-0 left-0 walkthrough-bg w-full h-[900px] z-10"></div>
      <div className="flex flex-col items-center justify-center z-30 relative">
        <h2 className="text-[36px] mb-[50px] font-medium tracking-wide text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
          SmartDisperse Walkthrough
        </h2>
        <div className="relative w-full h-[800px] mx-auto">
          {/* logo and route */}
          <div className="absolute top-[10%] left-[10%] z-20">
            <Image src={iconlogo} alt="logo" width={100} height={100}></Image>
          </div>
          <div className="absolute top-[calc(10%+80px)] left-[calc(10%+88px)] z-10">
            <Image src={route} alt="route"></Image>
          </div>

          {/* steps */}
          <div>
            <div className="absolute top-[25%] left-[30%] z-20">
              <Image src={step1} alt="step1"></Image>
            </div>
            <div className="w-[2px] h-[80px] absolute top-[calc(25%-77px)] left-[calc(30%+27px)] bg-[#49494ACC]"></div>
            <div className="bg-[#2D164A] text-xs px-4 py-3 rounded-md text-white absolute top-[calc(25%-100px)] left-[26.5%]">
              Connect Wallet
            </div>
          </div>

          <div>
            <div className="absolute top-[36%] left-[25%] z-20">
              <Image src={step2} alt="step2"></Image>
            </div>
            <div className="w-[80px] h-[3px] absolute top-[calc(36%+25px)] left-[calc(25%-73px)] bg-[#49494ACC]"></div>
            <div className="bg-[#0E3F3F] text-xs px-6 py-3 rounded-md text-white absolute top-[calc(36%)] left-[12%]">
              Select Chain
            </div>
          </div>

          <div>
            <div className="absolute top-[40%] left-[40%] z-20">
              <Image src={step3} alt="step3"></Image>
            </div>
            <div className="w-[2px] h-[80px] absolute top-[calc(40%+50px)] left-[calc(40%+30px)] bg-[#49494ACC]"></div>
            <div className="bg-[#282C4C] text-xs px-4 py-3 rounded-md text-white text-center absolute top-[calc(40%+130px)] left-[calc(40%-90px)]">
              Select Transactions Type
              <br />
              (same-chain/cross-chain)
            </div>
          </div>

          <div>
            <div className="absolute top-[44%] left-[56%] z-20">
              <Image src={step4} alt="step4"></Image>
            </div>
            <div className="w-[2px] h-[180px] absolute top-[22%] left-[calc(56%+32px)] bg-[#49494ACC]"></div>
            <div className="bg-[#173A25] text-xs px-4 py-3 rounded-md text-white absolute top-[calc(21%)] left-[52%]">
              List your transaction
            </div>
          </div>

          <div>
            <div className="absolute top-[35%] left-[70%] z-20">
              <Image src={step5} alt="step5"></Image>
            </div>
            <div className="w-[80px] h-[2.5px] absolute top-[calc(39%)] left-[calc(74.6%)] bg-[#49494ACC]"></div>
            <div className="bg-[#2D164A] text-xs text-center px-6 py-3 rounded-md text-white absolute top-[calc(34.5%)] left-[79.5%]">
              Verify the Recipient
              <br />
              address & amount
            </div>
          </div>

          <div>
            <div className="absolute top-[68%] left-[63%] z-20">
              <Image src={step6} alt="step6"></Image>
            </div>
            <div className="w-[2px] h-[100px] absolute top-[calc(79.5%)] left-[calc(65%+20px)] bg-[#49494ACC]"></div>
            <div className="bg-[#0E3F3F] text-xs px-4 py-3 rounded-md text-white absolute top-[calc(92%)] left-[60.5%]">
              Send Transactions
            </div>
          </div>

          <div>
            <div className="absolute top-[66.5%] left-[86.2%] z-20">
              <Image src={step7} alt="step7"></Image>
            </div>
            <div className="w-[2px] h-[80px] absolute top-[calc(79%)] left-[calc(89.8%)] bg-[#49494ACC]"></div>
            <div className="bg-[#282C4C] text-xs text-center px-8 py-3 rounded-md text-white absolute top-[88%] left-[85%]">
              View History of
              <br />
              Transactions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
