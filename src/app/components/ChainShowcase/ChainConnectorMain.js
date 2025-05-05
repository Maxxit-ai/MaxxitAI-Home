import React from "react";
import ConnectorImage from "./ConnectorImage";

function ChainConnectorMain() {
  return (
    <div className="pt-20">
      <div className="image-background relative">
        <div className="absolute w-full flex items-center justify-center">
          <ConnectorImage />
        </div>
      </div>
    </div>
  );
}

export default ChainConnectorMain;
