import Image from "next/image";
import React from "react";
import logo from "../assets/images/logospin.svg";
import prize from "../assets/images/usecases svg/prize.svg";
import send from "../assets/images/usecases svg/send.svg";
import wallet from "../assets/images/usecases svg/wallet.svg";

import { FaArrowRightLong } from "react-icons/fa6";

const MobileUseCaseConnector = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-between gap-10">
      {/* curves */}
      <div className="absolute top-[9%] left-[3%] w-[50px] h-[50px] border-[3px] border-[#9c9c9c6b] rounded-xl rounded-r-none rounded-e-none rounded-b-none border-b-0 border-r-0 z-10"></div>
      <div className="absolute top-[9%] left-[3%] w-[50px] h-[50px] border-[3px] border-transparent rounded-xl rounded-r-none rounded-e-none rounded-b-none border-b-0 border-r-0 z-10 curve-m1"></div>

      <div className="absolute top-[9%] right-[3%] w-[50px] h-[50px] border-[3px] border-[#9c9c9c6b] rounded-xl rounded-l-none rounded-s-none rounded-b-none border-b-0 border-l-0 z-10"></div>
      <div className="absolute top-[9%] right-[3%] w-[50px] h-[50px] border-[3px] border-transparent rounded-xl rounded-l-none rounded-s-none rounded-b-none border-b-0 border-l-0 z-10 curve-m2"></div>

      <div className="absolute bottom-[11%] left-[3%] w-[50px] h-[50px] border-[3px] border-[#9c9c9c6b] rounded-xl rounded-r-none rounded-e-none rounded-t-none border-t-0 border-r-0 z-10"></div>
      <div className="absolute bottom-[11%] left-[3%] w-[50px] h-[50px] border-[3px] border-transparent rounded-xl rounded-r-none rounded-e-none rounded-t-none border-t-0 border-r-0 z-10 curve-m3"></div>

      <div className="absolute bottom-[11%] right-[3%] w-[50px] h-[50px] border-[3px] border-[#9c9c9c6b] rounded-xl rounded-l-none rounded-s-none rounded-t-none border-t-0 border-l-0 z-10"></div>
      <div className="absolute bottom-[11%] right-[3%] w-[50px] h-[50px] border-[3px] border-transparent rounded-xl rounded-l-none rounded-s-none rounded-t-none border-t-0 border-l-0 z-10 curve-m4"></div>


      {/* lines */}
      <div className=" absolute left-[3%] top-[calc(9%+50px)] w-[2.3px] h-[71%] bg-[#9c9c9c6b] z-10"></div>
      <div className=" absolute left-[3%] top-[calc(9%+50px)] w-[2.3px] h-[60px] z-10 flow-m-lttob"></div>

      <div className=" absolute right-[3%] top-[calc(9%+50px)] w-[2.3px] h-[71%] bg-[#9c9c9c6b]"></div>
      <div className=" absolute right-[3%] top-[calc(9%+50px)] w-[2.3px] h-[60px] flow-m-lttob"></div>

      
      <div className=" absolute right-[calc(50%+90px)] top-[9%] w-[10%] 3xs:w-[17%] xs:w-[24%] sm:w-[28.5%] md:w-[31%] h-[2.3px] bg-[#9c9c9c6b] z-10"></div>
      <div className=" absolute right-[calc(50%+90px)] top-[9%] w-[60px] h-[2.3px] z-10 flow-m-rtol"></div>

      <div className=" absolute left-[calc(50%+90px)] top-[9%] w-[10%] 3xs:w-[17%] xs:w-[24%] sm:w-[28.5%] md:w-[31%] h-[2.3px] bg-[#9c9c9c6b]"></div>
      <div className=" absolute left-[calc(50%+90px)] top-[9%] w-[60px] h-[2.3px] flow-m-ltor"></div>
      
      <div className=" absolute left-[3%] top-[32.8%] w-[15%] h-[2.3px] bg-[#9c9c9c6b] z-10"></div>
      <div className=" absolute left-[3%] top-[32.8%] w-[60px] h-[2.3px] z-10 m1"></div>

      <div className=" absolute right-[3%] top-[32.8%] w-[15%] h-[2.3px] bg-[#9c9c9c6b] z-10"></div>
      <div className=" absolute right-[3%] top-[32.8%] w-[60px] h-[2.3px] z-10 m2"></div>

      <div className=" absolute left-[3%] top-[60.8%] w-[15%] h-[2.3px] bg-[#9c9c9c6b] z-10"></div>
      <div className=" absolute left-[3%] top-[60.8%] w-[60px] h-[2.3px] z-10 m3"></div>

      <div className=" absolute right-[3%] top-[60.8%] w-[15%] h-[2.3px] bg-[#9c9c9c6b] z-10"></div>
      <div className=" absolute right-[3%] top-[60.8%] w-[60px] h-[2.3px] z-10 m4"></div>


      <div className=" absolute left-[calc(3%+50px)] top-[88.8%] w-[15%] h-[2.3px] bg-[#9c9c9c6b] z-10"></div>
      <div className=" absolute left-[calc(3%+50px)] top-[88.8%] w-[60px] h-[2.3px] z-10 flow-m-bltor"></div>

      <div className=" absolute right-[calc(3%+50px)] top-[88.8%] w-[15%] h-[2.3px] bg-[#9c9c9c6b] z-10"></div>
      <div className=" absolute right-[calc(3%+50px)] top-[88.8%] w-[60px] h-[2.3px] z-10 flow-m-brtol"></div>

      {/* holders */}
      <div className="absolute top-[calc(32%)] left-[13.2%] sm:left-[calc(16%)] md:left-[calc(16.2%)] w-[10px] h-[20px] overflow-hidden z-30">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>
      <div className="absolute top-[calc(32%)] right-[13.2%] sm:right-[calc(16%)] md:right-[calc(16.2%)] w-[10px] h-[20px] overflow-hidden z-30 rotate-180">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>

      <div className="absolute top-[calc(60%)] left-[13.2%] sm:left-[calc(16%)] md:left-[calc(16.2%)] w-[10px] h-[20px] overflow-hidden z-30">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>
      <div className="absolute top-[calc(60%)] right-[13.2%] sm:right-[calc(16%)] md:right-[calc(16.2%)] w-[10px] h-[20px] overflow-hidden z-30 rotate-180">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>

      <div className="absolute top-[calc(88%)] left-[13.2%] sm:left-[calc(16%)] md:left-[calc(16.2%)] w-[10px] h-[20px] overflow-hidden z-30">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>
      <div className="absolute top-[calc(88%)] right-[13.2%] sm:right-[calc(16%)] md:right-[calc(16.2%)] w-[10px] h-[20px] overflow-hidden z-30 rotate-180">
        <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>

      {/* circle on left side */}
      <div className="relative w-[180px] h-[180px] overflow-hidden z-50">
        <div className="absolute top-0 left-0 w-[180px] h-[180px] rounded-full bg-[#68E09978] border border-[#DFDFDF] shadow-[inset_0px_0px_48.59px_0.91px_#FFFFFFB2] opacity-50"></div>
        <div className="absolute top-[30px] left-[30px] w-[120px] h-[120px] rounded-full bg-[#AF85E378] border border-[#DFDFDF] shadow-[inset_0px_0px_22.03px_4.53px_#FFFFFFB2] opacity-70"></div>
        <div className="absolute top-[60px] left-[60px] w-[60px] h-[60px] rounded-full bg-[#8B94E2] border border-[#FFFFFF] shadow-[inset_0px_4.53px_21.85px_6.35px_#FFFFFF80] opacity-90"></div>
        <div className="absolute top-[70px] left-[70px] w-[40px] h-[40px] overflow-hidden">
          <Image src={logo} alt="" width={60} height={60}></Image>
        </div>
      </div>

      {/* side div1 */}
      <div className="w-[70%] sm:w-[65%] h-[200px] xs:h-[250px] sm:h-[270px] rounded-2xl bg-[#050E21] flex items-center justify-center mx-auto p-[15px] z-50">
        <div className="w-full h-full rounded-3xl bg-border-gradient1 flex items-center justify-center p-[2px] mx-auto">
          <div className="w-full h-full rounded-3xl bg-[#050e21] flex flex-col justify-between py-5 px-5">
            <div className="flex items-center relative gap-2">
              <Image
                src={prize}
                alt=""
                className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
              ></Image>
              <div className="flex flex-col gap-1">
                <h1 className="text-[10px] xs:text-sm sm:text-base font-medium tracking-wider">
                  Dispersing Prize
                </h1>
                <div className="w-[80px] xs:w-[100px] h-[1.5px] bg-[#AF85E3]"></div>
              </div>
            </div>
            <p className="font-normal text-[8px] xs:text-xs tracking-wider">
              SmartDisperse distributes prizes to multiple addresses in
              preferred tokens, swapping if necessary, saving both time and
              fees.
            </p>
            <div className="bg-gradient-to-br from-[#4F4F4F] via-[#AF85E3] to-[#4F4F4F] rounded-[15px] p-[1px] flex items-center justify-center overflow-hidden w-max">
              <button className="bg-[#050e21] font-light text-[8px] xs:text-xs flex items-center justify-center gap-2 hover:gap-4 rounded-[14px] px-4 py-[6px] tracking-wider">
                Start Now{" "}
                <FaArrowRightLong className="text-[8px] xs:text-xs mt-[1.5px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* side div2 */}
      <div className="w-[70%] sm:w-[65%] h-[200px] xs:h-[250px] sm:h-[270px] rounded-2xl bg-[#050E21] flex items-center justify-center mx-auto p-[15px] z-50">
        <div className="w-full h-full rounded-3xl bg-border-gradient2 flex items-center justify-center mx-auto p-[2px]">
          <div className="w-full h-full rounded-3xl bg-[#050e21] flex flex-col justify-between py-5 px-5">
            <div className="flex items-center relative gap-2">
              <Image
                src={send}
                alt=""
                className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px]"
              ></Image>
              <div className="flex flex-col gap-1">
                <h1 className="text-[10px] xs:text-sm sm:text-base font-medium tracking-wider">
                  Sending Gas
                </h1>
                <div className="w-[80px] xs:w-[100px] h-[1.5px] bg-[#6FF2F2]"></div>
              </div>
            </div>
            <p className="font-normal text-[8px] xs:text-xs tracking-wider">
              If an address lacks gas for ERC-20 tokens, SmartDisperse ensures
              gas availability from another chain, enabling smooth transactions.
            </p>
            <div className="bg-gradient-to-br from-[#4F4F4F] via-[#6FF2F2] to-[#4F4F4F] rounded-[15px] p-[1px] flex items-center justify-center overflow-hidden w-max">
              <button className="bg-[#050e21] font-light text-[8px] xs:text-xs flex items-center justify-center gap-2 hover:gap-4 rounded-[14px] px-4 py-[6px] tracking-wider">
                Start Now{" "}
                <FaArrowRightLong className="text-[8px] xs:text-xs mt-[1.5px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* side div3 */}
      <div className="w-[70%] sm:w-[65%] h-[200px] xs:h-[250px] sm:h-[270px] rounded-2xl bg-[#050E21] flex items-center justify-center mx-auto p-[15px] z-50">
        <div className="w-full h-full rounded-3xl bg-border-gradient3 flex items-center justify-center mx-auto p-[2px]">
          <div className="w-full h-full rounded-3xl bg-[#050e21] flex flex-col justify-between py-5 px-5">
            <div className="flex items-center relative gap-2">
              <Image
                src={wallet}
                alt=""
                className="w-[30px] xs:w-[40px] h-[30px] xs:h-[40px]"
              ></Image>
              <div className="flex flex-col gap-1">
                <h1 className="text-[10px] xs:text-sm sm:text-base font-medium tracking-wider">
                  Multi-Wallet Transfers
                </h1>
                <div className="w-[80px] xs:w-[100px] h-[1.5px] bg-[#68E099]"></div>
              </div>
            </div>
            <p className="font-normal text-[8px] xs:text-xs tracking-wider">
              Send funds to multiple wallets at once, streamlining transactions
              and efficiently catering to diverse use cases.
            </p>
            <div className="bg-gradient-to-br from-[#4F4F4F] via-[#68E099] to-[#4F4F4F] rounded-[15px] p-[1px] flex items-center justify-center overflow-hidden w-max">
              <button className="bg-[#050e21] font-light text-[8px] xs:text-xs flex items-center justify-center gap-2 hover:gap-4 rounded-[14px] px-4 py-[6px] tracking-wider">
                Start Now{" "}
                <FaArrowRightLong className="text-[8px] xs:text-xs mt-[1.5px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileUseCaseConnector;
