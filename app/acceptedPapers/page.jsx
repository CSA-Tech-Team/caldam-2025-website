import React from "react";
import acceptedPapers from "@/constants/accepted-papers.json";
import Card from "@/components/shared/re-used/Card";
import Proceedings from "@/components/UI/Proceedings";

export default function AcceptedPapers() {
    return (
        <div className="container mx-auto px-4">
            <Proceedings />
            <div className="my-8">
                <div className="flex justify-start">
                    <div className="text-black text-3xl font-bold pt-10 pb-4 px-3">
                        <i>Accepted Papers </i>
                        <div className="border-b-2 border-yellow-500 w-full"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 gap-10">
                    {acceptedPapers.map((acceptedPaper, index) => (
                        <div key={index}>
                            <Card
                                title={acceptedPaper.title}
                                speakers={acceptedPaper.speakers}
                                researchResourceLink={
                                    acceptedPaper.resourceLink
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
