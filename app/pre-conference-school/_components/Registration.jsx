import Link from "next/link";
import React from "react";

export default function Registration() {
  return (
    <div id="new" className=" space-y-5 bg-bluecolor px-9 py-7 text-white lg:px-12 ">
      <h1 className="text-3xl font-bold uppercase xl:text-3xl 2xl:text-4xl ">
        Registration
      </h1>
      <p className=" pb-4 lg:text-xl ">
        There is no registration fee for the school. Arrangements will be made
        for all speakers and 35 selected participants to stay in PSG College of
        Technology Campus and they will be provided with free boarding and
        lodging. Sleeper class (Non-AC) train fare may be provided for selected
        Indian student participants subject to availability of funds. Online
        registration will start on September 01, 2024.
        {/* end on November 01, 2024. */}
      </p>
      <button  className=" space-x-5 rounded-2xl bg-[#FCA311] px-5  py-3 font-semibold text-black  ">
        <Link
          prefetch
          href={`https://forms.gle/bLQzsE6VPY1eLC666`}
          target="_blank"
          className=" flex items-center  gap-x-3 text-lg lg:text-xl "
          id="new"
        >
          Register
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.87695 0.864496C2.87695 0.387048 3.264 0 3.74145 0H18.9982V1.72899H3.74145C3.264 1.72899 2.87695 1.34194 2.87695 0.864496Z"
              fill="#102133"
            />
            <path
              d="M18.1349 16.1373C17.6579 16.1373 17.2712 15.7507 17.2712 15.2737V8.01086e-05H18.9985V15.2737C18.9985 15.7507 18.6118 16.1373 18.1349 16.1373Z"
              fill="#102133"
            />
            <path
              d="M0.534466 18.4649C0.239289 18.1695 0.239289 17.6904 0.534466 17.3949L17.9122 -7.11603e-05L18.9811 1.06993L1.6034 18.4649C1.30822 18.7604 0.829644 18.7604 0.534466 18.4649Z"
              fill="#102133"
            />
          </svg>
        </Link>
      </button>
    </div>
  );
}
