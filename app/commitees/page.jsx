import React from "react";
import steeringCommitee from "@/constants/steeringCommitee.json";
import programCommmitee from "@/constants/programCommitee.json";
import CommiteeCard from "@/components/shared/re-used/CommiteeCard";
function Commitees() {
    return (
        <div className=" p-4 max-lg:pt-[2%] lg:pt-[8%] xl:pt-[10%]">
            <div className=" py-6 ">
                <i className=" font-bold text-2xl max-lg:text-3xl lg:text-5xl ">
                    Steering Committee
                </i>
                <div className=" border-b-2 border-yellow-300 lg:w-1/3 max-lg:w-1/2 border-[5px]" />
            </div>
            <div className="grid gap-4 lg:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                {steeringCommitee.map((steeringCommitee, index) => (
                    <div key={index} className="w-full">
                        <CommiteeCard
                            name={steeringCommitee.name}
                            collegeName={steeringCommitee.collegeName}
                        />
                    </div>
                ))}
            </div>
            <div className=" py-6 ">
                <i className=" font-bold text-2xl max-lg:text-3xl lg:text-5xl ">
                    Program Committee{" "}
                </i>
                <div className=" border-b-2 border-yellow-300 lg:w-1/3 max-lg:w-1/2 border-[5px]" />
            </div>
            <div className="grid gap-4 lg:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                {programCommmitee.map((programCommmitee, index) => (
                    <div key={index} className="w-full">
                        <CommiteeCard
                            name={programCommmitee.name}
                            collegeName={programCommmitee.collegeName}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Commitees;
