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
            <div className="flex max-lg:flex-col p-8 lg:p-14 h-[500px] lg:h-[700px]">
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
                        className="h-full max-w-fit flex flex-col items-center justify-center -space-y-6"
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
                <div className="lg:hidden py-4">
                    <h1 className="text-4xl font-bold">UPDATES</h1>
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
                    className="flex-1 lg:p-10 space-y-8 overflow-y-auto overflow-x-hidden"
                >
                    {updates.map((update, index) => {
                        return (
                            <div key={index}>
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
                                    className="flex flex-row -space-x-2 items-center"
                                >
                                    <div className="text-xl lg:text-2xl text-center p-5 bg-orange rounded-md z-10">
                                        <p>
                                            <span className="font-semibold">
                                                {update.StartDate}
                                            </span>{" "}
                                            {update.startMonth}
                                        </p>
                                    </div>
                                    <div className="flex flex-row justify-between items-center w-full px-8 py-4 border border-black rounded-lg">
                                        <p className="text-base lg:text-xl">
                                            {
                                                update.preConferenceSchoolEventName
                                            }
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
