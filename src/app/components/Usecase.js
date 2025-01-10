import React from "react";
import UseCaseConnector from "./UseCaseConnector";
import MobileUseCaseConnector from "./MobileUseCaseConnector";

const Usecase = () => {
  return (
    <div className="my-7 w-full h-max flex flex-col items-center justify-center overflow-hidden relative">
      <h2 className="text-[50px] font-medium tracking-wide text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent">
        Usecases
      </h2>

      <div className="md:flex hidden w-full my-10 z-30">
        <UseCaseConnector />
      </div>

      <div className="flex md:hidden w-full my-10 z-30">
        <MobileUseCaseConnector />
      </div>
      <div className="bg-gradient-to-b from-[#00061280] to-[#000612] w-full h-[800px] absolute top-[10%] left-0 z-20"></div>
      <div className="usecase-background mt-[250px] h-[1200px] absolute top-0 z-10"></div>
    </div>
  );
};

export default Usecase;
