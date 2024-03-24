import React from "react";
import Banner from '@/assets/banner.png';
import Image from "next/image";
export default function Proceedings() {
    return (
        <div>
            <div className="flex justify-start">
                <div className="text-black text-3xl font-bold pt-10 pb-4 px-3">
                    <i>PROCEEDINGS</i>
                    <div className="border-b-2 border-yellow-500 w-full"></div>
                </div>
            </div>
            <div className=" px-4 font-semibold text-xl max-lg:text-md ">
                Click on the banner below to access the proceedings of the conference.
            </div>
            <div className=" px-4 py-4 flex w-full justify-center ">
                <Image src={Banner} alt="Banner" className=" max-md:h-48 " />
            </div>
        </div>
        
        
    );
}
