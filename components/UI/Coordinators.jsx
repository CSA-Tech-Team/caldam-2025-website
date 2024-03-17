import React from "react";
import Coordinators from '@/constants/Coordinators.json'
function Coordinator(){
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 p-6">COORDINATORS</h1>
            <div className="flex flex-wrap">
                {Coordinators.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 rounded-3xl">
                        <div className="bg-gray-200 p-6 rounded-md">
                            <div className="text-3xl font-semibold mb-2">{item.name}</div>
                            <div className="text-1g">{item.institute}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Coordinator;