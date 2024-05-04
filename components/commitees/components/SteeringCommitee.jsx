import React from "react";
import steeringCommitee from "@/constants/steeringCommitee.json";
import PeopleCard from "@/components/shared/re-used/PeopleCard";
import CardGrid from "./CardGrid";

export default function SteeringCommitee() {
  return (
    <div className="p-8 lg:p-14">
      <p className="mb-10 text-4xl font-bold uppercase lg:text-5xl">
        Steering Committee
      </p>
      <CardGrid data={steeringCommitee} />
    </div>
  );
}
