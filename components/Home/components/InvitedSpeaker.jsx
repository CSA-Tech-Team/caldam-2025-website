import React from "react";
import invitedspeakers from "@/constants/invited-speakers.json";
function InvitedSpeaker() {
    return (
        <div>
            <h1 className=" px-10 py-5 text-3xl lg:text-4xl font-bold text-bluecolor ">
                Invited Speaker
            </h1>
            <div className=" text-white grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 py-4 px-6 lg:px-40   ">
                {invitedspeakers.map((invitedSpeaker, index) => {
                    return (
                        <div
                            key={index}
                            className=" bg-bluecolor px-6 rounded-lg py-4 space-y-5 flex flex-col items-center justify-center "
                        >
                            <h1 className="text-lg lg:text-3xl font-bold">
                                {invitedSpeaker.name}
                            </h1>
                            <h1 className=" text-md lg:text-lg">{invitedSpeaker.collegeName}</h1>
                            <div className=" border w-full h-0.5 border-b-2 border-white " />
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
