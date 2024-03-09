import React from "react";
import navHamBurger from "@/assets/navHamBurger.svg";
import Image from "next/image";

export default function Navbar() {
    return (
        <div>
            <nav className=" p-6 shadow-md flex max-md:justify-evenly ">
                <div
                className=""
                >
                    <h1
                    className=" text-2xl text-center mr-10  "
                    >CALDAM 2025</h1>
                </div>
                <ul className=" flex items-center w-full justify-between max-md:justify-end  text-md ">
                    <li className=" cursor-pointer max-md:hidden ">Home</li>
                    <li className=" cursor-pointer max-md:hidden ">Committees</li>
                    <li className=" cursor-pointer max-md:hidden ">Invited Speakers</li>
                    <li className=" cursor-pointer max-md:hidden ">Program</li>
                    <li className=" cursor-pointer max-md:hidden ">Registration</li>
                    <li className=" cursor-pointer max-md:hidden ">Pre-Conference School</li>
                    <li className=" cursor-pointer max-md:hidden ">DAM Special Issue of CALDAM 2024</li>
                    <Image
                        src={navHamBurger}
                        alt=" Hamburger Icon "
                        className="cursor-pointer"
                    />
                </ul>
            </nav>
        </div>
    );
}
