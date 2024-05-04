import React from "react";
import Linker from "./Linker";

export default function Card({ title, speakers, researchResourceLink }) {
  return (
    <div className=" flex h-full flex-col items-center justify-around space-y-6 rounded-xl bg-gradient-to-b from-[#FCA311] to-[#FFEBCB] p-6  text-black ">
      <h1 className=" text-xl font-bold max-lg:text-lg ">{title}</h1>
      <ul className=" max-lg:text-md text-lg ">
        {speakers.map((speaker, index) => {
          return <li key={index}
          className=" text-lg lg:text-xl "
          >{speaker}</li>;
        })}
      </ul>
      <Linker href={researchResourceLink}>Resources</Linker>
    </div>
  );
}
