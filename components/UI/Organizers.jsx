import React from "react";
import OrganizersOfCalDAM from "@/constants/OrganizersConstants.json";
import Image from "next/image";

export default function Organizers() {
    return (
        <div className="p-4 mb-[3%]">
            <div className="mb-10">
                <h1 className="font-bold text-5xl">Organizers</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {OrganizersOfCalDAM.map((organizer, index) => (
                    <div
                        key={index}
                        className="bg-sponsersBgColor w-full h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-lg overflow-hidden relative"
                    >
                        <Image
                            src={organizer.imageUrl || ""}
                            alt={organizer.organizationName}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-white text-center">{organizer.organizationName}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
