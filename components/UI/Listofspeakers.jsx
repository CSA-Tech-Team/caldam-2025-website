import React from "react";
import speakers from "@/constants/listof-speakers.json";
import { BiDownload } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";

function Speakers() {
    return (
        <div
        className=" px-6 py-4 "
        >
            <h1 className=" text-3xl lg:text-7xl px-4 py-6 text-bluecolor font-bold  ">LIST OF SPEAKERS</h1>
            <div className="grid grid-cols-3 pt-4 px-3 max-lg: max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 justify-center">
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="bg-orange w-full text-black pt-4 pl-5 flex items-start justify-start flex-col space-y-2 rounded-xl"
                    >
                        <div className="flex flex-row justify-center items-center space-x-2">
                            <h2 className="text-lg lg:text-3xl font-bold">
                                {speaker.name}
                            </h2>
                            <IoPersonCircleOutline className="size-8 lg:size-8" />
                        </div>

                        <div className="w-full flex justify-between items-end space-x-4">
                            <h2 className="text-md pb-4 lg:text-2xl">
                                {speaker.institute}
                            </h2>
                            <BiDownload className="text-white cursor-pointer w-full bg-bluecolor  max-lg:size-14 lg:size-16  p-4 rounded-br-xl rounded-tl-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Speakers;
