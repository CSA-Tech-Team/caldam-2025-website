import React from "react";
import coordinators from "@/constants/Coordinators.json";
function Coordinators() {
  return (
    <div>
      <h1 className=" px-10 py-5 text-3xl font-bold text-bluecolor lg:text-4xl ">
        COORDINATORS
      </h1>
      <div className=" grid grid-cols-4  gap-5 px-6 py-4 text-white max-lg:grid-cols-2 max-md:grid-cols-1 ">
        {coordinators.map((coordinator, index) => {
          return (
            <div
              key={index}
              className="  flex flex-col items-center justify-center space-y-5 rounded-lg bg-bluecolor py-4 "
            >
              <div className=" h-24 w-24 rounded-full bg-gray-300 " />
              <h1 className=" text-lg lg:text-2xl ">{coordinator.name}</h1>
              <h1 className=" text-md lg:text-xl ">{coordinator.institute}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Coordinators;
