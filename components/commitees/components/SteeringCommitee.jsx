import React from "react";
import steeringCommitee from "@/constants/steeringCommitee.json";
import Card from "@/components/accepted-papers/components/Cards";

export default function SteeringCommitee() {
    return (
        <div>
            <div className=" px-5 py-6 ">
                <i className=" font-bold text-2xl max-lg:text-3xl lg:text-5xl ">
                    Steering Committee
                </i>
                <div className=" border-b-2 border-yellow-300 lg:w-1/3 max-lg:w-1/2 border-[5px]" />
            </div>
            <div className=" px-10  grid gap-4 lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                {steeringCommitee.map((steeringCommitee, index) => (
                    <div
                        key={index}
                        className="max-lg:col-span-1 max-md:col-span-1"
                    >
                        <Card
                            title={steeringCommitee.collegeName}
                            speakers={steeringCommitee.name}
                            researchResourceLink={""}
                        />
                    </div>
                ))}
            </div>
            <div className="px-5 py-6   ">
                <i className=" font-bold text-2xl max-lg:text-3xl lg:text-5xl ">
                    Program Committee{" "}
                </i>
                <div className=" border-b-2 border-yellow-300 lg:w-1/3 max-lg:w-1/2 border-[5px]" />
            </div>
        </div>
    );
}
