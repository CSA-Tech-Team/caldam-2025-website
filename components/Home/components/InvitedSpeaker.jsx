import React from "react";
import invitedspeakers from "@/constants/invited-speakers.json";

function InvitedSpeaker() {
  return (
    <div className="bg-bluecolor p-8 lg:p-14">
      <h1 className="text-4xl font-bold text-white uppercase mb-10">
        Invited Speaker
      </h1>
      <div className="text-white grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        {invitedspeakers.map((invitedSpeaker, index) => {
          return (
            <div
              key={index}
              className="bg-white px-6 rounded-lg py-6 space-y-5 flex flex-col items-center justify-center text-black"
            >
              <h1 className="text-2xl lg:text-3xl font-bold">
                {invitedSpeaker.name}
              </h1>
              <h1 className=" text-md lg:text-lg">
                {invitedSpeaker.collegeName}
              </h1>
              <div className=" border w-full h-0.5 border-b-2 border-black " />
              <h1 className="text-lg lg:text-2xl">
                Topic:{invitedSpeaker.topic}
              </h1>
              <button className=" bg-orange rounded-md text-black font-semibold px-8 py-3 ">
                Go to Slides {"> >"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InvitedSpeaker;
