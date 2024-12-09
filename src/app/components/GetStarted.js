import React from "react";

const getstarted = [
  {
    heading: "Cross Chain",
    paragraph:
      "Unlocking Cross-Chain Transactions: Seamlessly Connect Blockchain",
    gradient: "bg-gradient-to-br from-[#6FF2F2] via-[#6FF2F200] to-[#6FF2F2]",
    lineGradient: "bg-gradient-to-r from-[#040C1D] via-[#6FF2F2] to-[#030C1D]"
  },
  {
    heading: "Same Chain",
    paragraph:
      "Streamlining Same-Chain Transactions: Enhancing Efficiency and Accessibility",
    gradient: "bg-gradient-to-br from-[#AF85E3] via-[#60497D00] to-[#AF85E3]",
    lineGradient: "bg-gradient-to-r from-[#040C1D] via-[#AF85E3] to-[#030C1D]"
  },
  {
    heading: "Documentation",
    paragraph:
      "Unraveling SmartDisperse: A Comprehensive Guide to Seamless Cross-Chain Communication",
    gradient: "bg-gradient-to-br from-[#68E099] via-[#68E09900] to-[#68E099]",
    lineGradient: "bg-gradient-to-r from-[#040C1D] via-[#68E099] to-[#030C1D]"
  },
];

const GetStarted = () => {
  return (
    <div className="w-full relative">
      <div className="getstarted-background h-[600px] absolute top-0 z-10"></div>
      <div className="bg-gradient-to-b from-[#00061280] to-[#000612] w-full h-[600px] absolute top-[10%] left-0 z-20"></div>
      <h2 className="text-4xl font-medium tracking-wide my-5 text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent relative z-30">
        Get Started Now
      </h2>
      <div className="flex w-[85%] items-center justify-center gap-3 my-16 mx-auto z-30 relative">
        {getstarted.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl w-[350px] h-[370px] overflow-hidden bg-gradient-to-b bg-[#050E21] p-4 flex items-center justify-center"
          >
            <div className={`w-full h-full rounded-2xl ${item.gradient} p-[0.8px] flex items-center justify-center`}>
              <div className="w-full h-full rounded-2xl bg-[#050E21] p-6 flex flex-col items-center justify-center">
                <h1 className="font-medium text-[30px] text-wrap tracking-wide text-left w-full my-5">
                  {item.heading}
                </h1>
                <div className={`w-full h-[1.3px] ${item.lineGradient} my-7`}></div>
                <p className="text-md tracking-wider text-left my-5">
                  {item.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
