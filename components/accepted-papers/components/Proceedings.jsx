import React from "react";
import Banner from "@/assets/banner.png";
import Image from "next/image";
export default function Proceedings() {
  return (
    <div>
      <div className="flex justify-start">
        <div className="px-3 pb-4 pt-10 text-3xl font-bold text-black">
          <i>PROCEEDINGS</i>
          <div className="w-full border-b-2 border-yellow-500"></div>
        </div>
      </div>
      <div className=" max-lg:text-md px-4 text-xl font-semibold ">
        Click on the banner below to access the proceedings of the conference.
      </div>
      <div className=" w-full px-4 py-4  ">
        <Image src={Banner} alt="Banner" className=" w-full  max-md:h-48" />
      </div>
    </div>
  );
}
