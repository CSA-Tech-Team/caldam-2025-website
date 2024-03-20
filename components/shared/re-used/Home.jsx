"use client";

import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
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
      <div className="bg-gradient-to-r from-white max-lg:from-20% lg:via-white to-transparent w-full min-h-fit p-8 lg:p-14 transition-all">
        <div className="space-y-4 mb-8 lg:mb-14 overflow-hidden">
          <motion.div
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.35,
                },
              },
            }}
            initial="initial"
            animate="animate"
            className="lg:flex lg:flex-row lg:justify-start lg:space-x-14 lg:items-stretch mb-8"
          >
            <div className="overflow-hidden pr-4">
              <motion.h1
                variants={{
                  initial: { translateX: 1000, opacity: "0%" },
                  animate: {
                    translateX: 0,
                    opacity: "100%",
                    transition: {
                      duration: 0.1,
                    },
                  },
                }}
                className="text-6xl font-semibold lg:text-7xl xl:text-8xl 2xl:text-9xl max-lg:mr-6 italic"
              >
                CALDAM 2025
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden lg:block w-2 bg-black -skew-x-[16deg]"
            ></motion.div>
            <div className="hidden lg:block text-lg xl:text-xl 2xl:text-2xl my-auto overflow-hidden font-medium">
              <motion.div
                variants={{
                  initial: { translateX: -500 },
                  animate: {
                    translateX: 0,
                    transition: {
                      ease: [0.47, 0.0, 0.745, 0.715],
                    },
                  },
                }}
              >
                11th Annual International <br /> Conference on Algorithms and
                <br />
                Discrete Applied Mathematics
              </motion.div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="inline relative before:absolute before:h-1 before:bg-yellow-400 before:bottom-0 before:-top-[100%] before:w-full">
              [ siː-eɪ-ɛl-diː-eɪ-ɛm ]
            </p>
          </motion.div>
          <p className="lg:hidden text-xl md:text-2xl font-medium">
            11th Annual International Conference on Algorithms and Discrete
            Applied Mathematics
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="hidden lg:block lg:text-base xl:text-xl mb-14 max-w-[65%] font-medium"
        >
          The International Conference on Algorithms and Discrete Applied
          Mathematics (CALDAM), held under aegis of the Association of Computer
          Science is intended to bring together researchers working in the areas
          of algorithms and applied discrete mathematics and provide a
          high-quality forum for the dissemination and discussion of research
          results in these broad areas. CALDAM has originated from the ongoing
          efforts for promoting research in Algorithms and Discrete Mathematics.
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg flex flex-col lg:flex-row lg:justify-start lg:space-x-4 max-lg:justify-center max-lg:space-y-2 mb-8 lg:mb-14"
        >
          <button className="px-6 py-2 bg-yellow-400 rounded-lg">
            Call for Papers
          </button>
          <button className="px-6 py-2 bg-yellow-400 rounded-lg">
            Accepted Papers
          </button>
        </motion.div>
        <TextContraction
          className="mb-8 lg:hidden font-medium"
          contentStart="The International Conference on Algorithms and Discrete Applied
          Mathematics (CALDAM),"
          contentRemaining="held under aegis of the Association of Computer
          Science is intended to bring together researchers working in the areas
          of algorithms and applied discrete mathematics and provide a
          high-quality forum for the dissemination and discussion of research
          results in these broad areas. CALDAM has originated from the ongoing
          efforts for promoting research in Algorithms and Discrete Mathematics."
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex max-lg:flex-col lg:flex-row max-lg:justify-center max-lg:space-y-4 lg:space-x-10 font-medium lg:items-center"
        >
          <div className="text-2xl flex flex-row items-center">
            <FaCalendar className="inline mr-4 text-2xl lg:text-4xl" />
            <div className="inline">
              <p>15 - 17 Feburary </p>
              <p className="text-sm">2025</p>
            </div>
          </div>
          <div className="hidden lg:block w-1 h-9 bg-black rounded-full"></div>
          <div className="text-2xl flex flex-row items-center">
            <BiSolidNavigation className="inline mr-4 text-2xl lg:text-4xl" />
            <div className="inline">
              <p>PSG College of Technology </p>
              <p className="text-sm">Coimbatore, Tamilnadu, India</p>
            </div>
          </div>
        </motion.div>
      </div>
      <Marquee />
    </div>
  );
}

export default Home;
