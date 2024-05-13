import TextContraction from "@/components/Home/components/TextContraction";
import React from "react";
import reachbytrain from "@/constants/reachbytrain.json";
export default function ReachingCbe() {
  return (
    <div>
      <div className=" space-y-4 ">
        <h1 className="mb-2 block text-4xl font-bold"> Reaching Coimbatore</h1>
        <h1 className=" text-3xl font-semibold ">By Air</h1>
        <div className=" mb-4 p-3 lg:text-lg">
          <TextContraction
            className={` max-lg:hidden`}
            contentStart={` Ensure your flight is booked to Coimbatore, Tamil Nadu, India (IATA
          code: CBE, ICAO code: VOCB) for your journey to PSG College of
          Technology. Coimbatore International Airport serves as your arrival
          point, conveniently located approximately 4 kilometers from PSG
          College of Technology, offering both domestic and limited
          international connections. Various transportation options are
          available from the airport to the college and its vicinity.`}
            contentRemaining={`For a
          hassle-free and safe journey, consider utilizing pre-paid taxi
          services in
          addition to traditional options like Uber and Ola. Taxi fares
          typically range between 300 to 500 INR, depending on the vehicle type
          and service provider. Additionally, travelers can opt for the airport shuttle service, which operates from the arrivals area. The shuttle fare is around 150 INR, and you can disembark near PSG College of Technology. Guests staying at nearby hotels can arrange pick-up services through their accommodations for added convenience.

          `}
          />
          <TextContraction
            className={`lg:hidden`}
            contentStart={` Ensure your flight is booked to Coimbatore, Tamil Nadu, India (IATA
          code: CBE, ICAO code: VOCB) for your journey to PSG College of
          Technology. Coimbatore International Airport serves as your arrival
          point, conveniently located approximately 4 kilometers from PSG
          College of Technology, offering both domestic and limited
          international connections.`}
            contentRemaining={`Various transportation options are
          available from the airport to the college and its vicinity.For a
          hassle-free and safe journey, consider utilizing pre-paid taxi
          services  in
          addition to traditional options like Uber and Ola. Taxi fares
          typically range between 300 to 500 INR, depending on the vehicle type
          and service provider. Additionally, travelers can opt for the airport shuttle service, which operates from the arrivals area. The shuttle fare is around 150 INR, and you can disembark near PSG College of Technology. Guests staying at nearby hotels can arrange pick-up services through their accommodations for added convenience.
          `}
          />
        </div>
      </div>
      <div className=" space-y-4 ">
        <h1 className=" mt-4 text-3xl font-semibold ">By Train</h1>
        <div className=" p-3 lg:text-lg ">
          <p>
            Peelamedu, the location of PSG College of Technology in Coimbatore,
            Tamil Nadu, enjoys excellent railway connectivity through various
            nearby railway stations. These stations provide convenient access to
            the college and its surrounding areas. From any of these stations,
            you can easily reach accommodations near PSG College of Technology
            using a variety of transportation options such as pre-paid taxis,
            Ola/Uber cabs, or auto-rickshaws.
          </p>
          <ul className=" space-y-4 px-3 py-4 leading-tight ">
            {reachbytrain.map((train, i) => {
              return (
                <li
                  key={i}
                  className=" before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange "
                >
                  {train.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" space-y-4 lg:text-lg">
          <h1 className=" text-3xl font-semibold ">By Road</h1>
          <p className=" p-2 ">
            For travelers arriving at Coimbatore by bus and stepping off at the
            Gandhipuram Bus Stand, navigating to PSG College of Technology is
            straightforward. Situated in Peelamedu, the college is conveniently
            reachable from the bus stand via various transportation modes.
            Whether choosing a taxi, auto-rickshaw, or public bus, reaching PSG
            College of Technology is a simple endeavor.
          </p>
        </div>
      </div>
    </div>
  );
}
