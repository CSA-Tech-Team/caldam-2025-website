"use client";

import NavbarElements from "@/constants/navbar-elements.json";
import Hamburger from "@/components/animated/hamburger";
import { useState } from "react";
export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <div className=" py-3 px-6 bg-navbg text-white ">
            <ul className="flex justify-between  items-center">
                <h1 className=" text-2xl lg:text-3xl">CALDAM 2025</h1>
                <div className="max-lg:hidden flex  space-x-4 text-sm xl:text-lg">
                    {NavbarElements.map((elem, index) => {
                        return (
                            <a key={index} href={elem.link}>
                                {elem.name}
                            </a>
                        );
                    })}
                </div>
                <div className="">
                    <Hamburger
                        onClick={(e) => {
                            setShowNavbar(!showNavbar);
                        }}
                    />
                </div>
            </ul>
        </div>
    );
}
