import Link from "next/link";
import React from "react";
import { VscLinkExternal } from "react-icons/vsc";

export default function PeopleCard({
  name,
  institute,
  link,
  conferenceTitle,
  darkVariant = false,
}) {
  return (
    <div className="relative flex h-full flex-col justify-between space-y-8 rounded-lg bg-[#FCA311] p-5">
      <div>
        <div className="mb-4">
          <h1
            className={`text-2xl font-bold lg:text-3xl ${darkVariant ? "text-bluevariants-300" : "text-bluevariants-300"}`}
          >
            {name}
          </h1>
          {conferenceTitle && <p className="text-lg">{conferenceTitle}</p>}
        </div>
        <p className="text-lg lg:h-[100px] text-bluevariants-300 lg:text-xl">{institute}</p>
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
    </div>
  );
}
