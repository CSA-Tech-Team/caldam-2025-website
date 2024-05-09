import React from "react";
import Proceedings from "@/components/accepted-papers/components/Proceedings";
import Acceptedpapers from "@/components/accepted-papers/components/Acceptedpapers";

export const metadata = {
  title: "CALDAM 2025 | Accepted Papers",
  description: "Accepted papers for CALDAM 2025."
}
export default function AcceptedPaper() {
  return (
    <div className="container mx-auto px-4">
      <Proceedings />
      <Acceptedpapers />
    </div>
  );
}
