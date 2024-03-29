import React from "react";

export default function CommiteeCard({ name, collegeName }) {
  return (
    <div className=" ">
      <div className=" flex flex-col items-center justify-center space-y-4  rounded-lg bg-gradient-to-b from-[#FCA311] to-[#F2BE42] px-4  py-10 ">
        <h1 className=" text-xl font-semibold lg:text-2xl ">{name}</h1>
        <p className=" text-lg lg:text-xl ">{collegeName}</p>
      </div>
    </div>
  );
}
