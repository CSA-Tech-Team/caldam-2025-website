import React from "react";
import Acceptedpaper from "@/constants/AcceptedPapers.json";
import Card from './Cards.jsx'
function Acceptedpapers(){
    return(
        <div className="pb-10">
            <div className="flex justify-start">
                <div className="text-black text-3xl font-bold pt-10 pb-4 pl-10 pr-10">
                    ACCEPTED PAPERS
                    <div className="border-b-2 border-yellow-500 w-full"></div>
                </div>
            </div>
            <div className="pl-20 pr-20  grid gap-8 grid-cols-2  max-md:grid-cols-1">
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