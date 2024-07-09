"use client";

import React, { useState } from "react";

const OrgCommitee = ({ data }) => {
  const [tooltipContent1, settooltipContent1] = useState("");
  const [tooltipContent2, settooltipContent2] = useState("");

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleTooltip = (name, event) => {
    // Example tooltip content
    settooltipContent1(`Applied Mathematics and Computational Sciences,`);
    settooltipContent2(`PSG College of Technology`);
    setTooltipPosition({ x: event.pageX, y: event.pageY });
    setShowTooltip(true);
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl overflow-auto  max-lg:h-[50vh]">
        <ul className="mx-auto lg:my-10 grid grid-cols-1 gap-6 lg:border border-l-white border-r-white p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((d, i) => (
            <li key={i} className="relative">
              <button
                className="group relative flex h-20 w-full items-center justify-center rounded-2xl bg-orange text-center text-xl font-semibold text-bluecolor focus:outline-none"
                onMouseEnter={(e) => handleTooltip(d.name, e)}
                onMouseLeave={hideTooltip}
                onClick={(e) => handleTooltip(d.name, e)}
              >
                {d.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Tooltip */}
        {showTooltip && (
          <div
            className="absolute z-10 rounded-lg border bg-white p-4 shadow-lg"
            style={{ top: tooltipPosition.y + 10, left: tooltipPosition.x }}
          >
            <p className="text-bluecolor">{tooltipContent1}</p>
            <p className="text-bluecolor">{tooltipContent2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrgCommitee;
