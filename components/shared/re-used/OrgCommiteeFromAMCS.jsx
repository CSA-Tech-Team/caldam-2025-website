import Link from "next/link";
import React from "react";
import { VscLinkExternal } from "react-icons/vsc";

export default function OrgCommiteeFromAMCS({
  name,
  institute,
  link,
  conferenceTitle,
  country,
  deptname,
  position,
  darkVariant = false,
}) {
  return (
    <div
      className={` p-4 space-y-4 relative flex h-full flex-col justify-between  rounded-lg bg-[#FCA311]  `}
    >
      <div>
        <div className="">
          <h1
            className={`text-lg font-bold lg:text-[22px]  ${darkVariant ? "text-bluevariants-300" : "text-bluevariants-300"}`}
          >
            {name}
          </h1>
          {conferenceTitle && (
            <p className="text-[13px] font-semibold">{conferenceTitle}</p>
          )}
        </div>
        <p className=" text-lg lg:font-semibold ">
          {position}
          <span>{position ? "," : ""}</span>
        </p>
        {deptname && (
          <p className={` text-[14px] mt-3 lg:font-semibold `}>{deptname},</p>
        )}
        <div
          className={`text-[14px]  ${!deptname && "text-[14px]"} text-bluevariants-300 lg:h-[65px] ${link && "lg:h-[100px]"} lg:font-semibold `}
        >
          {institute}
          {country?.length > 0 && <span>,</span>} <p>{country}</p>
        </div>
      </div>
    </div>
  );
}
