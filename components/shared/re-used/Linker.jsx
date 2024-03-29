import Link from "next/link";
import React from "react";

export default function Button({ children, href }) {
  return (
    <Link
      href={href}
      prefetch
      className=" text-md rounded-xl bg-bluecolor px-10 py-2 text-white lg:text-lg  "
    >
      {children}
    </Link>
  );
}
