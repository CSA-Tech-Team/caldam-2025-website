import React from "react";

function Button({ children }) {
  return (
    <button className=" rounded-md bg-[#FCA311] font-bold text-black max-lg:px-4 max-lg:py-2 lg:px-6 lg:py-3 ">
      {children}
    </button>
  );
}

export default Button;
