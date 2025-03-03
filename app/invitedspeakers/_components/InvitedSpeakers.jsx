import React from "react";
import invitedspeakers from "@/constants/invited-speakers.json";
import Link from "next/link";
import { BiLink } from "react-icons/bi";

function InvitedSpeaker() {
  return (
    <div className="bg-bluecolor p-8 lg:p-14">
      <h1 className="mb-10 text-2xl lg:text-4xl font-bold uppercase text-white">
        Invited Speakers
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-3 text-white">
        {invitedspeakers.map((invitedSpeaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-evenly space-y-3 rounded-lg bg-white p-6 text-black"
          >
            <Link href={invitedSpeaker.link} className="flex items-center space-x-2">
              <BiLink className="text-xl lg:text-2xl" />
              <h1 className="text-xl font-bold lg:text-2xl">
                {invitedSpeaker.name}
              </h1>
            </Link>
            <h1 className="text-lg lg:text-xl text-center">
              {invitedSpeaker.collegeName}
            </h1>
            {invitedSpeaker.topic ? (
              <div>
                <div className=" h-0.5 w-full border border-b-2 border-black mb-3 " />

                <h1 className="text-2xl lg:text-3xl font-bold text-headingColor">Title of Talk:</h1>
                <h1 className="p-3 text-xl font-semibold text-bluecolor ">{invitedSpeaker?.topic}</h1>
                <div className=" h-0.5 w-full border border-b-2 border-black " />
                {
                  invitedSpeaker?.slideLink ? (
                    <Link href={invitedSpeaker.slideLink} target="_blank" >
                      <button className=" mt-3 rounded-md bg-orange px-8 py-3 font-semibold text-black ">
                        Go to Slides {"> >"}</button>
                    </Link>
                  ) : ""
                }
              </div>
            ) : ""}
          </div>

        ))}
      </div>
    </div>
  );
}

export default InvitedSpeaker;


{/* <div className=" h-0.5 w-full border border-b-2 border-black " />
<h1 className="text-lg lg:text-2xl">
  Topic:{invitedSpeaker.topic}
</h1>
// following single line comments are OPTIONAL!
//  <button className=" rounded-md bg-orange px-8 py-3 font-semibold text-black ">
//   Go to Slides {"> >"}
// </button>  */}