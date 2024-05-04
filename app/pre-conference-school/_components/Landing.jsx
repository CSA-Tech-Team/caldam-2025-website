"use client";

import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundImage from "@/public/image.png";
import TextContraction from "@/components/Home/components/TextContraction";
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
              className="mb-8 lg:flex lg:flex-row lg:items-stretch lg:justify-start lg:space-x-10"
            >
              <div className="overflow-hidden ">
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
                  className=" text-left text-6xl max-lg:text-4xl  font-semibold italic max-lg:mr-6 lg:text-6xl "
                >
                  PRE-CONFERENCE SCHOOL 2025
                </motion.h1>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden w-2 -skew-x-[16deg] bg-black lg:block"
              ></motion.div>
              <div className="my-auto hidden overflow-hidden text-balance text-lg font-medium lg:block xl:text-xl 2xl:text-3xl">
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
                    Indo-Slovenia Pre-Conference
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
                    School on Algorithms and{" "}
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
                    Combinatorics{" "}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl font-medium md:text-2xl lg:hidden"
            >
              Indo-Slovenia Pre-Conference School on Algorithms and
              Combinatorics { " "}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-14 hidden max-w-[65%] font-medium lg:block lg:text-base xl:text-xl"
          >
            <TextContraction
              className="mb-8 font-medium max-lg:hidden"
              contentStart="The school is being organized for PhD students and teachers in computer science and discrete mathematics during February 10 - 11, 2025 by Department of Applied Mathematics and Computational Sciences, PSG College of Technology, India. The school is aimed at fulfilling two purposes"
              contentRemaining="(i) as a pre-conference school for CALDAM 2025, (ii) as an Indo-Spanish School"
            />
          </motion.div>
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
                <p>PSG College of Technology </p>
                <p className="text-sm">Coimbatore, Tamilnadu, India</p>
              </div>
            </div>
          </motion.div>
          
          <TextContraction
            className="mb-8 font-medium lg:hidden"
            contentStart="The school is being organized for PhD students and teachers in computer science and discrete mathematics during February 10 - 11, 2025 by Department of Applied Mathematics and Computational Sciences, PSG College of Technology, India. The school is aimed at fulfilling two purposes"
            contentRemaining="(i) as a pre-conference school for CALDAM 2025, (ii) as an Indo-Spanish School"
          />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Landing;
