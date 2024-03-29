"use client";

import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundImage from "@/public/image.png";
import TextContraction from "./TextContraction";
import { HiSpeakerWave } from "react-icons/hi2";
import speak from "@/components/actions/speak";

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
          <div className="mb-8 space-y-4 overflow-hidden lg:mb-14">
            <motion.div
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
              initial="initial"
              animate="animate"
              className="mb-8 lg:flex lg:flex-row lg:items-stretch lg:justify-start lg:space-x-14"
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
                  className="text-6xl font-semibold italic max-lg:mr-6 lg:text-7xl xl:text-8xl 2xl:text-9xl"
                >
                  CALDAM 2025
                </motion.h1>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden w-2 -skew-x-[16deg] bg-black lg:block"
              ></motion.div>
              <div className="my-auto hidden overflow-hidden text-lg font-medium lg:block xl:text-xl 2xl:text-2xl">
                <motion.div
                  variants={{
                    initial: {},
                    animate: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.p
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
                    11th Annual International
                  </motion.p>
                  <motion.p
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
                    Conference on Algorithms and
                  </motion.p>
                  <motion.p
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
                    Discrete Applied Mathematics{" "}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="relative inline before:absolute before:-top-[100%] before:bottom-0 before:h-1 before:w-full before:bg-orange">
                [ siː-eɪ-ɛl-diː-eɪ-ɛm ]
                <button
                  className="ml-2"
                  onClick={(e) => {
                    e.preventDefault();
                    speak("CALDAM");
                  }}
                >
                  <HiSpeakerWave className="inline" />
                </button>
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl font-medium md:text-2xl lg:hidden"
            >
              11th Annual International Conference on Algorithms and Discrete
              Applied Mathematics
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-14 hidden max-w-[65%] font-medium lg:block lg:text-base xl:text-xl"
          >
            The International Conference on Algorithms and Discrete Applied
            Mathematics (CALDAM), held under aegis of the Association of
            Computer Science is intended to bring together researchers working
            in the areas of algorithms and applied discrete mathematics and
            provide a high-quality forum for the dissemination and discussion of
            research results in these broad areas. CALDAM has originated from
            the ongoing efforts for promoting research in Algorithms and
            Discrete Mathematics.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 flex font-medium max-lg:flex-col max-lg:justify-center max-lg:space-y-4 lg:mb-14 lg:flex-row lg:items-center lg:space-x-10"
          >
            <div className="flex flex-row items-center text-2xl">
              <FaCalendar className="mr-4 inline text-2xl lg:text-4xl" />
              <div className="inline">
                <p>15 - 17 Feburary </p>
                <p className="text-sm">2025</p>
              </div>
            </div>
            <div className="hidden h-9 w-1 rounded-full bg-bluecolor lg:block"></div>
            <div className="flex flex-row items-center text-2xl">
              <BiSolidNavigation className="mr-4 inline text-2xl lg:text-4xl" />
              <div className="inline">
                <p>PSG College of Technology </p>
                <p className="text-sm">Coimbatore, Tamilnadu, India</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col text-lg max-lg:mb-8 max-lg:justify-center max-lg:space-y-2 lg:flex-row lg:justify-start lg:space-x-4"
          >
            <button className="rounded-lg bg-orange px-6 py-2">
              Call for Papers
            </button>
            <button className="rounded-lg bg-orange px-6 py-2">
              Accepted Papers
            </button>
          </motion.div>
          <TextContraction
            className="mb-8 font-medium lg:hidden"
            contentStart="The International Conference on Algorithms and Discrete Applied
          Mathematics (CALDAM),"
            contentRemaining="held under aegis of the Association of Computer
          Science is intended to bring together researchers working in the areas
          of algorithms and applied discrete mathematics and provide a
          high-quality forum for the dissemination and discussion of research
          results in these broad areas. CALDAM has originated from the ongoing
          efforts for promoting research in Algorithms and Discrete Mathematics."
          />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Landing;
