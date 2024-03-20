"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";

export default function Updates() {
  const UPDATES_LETTERS = "UPDATES".split("").reverse();

  return (
    <>
      <div className="hidden p-14 lg:block">
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
          className="h-full max-w-fit flex flex-col justify-center -space-y-6"
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
                className="text-8xl -rotate-90 origin-center max-w-fit font-bold px-5"
              >
                {t}
              </motion.h1>
            </div>
          ))}
        </motion.div>
        <div>
          <div className=" py-4 ">
            <div className=" flex">
              <p className=" w-24 h-24 ">Feb 15th</p>
              <div className=" flex items-end border border-black ">
                <p>{"Indo-Slovenia Pre-Conference School"}</p>
                <BiDownload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden p-8">
        <h1 className="text-4xl font-bold">UPDATES</h1>
      </div>
    </>
  );
}
