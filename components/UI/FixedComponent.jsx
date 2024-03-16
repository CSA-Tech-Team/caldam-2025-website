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
        <div className=" fixed right-0 bottom-0 z-30 flex items-center justify-center  ">
            <div className="group cursor-pointer flex ">
                <Image
                    src={calIcon}
                    alt="Calendar Icon"
                    className="group-hover:opacity-75 transition duration-500"
                />
                <button className="ml-2 invisible group-hover:visible transition duration-300">
                    Save The Date
                </button>
            </div>
            <div>
                <Image
                    src={ScrollToTopIcon}
                    alt="Scroll to top Icon"
                    className=" max-lg:w-11  rounded-full bg-white cursor-pointer shadow-md "
                    onClick={handleScrollToTop}
                />
            </div>
        </div>
    );
}
