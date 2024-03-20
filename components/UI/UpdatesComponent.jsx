import React from "react";
import updates from "@/constants/updates.json";
import { BiDownload } from "react-icons/bi";
export default function UpdatesComponent() {
    return (
        <div className=" py-4 ">
            <div className=" flex">
                <p
                className=" w-24 h-24 "
                >Feb 15th</p>

                <div className=" flex items-end border border-black ">
                    <p>{"Indo-Slovenia Pre-Conference School"}</p>

                    <BiDownload />
                </div>
            </div>
        </div>
    );
}
