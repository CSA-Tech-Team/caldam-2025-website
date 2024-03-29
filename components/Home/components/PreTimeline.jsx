"use client";

import { useIntersection } from "@/components/context/useIntersection";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PreTimeline = () => {
  const TIMELINE_LETTERS = "TIMELINE".split("").reverse();
  const DAYS = ["DAY-0", "DAY-1", "DAY-2"].map((t) => t.split(""));

  const [currentDay, setCurrentDay] = useState(0);

  const dayZeroTrigger = useRef(null);
  const dayZero = useIntersection(dayZeroTrigger, "0px");

  const dayOneTrigger = useRef(null);
  const dayOne = useIntersection(dayOneTrigger, "0px");

  const dayTwoTrigger = useRef(null);
  const dayTwo = useIntersection(dayTwoTrigger, "0px");

  useEffect(() => {
    if (dayZero) {
      setCurrentDay(0);
    }

    if (dayOne) {
      setCurrentDay(1);
    }

    if (dayTwo) {
      setCurrentDay(2);
    }
  }, [dayOne, dayTwo, dayZero]);

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
            {TIMELINE_LETTERS.map((t, index) => (
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
        </div>
        <div className="py-4 text-bluecolor lg:hidden">
          <h1 className="text-4xl font-bold">TIMELINE</h1>
        </div>
        <div className="w-full overflow-y-auto text-white">
          <div className="flex flex-row items-stretch justify-between">
            <div className="flex flex-1 flex-col items-end px-5 max-lg:hidden">
              <div className="flex w-60 flex-col -space-y-2">
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="mt-20 flex w-60 flex-col -space-y-2">
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
            </div>
            <div className="w-1 rounded-full bg-bluecolor"></div>
            <div className="flex flex-1 flex-col px-5">
              <div
                className="relative mt-20 flex w-60 flex-col -space-y-2"
                ref={dayZeroTrigger}
              >
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="mt-20 flex w-60 flex-col -space-y-2">
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="mt-20 flex w-60 flex-col -space-y-2">
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="mt-20 flex w-60 flex-col -space-y-2">
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="mt-20 flex w-60 flex-col -space-y-2">
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="mt-20 flex w-60 flex-col -space-y-2">
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div className="mt-20 flex w-60 flex-col -space-y-2">
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
              <div
                className="mt-20 flex w-60 flex-col -space-y-2"
                ref={dayOneTrigger}
              >
                <div className="z-10 ml-3 w-fit rounded-lg bg-orange px-4 py-2 text-black">
                  <p className="text-sm">7:30PM - 9:30PM</p>
                </div>
                <div className="rounded-md bg-bluecolor px-4 py-2">
                  <p className="text-2xl">Welcome Dinner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden">
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
            {DAYS[currentDay].map((t, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  variants={{
                    initial: {
                      translateY: 200,
                      rotateZ: "90deg",
                    },
                    animate: {
                      translateY: 0,
                      rotateZ: "90deg",
                      transition: {
                        ease: [0.47, 0.0, 0.745, 0.715],
                      },
                    },
                  }}
                  className="max-w-fit origin-center px-5 text-8xl font-bold"
                >
                  {t}
                </motion.h1>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default PreTimeline;
