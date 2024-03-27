import React from "react";
import Acceptedpaper from "@/constants/AcceptedPapers.json";
import Card from './Cards.jsx'
function Acceptedpapers(){
    return(
        <div className="pb-10">
            <div className="flex justify-start">
                <div className="text-black text-3xl font-bold px-3 py-4 ">
                    <i>ACCEPTED PAPERS</i>
                    <div className="border-b-2 border-yellow-500 w-full"></div>
                </div>
            </div>
            <div className=" px-10 lg:px-20 grid gap-5 grid-cols-2 max-md:grid-cols-1">
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
    )
}
export default Acceptedpapers;