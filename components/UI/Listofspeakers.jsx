import React from "react";
import speakers from "@/constants/Listofspeakers.json";
import Button from "@/components/UI/Button";

function Speakers() {

    return (
        <div>
            <div className="text-sky-950 text-3xl font-bold pt-10 pb-4 pl-10 pr-10">LIST OF SPEAKERS</div>
            <div className="flex flex-wrap p-6">
                {speakers.map((item, index) => (
                    <div key={index} className="relative bg-sky-950 text-white p-10 m-4 rounded-lg  flex-auto" style={{ minWidth: '400px' }}>
                        <h2 className="text-white text-left">{item.name}</h2>
                        <h2 className="text-white text-left">{item.institute}</h2>
                        <Button>Resource</Button>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Speakers;
