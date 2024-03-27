import Link from "next/link";
import React from "react";
import { BiDownload } from "react-icons/bi";

export default function Card({ title, speakers, researchResourceLink }) {
    return (
        <div className=" flex rounded-lg space-y-8 flex-col  bg-[#FCA311] ">
            <h1 className=" px-5 pt-4 font-bold  text-md lg:text-xl ">{speakers}</h1>
            <div className="flex  w-full justify-between items-end   ">
                <h1 className=" px-5 pb-4 text-md lg:text-lg ">{title}</h1>

                <Link prefetch href={researchResourceLink}>
                    <BiDownload className=" text-3xl bg-bluecolor text-white size-10 px-3 rounded-br-lg rounded-tl-lg " />
                </Link>
            </div>
        </div>
    );
}
