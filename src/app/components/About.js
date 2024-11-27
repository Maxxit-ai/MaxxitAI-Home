import React from "react";

const About = () => {
  return (
    <div className="backdrop-blur-[20px] bg-gradient-to-b from-[#00061266] to-[#000612] relative flex flex-col items-center">
      <div className="absolute top-[0px] left-[0px] w-[300px] h-[300px] bg-red"></div>

      <h2 className='text-4xl text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent'>About SmartDisperse</h2>
      <p className="my-6">
        SmartDisperse leverages CCIP to enhance cross-chain interoperability
      </p>
      <div className="flex">
        {/* Fast */}
        <div>
          <div className="mb-4">
            <img
              src="/fast-icon.png" // Replace with your actual image
              alt="Fast Icon"
              className="mx-auto w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Fast</h3>
          <p className="text-gray-400">
            Store preferred chains and tokens on the blockchain, reducing effort
            and ensuring beneficial, frequent token transfers.
          </p>
        </div>

        {/* Secure */}
        <div>
          <div className="mb-4">
            <img
              src="/secure-icon.png" // Replace with your actual image
              alt="Secure Icon"
              className="mx-auto w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
          <p className="text-gray-400">
            Built on CCIP, SmartDisperse inherits robust security features,
            ensuring comprehensive support and assistance in case of any issues.
          </p>
        </div>

        {/* User Friendly */}
        <div>
          <div className="mb-4">
            <img
              src="/user-friendly-icon.png" // Replace with your actual image
              alt="User-Friendly Icon"
              className="mx-auto w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            User Friendly
          </h3>
          <p className="text-gray-400">
            SmartDisperse prioritizes speed and efficiency by analyzing and
            selecting the best possible routes for your token transfers across
            chains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
