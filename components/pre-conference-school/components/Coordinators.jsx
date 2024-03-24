import React from "react";
import coordinators from "@/constants/Coordinators.json";
function Coordinators() {
    return (
        <div>
            <h1
            className=" px-10 py-5 text-3xl lg:text-4xl font-bold text-bluecolor "
            >COORDINATORS</h1>
            <div className=" grid grid-cols-4  text-white max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 py-4 px-6 ">
                {coordinators.map((coordinator, index) => {
                    return (
                        <div key={index} className="  bg-bluecolor rounded-lg py-4 flex flex-col items-center justify-center space-y-5 ">
                            <div className=" bg-gray-300 rounded-full w-24 h-24 " />
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
