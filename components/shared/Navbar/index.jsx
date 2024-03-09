"use client";

import { useState } from "react";
import { DesktopNavbar, MobileNavbar } from "./Components";
import Hamburger from "@/components/animated/hamburger";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className={`sticky ${showNavbar ? "rounded-lg" : "rounded-full"} p-5`}>
      <div className="absolute z-20 top-0 right-0 p-5">
        <Hamburger
          onClick={(e) => {
            setShowNavbar(!showNavbar);
          }}
        />
      </div>
      <MobileNavbar showNavbar={showNavbar} />
      <DesktopNavbar showNavbar={showNavbar} />
    </nav>
  );
};

export default Navbar;
