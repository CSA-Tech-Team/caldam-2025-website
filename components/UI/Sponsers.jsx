import React from "react";
import SponsersOfCaldam from "@/constants/SponsersConstants.json";
import Image from "next/image";

export default function Sponsers() {
  return (
    <div className="p-4">
      <div className="mb-10">
        <h1 className="text-5xl font-bold">Sponsers</h1>
      </div>
      <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
        {SponsersOfCaldam.map((organizer, index) => (
          <div
            key={index}
            className="relative  h-48 overflow-hidden rounded-lg bg-sponsersBgColor sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          >
            <Image
              src={organizer.imageUrl || ""}
              alt={organizer.organizationName}
              className=" h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-center text-black">
                {organizer.organizationName}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
