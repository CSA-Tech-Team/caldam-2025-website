"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

const Hamburger = ({ className, onClick }) => {
  const { rive, RiveComponent } = useRive({
    src: "hamburger_icon.riv",
    stateMachines: "OnClick",
    autoplay: true,
  });

  const toggle = useStateMachineInput(rive, "OnClick", "Switch");

  return (
    <div className={`w-8 aspect-square cursor-pointer ${className}`}>
      <RiveComponent
        onClick={() => {
          onClick();
          console.log("Toggle");
          console.log(toggle);
          toggle && toggle.fire();
        }}
      />
    </div>
  );
};

export default Hamburger;
