import React from "react";

export default function OrgCommitee({ data }) {
  return (
    <div>
      <div className="space-y-3 text-balance text-4xl  font-semibold uppercase text-white max-lg:text-xl">
        <h1>Applied Mathematics and Computational Sciences,</h1>
        <h2>PSG College of Technology, India</h2>
      </div>
      {/* <ul className=" mx-auto flex w-60 flex-col justify-center space-y-5 overflow-auto max-lg:h-[60vh] lg:hidden  ">
        {data.map((d, i) => {
          return (
            <div key={i}>
              <li className="rounded-xl bg-orange p-4 text-center text-xl ">
                {d.name}
              </li>
            </div>
          );
        })}
      </ul> */}
      <ul className="mx-auto my-10 grid max-h-96 grid-cols-1 gap-5 gap-x-4 gap-y-5 overflow-y-auto rounded-lg border p-4 shadow-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-10 xl:grid-cols-5">
        {data.map((d, i) => {
          return (
            <div key={i} className="flex justify-center">
              <h1 className="flex h-20 w-60 items-center justify-center rounded-2xl bg-orange p-4 text-center text-xl">
                {d.name}
              </h1>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
