"use client";

import NavbarElements from "@/constants/navbar-elements.json";
import Hamburger from "@/components/animated/hamburger";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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

  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div className="bg-black text-white sticky top-0 left-0 z-30">
      <div className="px-5 py-2 flex justify-between items-center relative">
        <h1 className="text-2xl mr-10">
          CALDAM <p className="text-sm text-center">2025</p>
        </h1>
        <div className="hidden lg:flex items-center justify-between space-x-5">
          {NavbarElements.map((elem, index) => {
            return (
              <div key={index} className="py-4 text-white">
                <Link prefetch href={elem.link}>
                  {elem.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="lg:hidden">
          <Hamburger
            onClick={(e) => {
              setOpenNavbar(!openNavbar);
            }}
          />
        </div>
        <AnimatePresence>
          {openNavbar && (
            <motion.div
              variants={mobileNavbarVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="lg:hidden absolute top-full left-0 w-full  bg-black flex flex-col items-end justify-between  p-5 origin-top"
            >
              {NavbarElements.map((elem, index) => {
                return (
                  <div key={index} className="py-4 text-white">
                    <Link prefetch href={elem.link} onClick={()=>setOpenNavbar(!openNavbar)}>
                      {elem.name}
                    </Link>
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
