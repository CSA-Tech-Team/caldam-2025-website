import React from "react";
import steeringCommitee from "@/constants/steeringCommitee.json";
import Card from "@/components/accepted-papers/components/Cards";

export default function SteeringCommitee() {
  return (
    <div>
      <div className=" px-5 py-6 ">
        <i className=" text-2xl font-bold max-lg:text-3xl lg:text-5xl ">
          Steering Committee
        </i>
        <div className=" border-[5px] border-b-2 border-yellow-300 max-lg:w-1/2 lg:w-1/3" />
      </div>
      <div className=" grid  gap-4 px-10 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3">
        {steeringCommitee.map((steeringCommitee, index) => (
          <div key={index} className="max-lg:col-span-1 max-md:col-span-1">
            <Card
              title={steeringCommitee.collegeName}
              speakers={steeringCommitee.name}
              researchResourceLink={""}
            />
          </div>
        ))}
      </div>
      <div className="px-5 py-6   ">
        <i className=" text-2xl font-bold max-lg:text-3xl lg:text-5xl ">
          Program Committee{" "}
        </i>
        <div className=" border-[5px] border-b-2 border-yellow-300 max-lg:w-1/2 lg:w-1/3" />
      </div>
    </div>
  );
}
