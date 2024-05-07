import React from "react";
import speakers from "@/constants/pre-conf-speakers.json";
import PeopleCard from "@/components/shared/re-used/PeopleCard";

export default function ListOfSpeakers() {
  return (
    <div className=" px-8 py-6 lg:px-12 ">
      <h1 className=" text-2xl font-bold max-lg:text-3xl lg:text-5xl ">
        Tentative List Of Speakers
      </h1>
      <div className=" grid gap-4 px-4 py-10 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3 lg:px-10">
        {speakers.map((speaker, index) => (
          <div key={index} className="w-full">
            <PeopleCard
              institute={speaker.collegeName}
              name={speaker.name}
              link={speaker.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
