import Link from "next/link";
import React from "react";
import { VscLinkExternal } from "react-icons/vsc";

export default function PeopleCard({
  name,
  institute,
  link,
  conferenceTitle,
  country,
  deptname,
  slides,
  darkVariant = false,
}) {
  return (
    <div className={`relative flex h-full flex-col justify-between space-y-8 rounded-lg bg-[#FCA311] p-5 `}>
      <div>
        <div className="mb-4">
          <h1
            className={`text-2xl font-bold lg:text-3xl ${darkVariant ? "text-bluevariants-300" : "text-bluevariants-300"}`}
          >
            {name}
          </h1>
          {conferenceTitle && <p className="text-lg font-semibold">{conferenceTitle}</p>}
        </div>
        {deptname && (
          <span
            className={` text-[16px] lg:font-semibold `}
          >{deptname},</span>
        )}
        <div className={`text-[16px]  ${!deptname && "text-lg"} text-bluevariants-300 lg:h-[65px] ${link && "lg:h-[100px]"} lg:font-semibold `}>
          {institute}{country?.length > 0 && <span>,</span>} <p>{country}</p>
        </div>
      </div>
      {link && (
        <div className="absolute bottom-0 right-0">
          <Link target="_blank" prefetch href={link}>
            <VscLinkExternal
              className={`size-10 rounded-br-lg rounded-tl-lg bg-bluecolor px-3 text-white`}
            />
          </Link>
        </div>
      )}
      {
        slides ? (
          <Link href={slides} target="_blank" >
            <button className="rounded-md bg-bluecolor px-8 py-3 font-semibold text-white ">
              Go to Slides {"> >"}</button>
          </Link>
        ) : ""
      }
    </div>
  );
}
