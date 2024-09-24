import React from "react";
import Link from "next/link";
const SparklingText = ({ content }) => {
  return (
    <div className="flex items-center justify-center">
      <Link
      href={content.newlink}
      >
        <h1 className="animate-sparkle font-bold text-white">{content.new}</h1>
      </Link>
    </div>
  );
};

export default SparklingText;
