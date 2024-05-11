import React from "react";
import hoteldata from "@/constants/accomdationhotes.json";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
export default function Hotels() {
  return (
    <>
      {" "}
      <h3 className=" py-4 text-2xl font-semibold lg:text-3xl ">
        Best Hotels Around The Conference Venue
      </h3>
      <div className=" mx-3 grid text-lg lg:text-2xl grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 ">
        {hoteldata.map((hotel, i) => {
          return (
            <div
              key={i}
              className="mb-4 flex flex-col items-center space-y-3 lg:ml-3 border border-black rounded-lg "
            >
              <div
                className="relative h-auto w-full max-w-full"
                style={{ height: "0", paddingBottom: "56.25%" }}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={hoteldata[i].images[0]}
                  alt={hotel.hotelName}
                />
              </div>
              <div className=" py-4">
                <h2 className=" font-bold">{hotel.hotelName}</h2>
                <div className="mb-2">
                  <Link
                    className="flex items-center"
                    target="_blank"
                    prefetch
                    href={hotel.link}
                  >
                    <BiCurrentLocation className="mr-1" />
                    <span>{hotel.distance}</span>
                  </Link>
                </div>
                <span className="text-xl">Price: </span>
                <span className="mb-2 text-xl">{hotel.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
