"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import updates from "@/constants/updates.json";
import Link from "next/link";
export default function Updates() {
  const UPDATES_LETTERS = "UPDATES".split("").reverse();

  return (
    <AnimatePresence>
      <div className="flex h-[500px] p-8 max-lg:flex-col lg:h-[700px] lg:p-14">
        <div className="hidden lg:block">
          <motion.div
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex h-full max-w-fit flex-col items-center justify-center -space-y-6 text-bluecolor"
          >
            {UPDATES_LETTERS.map((t, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  variants={{
                    initial: {
                      translateY: 200,
                      rotateZ: "-90deg",
                    },
                    animate: {
                      translateY: 0,
                      rotateZ: "-90deg",
                      transition: {
                        ease: [0.47, 0.0, 0.745, 0.715],
                      },
                    },
                  }}
                  className="max-w-fit origin-center -rotate-90 px-5 text-8xl font-bold"
                >
                  {t}
                </motion.h1>
              </div>
            ))}
          </motion.div>
          <div></div>
        </div>
        <div className="py-4 lg:hidden">
          <h1 className="text-4xl font-bold text-bluecolor">UPDATES</h1>
        </div>
        <motion.div
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
          initial="initial"
          whileInView="animate"
          className="flex-1 space-y-8 overflow-y-auto overflow-x-hidden lg:p-10"
        >
          {updates.map((update, index) => {
            return (
              <div key={index}>
                <motion.div
                  variants={{
                    initial: { translateX: -2000 },
                    animate: {
                      translateX: 0,
                      transition: {
                        ease: [0.47, 0.0, 0.745, 0.715],
                      },
                    },
                  }}
                  className="flex flex-row items-center -space-x-2"
                >
                  <div className="z-10 w-40 rounded-md bg-orange p-4 text-center text-xl lg:text-2xl">
                    <div>
                      <div className="font-semibold">
                        {update.StartDate !== "27th" ? (
                          update.StartDate
                        ) : (
                          <div>
                            <p>30th</p>
                            <p className="line-through">{update.StartDate}</p>
                          </div>
                        )}
                        {update.EndDate ? "-" : ""}
                        {update.EndDate}
                      </div>{" "}
                      <p>{update.startMonth}</p>
                      <p>{update.year}</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-row items-center justify-between rounded-lg border border-black px-8 py-4">
                    <p className="text-base lg:text-xl">
                      {update.preConferenceSchoolEventName}
                    </p>
                    <Link href={update.navigateTo}>
                      <GoLinkExternal className="text-lg" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
