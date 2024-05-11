import TextContraction from "@/components/Home/components/TextContraction";
import React from "react";

export default function AboutCbe() {
  return (
    <div className=" space-y-4 text-lg ">
      <h2 className=" text-3xl font-bold  lg:text-4xl mt-5 ">About Coimbatore</h2>
      <div className=" p-2 ">
        <TextContraction
          contentStart={`Coimbatore, dubbed the "Manchester of South India," seamlessly blends
        tradition with innovation in a dynamic urban landscape. Renowned for its
        textile industry and home to PSG College of Technology, the city thrives
        as an educational and industrial hub. Beyond its urban sprawl lies a
        haven of natural beauty, with the Western Ghats offering picturesque
        landscapes and serene hill stations like Ooty.`}
          contentRemaining={`Yet, Coimbatore's true
         charm lies in its people, whose warmth and hospitality welcome visitors
         from all walks of life. Whether exploring ancient temples or indulging
         in local cuisine, every corner of Coimbatore tells a story of cultural
         richness and vibrant energy. It's a city where tradition meets
         modernity, where history coexists with progress, inviting travelers of
         all ages to embark on an enriching journey of discovery and wonder.`}
        />
      </div>
    </div>
  );
}
