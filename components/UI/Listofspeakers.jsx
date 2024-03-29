import React from "react";
import speakers from "@/constants/listof-speakers.json";
import { BiDownload } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";

function Speakers() {
  return (
    <div className=" px-6 py-4 ">
      <h1 className=" px-4 py-6 text-3xl font-bold text-bluecolor lg:text-7xl  ">
        LIST OF SPEAKERS
      </h1>
      <div className="max-lg: grid grid-cols-3 justify-center gap-5 px-3 pt-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-start justify-start space-y-2 rounded-xl bg-orange pl-5 pt-4 text-black"
          >
            <div className="flex flex-row items-center justify-center space-x-2">
              <h2 className="text-lg font-bold lg:text-3xl">{speaker.name}</h2>
              <IoPersonCircleOutline className="size-8 lg:size-8" />
            </div>

            <div className="flex w-full items-end justify-between space-x-4">
              <h2 className="text-md pb-4 lg:text-2xl">{speaker.institute}</h2>
              <BiDownload className="w-full cursor-pointer rounded-br-xl rounded-tl-xl  bg-bluecolor p-4  text-white max-lg:size-14 lg:size-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
