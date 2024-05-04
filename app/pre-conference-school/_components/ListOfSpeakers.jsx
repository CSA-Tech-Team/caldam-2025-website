import React from "react";
import speakers from "@/constants/pre-conf-speakers.json";
import Card from "@/components/accepted-papers/components/Cards";

export default function ListOfSpeakers() {
  return (
    <div className=" px-12 py-6 ">
      <h1 className=" text-2xl font-bold max-lg:text-3xl lg:text-5xl ">
        List Of Speakers
      </h1>
      <div className=" grid gap-4 px-4 lg:px-10 py-10 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <div key={index} className="w-full">
            <Card
              title={speaker.collegeName}
              speakers={speaker.name}
              researchResourceLink={speaker.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
