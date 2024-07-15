import React from "react";
import invitedspeakers from "@/constants/invited-speakers.json";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
function InvitedSpeaker() {
  return (
    <div className="bg-bluecolor p-8 lg:p-14">
      <h1 className="mb-10 text-2xl lg:text-4xl font-bold uppercase text-white">
        Tentative List Of Invited Speakers
      </h1>
      {/* <div className="w-full flex justify-center items-center">
        <h2 className="text-2xl text-white font-semibold"> TBA </h2>
      </div> */}
      <div className="grid grid-cols-3 gap-5 text-white max-lg:grid-cols-2 max-md:grid-cols-1">
        {invitedspeakers.map((invitedSpeaker, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-5 rounded-lg bg-white px-6 py-6 text-black"
            >
              <Link href={invitedSpeaker.link} className="flex items-center justify-center" >
                <BiLink />
                <h1 className="text-2xl font-bold lg:text-3xl">
                  {invitedSpeaker.name}
                </h1>
              </Link>
              <h1 className=" text-lg lg:text-xl">
                {invitedSpeaker.collegeName}
              </h1>
              {/* <div className=" h-0.5 w-full border border-b-2 border-black " />
              <h1 className="text-lg lg:text-2xl">
                Topic:{invitedSpeaker.topic}
              </h1>
              // following single line comments are OPTIONAL!
              //  <button className=" rounded-md bg-orange px-8 py-3 font-semibold text-black ">
              //   Go to Slides {"> >"}
              // </button>  */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InvitedSpeaker;
