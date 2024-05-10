import Pricing from "@/components/registration/components/Pricing";
import Link from "next/link";
import React from "react";
import Accomdation from "./_components/Accomdation";

export default function Page() {
  return (
    <main>
      <div>
        <div className="p-8 lg:p-14">
          <h1 className="mb-8 text-4xl font-semibold">REGISTRATION</h1>
          <div className="mb-8 flex max-lg:flex-col max-lg:space-y-4 lg:items-stretch lg:space-x-4">
            <div className="flex-1">
              <div className="rounded-lg border border-bluecolor">
                <div className="rounded-t-md bg-bluecolor px-4 py-3 text-lg text-white">
                  <h1>Indian Participants</h1>
                </div>
                <div className="flex justify-stretch max-md:flex-col">
                  <Pricing
                    className="flex-1 border max-xl:px-5 max-lg:py-8 max-md:border-b-bluecolor md:border-r-bluecolor lg:py-5 xl:p-8"
                    title="Regular"
                    subTitle="with proceedings"
                    isEarlyBird={true}
                    regularPrice="₹ 8500"
                    earlyBirdPrice="₹ 8000"
                  />
                  <Pricing
                    className="flex-1 max-xl:px-5 max-lg:py-8 lg:py-5 xl:p-8"
                    title="Student"
                    subTitle="without proceedings"
                    isEarlyBird={true}
                    regularPrice="₹ 4500"
                    earlyBirdPrice="₹ 4000"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-lg border border-bluecolor">
                <div className="rounded-t-md bg-bluecolor px-4 py-3 text-lg text-white">
                  <h1>Foreign Participants</h1>
                </div>
                <div className="flex justify-stretch max-md:flex-col">
                  <Pricing
                    className="flex-1 border max-xl:px-5 max-lg:py-8 max-md:border-b-bluecolor md:border-r-bluecolor lg:py-5 xl:p-8"
                    title="Regular"
                    subTitle="with proceedings"
                    isEarlyBird={true}
                    regularPrice="$450"
                    earlyBirdPrice="$300"
                  />
                  <Pricing
                    className="flex-1 max-xl:px-5 max-lg:py-8 lg:py-5 xl:p-8"
                    title="Student"
                    subTitle="with proceedings"
                    isEarlyBird={true}
                    regularPrice="$250"
                    earlyBirdPrice="$150"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 text-sm font-light italic xl:text-base">
            <p>
              * Early bird registration is till 31 December 2024. Registration
              done on or after 1 January 2025 will be considered late.
            </p>
            <p>* All prices are inclusive of 18% GST.</p>
            <p>
              * At least one author of each accepted paper must register (by the
              deadline of the camera ready version) in the appropriate category
              in order for the paper to be included in the conference
              proceedings. If an author has two papers, then one different
              author for every paper must register. Registration (regular or
              student) includes admission to all technical sessions, lunches,
              tea/coffee and banquet dinner.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bluecolor p-8 lg:p-14">
        <div className=" flex max-h-fit flex-col  py-4 ">
          <h1 className="mb-8 text-4xl font-semibold uppercase text-white lg:text-4xl">
            Steps for registration
          </h1>
          <div className="flex items-center gap-x-3 text-2xl font-medium text-white">
            <div>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="27" fill="#FCA311" />
                <path
                  d="M25.292 40V16.96L27.812 19.48H20.252V14.8H31.124V40H25.292Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>TRANSFER REGISTRATION FEE</div>
          </div>
          <div className="ml-6 border-l-8 border-orange py-4 pl-5">
            <ul className="space-y-2 text-lg font-light leading-tight text-white lg:text-xl">
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                Transfer the respective registration fee as per the above table
                using the steps mentioned below 
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                After payment, please send the transaction receipt and details
                to{" "}
                <span className=" text-orange">
                  <Link
                    target="_blank"
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=caldam2025@psgtech.ac.in"
                    className=" lg:text-lg "
                    prefetch
                  >
                    caldam2025@psgtech.ac.in
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3 text-2xl font-medium text-white">
            <div>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="27" fill="#FCA311" />
                <path
                  d="M17.188 40V36.22L26.908 27.04C27.676 26.344 28.24 25.72 28.6 25.168C28.96 24.616 29.2 24.112 29.32 23.656C29.464 23.2 29.536 22.78 29.536 22.396C29.536 21.388 29.188 20.62 28.492 20.092C27.82 19.54 26.824 19.264 25.504 19.264C24.448 19.264 23.464 19.468 22.552 19.876C21.664 20.284 20.908 20.92 20.284 21.784L16.036 19.048C16.996 17.608 18.34 16.468 20.068 15.628C21.796 14.788 23.788 14.368 26.044 14.368C27.916 14.368 29.548 14.68 30.94 15.304C32.356 15.904 33.448 16.756 34.216 17.86C35.008 18.964 35.404 20.284 35.404 21.82C35.404 22.636 35.296 23.452 35.08 24.268C34.888 25.06 34.48 25.9 33.856 26.788C33.256 27.676 32.368 28.672 31.192 29.776L23.128 37.372L22.012 35.248H36.232V40H17.188Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>REGISTRATION</div>
          </div>
          <div className="ml-6 border-l-8 border-orange py-4 pl-5">
            <ul className="space-y-2 text-lg font-light leading-tight text-white lg:text-xl">
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                After transferring the registration fee, please fill the{" "}
                <span className=" text-orange">
                  <Link
                    target="_blank"
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=caldam2025@psgtech.ac.in"
                    className=" lg:text-lg "
                    prefetch
                  >
                    Conference Registration Form
                  </Link>
                </span>
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                Those who register as students are directed to submit a soft
                copy of a certificate stating that (s)he is a bonafide student,
                from their respective supervising guide/HoD to{" "}
                <span className=" text-orange">
                  <Link
                    target="_blank"
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=caldam2025@psgtech.ac.in"
                    className=" lg:text-lg "
                    prefetch
                  >
                    caldam2025@psgtech.ac.in
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3 text-2xl font-medium text-white">
            <div>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="27" fill="#FCA311" />
                <path
                  d="M25.576 40.432C23.824 40.432 22.084 40.204 20.356 39.748C18.628 39.268 17.164 38.596 15.964 37.732L18.232 33.268C19.192 33.964 20.308 34.516 21.58 34.924C22.852 35.332 24.136 35.536 25.432 35.536C26.896 35.536 28.048 35.248 28.888 34.672C29.728 34.096 30.148 33.304 30.148 32.296C30.148 31.336 29.776 30.58 29.032 30.028C28.288 29.476 27.088 29.2 25.432 29.2H22.768V25.348L29.788 17.392L30.436 19.48H17.224V14.8H34.864V18.58L27.88 26.536L24.928 24.844H26.62C29.716 24.844 32.056 25.54 33.64 26.932C35.224 28.324 36.016 30.112 36.016 32.296C36.016 33.712 35.644 35.044 34.9 36.292C34.156 37.516 33.016 38.512 31.48 39.28C29.944 40.048 27.976 40.432 25.576 40.432Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>FINAL STEPS</div>
          </div>
          <div className="ml-6 py-4 pl-5">
            <ul className="space-y-2 text-lg font-light leading-tight text-white lg:text-xl">
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                Thank you for registering for CALDAM 2025
              </li>
              <li className="before:content-[' '] relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-orange">
                You should be receiving a confirmation mail for the registration
                shortly
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Accomdation />
    </main>
  );
}
