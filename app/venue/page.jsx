import React from "react";
import ReachingCbe from "./_components/ReachingCbe";
import AboutCbe from "./_components/AboutCbe";
import TouristPlacesNearCbe from "./_components/TouristPlacesNearCbe";

export const metadata = {
  title: "CALDAM 2025 | Venue",
  description: "Committees for CALDAM 2025."
}

export default function VenuePage() {
  return (
    <div
    className=" p-10 "
    >
      <ReachingCbe />
      <AboutCbe />
      <TouristPlacesNearCbe />
    </div>
  );
}
