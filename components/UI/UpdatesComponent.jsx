"use client";

import React from "react";
import preConfSchoolConstants from "@/constants/preSchoolConstants.json";
import linkIcon from "@/assets/link.svg";
import Image from "next/image";
import LineImage from "@/public/line.svg";
import { motion } from "framer-motion";

export default function UpdatesComponent() {
  const UPDATES_LETTERS = ["S", "E", "T", "A", "D", "P", "U"];

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
      </div>
      <div className="lg:hidden p-8">
        <h1 className="text-4xl font-bold">UPDATES</h1>
      </div>
    </>
  );
}
