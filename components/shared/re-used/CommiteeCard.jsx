import React from "react";

export default function CommiteeCard({ name, collegeName }) {
    return (
        <div className=" ">
            <div className=" flex items-center justify-center flex-col rounded-lg  bg-gradient-to-b from-[#FCA311] px-4 space-y-4 py-10  to-[#F2BE42] ">
                <h1 className=" text-xl lg:text-2xl font-semibold ">{name}</h1>
                <p className=" text-lg lg:text-xl ">{collegeName}</p>
            </div>
        </div>
    );
}
