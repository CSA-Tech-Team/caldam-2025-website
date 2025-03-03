import React from "react";
import speakers from "@/constants/pre-conf-speakers.json";
import PeopleCard from "@/components/shared/re-used/PeopleCard";

export default function ListOfSpeakers() {
  return (
    <div className=" px-8 py-6 lg:px-12 ">
      <h1 className="text-xl font-bold uppercase max-lg:text-2xl lg:text-4xl ">
        Schedules and Abstracts
      </h1>
      <div className="my-10 text-center text-lg font-bold">TBA</div>
      <h1 className="text-xl font-bold uppercase max-lg:text-2xl lg:text-4xl ">
        Speakers
      </h1>
      <div className=" grid gap-4 px-4 py-10 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3 lg:px-10">
        {speakers.map((speaker, index) => (
          <div key={index} className="w-full">
            <PeopleCard
              institute={speaker.collegeName}
              name={speaker.name}
              link={speaker.link}
              slides={speaker.slideLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
