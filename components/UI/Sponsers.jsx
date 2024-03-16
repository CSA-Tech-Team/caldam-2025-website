import React from "react";
import SponsersOfCaldam from "@/constants/SponsersConstants.json";
import Image from "next/image";

export default function Sponsers() {
    return (
        <div className="p-4">
            <div className="mb-10">
                <h1 className="font-bold text-5xl">Sponsers</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-8 justify-center">
                {SponsersOfCaldam.map((organizer, index) => (
                    <div
                        key={index}
                        className="bg-sponsersBgColor  h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-lg overflow-hidden relative"
                    >
                        <Image
                            src={organizer.imageUrl || ""}
                            alt={organizer.organizationName}
                            className=" h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-black text-center">
                                {organizer.organizationName}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
