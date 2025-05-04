import Image from "next/image";
import React from "react";
import logo from "../assets/images/logospin.svg";
import prize from "../assets/images/usecases svg/prize.svg";
import send from "../assets/images/usecases svg/send.svg";
import wallet from "../assets/images/usecases svg/wallet.svg";

import { FaArrowRightLong } from "react-icons/fa6";

const UseCaseConnector = () => {
  return (
    <div className="w-full h-[1000px] relative">
      {/* line 1 */}
      <div className="absolute top-[calc(3%+140px)] left-[calc(39%-4px)] lg:left-[calc(40%-4px)] xl:left-[calc(43%-4px)] border-[5px] border-r-0 border-b-0 rounded-b-none rounded-e-none border-[#9c9c9c6b] w-[100px] h-[60px] rounded-[200px]"></div>
      <div className="absolute top-[calc(3%+140px)] left-[calc(39%-4px)] lg:left-[calc(40%-4px)] xl:left-[calc(43%-4px)] border-[5px] border-r-0 border-b-0 rounded-b-none rounded-e-none w-[100px] border-transparent h-[60px] rounded-[200px] flow1curveup"></div>

      <div className="absolute top-[calc(3%+200px)] left-[calc(39%-4px)] lg:left-[calc(40%-4px)] xl:left-[calc(43%-4px)] bg-[#9c9c9c6b] w-[5px] h-[17.4%]"></div>
      <div className="absolute left-[calc(39%-4px)] lg:left-[calc(40%-4px)] xl:left-[calc(43%-4px)] w-[5px] h-[70px] flow1"></div>

      <div className="absolute top-[calc(50%-96px)] left-[calc(39%-99px)] lg:left-[calc(40%-99px)] xl:left-[calc(43%-99px)] border-[5px] border-l-0 border-t-0 rounded-t-none rounded-s-none border-[#9c9c9c6b] w-[100px] h-[100px] rounded-[300px]"></div>
      <div className="absolute top-[calc(50%-96px)] left-[calc(39%-99px)] lg:left-[calc(40%-99px)] xl:left-[calc(43%-99px)] border-[5px] border-l-0 border-t-0 rounded-t-none rounded-s-none w-[100px] border-transparent h-[100px] rounded-[300px] flow1curvedown"></div>

      {/* line 2 */}
      <div className="absolute top-[49.9%] left-[calc(3%+220px)] lg:left-[calc(3%+230px)] xl:left-[calc(10%+280px)] bg-[#9c9c9c6b] w-[28%] xl:w-[26%] h-[5px]"></div>
      <div className="absolute top-[49.9%] w-[70px] h-[5px] flow2"></div>

      {/* line 3 */}
      <div className="absolute top-[calc(50%-1px)] left-[calc(39%-99px)] lg:left-[calc(40%-99px)] xl:left-[calc(43%-99px)] border-[5px] border-l-0 border-b-0 rounded-s-none rounded-b-none border-[#9c9c9c6b] w-[100px] h-[100px] rounded-[300px]"></div>
      <div className="absolute top-[calc(50%-1px)] left-[calc(39%-99px)] lg:left-[calc(40%-99px)] xl:left-[calc(43%-99px)] border-[5px] border-l-0 border-b-0 rounded-s-none rounded-b-none w-[100px] border-transparent h-[100px] rounded-[300px] flow3curveup"></div>

      <div className="absolute top-[calc(50%+98.6px)] left-[calc(39%-4px)] lg:left-[calc(40%-4px)] xl:left-[calc(43%-4px)] bg-[#9c9c9c6b] w-[5px] h-[17.15%]"></div>
      <div className="absolute left-[calc(39%-4px)] lg:left-[calc(40%-4px)] xl:left-[calc(43%-4px)] w-[5px] h-[70px] flow3"></div>

      <div className="absolute top-[calc(87%-100px)] left-[calc(39%-4px)] lg:left-[calc(40%-4px)] xl:left-[calc(43%-4px)] border-[5px] border-r-0 border-t-0 rounded-t-none rounded-e-none border-[#9c9c9c6b] w-[100px] h-[60px] rounded-[200px]"></div>
      <div className="absolute top-[calc(87%-100px)] left-[calc(39%-4px)] lg:left-[calc(40%-4px)] xl:left-[calc(43%-4px)] border-[5px] border-r-0 border-t-0 rounded-t-none rounded-e-none w-[100px] border-transparent h-[60px] rounded-[200px] flow3curvedown"></div>

      {/* circle on left side */}
      <div className="absolute top-[calc(50%-110px)] lg:top-[calc(50%-120px)] xl:top-[calc(50%-140px)] left-[calc(3%+10px)] lg:left-[3%] xl:left-[10%] w-[210px] h-[210px] lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px] rounded-full bg-[#68E09978] border border-[#DFDFDF] shadow-[inset_0px_0px_48.59px_0.91px_#FFFFFFB2] opacity-50"></div>
      <div className="absolute top-[calc(50%-70px)] xl:top-[calc(50%-90px)] left-[calc(3%+50px)] xl:left-[calc(10%+50px)] w-[130px] h-[130px] xl:w-[180px] xl:h-[180px] rounded-full bg-[#AF85E378] border border-[#DFDFDF] shadow-[inset_0px_0px_22.03px_4.53px_#FFFFFFB2] opacity-70"></div>
      <div className="absolute top-[calc(50%-35px)] xl:top-[calc(50%-50px)] left-[calc(3%+85px)] xl:left-[calc(10%+90px)] w-[60px] h-[60px] xl:w-[100px] xl:h-[100px] rounded-full bg-[#8B94E2] border border-[#FFFFFF] shadow-[inset_0px_4.53px_21.85px_6.35px_#FFFFFF80] opacity-90"></div>
      <div className="absolute top-[calc(50%-25px)] xl:top-[calc(50%-30px)] left-[calc(3%+95px)]  xl:left-[calc(10%+110px)] w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] overflow-hidden">
        <Image src={logo} alt="" className="w-full h-full"></Image>
      </div>

      {/* holder-1*/}
      <div className="absolute top-[calc(3%+130px)] left-[calc(45%-10px)] xl:left-[calc(50%-10px)] w-[10px] h-[20px] overflow-hidden z-30">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>
      {/* holder-2 */}
      <div className="absolute top-[calc(50%-10px)] left-[calc(49%-10px)] xl:left-[calc(55%-10px)] w-[10px] h-[20px] overflow-hidden z-30">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>
      {/* holder-3 */}
      <div className="absolute top-[calc(97%-150px)] left-[calc(45%-10px)] xl:left-[calc(50%-10px)] w-[10px] h-[20px] overflow-hidden z-30">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>

      {/* side div1 */}
      <div className="absolute top-[3%] left-[45%] xl:left-[50%] w-[420px] lg:w-[480px] xl:w-[520px] h-[220px] lg:h-[260px] xl:h-[280px] rounded-3xl bg-[#050E21] px-[40px]"></div>
      <div className="absolute top-[calc(3%+20px)] left-[calc(45%+20px)] xl:left-[calc(50%+20px)] w-[380px] lg:w-[440px] xl:w-[480px] h-[180px] lg:h-[220px] xl:h-[240px] rounded-3xl bg-border-gradient1"></div>
      <div className="absolute top-[calc(3%+21px)] left-[calc(45%+21px)] xl:left-[calc(50%+21px)] w-[378px] lg:w-[438px] xl:w-[478px] h-[178px] lg:h-[218px] xl:h-[238px] rounded-3xl bg-[#050e21] flex flex-col justify-between py-5 px-7">
        <div className="flex items-center relative gap-5">
          <Image
            src={prize}
            alt=""
            className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] xl:w-[70px] xl:h-[70px]"
          ></Image>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg lg:text-xl xl:text-2xl font-medium tracking-wider">
              Subscribe to Proven Signal Providers
            </h1>
            <div className="w-[100px] h-[1.5px] bg-[#AF85E3]"></div>
          </div>
        </div>
        <p className="font-normal text-xs xl:text-sm tracking-wider pb-4">
          Follow top-performing X accounts whose strategies are converted into
          real, actionable signals — not just opinions or sentiment. Each
          account is ranked by backtested performance and on-chain proof.
        </p>
        {/* <div className="bg-gradient-to-br from-[#4F4F4F] via-[#AF85E3] to-[#4F4F4F] rounded-[15px] p-[1px] flex items-center justify-center overflow-hidden w-max">
          <button className="bg-[#050e21] font-light text-xs xl:text-sm flex items-center justify-center gap-2 hover:gap-4 rounded-[14px] px-4 py-[6px] tracking-wider">
            Start Now <FaArrowRightLong className="text-xs mt-[1.5px]" />
          </button>
        </div> */}
      </div>
      {/* side div2 */}
      <div className="absolute top-[calc(50%-140px)] left-[49%] xl:left-[55%] w-[420px] lg:w-[480px] xl:w-[520px] h-[220px] lg:h-[260px] xl:h-[280px] rounded-2xl bg-[#050E21]"></div>
      <div className="absolute top-[calc(50%-120px)] left-[calc(49%+20px)] xl:left-[calc(55%+20px)] w-[380px] lg:w-[440px] xl:w-[480px] h-[180px] lg:h-[220px] xl:h-[240px] rounded-3xl bg-border-gradient2"></div>
      <div className="absolute top-[calc(50%-119px)] left-[calc(49%+21px)] xl:left-[calc(55%+21px)] w-[378px] lg:w-[438px] xl:w-[478px] h-[178px] lg:h-[218px] xl:h-[238px] rounded-3xl bg-[#050e21] flex flex-col justify-between py-5 px-7">
        <div className="flex items-center relative gap-5">
          <Image
            src={send}
            alt=""
            className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] xl:w-[70px] xl:h-[70px]"
          ></Image>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg lg:text-xl xl:text-2xl font-medium tracking-wider">
              Get Clean, Actionable Signals on Telegram
            </h1>
            <div className="w-[100px] h-[1.5px] bg-[#6FF2F2]"></div>
          </div>
        </div>
        <p className="font-normal text-xs xl:text-sm tracking-wider pb-4">
          Once subscribed, receive structured, market-tested signals right in
          Telegram. No noise, no clutter — just high-quality signals derived
          from the logic of traders you trust.
        </p>
        {/* <div className="bg-gradient-to-br from-[#4F4F4F] via-[#6FF2F2] to-[#4F4F4F] rounded-[15px] p-[1px] flex items-center justify-center overflow-hidden w-max">
          <button className="bg-[#050e21] font-light text-xs xl:text-sm flex items-center justify-center gap-2 hover:gap-4 rounded-[14px] px-4 py-[6px] tracking-wider">
            Start Now <FaArrowRightLong className="text-xs mt-[1.5px]" />
          </button>
        </div> */}
      </div>
      {/* side div3 */}
      <div className="absolute top-[calc(97%-280px)] left-[45%] xl:left-[50%] w-[420px] lg:w-[480px] xl:w-[520px] h-[220px] lg:h-[260px] xl:h-[280px] rounded-2xl bg-[#050E21]"></div>
      <div className="absolute top-[calc(97%-260px)] left-[calc(45%+20px)] xl:left-[calc(50%+20px)] w-[380px] lg:w-[440px] xl:w-[480px] h-[180px] lg:h-[220px] xl:h-[240px] rounded-3xl bg-border-gradient3"></div>
      <div className="absolute top-[calc(97%-259px)] left-[calc(45%+21px)] xl:left-[calc(50%+21px)] w-[378px] lg:w-[438px] xl:w-[478px] h-[178px] lg:h-[218px] xl:h-[238px] rounded-3xl bg-[#050e21] flex flex-col justify-between py-5 px-7">
        <div className="flex items-center relative gap-5">
          <Image
            src={wallet}
            alt=""
            className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] xl:w-[70px] xl:h-[70px]"
          ></Image>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg lg:text-xl xl:text-2xl font-medium tracking-wider">
              Built for Trust, Driven by Performance
            </h1>
            <div className="w-[100px] h-[1.5px] bg-[#68E099]"></div>
          </div>
        </div>
        <p className="font-normal text-xs xl:text-sm tracking-wider pb-4">
          All signals are reasonably backtested, benchmarked, and stored
          immutably on-chain. Creators earn up to 100% of subscription revenue
          based on actual results — aligning trust and incentives.
        </p>
        {/* <div className="bg-gradient-to-br from-[#4F4F4F] via-[#68E099] to-[#4F4F4F] rounded-[15px] p-[1px] flex items-center justify-center overflow-hidden w-max">
          <button className="bg-[#050e21] font-light text-xs xl:text-sm flex items-center justify-center gap-2 hover:gap-4 rounded-[14px] px-4 py-[6px] tracking-wider">
            Start Now <FaArrowRightLong className="text-xs mt-[1.5px]" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default UseCaseConnector;
