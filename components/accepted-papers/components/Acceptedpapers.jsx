import React from "react";
import Acceptedpaper from "@/constants/Acceptedpapers.json";
import Card from "./Cards.jsx";
function Acceptedpapers() {
  return (
    <div className="pb-10">
      <div className="flex justify-start">
        <div className="px-3 py-4 text-3xl font-bold text-black ">
          <i>ACCEPTED PAPERS</i>
          <div className="w-full border-b-2 border-yellow-500"></div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-5 px-10 max-md:grid-cols-1 lg:px-20">
        {Acceptedpaper.map((item, index) => (
          <div key={index} className="w-full">
            <Card
              title={item.title}
              speakers={item.speakers}
              researchResourceLink={item.resourceLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Acceptedpapers;
