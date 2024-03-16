import React from "react";
import acceptedPapers from "@/constants/accepted-papers.json";
import Card from "@/components/shared/re-used/Card";

export default function AcceptedPapers() {
    return (
        <div className="p-3 space-y-5 z-10 relative lg:pt-[9%] xl:pt-[7%]">
            <div>
                <h1 className="font-extrabold text-xl lg:text-4xl">
                    Proceedings
                </h1>
                <div className="lg:w-4/6 max-lg:w-2/3 mx-auto lg:h-[420px] max-lg:h-[300px] rounded-lg bg-gray-300 lg:top-[calc(8% + 356px)] lg:left-[calc(8% + 153px)] lg:w-[calc(84% + 1616px)] lg:h-[calc(84% + 420px)] xl:top-[calc(6% + 356px)] xl:left-[calc(6% + 153px)] xl:w-[calc(88% + 1616px)] xl:h-[calc(88% + 420px)]"></div>
            </div>
            <div
            className=" flex flex-col space-y-5 " 
            >
                <h1 className="font-extrabold text-xl lg:text-4xl">
                    Accepted Papers
                </h1>
                <div className="grid  gap-4 lg:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {acceptedPapers.map((acceptedPaper, index) => (
                        <div key={index} className="w-full">
                            <Card
                                title={acceptedPaper.title}
                                speakers={acceptedPaper.speakers}
                                researchResourceLink={acceptedPaper.resourceLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
