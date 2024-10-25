"use client";

import NavbarElements from "@/constants/navbar-elements.json";
import Hamburger from "@/components/animated/hamburger";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SparklingText from "./SparklingText";

export default function Navbar() {
  const mobileNavbarVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  const router = useRouter();
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div className="sticky left-0 top-0 z-30 bg-bluevariants-200 text-white">
      <div className="relative flex items-center justify-between px-5 py-2">
        {/* Logo */}
        <h1
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
          className="mr-10 cursor-pointer text-2xl"
        >
          CALDAM <p className="text-center text-sm">2025</p>
        </h1>

        {/* Desktop View */}
        <div className="hidden items-center justify-between space-x-5 lg:flex">
          {NavbarElements.map((elem, index) => {
            const newTextClasses = elem.new
              ? "absolute -top-1 -left-1 px-2 py-1 rounded-lg text-xs font-bold text-white bg-blue-500 z-10"
              : "";

            return (
              <div key={index} className="relative py-4">
                {/* New or animated element for desktop */}
                {elem.new && (
                  <div className="absolute -top-1 lg:-left-1 lg:w-[130px] px-2 py-1 rounded-lg text-xs font-bold text-white bg-blue-500 z-10">
                    <SparklingText content={elem} />
                  </div>
                )}

                {/* Link without animation */}
                {!elem.animate && (
                  <Link
                    prefetch
                    href={elem.link}
                    onClick={() => setOpenNavbar(false)}
                    className="inline-block text-white"
                  >
                    {elem.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile View Hamburger */}
        <div className="lg:hidden">
          <Hamburger
            onClick={() => {
              setOpenNavbar(!openNavbar);
            }}
          />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {openNavbar && (
            <motion.div
              variants={mobileNavbarVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute left-0 top-full flex w-full origin-top flex-col items-end justify-between bg-bluecolor p-5 lg:hidden"
            >
              {NavbarElements.map((elem, index) => {
                const newTextClasses = elem.new
                  ? "absolute -top-1 px-2 py-1 rounded-lg text-xs font-bold text-white bg-blue-500 z-10 hover:cursor-pointer"
                  : "";

                return (
                  <div key={index} className="relative py-4 text-white w-full">
                    {/* New or animated element for mobile */}
                    {elem.animate && (
                      <SparklingText content="Submission date extended" />
                    )}

                    {/* Link without animation */}
                    {!elem.animate && (
                      <Link
                        prefetch
                        href={elem.link}
                        onClick={() => setOpenNavbar(false)}
                        className="block w-full text-left text-white"
                      >
                        {elem.name}
                      </Link>
                    )}

                    {/* New badge for mobile */}
                    {elem.new && (
                      <Link
                        href={elem.newlink}
                        onClick={() => setOpenNavbar(false)}
                        className={newTextClasses}
                      >
                        {elem.new}
                      </Link>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
