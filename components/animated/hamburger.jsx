"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const Hamburger = ({ className, onClick }) => {
  const { rive, RiveComponent } = useRive({
    src: "hamburger_icon.riv",
    stateMachines: "OnClick",
    autoplay: true,
  });

  const toggle = useStateMachineInput(rive, "OnClick", "Switch");

  return (
    <div className={`aspect-square w-8 cursor-pointer ${className}`}>
      <RiveComponent
        onClick={() => {
          onClick();
          toggle && toggle.fire();
        }}
      />
    </div>
  );
};

export default Hamburger;
