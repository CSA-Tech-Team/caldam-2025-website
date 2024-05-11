import Image from "next/image";
import React from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
export default function AccomdationByPSG() {
  return (
    <div>
      <h2
      className=" text-xl lg:text-4xl font-semibold py-3 "
      >Accomodation At PSG College Of Technology</h2>
      <div className=" flex flex-col px-7 space-y-3 text-xl ">
        <p>
          PSG College Of Technology provides accomodation to all participants on campus, in student hostels. Food for breakfast, lunch
          and dinner can be availed at student dining halls at rates ₹43, ₹62 and ₹62 respectively.
        </p>
        <p>
          Speakers can accomdate at the PSG College of Technology Guest House which is located at
          5 minutes walking distance from the conference venue at the rate of
          ₹2500.
        </p>
      </div>
      <h3 className="pb-3 text-2xl lg:text-3xl font-semibold py-2 mt-4 ">Guest House Image</h3>
      <div
      className=" px-3 flex items-center justify-around"
      >
        <div className="mx-auto mb-4 flex w-[40%] items-center justify-center space-y-3 rounded-lg border border-black lg:ml-3 ">
          <div
            className="relative h-auto w-full max-w-full"
            style={{ height: "0", paddingBottom: "56.25%" }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={
                "https://imgs.search.brave.com/4SDIYqnEA4DtU2GpSKd1Y6HFY37dpSK7kN3Mr1llm4A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Y29pbWJhdG9yZS92/Mi8wNDIycHg0MjIu/eDQyMi4yMjAzMTAw/MTQ1MTguZzV2Mi9j/YXRhbG9ndWUvcHNn/LWl0ZWNoLWd1ZXN0/LWhvdXNlLW5lZWxh/bWJ1ci1jb2ltYmF0/b3JlLWd1ZXN0LWhv/dXNlLWUweXV3dTh4/dzAuanBnP2Nscj0j/MzkyZDM5P2ZpdD1h/cm91bmR8MjcwOjEz/MCZjcm9wPTI3MDox/MzA7Kiwq"
              }
              alt={"PSGCT guest house"}
            />
          </div>
          <div className="py-4 text-lg lg:text-2xl">
            <h2 className="font-bold text-center">Guest House</h2>
            <div className="mb-2">
              <Link
                className="flex items-center"
                target="_blank"
                prefetch
                href={
                  "https://imgs.search.brave.com/4SDIYqnEA4DtU2GpSKd1Y6HFY37dpSK7kN3Mr1llm4A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Y29pbWJhdG9yZS92/Mi8wNDIycHg0MjIu/eDQyMi4yMjAzMTAw/MTQ1MTguZzV2Mi9j/YXRhbG9ndWUvcHNn/LWl0ZWNoLWd1ZXN0/LWhvdXNlLW5lZWxh/bWJ1ci1jb2ltYmF0/b3JlLWd1ZXN0LWhv/dXNlLWUweXV3dTh4/dzAuanBnP2Nscj0j/MzkyZDM5P2ZpdD1h/cm91bmR8MjcwOjEz/MCZjcm9wPTI3MDox/MzA7Kiwq"
                }
              >
                {/*<GoLocation className="mr-1 lg:size-[4rem] " />*/}
                <span className="text-lg">0.1km from the Conference Venue</span>
              </Link>
            </div>
            <div
            className="text-center"
            >
            <span>Price:</span>
            <span className="mb-2">₹2500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
