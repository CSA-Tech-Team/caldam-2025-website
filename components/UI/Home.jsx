import psgTechImage from "@/assets/psg_entrance.png";
import Image from "next/image";
import calIcon from "@/assets/calenderIconLogo.svg";
import locIcon from "@/assets/locationIconLogo.svg";
import ScrollToTopIcon from "@/assets/scrollToTop.svg";
import React from "react";
import Sponsers from "./Sponsers";
import Organizers from "./Organizers";
import PreConferenceSchoolLinksComponent from "./PreConferenceSchoolLinksComponent";

export default function Home() {
    return (
        <>
            <div className=" ">
                <div className="  ">
                    <Image
                        src={psgTechImage}
                        fill
                        style={{ objectFit: "cover", zIndex: "-1" }}
                        alt="PSG TECH Image"
                    />
                </div>
                <main className=" absolute w-full mt-[6%] max-md:mt-[8%] ">
                    <div className=" w-full flex justify-center py-5 ">
                        <i className=" text-6xl text-center text-headingColor font-bold  ">
                            CALDAM 2025
                        </i>
                    </div>
                    <div className=" w-4/6 mx-auto ">
                        <h3 className=" text-center text-headingColor font-bold text-xl ">
                            11th Annual International Conference on Algorithms
                            and Discrete Applied Mathematics
                        </h3>
                    </div>
                    <section className=" flex  justify-evenly mt-[3%]  ">
                        <div className=" flex items-center justify-center ">
                            <Image src={calIcon} alt="Calendar Icon" />
                            <div className=" text-lg ml-3 ">
                                <p>15 - 17 Feburary</p>
                                <p>2025</p>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center ">
                            <Image src={locIcon} alt="Location Icon" />
                            <div className=" text-lg ml-3 ">
                                <p>PSG College of Technology</p>
                                <p>Coimbatore, Tamilnadu, India</p>
                            </div>
                        </div>
                    </section>
                    <section className=" flex justify-evenly py-4 max-md:py-2  ">
                        <button className=" bg-headingColor text-white  rounded-md p-4 max-md:p-2  ">
                            Call for Papers
                        </button>
                        <button className=" bg-headingColor text-white  rounded-md p-4 max-md:p-2  ">
                            Accepted Papers
                        </button>
                    </section>
                    {/* The Below Section in  mobile Screen is not getting adapted by the Image of the PSG tech Background */}
                    {/*   Streching the image makes the image look ugly */}
                    {/*  Need to write CSS for mobile size   */}
                    <section className=" md:flex mt-4  mx-auto ">
                        <div className=" w-5/6 mx-auto ">
                            <p className=" mx-auto leading-8 text-lg max-md:text-sm max-md:w-5/6  ">
                                The International Conference on Algorithms and
                                Discrete Applied Mathematics (CALDAM), held
                                under aegis of the Association of Computer
                                Science is intended to bring together
                                researchers working in the areas of algorithms
                                and applied discrete mathematics and provide a
                                high-quality forum for the dissemination and
                                discussion of research results in these broad
                                areas. CALDAM has originated from the ongoing
                                efforts for promoting research in Algorithms and
                                Discrete Mathematics.
                            </p>
                        </div>
                        <div className=" flex md:flex-col justify-evenly items-center space-x-4 px-4 ">
                            <div className=" cursor-pointer flex w-full items-end max-md:justify-center0 ">
                                <Image
                                    src={calIcon}
                                    alt="Calendar Icon"
                                    className=""
                                />
                                <button className=" ml-2 ">
                                    Save The Date
                                </button>
                            </div>
                            <div>
                                <Image
                                    src={ScrollToTopIcon}
                                    alt="Scroll to top Icon"
                                    className=" rounded-full bg-white cursor-pointer shadow-md "
                                />
                            </div>
                        </div>
                    </section>
                    <PreConferenceSchoolLinksComponent/>
                    <Organizers/>
                    <Sponsers/>
                </main>
            </div>
        </>
    );
}
