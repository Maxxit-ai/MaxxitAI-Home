import React from "react";
import ConnectorImage from "./ConnectorImage";

function ChainConnectorMain() {
  return (
    <div>
      <div className="image-background relative pb-12 sm:pb-16 md:pb-20 lg:pb-0">
        <div className="relative w-full flex items-center justify-center">
          <ConnectorImage />
        </div>
      </div>
    </div>
  );
}

export default ChainConnectorMain;
