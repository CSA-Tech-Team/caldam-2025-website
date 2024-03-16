import React from "react";
import calIcon from "@/assets/calenderIconLogo.svg";
import locIcon from "@/assets/locationIconLogo.svg";
import Image from "next/image";
import PSGImage from "@/public/image.png";
import speakerIcon from "@/public/spekerIcon.svg";
import Button from "@/components/UI/Button";
import { speakText } from "@/actions/textToSpeech";

function Home() {
    return (
        <div id="home" className="flex lg:pt-[6%] xl:pt-[4%] items-center">
            {/* Content (always visible) */}
            <main className="h-screen w-full px-3 z-20 flex flex-col items-center justify-evenly relative">
                <div className="flex flex-row max-lg:flex-col lg:text-2xl items-center justify-center max-lg:space-y-4">
                    <i className="max-lg:text-4xl lapsize:text-6xl lg:text-8xl text-center w-full  font-extrabold">
                        CALDAM 2025
                        <span className="lg:inline hidden"> / </span>
                    </i>
                    <h1 className="max-lg:text-xl lg:text-3xl font-semibold text-center">
                        11th Annual International Conference on Algorithms and
                        Discrete Applied Mathematics
                    </h1>
                </div>
                <div className="flex lg:w-full px-4 lg:text-2xl">
                    <h1>[ siː-eɪ-ɛl-diː-eɪ-ɛm ]</h1>
                    <button onClick={speakText}>
                        <Image
                            src={speakerIcon}
                            alt="Speaker Icon"
                            className="bg-gray-100 bg-transparent rounded-full shadow-2xl"
                        />
                    </button>
                </div>
                <div className="px-3">
                    <p className="max-md:text-sm lapsize:text-lg max-lg:text-xl max-lg:leading-10 max-md:leading-6 lg:text-xl lg:leading-8 font-semibold">
                        The International Conference on Algorithms and Discrete
                        Applied Mathematics (CALDAM), held under the aegis of
                        the Association of Computer Science, is intended to
                        bring together researchers working in the areas of
                        algorithms and applied discrete mathematics and provide
                        a high-quality forum for the dissemination and
                        discussion of research results in these broad areas.
                        CALDAM has originated from the ongoing efforts for
                        promoting research in Algorithms and Discrete
                        Mathematics.
                    </p>
                </div>
                <div className="flex lg:w-full space-x-5 py-4 max-lg:justify-center items-center lg:gap-14 lg:justify-start">
                    <Button>Call for Papers</Button>
                    <Button>Accepted Papers</Button>
                </div>
                <div className="flex w-full justify-evenly lg:justify-start lg:text-2xl items-center space-x-5">
                    <div className="flex max-lg:items-start items-center space-x-4">
                        <Image
                            src={calIcon}
                            alt="Calendar Icon"
                            className="top-[50%]" // Center vertically
                        />
                        <div>
                            <h1>15 - 17 February</h1>
                            <p>2025</p>
                        </div>
                    </div>
                    <div className="w-1 h-full bg-black-300" />
                    <div className="flex max-lg:items-start justify-around space-x-6">
                        <Image src={locIcon} alt="Calendar Icon" />
                        <div>
                            <h1>PSG College of Technology</h1>
                            <span>Coimbatore, Tamilnadu, India</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Background image on larger screens (lg breakpoint and above) */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 h-full overflow-hidden">
                <Image
                    src={PSGImage}
                    layout="fill"
                    alt="College Image"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-50"></div>
            </div>

            {/* Background image for smaller screens (below lg breakpoint) */}
            <div className="max-lg:fixed inset-y-0 right-0 w-full h-full overflow-hidden lg:hidden">
                {/* Fixed positioning */}
                <Image
                    src={PSGImage}
                    layout="fill"
                    alt="College Image"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-50"></div>
            </div>
        </div>
    );
}

export default Home;
