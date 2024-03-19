"use client";

import React from "react";
import { Triangle, Navigation, Calendar } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundImage from "@/public/image.png";
import Image from "next/image";
import TextContraction from "../TextContraction";
import Marquee from "../Marquee";

function Home() {
  return (
    <div
      className="min-h-fit bg-cover bg-center lg:bg-left-top"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <div className="bg-gradient-to-r from-white max-lg:from-20% lg:via-white to-transparent w-full min-h-fit p-8 lg:p-14">
        <div className="space-y-4 mb-8 lg:mb-14">
          <div className="lg:flex lg:flex-row lg:justify-start lg:space-x-8 lg:items-stretch mb-8">
            <h1 className="text-6xl font-semibold lg:text-7xl xl:text-8xl 2xl:text-9xl max-lg:mr-6 italic">
              CALDAM 2025
            </h1>
            <div className="hidden lg:block w-2 bg-black -skew-x-[16deg]"></div>
            <div className="hidden lg:block text-lg xl:text-xl 2xl:text-2xl my-auto">
              11th Annual International <br /> Conference on Algorithms and
              <br />
              Discrete Applied Mathematics
            </div>
          </div>
          <div>
            <p className="inline relative before:absolute before:h-1 before:bg-yellow-400 before:bottom-0 before:-top-[100%] before:w-full">
              [ siː-eɪ-ɛl-diː-eɪ-ɛm ]
            </p>
          </div>
          <p className="lg:hidden text-xl md:text-2xl font-medium">
            11th Annual International Conference on Algorithms and Discrete
            Applied Mathematics
          </p>
        </div>
        <div className="hidden lg:block lg:text-base xl:text-xl mb-14 max-w-[65%] font-medium">
          The International Conference on Algorithms and Discrete Applied
          Mathematics (CALDAM), held under aegis of the Association of Computer
          Science is intended to bring together researchers working in the areas
          of algorithms and applied discrete mathematics and provide a
          high-quality forum for the dissemination and discussion of research
          results in these broad areas. CALDAM has originated from the ongoing
          efforts for promoting research in Algorithms and Discrete Mathematics.
        </div>
        <div className="text-lg flex flex-col lg:flex-row lg:justify-start lg:space-x-4 max-lg:justify-center max-lg:space-y-2 mb-8 lg:mb-14">
          <button className="px-6 py-2 bg-yellow-400 rounded-lg">
            Call for Papers
          </button>
          <button className="px-6 py-2 bg-yellow-400 rounded-lg">
            Accepted Papers
          </button>
        </div>
        <TextContraction
          className="mb-8 lg:hidden font-semibold"
          contentStart="The International Conference on Algorithms and Discrete Applied
          Mathematics (CALDAM),"
          contentRemaining="held under aegis of the Association of Computer
          Science is intended to bring together researchers working in the areas
          of algorithms and applied discrete mathematics and provide a
          high-quality forum for the dissemination and discussion of research
          results in these broad areas. CALDAM has originated from the ongoing
          efforts for promoting research in Algorithms and Discrete Mathematics."
        />
        <div className="flex max-lg:flex-col lg:flex-row max-lg:justify-center max-lg:space-y-4 lg:space-x-10 font-medium lg:items-center">
          <div className="text-2xl flex flex-row items-center">
            <Calendar className="inline mr-4" size={30} />
            <div className="inline">
              <p>15 - 17 Feburary </p>
              <p className="text-sm">2025</p>
            </div>
          </div>
          <div className="hidden lg:block w-1 h-9 bg-black rounded-full"></div>
          <div className="text-2xl flex flex-row items-center">
            <Navigation className="inline mr-4" size={30} />
            <div className="inline">
              <p>PSG College of Technology </p>
              <p className="text-sm">Coimbatore, Tamilnadu, India</p>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
    </div>
  );
}

export default Home;
