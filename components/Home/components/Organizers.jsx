import organizersData from "@/constants/organizers";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Organizers = () => {
  return (
    <div className="bg-bluecolor p-8 lg:p-14 w-screen">
      <h1 className="text-4xl font-bold text-white uppercase mb-10">
        Organizers
      </h1>
      <Marquee
        className="text-white flex flex-row overflow-x-auto"
        autoFill={true}
        pauseOnClick={true}
        pauseOnHover={true}
      >
        {organizersData.map((d, index) => (
          <div
            key={index}
            className="max-lg:w-60 w-64 aspect-square bg-white p-8 rounded-lg mx-2"
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

export default Organizers;
