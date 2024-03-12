import React from "react";
import calIcon from "@/assets/calenderIconLogo.svg";
import locIcon from "@/assets/locationIconLogo.svg";
import Image from "next/image";
import Button from "./Button";
import PSGImage from "@/public/image.png";
import FixedComponent from "./FixedComponent";

function Home() {
    return (
        <div id="home" className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen place-content-center px-10 py-10 space-x-4 leading-10 gap-4">
            <FixedComponent />

            <main className="lg:col-span-1">
                <i className="lg:text-6xl max-lg:text-4xl font-bold text-navbg">
                    CALDAM 2025
                </i>
                <h3 className="lg:text-lg 2xl:text-xl max-md:text-sm font-bold text-navbg">
                    11th Annual International Conference on Algorithms and Discrete Applied Mathematics
                </h3>
                <div className="flex space-x-2 items-center">
                    <Image src={calIcon} alt="Calendar Icon" />
                    <h2>
                        15 - 17 February <p>2025</p>
                    </h2>
                </div>
                <div className="flex space-x-2 items-center">
                    <Image src={locIcon} alt="Location Icon" />
                    <h2>
                        PSG College of Technology <p>Coimbatore, Tamilnadu, India</p>
                    </h2>
                </div>
                <div className="flex space-x-3 justify-between py-5">
                    <Button>Call for Papers</Button>
                    <Button>Accepted Papers</Button>
                </div>
            </main>

            <main className="lg:col-span-1 hidden lg:block">
                <Image src={PSGImage} alt="College Image" className="opacity-30" />
            </main>
        </div>
    );
}

export default Home;
