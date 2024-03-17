import React from "react";
import speakers from "@/constants/Listofspeakers.json";

function Speakers() {

    return (
        <div className="flex flex-wrap">
            {speakers.map((item, index) => (
                <div key={index} className="relative bg-sky-950 text-white p-10 m-4 rounded-lg flex-initial flex-auto" style={{ minWidth: '400px' }}>
                    <h2 className="text-white text-left">{item.name}</h2>
                    <h2 className="text-white text-left">{item.institute}</h2>
                    <button className='absolute bottom-4 right-4 py-2 px-4 bg-yellow-400 rounded-md text-black font-bold' >Resource</button>
                </div>
            ))}
        </div>
    );
}

export default Speakers;
