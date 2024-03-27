import Link from "next/link";
import React from "react";
import { BiDownload } from "react-icons/bi";

export default function Card({ title, speakers, researchResourceLink }) {
    return (
        <div className=" flex rounded-lg flex-col  bg-[#FCA311] ">
            <div className=" py-3 lg:py-4 space-y-4 px-4 ">
                <h1 className=" font-semibold text-lg lg:text-xl ">
                    {speakers}
                </h1>
                <h1 className=" text-md lg:text-lg ">{title}</h1>
            </div>
            <div className=" flex w-full justify-end   ">
                <Link prefetch href={researchResourceLink}>
                    <BiDownload className=" text-3xl bg-bluecolor text-white size-10 px-3 rounded-br-lg rounded-tl-lg " />
                </Link>
            </div>
        </div>
    );
}
