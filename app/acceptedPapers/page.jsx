import React from "react";
import Proceedings from "@/components/UI/Proceedings";
import Acceptedpapers from "@/components/UI/Acceptedpapers";

export default function AcceptedPapers() {
    return (
        <div className="container mx-auto px-4">
            <Proceedings />
            <Acceptedpapers/>
        </div>
    );
}
