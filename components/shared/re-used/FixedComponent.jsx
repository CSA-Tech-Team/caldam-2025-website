"use client";
import React from "react";
import Image from "next/image";
import calIcon from "@/assets/calenderIconLogo.svg";
import ScrollToTopIcon from "@/assets/scrollToTop.svg";
export default function FixedComponent() {
  const handleScrollToTop = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=" fixed bottom-0 right-0 z-30 flex items-center justify-center  ">
      <div className="group flex cursor-pointer ">
        <Image
          src={calIcon}
          alt="Calendar Icon"
          className="transition duration-500 group-hover:opacity-75"
        />
        <button className="invisible ml-2 transition duration-300 group-hover:visible">
          Save The Date
        </button>
      </div>
      <div>
        <Image
          src={ScrollToTopIcon}
          alt="Scroll to top Icon"
          className=" cursor-pointer  rounded-full bg-white shadow-md max-lg:w-11 "
          onClick={handleScrollToTop}
        />
      </div>
    </div>
  );
}
