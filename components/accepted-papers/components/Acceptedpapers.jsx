import React from "react";
import Acceptedpaper from "@/constants/Acceptedpapers.json";
import PeopleCard from "@/components/shared/re-used/PeopleCard.jsx";

function Acceptedpapers() {
  return (
    <div className="pb-10">
      <div className="flex justify-start">
        <div className="px-3 py-4 text-3xl font-bold text-black ">
          <h1>ACCEPTED PAPERS</h1>
        </div>
      </div>
      {/* } <div className=" grid grid-cols-2 gap-5 px-10 max-md:grid-cols-1 lg:px-20">
        {Acceptedpaper.map((item, index) => (
          <div key={index} className="w-full">
            <PeopleCard
              institute={item.title}
              name={item.speakers.join(", ")}
              link={item.resourceLink}
            />
          </div>
        ))}
      </div> //use for prod */}
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-semibold">TBA</h1>
      </div>
    </div>
  );
}
export default Acceptedpapers;
