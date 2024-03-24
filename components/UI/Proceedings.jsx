import React from "react";
import Banner from '@/assets/banner.png'

export default function Proceedings() {
    return (
        <div>
            <div className="flex justify-start">
                <div className="text-black text-3xl font-bold pt-10 pb-4 pl-10 pr-10">
                    PROCEEDINGS
                    <div className="border-b-2 border-yellow-500 w-full"></div>
                </div>
            </div>
            <div className=" pl-20  pr-10 font-bold ">
                Click on the banner below to access the proceedings of the conference.
            </div>
            <div className="pl-20 pr-20">
                <img src={Banner} alt="" />
            </div>
        </div>
        
        
    );
}
