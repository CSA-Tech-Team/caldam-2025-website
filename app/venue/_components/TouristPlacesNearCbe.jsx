import React from "react";
import places from "@/constants/placestovistnearcbe.json";
import Image from "next/image";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { BiCurrentLocation } from "react-icons/bi";
export default function TouristPlacesNearCbe() {
  return (
    <div
    className=" space-y-4 py-3 "
    >
      <h1 className="text-3xl font-bold  lg:text-3xl ">Tourist Places Around Coimbatore</h1>
      <div className=" grid grid-cols-2 gap-x-3 gap-y-4 py-4 max-md:grid-cols-1 xl:grid-cols-5">
        {places.map((place, i) => {
          return (
            <div key={i} className="rounded-lg flex-col border border-black hover:-translate-y-1 transition-all ">
              <div
                className="relative h-auto w-full max-w-full"
                style={{ height: "0", paddingBottom: "56.25%" }}
              >
              <Link prefetch target="_blank" className="flex items-center justify-center" href={place.maploc}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  priority
                  src={place.image}
                  alt={place.name}
                />
              </Link>
              </div>
              <div className=" py-4 text-lg flex justify-center ">
                <Link prefetch target="_blank" className="flex items-center justify-center" href={place.maploc}>
                  <BiCurrentLocation className="mr-1 lg:size-[2rem] " />
                  <span>{place.name}</span>
                </Link>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
}
