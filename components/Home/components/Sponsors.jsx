"use client";
import { usePathname } from "next/navigation";
import sponsorsData from "@/constants/sponsors.json";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  const pathname = usePathname();

  const filteredSponsors =
    pathname === "/pre-conference-school"
      ? sponsorsData.filter((d) => d.organizationName === "IIT Bhilai")
      : sponsorsData.filter((d) => d.organizationName !== "IIT Bhilai");

  return (
    <div className="bg-white p-8 lg:p-14">
      <h1 className="mb-10 text-4xl font-bold uppercase text-bluecolor">
        Sponsors
      </h1>
      <div className="flex items-center justify-evenly max-lg:flex-col max-lg:space-y-5">
        {filteredSponsors.map((d, index) => (
          <div
            key={index}
            className="mx-2 aspect-square w-64 rounded-lg border-2 border-bluecolor p-8 max-lg:w-60"
          >
            <Link href={d.companyPageURL} target="_blank">
              <Image
                src={d.imageURL}
                alt={d.organizationName}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
