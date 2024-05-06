import React from "react";
import speakers from "@/constants/yrflistofspeakers.json";
import CardGrid from "@/components/commitees/components/CardGrid";
export default function ListOfSpeakers() {
  return (
    <>

      <div
      className=" px-10 lg:px-16  "
      >
        <h1
        className=" text-3xl lg:text-4xl 2xl:text-5xl py-6 italic font-bold "
        >
            List of Speakers
        </h1>
        <CardGrid data={speakers} darkVariant={true} />
      </div>
    </>
  );
}
