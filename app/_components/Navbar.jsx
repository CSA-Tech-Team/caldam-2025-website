"use client";

import NavbarElements from "@/constants/navbar-elements.json";
import Hamburger from "@/components/animated/hamburger";
import { useState } from "react";
import Link from "next/link"
export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <div className="py-3 px-6 z-50 bg-black text-white relative lg:absolute top-0 left-0 right-0">
            <ul className="flex justify-between items-center">
                <h1 className="text-2xl lg:text-3xl">
                    CALDAM <p className="text-center">2025</p>
                </h1>
                <div className="max-lg:hidden flex space-x-4 text-sm xl:text-lg">
                    {NavbarElements.map((elem, index) => {
                        return (
                            <Link prefetch key={index} href={elem.link}>
                                {elem.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="lg:hidden max-lg:block">
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
