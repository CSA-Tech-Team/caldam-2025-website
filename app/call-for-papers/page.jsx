import React from "react";
import importantDates from "@/constants/importantDates.json";
import LineImage from "@/public/line.svg";
import Image from "next/image";
import Linker from "@/components/shared/re-used/Linker";
import caldamTopics from "@/constants/caldamTopics.json";
export default function Page() {
  return (
    <div className="p-2 max-lg:pt-[2%] lg:pt-[9%] xl:pt-[7%] justify-center">
      <i className="lg:text-4xl max-lg:text-2xl font-extrabold xl:text-6xl">
        Call for Paper
      </i>
      <div className="p-10 w-full">
        <h1 className=" text-xl lg:text-2xl py-3 font-extrabold xl:text-4xl">
          Important Dates
        </h1>
        <ul className="flex flex-col w-full mx-auto space-y-5 ">
          {importantDates.map((importantDate, index) => {
            return (
              <li
                key={index}
                className="lg:w-1/2 mx-auto  max-lg:space-y-4 flex max-lg:flex-col lg:space-x-5 "
              >
                <p className="py-4 p-2 text-center hover:scale-105 active:scale-110 lg:w-1/2 shadow-md bg-bluecolor rounded-xl flex-1 text-white">
                  {importantDate.event}
                </p>
                <p className="py-4 p-2 lg:w-1/2 text-center hover:scale-105 active:scale-110 bg-yellow-400 font-semibold rounded-lg ">
                  {importantDate.lastDate}
                </p>
              </li>
            );
          })}
        </ul>
        <div className=" flex items-center space-x-6 py-5 ">
          <h1 className=" text-lg lg:text-xl font-bold ">
            Submit your papers at
          </h1>
          <Linker href={""}>Paper Submission {"➚"}</Linker>
        </div>
        <div className=" flex items-center space-x-6 py-5 ">
          <h1 className=" text-lg lg:text-xl font-bold ">
            For any query please contact the conference chair at
          </h1>
          <Linker href={""}>Conference Chair {"➚"}</Linker>
        </div>
        <div className="flex items-end py-5">
          <h1 className=" text-3xl lg:text-5xl font-bold">Scope</h1>
          <Image
            src={LineImage}
            alt="Line Image"
            className=" max-lg:hidden  "
          />
        </div>
        <p className=" text-2xl max-lg:text-lg ">
          CALDAM 2024 invites papers describing original research in the areas
          of design, analysis and experimental evaluation of algorithms and in
          discrete applied mathematics. An indicative list of sub-areas are
          given below. 
          <span className=" font-bold ">
            Papers must be typeset using LaTeX/LaTeX2e and may not exceed 12
            pages in LNCS style, including bibliographic references
          </span>
          . Further details may be included in a clearly marked appendix that
          will be read at the discretion of the program committee. Only
          electronic submission is allowed. Submitted papers must describe
          previously unpublished work and may not be submitted concurrently to
          another conference with refereed proceedings or to a refereed journal.
          Please find the guidelines for authors on{" "}
          <a
            target="_blank"
            href="https://www.springer.com/in"
            className=" hover:underline "
          >
            Springer
          </a>{" "}
          website.
        </p>
        <div className=" py-3 space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold">CALDAM TOPICS</h1>
          <div className="grid gap-5 lg:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {caldamTopics.map((caldamTopic, index) => (
              <div key={index} className="max-lg:col-span-1 max-md:col-span-1">
                <p className="p-5 bg-[#E5E5E5] hover:scale-110 active:scale-110 hover:bg-orange-500 active:bg-orange-500 rounded-2xl font-bold">
                  {caldamTopic}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-end py-3">
          <h1 className=" text-3xl lg:text-5xl font-bold">Proceedings</h1>
          <Image
            src={LineImage}
            alt="Line Image"
            className=" max-lg:hidden  "
          />
        </div>
        <p className=" py-2 text-2xl max-lg:text-lg ">
          As in earlier CALDAMs, the proceedings of accepted papers of CALDAM
          2024 will be published in the Lecture Notes in Computer Science by
          Springer. Also, selected papers of CALDAM 2024 are likely to be
          published in a special issue of Discrete Applied Mathematics (DAM)
          journal of Elsevier.
        </p>
      </div>
    </div>
  );
}
