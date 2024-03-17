import React from "react";
import Linker from "./Linker";

export default function Card({ title, speakers, researchResourceLink }) {
    return (
        <div className=" rounded-xl space-y-6 p-6 h-full flex flex-col text-black justify-around items-center bg-gradient-to-b from-[#FCA311]  to-[#FFEBCB] ">
            <h1 className=" font-bold text-xl max-lg:text-lg ">{title}</h1>
            <ul className=" text-lg max-lg:text-md ">
                {speakers.map((speaker, index) => {
                    return <li key={index}>{speaker}</li>;
                })}
            </ul>
            <Linker href={researchResourceLink}>Resources</Linker>
        </div>
    );
}
