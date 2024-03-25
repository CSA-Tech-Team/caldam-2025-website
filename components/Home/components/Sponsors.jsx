import sponsorsData from "@/constants/sponsors.json";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div className="bg-white p-8 lg:p-14">
      <h1 className="text-4xl font-bold text-bluecolor uppercase mb-10">
        Sponsors
      </h1>
      <Marquee
        className="text-white flex flex-row overflow-x-auto"
        autoFill={true}
        pauseOnClick={true}
        pauseOnHover={true}
      >
        {sponsorsData.map((d, index) => (
          <div
            key={index}
            className="max-lg:w-60 w-64 aspect-square bg-bluecolor p-8 rounded-lg mx-2"
          >
            <Image
              src={d.imageURL}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsors;
