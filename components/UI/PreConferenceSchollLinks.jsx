"use client";
import React from "react";
import preConfSchoolConstants from "@/constants/preSchoolConstants.json";
import linkIcon from "@/assets/link.svg";
import Image from "next/image";
import LineImage from "@/public/line.svg";

export default function UpdatesComponent() {
  return (
    <div className=" p-4 max-lg:py-12 flex z-30 relative  flex-col items-center justify-center">
      <div className="flex items-end py-3">
        <h1 className="text-5xl font-bold">UPDATES</h1>
        <Image src={LineImage} alt="Line Image" className=" max-xl:hidden  " />
      </div>
      <div className=" lg:w-[60%] max-lapsize:w-full max-lg:w-[70%]  space-y-5 lg:text-lg max-lg:text-md max-md:text-sm font-semibold  ">
        {preConfSchoolConstants.map((preConfSchool, index) => {
          return (
            <div
              className=" border border-black-300 py-4 px-2 hover:scale-110 active:scale-110 rounded-md flex shadow-md justify-evenly items-center"
              key={index}
              style={{ boxShadow: "0px 4px 4px 0px #FCA311" }}
            >
              <h1>{preConfSchool.preConferenceSchoolEventName}</h1>
              <Image
                src={linkIcon}
                alt="Link Icon"
                className="w-8 h-8 cursor-pointer"
                onClick={() => {
                  const anchorElement = document.createElement("a");
                  anchorElement.href = preConfSchool.navigateTo;
                  anchorElement.target = "_blank";
                  anchorElement.click();
                }}
              />{" "}
              <h1>{preConfSchool.StartDate}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
