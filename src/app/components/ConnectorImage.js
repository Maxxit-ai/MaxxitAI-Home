import React from "react";

const ConnectorImage = () => {
  return (
    <div className="relative bg-transparent w-full h-[500px] my-10">
      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
      >
        <line
          x1="calc(30% + 40px)"
          y1="calc(10% + 57px)"
          x2="calc(30% + 40px)"
          y2="calc(85%)"
          stroke="white"
          strokeWidth="2"
        />

        <line
          x1="calc(70% + 40px)"
          y1="calc(15% + 57px)"
          x2="calc(70% + 40px)"
          y2="calc(90%)"
          stroke="white"
          strokeWidth="2"
        />

        <line
          x1="calc(10% + 80px)"
          y1="calc(50% + 30px)"
          x2="calc(50%)"
          y2="calc(50% + 30px)"
          stroke="white"
          strokeWidth="2"
        />

        <line
          x1="calc(50% + 75px)"
          y1="calc(50% + 30px)"
          x2="calc(90%)"
          y2="calc(50% + 30px)"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute top-[10%] left-[30%] border border-white rounded p-4">
        icon1
      </div>
      <div className="absolute top-[15%] left-[70%] border border-white rounded p-4">
        icon2
      </div>
      <div className="absolute top-[50%] left-[10%] border border-white rounded p-4">
        icon3
      </div>

      <div className="absolute top-[50%] left-[50%] border border-white rounded p-4">
        logo
      </div>

      <div className="absolute top-[50%] left-[90%] border border-white rounded p-4">
        icon4
      </div>
      <div className="absolute top-[85%] left-[30%] border border-white rounded p-4">
        icon5
      </div>
      <div className="absolute top-[90%] left-[70%] border border-white rounded p-4">
        icon6
      </div>
    </div>
  );
};

export default ConnectorImage;
