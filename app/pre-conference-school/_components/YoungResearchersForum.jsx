import TextContraction from "@/components/Home/components/TextContraction";
import Link from "next/link";
import React from "react";

export default function YoungResearchersForum() {
  return (
    <div className=" space-y-4 bg-bluecolor px-12 py-10 text-white  ">
      <h1 className="text-3xl font-bold uppercase xl:text-3xl 2xl:text-4xl ">
        Young Researcher&apos; Forum{" "}
      </h1>
      <p className=" max-lg:hidden lg:text-lg ">
        Young Researchers Forum (YRF 2025) is part of CALDAM Pre-Conference
        School and is the fourth in the series of CALDAM conferences. YRF is a
        unique opportunity as an open discussion session for ambitious young
        researchers to present a problem they are attempting to solve in the
        conference theme and to receive feedback from participating peers and
        eminent researchers. YRF provides a friendly environment for young
        researchers to foster research. An interactive session of this kind
        enables students, researchers, and teachers to engage in the exchange of
        knowledge, ideas, and research methods that benefit all participants of
        the Pre-Conference School. YRF will be taking place on Day 1 (10th Feb,
        2025) of CALDAM Pre-Conference School.
      </p>
      <TextContraction
        className={` lg:hidden  `}
        contentStart={`Young Researchers Forum (YRF 2025) is part of CALDAM Pre-Conference
      School and is the fourth in the series of CALDAM conferences. YRF is a
      unique opportunity as an open discussion session for ambitious young
      researchers to present a problem they are attempting to solve in the
      conference theme and to receive feedback from participating peers and
      eminent researchers.`}
        contentRemaining={`YRF provides a friendly environment for young
      researchers to foster research. An interactive session of this kind
      enables students, researchers, and teachers to engage in the exchange of
      knowledge, ideas, and research methods that benefit all participants of
      the Pre-Conference School. YRF will be taking place on Day 1 (10th Feb,2025) of CALDAM
      Pre-Conference School.`}
      />
      <p className=" text-lg font-semibold ">
        All selected participants of the School are expected to do a short
        presentation for 5 minutes on any research topic related to CALDAM theme
        based on his/her interest.
      </p>
      <button className="rounded-2xl bg-[#FCA311] px-5  py-3 font-semibold text-black  ">
        <Link href={"/pre-conference-school/young-researchers-forum"} prefetch>
          Learn More
        </Link>
      </button>
    </div>
  );
}
