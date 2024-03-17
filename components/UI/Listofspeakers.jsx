import React from "react";
import speakers from "@/constants/listof-speakers.json";
import Button from "@/components/shared/re-used/Button";

function Speakers() {
    return (
        <div className="grid grid-cols-4 py-4 px-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 justify-center">
            {speakers.map((item, index) => (
                <div
                    key={index}
                    className="bg-navbg text-white py-10 px-6 flex items-center justify-center flex-col space-y-4 rounded-lg"
                >
                    <h2 className="text-white text-lg lg:text-xl ">{item.name}</h2>
                    <h2 className="text-white  text-lg lg:text-xl">{item.institute}</h2>
                    <div
                    className=" w-full text-end "
                    >
                        <Button>Resource</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Speakers;
