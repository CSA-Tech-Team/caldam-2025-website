import Link from "next/link";
import React from "react";

export default function Button({ children, href }) {
    return (
        <Link
            href={href}
            prefetch
            className=" bg-navbg text-white px-10 rounded-lg py-2 text-md lg:text-lg  "
        >
            {children}
        </Link>
    );
}
