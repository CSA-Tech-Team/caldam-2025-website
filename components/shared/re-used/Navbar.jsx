"use client";

import NavbarElements from "@/constants/navbar-elements.json";
import Hamburger from "@/components/animated/hamburger";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
        <h1
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
          className="mr-10 text-2xl cursor-pointer "
        >
          CALDAM <p className="text-center text-sm">2025</p>
        </h1>
        <div className="hidden items-center justify-between space-x-5 lg:flex">
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
              className="absolute left-0 top-full flex w-full  origin-top flex-col items-end justify-between bg-black  p-5 lg:hidden"
            >
              {NavbarElements.map((elem, index) => {
                return (
                  <div key={index} className="py-4 text-white">
                    <Link
                      prefetch
                      href={elem.link}
                      onClick={() => setOpenNavbar(!openNavbar)}
                    >
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
