import React from "react";
import coordinators from "@/constants/Coordinators.json";
import CardGrid from "@/components/commitees/components/CardGrid";
function Coordinators() {
  return (
    <div>
      <h1 className=" px-10 py-5 text-3xl font-bold text-bluecolor lg:text-4xl ">
        COORDINATORS
      </h1>
      <div className=" px-10 lg:px-12 py-7  ">
        <CardGrid data={coordinators} />
      </div>
    </div>
  );
}

export default Coordinators;
