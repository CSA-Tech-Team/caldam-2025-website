import React from "react";
import Coordinators from "@/constants/Coordinators.json";

function Coordinator() {
  return (
    <div>
      <div>
        <div className="mb-4 pb-4 pl-10 pr-10 pt-10 text-4xl font-bold text-sky-950">
          REGISTRATION
        </div>
        <div className="pl-10  pr-10">
          There is no registration fee for the school. Arrangements will be made
          for all speakers and 35 selected participants to stay in PSG College
          of Technology, and they will be provided boarding and lodging free of
          cost. 3-tier Sleeper class train fare will be provided for selected
          participants subject to availability of funds. Online registration
          will end on November 01, 2024.
        </div>
        <div className="p-10">
          <button className=" text-md bg-navbg rounded-lg px-8 py-4 font-bold text-white lg:text-lg ">
            Register {"➚"}
          </button>
        </div>
      </div>
      <div>
        <h1 className="mb-4 pb-6 pl-10 pr-10 pt-10 text-3xl font-bold">
          COORDINATORS
        </h1>
        <div className="m-5 flex flex-wrap">
          {Coordinators.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-3xl p-4 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"
            >
              <div className="rounded-md bg-gray-200 p-6">
                <div className="mb-2 text-3xl font-semibold">{item.name}</div>
                <div className="text-1g">{item.institute}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="p-10 text-4xl font-bold text-sky-950">
          {`YOUNG RESEARCHER'S FORUM`}
        </div>
        <div className="pl-10 pr-10  pt-5">
          Young Researchers Forum (YRF 2024) is part of CALDAM Pre-Conference
          School and is the third in the series of CALDAM conferences. YRF is a
          unique opportunity as an open discussion session for ambitious young
          researchers to present a problem they are attempting to solve in the
          conference theme and to receive feedback from participating peers and
          eminent researchers. YRF provides a friendly environment for young
          researchers to foster research. An interactive session of this kind
          enables students, researchers, and teachers to engage in the exchange
          of knowledge, ideas, and research methods that benefit all
          participants of the Pre-Conference School. YRF will be taking place on
          Day 1 of CALDAM Pre-Conference School.
        </div>
        <div className="p-10 font-semibold text-black">
          All selected participants of the School are expected to do a short
          presentation for 5 minutes followed by a Question & Answer session for
          2 minutes.
        </div>
        <div className="pb-10 pl-10  pr-10 font-semibold text-black">
          Learn more
        </div>
      </div>
    </div>
  );
}
export default Coordinator;
