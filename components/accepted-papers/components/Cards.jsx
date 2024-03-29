import Link from "next/link";
import React from "react";
import { BiDownload } from "react-icons/bi";

export default function Card({ title, speakers, researchResourceLink }) {
  return (
    <div className=" flex flex-col space-y-8 rounded-lg  bg-[#FCA311] ">
      <h1 className=" px-4 pt-4 text-lg  font-bold lg:text-xl ">{speakers}</h1>
      <div className="flex  w-full items-end justify-between   ">
        <h1 className=" text-md px-4 pb-4 lg:text-lg ">{title}</h1>

        <Link prefetch href={researchResourceLink}>
          <BiDownload className=" size-10 rounded-br-lg rounded-tl-lg bg-bluecolor px-3 text-3xl text-white " />
        </Link>
      </div>
    </div>
  );
}
