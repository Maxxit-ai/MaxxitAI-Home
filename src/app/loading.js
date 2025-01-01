import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="100%"
          height="100%"
          src="https://embed.figma.com/proto/NDjX9V8pYFOL3SPal0Orvx/Smart-Disperse-Redesign?node-id=2-446&node-type=frame&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A446&show-proto-sidebar=1&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
