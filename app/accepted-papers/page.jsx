import React from "react";
import Proceedings from "@/components/accepted-papers/components/Proceedings";
import Acceptedpapers from "@/components/accepted-papers/components/Acceptedpapers";

export default function AcceptedPapers() {
    return (
        <div className="container mx-auto px-4">
            <Proceedings />
            <Acceptedpapers/>
        </div>
    );
}
