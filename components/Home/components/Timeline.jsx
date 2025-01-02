"use client";

import TimelineData from "@/constants/timeline.json";
import { useIntersection } from "@/components/context/useIntersection";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  const TIMELINE_LETTERS = "TIMELINE".split("").reverse();
  const DAYS = ["DAY-1", "DAY-2", "DAY-3"];
  const DAYS_DESKTOP = DAYS.map((t) => t.split(""));

  const [currentDay, setCurrentDay] = useState(0);

  const triggerCallbacks = DAYS.map((v, index) => () => {
    setCurrentDay(index);
  });

  return (
    <AnimatePresence>
      <div className="flex h-[700px] p-8 max-lg:flex-col lg:p-14">
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
              <div key={index} className="overflow-hidden px-5">
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
                  className="max-w-fit origin-center text-8xl font-bold"
                >
                  {t}
                </motion.h1>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-4 text-bluecolor lg:hidden">
          <h1 className="text-4xl font-bold">TIMELINE</h1>
        </div>
        <div className="my-4 text-bluecolor lg:hidden">
          <h1 className="text-2xl font-bold text-bluecolor">
            {DAYS[currentDay]}
          </h1>
        </div>
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden text-white lg:hidden"
          id="scrollbar-none"
        >
          <div className="flex flex-row items-stretch justify-between">
            <div className="w-1 rounded-full bg-bluecolor"></div>
            <motion.div
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.09,
                  },
                },
              }}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              className="flex-1 px-5"
            >
              {TimelineData.map((d, index) => {
                if (!d.isTrigger) {
                  return (
                    <motion.div
                      variants={{
                        initial: { translateX: -1000 },
                        animate: {
                          translateX: 0,
                          transition: {
                            ease: [0.47, 0.0, 0.745, 0.715],
                          },
                        },
                      }}
                      key={index}
                    >
                      <TimelineCard isDesktop={false} index={index} {...d} />
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div
                      variants={{
                        initial: { translateX: -1000 },
                        animate: {
                          translateX: 0,
                          transition: {
                            ease: [0.47, 0.0, 0.745, 0.715],
                          },
                        },
                      }}
                      key={index}
                    >
                      <TimelineCard
                        isDesktop={false}
                        key={index}
                        index={index}
                        triggerCallback={triggerCallbacks[d.triggerDay]}
                        {...d}
                      />
                    </motion.div>
                  );
                }
              })}
            </motion.div>
          </div>
        </div>
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden text-white max-lg:hidden"
          id="scrollbar-none"
        >
          <div className="flex flex-row items-stretch">
            <motion.div
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.09,
                  },
                },
              }}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              className="flex flex-1 flex-col items-stretch px-5"
            >
              {TimelineData.map((d, index) => {
                if (index % 2 == 0) {
                  if (!d.isTrigger) {
                    return (
                      <motion.div
                        variants={{
                          initial: { translateX: -1000 },
                          animate: {
                            translateX: 0,
                            transition: {
                              ease: [0.47, 0.0, 0.745, 0.715],
                            },
                          },
                        }}
                        key={index}
                      >
                        <TimelineCard isDesktop={true} index={index} {...d} />
                      </motion.div>
                    );
                  } else {
                    return (
                      <motion.div
                        variants={{
                          initial: { translateX: -1000 },
                          animate: {
                            translateX: 0,
                            transition: {
                              ease: [0.47, 0.0, 0.745, 0.715],
                            },
                          },
                        }}
                        key={index}
                      >
                        <TimelineCard
                          isDesktop={true}
                          key={index}
                          index={index}
                          triggerCallback={triggerCallbacks[d.triggerDay]}
                          {...d}
                        />
                      </motion.div>
                    );
                  }
                }
              })}
            </motion.div>
            <div className="w-1 rounded-full bg-bluecolor"></div>
            <motion.div
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.09,
                  },
                },
              }}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              className="flex-1 px-5"
            >
              {TimelineData.map((d, index) => {
                if (index % 2 == 1) {
                  if (!d.isTrigger) {
                    return (
                      <motion.div
                        variants={{
                          initial: { translateX: 1000 },
                          animate: {
                            translateX: 0,
                            transition: {
                              ease: [0.47, 0.0, 0.745, 0.715],
                            },
                          },
                        }}
                        key={index}
                      >
                        <TimelineCard isDesktop={true} index={index} {...d} />
                      </motion.div>
                    );
                  } else {
                    return (
                      <motion.div
                        variants={{
                          initial: { translateX: 1000 },
                          animate: {
                            translateX: 0,
                            transition: {
                              ease: [0.47, 0.0, 0.745, 0.715],
                            },
                          },
                        }}
                        key={index}
                      >
                        <TimelineCard
                          isDesktop={true}
                          key={index}
                          index={index}
                          triggerCallback={triggerCallbacks[d.triggerDay]}
                          {...d}
                        />
                      </motion.div>
                    );
                  }
                }
              })}
            </motion.div>
          </div>
        </div>
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
            className="flex h-full max-w-fit flex-col items-center justify-center -space-y-6 bg-gradient-to-b from-bluecolor to-darkblue bg-clip-text text-transparent"
          >
            {DAYS_DESKTOP[currentDay].map((t, index) => (
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

export default Timeline;