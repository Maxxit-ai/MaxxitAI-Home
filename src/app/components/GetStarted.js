import React from "react";

const getstarted = [
    {
      
      heading: "Cross Chain",
      paragraph:
        "Unlocking Cross-Chain Transactions: Seamlessly Connect Blockchain",
      gradient: "bg-gradient-to-br from-[#ffffff00] via-[#ffffff00] to-[#AF85E3]",
    },
    {
      
      heading: "Same Chain",
      paragraph:
        "Streamlining Same-Chain Transactions: Enhancing Efficiency and Accessibility",
      gradient: "bg-gradient-to-br from-[#ffffff00] via-[#ffffff00] to-[#6FF2F2]",
    },
    {
      
      heading: "Documentation",
      paragraph:
        "Unraveling SmartDisperse: A Comprehensive Guide to Seamless Cross-Chain Communication",
      gradient: "bg-gradient-to-br from-[#ffffff00] via-[#ffffff00] to-[#8B94E2]",
    },
  ];

const GetStarted = () => {
  return (
    <div className="w-full relative">
      <div className="getstarted-background h-[800px] absolute top-0 z-10"></div>
      <div className="bg-gradient-to-b from-[#00061280] to-[#000612] w-full h-[800px] absolute top-[10%] left-0 z-20"></div>
      <h2 className="text-4xl font-medium tracking-wide text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent z-30">
        Get Started Now
      </h2>
      <div className="flex w-[85%] items-center justify-center gap-3 my-10 z-40">
          {getstarted.map((item, index) => (
            <div
              key={index}
              className={`${item.gradient} p-[1px] flex items-center justify-center rounded-2xl hover:shadow-[0px_0px_25px_6px_#FFFFFF26] hover:p-[0px] hover:translate-y-[-6px] transition-all duration-300`}
            >
              <div className="flex flex-col items-start rounded-2xl w-[320px] h-[500px] overflow-hidden bg-gradient-to-b from-[#00061266] to-[#000E28]">
                <div className="w-full h-[260px] flex items-center justify-center overflow-hidden">
                </div>
                <h1 className="font-medium text-lg tracking-wider px-8 py-8 text-left w-full">
                  {item.heading}
                </h1>
                <p className="text-sm tracking-wider px-8 text-left">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>

    </div>
  );
};

export default GetStarted;
