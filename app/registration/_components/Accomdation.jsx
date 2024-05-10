import React from "react";
import Hotels from "./Hotels";
import AccomdationNotes from "./AccomdationNotes";
import AccomdationByPSG from "./AccomdationByPSG";

export default function Accomdation() {
  return (
    <div className=" p-6 lg:p-10 ">
      <AccomdationNotes />
      <AccomdationByPSG />
      <Hotels />
    </div>
  );
}
