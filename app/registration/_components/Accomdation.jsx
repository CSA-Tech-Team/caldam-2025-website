import React from "react";
import Hotels from "./Hotels";
import AccomdationNotes from "./AccomdationNotes";
import AccomdationByPSG from "./AccomdationByPSG";
import Link from "next/link";
import Image from "next/image";

export default function Accomdation() {
  return (
    <div className=" p-6 lg:p-10 ">
      <h1 className="mb-4 text-xl font-semibold uppercase lg:text-4xl">
        Accommodation and Food
      </h1>
      <div className="space-y-3 text-xl leading-tight">
        <p className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
          For all speakers and participants, Lunch and banquet will be provided
          with no additional cost.
        </p>
        <p className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
          Accommodation for all participants will be provided in student hostels
          (in-campus).
        </p>
        <p className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
          Accommodation for invited speakers and faculty members will be
          provided in the guest house (in-campus).
        </p>
        <p className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
          The hostels and the guest house are just 5 minute walk from the venue.
        </p>
        <p className="before:content-[' '] relative pl-6 text-blue-700 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
          <Link
            href="https://www.makemytrip.com/hotels/hotel-listing/?checkin=02092025&city=CTCJB&mmPoiTag=LPOI%7CPSG%20College%20Of%20Technology%7CCTCJB%7C11.0242544%7C77.00282279999999&checkout=02152025&roomStayQualifier=2e0e&locusId=CTCJB&country=IN&locusType=city&searchText=PSG%20College%20Of%20Technology,%20Avinashi%20Road,%20Peelamedu,%20Coimbatore,%20Tamil%20Nadu,%20India&regionNearByExp=3&rsc=1e2e0e"
            target="_blank"
          >
            Hotels around the Conference Venue (Click here)
          </Link>
        </p>
      </div>
      <h3 className="mt-4 py-2 pb-3 text-2xl font-semibold text-blue-700 lg:text-3xl">
        <Link href="https://maps.app.goo.gl/nRZi3CusmuXNENSbA" target="_blank">
          Jade Residency (PSGCT Guest House)
        </Link>
      </h3>
      <div className="flex flex-row flex-wrap gap-4">
        <Image
          src="jade-entrance.jpg"
          alt={"PSGCT guest house"}
          width={300}
          height={300}
        />
        <Image
          src="jade-room.jpg"
          alt={"PSGCT guest house"}
          width={300}
          height={300}
        />
        <Image
          src="jade-room-1.jpg"
          alt={"PSGCT guest house"}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
