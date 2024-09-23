"use client";

import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundImage from "@/public/image2.png";
import TextContraction from "@/components/Home/components/TextContraction";
import { HiSpeakerWave } from "react-icons/hi2";
import speak from "@/components/actions/speak";
import Link from "next/link";
import { RiArrowRightUpFill } from "react-icons/ri";

function Landing() {
  return (
    <div
      className="min-h-fit bg-cover bg-center lg:bg-left-top"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <AnimatePresence>
        <div className="min-h-fit w-full bg-gradient-to-r from-white to-transparent p-8 transition-all max-lg:from-20% lg:via-white lg:p-14">
          <h1 className="lg:mb-3 text-xl font-bold lg:text-4xl">
            Indo-Spanish Pre-Conference School on Algorithms and Combinatorics
          </h1>
          <h1 className="mb-8 text-xl font-bold lg:text-4xl">
            Jointly Organized with IIT Bhilai
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 flex font-medium max-lg:flex-col max-lg:justify-center max-lg:space-y-4 lg:mb-14 lg:flex-row lg:items-center lg:space-x-10"
          >
            <div className="flex flex-row items-center text-2xl">
              <FaCalendar className="mr-4 inline text-2xl lg:text-4xl" />
              <div className="inline">
                <p>February 10 - 11 </p>
                <p className="text-sm">2025</p>
              </div>
            </div>
            <div className="hidden h-9 w-1 rounded-full bg-bluecolor lg:block"></div>
            <div className="flex flex-row items-center text-2xl">
              <BiSolidNavigation className="mr-4 inline text-2xl lg:text-4xl" />
              <div className="inline">
                <div className="group relative flex justify-center align-middle transition-all hover:-translate-y-1">
                  <Link href="https://www.psgtech.edu/" target="_blank">
                    <p className="text-blue-700">PSG College of Technology </p>
                  </Link>
                  <RiArrowRightUpFill className="absolute -right-8 top-2 group-hover:scale-110" />
                </div>
                <p className="text-sm">Coimbatore, Tamilnadu, India</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-14 hidden max-w-[65%] font-medium lg:block lg:text-base xl:text-xl"
          >
            <TextContraction
              className="mb-8 font-medium max-lg:hidden"
              contentStart="The school is being organized for PhD students and teachers in computer science and discrete mathematics during February 10 - 11, 2025 by the Department of Applied Mathematics and Computational Sciences, PSG College of Technology, India. The school is aimed at fulfilling two purposes"
              contentRemaining="(i) as a pre-conference school for CALDAM 2025, (ii) as an Indo-Spanish School on Algorithms and Combinatorics."
            />
          </motion.div>

          <TextContraction
            className="mb-8 font-medium lg:hidden"
            contentStart="The school is being organized for PhD students and teachers in computer science and discrete mathematics during February 10 - 11, 2025 by the Department of Applied Mathematics and Computational Sciences, PSG College of Technology, India. The school is aimed at fulfilling two purposes"
            contentRemaining="(i) as a pre-conference school for CALDAM 2025, (ii) as an Indo-Spanish School on Algorithms and Combinatorics."
          />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Landing;
