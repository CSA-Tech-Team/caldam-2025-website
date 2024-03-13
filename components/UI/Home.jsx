import React from "react";
import calIcon from "@/assets/calenderIconLogo.svg";
import locIcon from "@/assets/locationIconLogo.svg";
import Image from "next/image";
import Button from "./Button";
import PSGImage from "@/public/image.png";
import FixedComponent from "./FixedComponent";

function Home() {
  return (
    <div
      id="home"
      className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:min-h-screen place-content-center leading-10"
    >
      {/* <FixedComponent /> */}
      <main className="lg:col-span-1">
        {/* <div className="absolute h-full w-60 top-0 left-[96%] bg-gradient-to-r from-white via-white to-transparent -z-10"></div> */}
        <i className="lg:text-6xl max-lg:text-4xl font-bold text-navbg">
          CALDAM 2025
        </i>
        <h3 className="lg:text-lg 2xl:text-xl max-md:text-sm font-bold text-navbg">
          11th Annual International Conference on Algorithms and Discrete
          Applied Mathematics
        </h3>
        <div className="flex space-x-2 items-center">
          <Image src={calIcon} alt="Calendar Icon" />
          <h2>
            15 - 17 February <p>2025</p>
          </h2>
        </div>
        <div className="flex space-x-2 items-center">
          <Image src={locIcon} alt="Location Icon" />
          <h2>
            PSG College of Technology <p>Coimbatore, Tamilnadu, India</p>
          </h2>
        </div>
        <div className="flex space-x-3 justify-between py-5">
          <Button>Call for Papers</Button>
          <Button>Accepted Papers</Button>
        </div>
      </main>
      <main className="lg:col-span-1 hidden lg:block h-full relative after:absolute after:w-full after:h-full after:bg-gradient-to-r after:from-white after:to-transparent after:content-[''] after:top-0 after:left-0">
        <Image
          src={PSGImage}
          alt="College Image"
          className="object-cover w-full h-full"
        />
      </main>
    </div>
  );
}

export default Home;
