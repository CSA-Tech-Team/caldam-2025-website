"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";

export default function Updates() {
  const UPDATES_LETTERS = "UPDATES".split("").reverse();

  return (
    <div className=" flex items-center  ">
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
          viewport={{ once: true }}
          className="h-full max-w-fit flex flex-col  justify-center -space-y-6"
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
        <div></div>
      </div>
      <div className="lg:hidden p-8">
        <h1 className="text-4xl font-bold">UPDATES</h1>
      </div>
      <div className="py-4 px-3">
        <div className="flex flex-row items-center relative">
          <p className="w-24 h-24 text-2xl text-center p-3 bg-orange rounded-md absolute top-0 left-0 z-10">
            15th Feb
          </p>
          <div className="flex shadow-xl items-center rounded-lg relative border lg:p-4 max-lg:p-2 border-black">
            <p className="text-xl">{"Indo-Slovenia Pre-Conference School"}</p>
            <BiDownload className="size-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
