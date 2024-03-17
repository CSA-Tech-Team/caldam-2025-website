import React from "react";
import speakers from "@/constants/listof-speakers.json";
import Button from "@/components/shared/re-used/Button";

function Speakers() {

    return (
        <div className="flex flex-wrap">
            {speakers.map((item, index) => (
                <div key={index} className="relative bg-sky-950 text-white p-10 m-4 rounded-lg flex-initial flex-auto" style={{ minWidth: '400px' }}>
                    <h2 className="text-white text-left">{item.name}</h2>
                    <h2 className="text-white text-left">{item.institute}</h2>
                    <Button >Resource</Button>
                </div>
            ))}
        </div>
        
    );
}

export default Speakers;
