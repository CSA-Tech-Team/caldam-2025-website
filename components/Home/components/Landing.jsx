"use client";

import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundImage from "@/public/image2.png";
import TextContraction from "./TextContraction";
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
          <motion.div className="mb-8 space-y-4">
            <h1 className="text-2xl font-bold lg:text-5xl">
              11th Annual International Conference on Algorithms and Discrete
              Applied Mathematics
            </h1>
            <h2 className="text-lg font-semibold italic lg:text-3xl">
              CALDAM 2025
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 flex font-medium max-lg:flex-col max-lg:justify-center max-lg:space-y-4 lg:mb-14 lg:flex-row lg:items-center lg:space-x-10"
          >
            <div className="flex flex-row items-center text-2xl">
              <BiSolidNavigation className="mr-4 inline text-2xl lg:text-4xl" />
              <div className="inline">
                <div className="group relative flex justify-center align-middle text-blue-700 transition-all hover:-translate-y-1">
                  <Link href="https://www.psgtech.edu/" target="_blank">
                    <p>PSG College of Technology </p>
                    <RiArrowRightUpFill className="absolute -right-8 top-2 group-hover:scale-110 max-lg:hidden" />
                  </Link>
                </div>
                <p className="text-sm">Coimbatore, Tamilnadu, India</p>
              </div>
            </div>
            <div className="hidden h-9 w-1 rounded-full bg-bluecolor lg:block"></div>
            <div className="flex flex-row items-center text-2xl">
              <FaCalendar className="mr-4 inline text-2xl lg:text-4xl" />
              <div className="inline">
                <p> 13-15 February </p>
                <p className="text-sm">2025</p>
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
              contentStart="The International Conference on Algorithms and Discrete Applied
          Mathematics (CALDAM), held under the aegis of the "
              contentLinks={
                "Association of Computer Science and Discrete Mathematics (ACSDM)"
              }
              contentAfterLink={`, is intended to bring together researchers working in the areas of Algorithms and Applied Discrete Mathematics and provide a high-quality forum for the dissemination and discussion of research results in these broad areas.`}
              contentRemaining=" CALDAM has originated from the ongoing efforts to promote research in Algorithms and Discrete Mathematics. As in the previous editions of CALDAM, the proceedings of accepted papers of this edition will be published in Lecture Notes in Computer Science by Springer. Also, selected papers are being published as a special issue of the journal Discrete Applied Mathematics (DAM). In all the previous CALDAMs, Springer has sponsored awards for the best student presentations. Google is likely to sponsor CALDAM 2025 as in the previous editions of CALDAM."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col text-lg max-lg:mb-8 max-lg:justify-center max-lg:space-y-2 lg:flex-row lg:justify-start lg:space-x-4"
          >
            <Link href={"/call-for-papers"}>
              <button className="rounded-lg bg-orange px-6 py-2">
                Call for Papers
              </button>
            </Link>
            {/* <Link href={"/accepted-papers"}>
              <button className="rounded-lg bg-orange px-6 py-2">
                Accepted Papers
              </button>
            </Link> */}
          </motion.div>
          <TextContraction
            className="mb-8 font-medium lg:hidden"
            contentStart="The International Conference on Algorithms and Discrete Applied
          Mathematics (CALDAM),"
            contentAfterLink={`held under aegis of the `}
            contentLinks={`Association of Computer
          Science and Discrete Mathematics (ACSDM) `}
            contentRemaining={`is intended to bring together researchers working in the areas of Algorithms and Applied Discrete Mathematics and provide a high-quality forum for the dissemination and discussion of research results in these broad areas. CALDAM has originated from the ongoing efforts to promote research in Algorithms and Discrete Mathematics. As in the previous editions of CALDAM, the proceedings of accepted papers of this edition will be published  in Lecture Notes in Computer Science by Springer. Also, selected papers are being published as a special issue of the journal Discrete Applied Mathematics (DAM). In all the previous CALDAMs, Springer has sponsored awards for the best student presentations. Google is likely to sponsor CALDAM 2025 as in the previous editions of CALDAM.`}
          />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Landing;
