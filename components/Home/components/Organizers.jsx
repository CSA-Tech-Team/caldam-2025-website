"use client";
import organizersData from "@/constants/organizers";
import Image from "next/image";
import Link from "next/link";
// import Marquee from "react-fast-marquee";
import { usePathname } from "next/navigation";

const Organizers = () => {
  const pathname = usePathname();

  let filteredorganizersData =
    pathname === "/pre-conference-school"
      ? organizersData.filter((d) => d.organizationName === "IIT Bhilai")
      : organizersData.filter((d) => d.organizationName !== "IIT Bhilai");
  if (pathname === "/pre-conference-school") {
    filteredorganizersData = organizersData;
  }
  return (
    <div className="bg-bluecolor p-8 lg:p-14">
      <h1 className="mb-10 text-4xl font-bold uppercase text-white">
        Organizers
      </h1>
      {/* <Marquee
        className="flex flex-row overflow-x-auto text-white"
        autoFill={true}
        pauseOnClick={true}
        pauseOnHover={true}
      >
        {organizersData.map((d, index) => (
          <div
            key={index}
            className="mx-2 aspect-square w-64 rounded-lg bg-white p-8 max-lg:w-60"
          >
            <Image
              src={d.imageURL}
              alt={d.organizationName}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Marquee> */}
      
      <div className=" flex items-center justify-evenly max-lg:flex-col max-lg:space-y-4 ">
        {filteredorganizersData.map((org, i) => {
          return (
            <div
              key={i}
              className="mx-2 aspect-square w-64 rounded-lg bg-white p-8 max-lg:w-60"
            >
              <Link href={org.companyPageURL} target="_blank">
                <Image
                  src={org.imageURL}
                  alt={org.organizationName}
                  width={0}
                  height={0}
                  sizes="1vw"
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Organizers;
