import React from "react";
import importantDates from "@/constants/importantDates.json";
import LineImage from "@/public/line.svg";
import Image from "next/image";
import Linker from "@/components/shared/re-used/Linker";
import CaldamTopics from "@/constants/caldamTopics.json";
import Link from "next/link";
import TextContraction from "@/components/Home/components/TextContraction";

export const metadata = {
  title: "CALDAM 2025 | Call For Papers",
  description: "Call For Papers for CALDAM 2025.",
};
export default function Page() {
  return (
    <main>
      <div className="flex max-h-fit min-h-[45vh] flex-col bg-bluecolor px-10 py-10 lg:px-20 ">
        <h1 className="font-semibold text-white max-md:text-[30px] max-sm:text-[24px] lg:text-[36px] ">
          SUBMISSION DETAILS
        </h1>
        <div className="w-full justify-between py-8 max-md:flex max-md:flex-col max-md:px-8 max-sm:px-0 lg:flex lg:px-12">
          <div className="h-fit flex-col gap-y-5 py-3 max-md:flex max-sm:flex max-sm:gap-y-5 sm:w-[100%] md:flex md:w-[100%] md:gap-y-5 lg:flex lg:w-[45%]">
            <div className="flex w-[100%] items-center justify-between rounded-xl bg-white pr-3  text-sm font-extralight">
              <div className="flex items-center gap-x-5  ">
                <svg
                  width="49"
                  height="53"
                  className="rounded-l-xl bg-[#FCA311]  "
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.789062" y="0.799988" width="48" height="48" />
                  <path
                    d="M15.9221 4.1239C15.3034 4.2739 14.7034 4.55515 14.2159 4.92078C13.6721 5.31453 8.82524 11.3801 8.46899 12.102C8.30961 12.4114 8.15024 12.8895 8.09399 13.1708C8.03774 13.4895 8.00024 18.7489 8.00024 27.8427C8.00024 43.2833 7.97211 42.4864 8.52524 43.5739C8.86274 44.2395 9.67836 45.0645 10.3346 45.4208C11.469 46.0208 10.719 45.9927 24.5002 45.9927C35.4409 45.9927 37.0909 45.9739 37.5784 45.852C39.1909 45.4302 40.4377 44.1739 40.8596 42.552C41.0752 41.7458 41.0752 8.23952 40.8596 7.43328C40.4377 5.8114 39.1909 4.55515 37.5784 4.13328C37.0909 4.0114 35.6846 3.99265 26.7034 4.00203C18.8565 4.00203 16.2784 4.03953 15.9221 4.1239ZM37.3065 7.2364C37.4471 7.33953 37.6534 7.54578 37.7565 7.6864L37.9534 7.93953V24.9927V42.0458L37.7565 42.2989C37.6534 42.4395 37.4471 42.6458 37.3065 42.7489C37.0534 42.9458 37.0252 42.9458 24.5002 42.9458C11.9752 42.9458 11.9471 42.9458 11.694 42.7489C11.5534 42.6458 11.3471 42.4395 11.244 42.2989C11.0471 42.0458 11.0471 42.0177 11.019 27.8895C11.0002 14.9239 11.0096 13.7145 11.1502 13.4333C11.2346 13.2645 12.3502 11.8208 13.6346 10.227C15.2096 8.23952 16.0534 7.26453 16.269 7.1614C16.5502 7.02077 17.4409 7.00203 26.8159 7.02077C36.9877 7.03953 37.0534 7.03953 37.3065 7.2364Z"
                    fill="#102133"
                  />
                  <path
                    d="M23.8905 16.1239C23.7405 16.1989 22.4842 17.3895 21.1061 18.7676C18.4155 21.4864 18.3874 21.5145 18.5467 22.3395C18.6311 22.7989 19.1936 23.3614 19.653 23.4458C20.3936 23.5864 20.6186 23.4645 21.8467 22.2458L22.9905 21.1208L23.0186 24.8333C23.0467 28.4145 23.0561 28.5551 23.2436 28.7989C23.6092 29.2958 23.9092 29.4458 24.4999 29.4458C25.0905 29.4458 25.3905 29.2958 25.7561 28.7989C25.9436 28.5551 25.953 28.4145 25.9811 24.8333L26.0092 21.1208L27.153 22.2458C28.3811 23.4645 28.6061 23.5864 29.3467 23.4458C29.8061 23.3614 30.3686 22.7989 30.453 22.3395C30.6124 21.5145 30.5842 21.4864 27.8936 18.7676C26.5155 17.3895 25.2592 16.1989 25.0905 16.1239C24.7155 15.9645 24.2561 15.9645 23.8905 16.1239Z"
                    fill="#102133"
                  />
                  <path
                    d="M16.3909 31.1239C15.7628 31.3958 15.4065 32.1176 15.5378 32.8208C15.6222 33.2614 16.0909 33.777 16.5128 33.8989C16.7472 33.9739 19.3722 33.9926 24.7065 33.9739C32.4597 33.9458 32.5534 33.9458 32.8065 33.7489C33.3034 33.3833 33.4534 33.0833 33.4534 32.4926C33.4534 31.902 33.3034 31.602 32.8065 31.2364C32.5534 31.0395 32.469 31.0395 24.6128 31.0208C18.1534 31.002 16.6159 31.0208 16.3909 31.1239Z"
                    fill="#102133"
                  />
                </svg>
                <h1 className="font-medium text-bluecolor">
                  Submission of Papers - EasyChair Smart CFP
                </h1>
              </div>
              <Link
                target="_blank"
                href={"https://easychair.org/conferences/?conf=caldam2025"}
                prefetch
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_838_942)">
                    <path
                      d="M19.7891 19.8H5.78906V5.79999H12.7891V3.79999H5.78906C4.67906 3.79999 3.78906 4.69999 3.78906 5.79999V19.8C3.78906 20.9 4.67906 21.8 5.78906 21.8H19.7891C20.8891 21.8 21.7891 20.9 21.7891 19.8V12.8H19.7891V19.8ZM14.7891 3.79999V5.79999H18.3791L8.54906 15.63L9.95906 17.04L19.7891 7.20999V10.8H21.7891V3.79999H14.7891Z"
                      fill="#102133"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_838_942">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.789062 0.799988)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            {/*<div className="flex w-[100%] items-center justify-between rounded-xl bg-white pr-3  text-sm font-extralight">
              <div className="flex items-center gap-x-5 ">
                 <svg width="49" height="53" className="bg-[#FCA311] rounded-l-xl p-2 " viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.789062" y="0.799988" width="48" height="48" />
                  <path d="M15.9221 4.1239C15.3034 4.2739 14.7034 4.55515 14.2159 4.92078C13.6721 5.31453 8.82524 11.3801 8.46899 12.102C8.30961 12.4114 8.15024 12.8895 8.09399 13.1708C8.03774 13.4895 8.00024 18.7489 8.00024 27.8427C8.00024 43.2833 7.97211 42.4864 8.52524 43.5739C8.86274 44.2395 9.67836 45.0645 10.3346 45.4208C11.469 46.0208 10.719 45.9927 24.5002 45.9927C35.4409 45.9927 37.0909 45.9739 37.5784 45.852C39.1909 45.4302 40.4377 44.1739 40.8596 42.552C41.0752 41.7458 41.0752 8.23952 40.8596 7.43328C40.4377 5.8114 39.1909 4.55515 37.5784 4.13328C37.0909 4.0114 35.6846 3.99265 26.7034 4.00203C18.8565 4.00203 16.2784 4.03953 15.9221 4.1239ZM37.3065 7.2364C37.4471 7.33953 37.6534 7.54578 37.7565 7.6864L37.9534 7.93953V24.9927V42.0458L37.7565 42.2989C37.6534 42.4395 37.4471 42.6458 37.3065 42.7489C37.0534 42.9458 37.0252 42.9458 24.5002 42.9458C11.9752 42.9458 11.9471 42.9458 11.694 42.7489C11.5534 42.6458 11.3471 42.4395 11.244 42.2989C11.0471 42.0458 11.0471 42.0177 11.019 27.8895C11.0002 14.9239 11.0096 13.7145 11.1502 13.4333C11.2346 13.2645 12.3502 11.8208 13.6346 10.227C15.2096 8.23952 16.0534 7.26453 16.269 7.1614C16.5502 7.02077 17.4409 7.00203 26.8159 7.02077C36.9877 7.03953 37.0534 7.03953 37.3065 7.2364Z" fill="#102133" />
                  <path d="M23.8905 16.1239C23.7405 16.1989 22.4842 17.3895 21.1061 18.7676C18.4155 21.4864 18.3874 21.5145 18.5467 22.3395C18.6311 22.7989 19.1936 23.3614 19.653 23.4458C20.3936 23.5864 20.6186 23.4645 21.8467 22.2458L22.9905 21.1208L23.0186 24.8333C23.0467 28.4145 23.0561 28.5551 23.2436 28.7989C23.6092 29.2958 23.9092 29.4458 24.4999 29.4458C25.0905 29.4458 25.3905 29.2958 25.7561 28.7989C25.9436 28.5551 25.953 28.4145 25.9811 24.8333L26.0092 21.1208L27.153 22.2458C28.3811 23.4645 28.6061 23.5864 29.3467 23.4458C29.8061 23.3614 30.3686 22.7989 30.453 22.3395C30.6124 21.5145 30.5842 21.4864 27.8936 18.7676C26.5155 17.3895 25.2592 16.1989 25.0905 16.1239C24.7155 15.9645 24.2561 15.9645 23.8905 16.1239Z" fill="#102133" />
                  <path d="M16.3909 31.1239C15.7628 31.3958 15.4065 32.1176 15.5378 32.8208C15.6222 33.2614 16.0909 33.777 16.5128 33.8989C16.7472 33.9739 19.3722 33.9926 24.7065 33.9739C32.4597 33.9458 32.5534 33.9458 32.8065 33.7489C33.3034 33.3833 33.4534 33.0833 33.4534 32.4926C33.4534 31.902 33.3034 31.602 32.8065 31.2364C32.5534 31.0395 32.469 31.0395 24.6128 31.0208C18.1534 31.002 16.6159 31.0208 16.3909 31.1239Z" fill="#102133" />
                </svg>
                <svg
                  width="49"
                  height="50"
                  viewBox="0 0 35 45"
                  className="flex justify-center rounded-l-xl bg-[#FCA311] p-2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2564 15.2706C12.0462 15.2706 8.62109 11.8455 8.62109 7.6353C8.62109 3.42513 12.0462 0 16.2564 0C20.4666 0 23.8917 3.42513 23.8917 7.6353C23.8917 11.8455 20.4666 15.2706 16.2564 15.2706ZM16.2564 3.07344C13.741 3.07344 11.6945 5.11991 11.6945 7.6353C11.6945 10.1507 13.741 12.1972 16.2564 12.1972C18.7718 12.1972 20.8182 10.1507 20.8182 7.6353C20.8182 5.11991 18.7718 3.07344 16.2564 3.07344Z"
                    fill="#102133"
                  />
                  <path
                    d="M5.53672 39.5156C4.68801 39.5156 4 38.8276 4 37.9789V27.1147C4 22.2236 7.97922 18.2444 12.8704 18.2444H19.6438C22.6821 18.2444 25.4789 19.7833 27.125 22.3606C27.6009 23.1061 27.961 23.9144 28.1954 24.7627C28.422 25.5802 27.9421 26.4272 27.1241 26.6533C26.3075 26.8812 25.4596 26.4004 25.2335 25.582C25.0803 25.0296 24.8454 24.5023 24.5341 24.0154C23.4557 22.3263 21.6275 21.3182 19.6438 21.3182H12.8704C9.67401 21.3182 7.07344 23.9188 7.07344 27.1152V37.9789C7.07344 38.8276 6.38543 39.5156 5.53672 39.5156Z"
                    fill="#102133"
                  />
                  <path
                    d="M26.9771 39.5156C26.1284 39.5156 25.4404 38.8276 25.4404 37.9789V36.9972C25.4404 36.1485 26.1284 35.4604 26.9771 35.4604C27.8259 35.4604 28.5139 36.1485 28.5139 36.9972V37.9789C28.5139 38.8276 27.8254 39.5156 26.9771 39.5156Z"
                    fill="#102133"
                  />
                  <path
                    d="M15.1703 30.1816L18.9089 26.443C19.5091 25.8428 20.4816 25.8428 21.0818 26.443C21.682 27.0427 21.682 28.0161 21.0818 28.6159L19.9666 29.7311H34.7599C35.6086 29.7311 36.2966 30.4191 36.2966 31.2678C36.2966 32.1165 35.6086 32.8046 34.7599 32.8046H19.9661L21.0818 33.9202C21.682 34.5204 21.682 35.4934 21.0818 36.0931C20.7815 36.3934 20.3885 36.5432 19.9951 36.5432C19.6017 36.5432 19.2083 36.393 18.9084 36.0931L15.1698 32.3541C14.5696 31.7543 14.5696 30.7814 15.1703 30.1816Z"
                    fill="#102133"
                  />
                </svg>

                <span>Log into EasyChair for CALDAM 2025</span>
              </div>
              <Link prefetch target="_blank" href={"https://easychair.org/"}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_838_942)">
                    <path
                      d="M19.7891 19.8H5.78906V5.79999H12.7891V3.79999H5.78906C4.67906 3.79999 3.78906 4.69999 3.78906 5.79999V19.8C3.78906 20.9 4.67906 21.8 5.78906 21.8H19.7891C20.8891 21.8 21.7891 20.9 21.7891 19.8V12.8H19.7891V19.8ZM14.7891 3.79999V5.79999H18.3791L8.54906 15.63L9.95906 17.04L19.7891 7.20999V10.8H21.7891V3.79999H14.7891Z"
                      fill="#102133"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_838_942">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.789062 0.799988)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div> */}
          </div>
          <div className="h-fit gap-x-4 py-3 max-md:flex max-md:w-[100%] max-sm:flex md:flex md:w-[100%] lg:flex lg:w-[45%]">
            <div>
              <svg
                width="32"
                height="0"
                viewBox="0 0 32 174"
                fill="none"
                className="max-lg:h-[200px] max-md:h-[125px] max-sm:h-[125px] md:h-[174px] lg:h-[125px] "
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="26"
                  height="27"
                  rx="3"
                  fill="#FCA311"
                />
                <path
                  d="M16 2H5C3.34315 2 2 3.34315 2 5V27C2 28.6569 3.34315 30 5 30H11"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M16 2H27C28.6569 2 30 3.34315 30 5V27C30 28.6569 28.6569 30 27 30H21"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M16 28L16 74"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M16 99L16 145"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M20 72H27C28.6569 72 30 73.3431 30 75V97C30 98.6569 28.6569 100 27 100H21"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M12 72H5C3.34315 72 2 73.3431 2 75V97C2 98.6569 3.34315 100 5 100H11"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M16 172H5C3.34315 172 2 170.657 2 169V147C2 145.343 3.34315 144 5 144H11"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M16 172H27C28.6569 172 30 170.657 30 169V147C30 145.343 28.6569 144 27 144H21"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="max-md:animate-marquee flex flex-col items-stretch justify-stretch text-left text-white lg:space-y-7 ">
              <h1 className="px-1">
                Last date for Paper Submission - October 03, 2024, AoE{" "}
              </h1>
              <h1 className="px-1">
                Notification of Acceptance - November 12, 2024, AoE{" "}
              </h1>
              <span className="px-1">
                Camera-ready Version - November 22, 2024, AoE{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-10 py-12 lg:px-14 lg:py-16 ">
        <h1 className="text-[36px] font-medium">SCOPE</h1>
        <div className=" py-4 ">
          <span className=" text-lg font-semibold max-lg:hidden ">
            CALDAM 2025 {"  "}
          </span>
          <span className=" text-lg leading-6 max-lg:hidden ">
            invites papers describing original research in the areas of design
            and analysis of algorithms and in discrete applied mathematics. An
            indicative list of sub-areas (but not limited to) are given below.
            Papers must be typeset using LaTeX/LaTeX2e and may not exceed 12
            pages in LNCS style, including bibliographic references. Further
            details may be included in a clearly marked appendix that will be
            read at the discretion of the program committee. Only electronic
            submission is allowed. Submitted papers must describe previously
            unpublished work and may not be submitted concurrently to another
            conference with refereed proceedings or to a refereed journal.
            {/*Please find the guidelines for authors on Springer website.*/}
            {/* Hide above text until further intimation. */}
          </span>
        </div>
        <TextContraction
          className={` lg:hidden lg:text-lg  `}
          contentStart={` CALDAM 2025 invites papers describing original research
          in the areas of design, analysis and experimental evaluation of
          algorithms and in discrete applied mathematics. An indicative list of
          sub-areas are given below. Papers must be typeset using LaTeX/LaTeX2e
          and may not exceed 12 pages in LNCS style, including bibliographic
          references. `}
          contentRemaining={`
          Further details may be included in a clearly marked appendix that will
          be read at the discretion of the program committee. Only electronic
          submission is allowed. Submitted papers must describe previously
          unpublished work and may not be submitted concurrently to another
          conference with refereed proceedings or to a refereed journal.
          `}
        />
      </div>
      <div className=" h-fit w-auto space-y-5 bg-bluecolor py-5 ">
        <div className="text-center">
          <h1 className="font-semibold text-white max-md:text-[30px] max-sm:flex max-sm:justify-center max-sm:text-[30px] lg:text-[36px] ">
            CALDAM TOPICS
          </h1>
          <p className="font-light italic text-white">but not limited to</p>
        </div>
        <div className=" text-white">
          <ul className=" flex flex-col gap-y-3 overflow-y-auto p-5 text-black max-lg:hidden max-lg:h-[50vh] max-lg:rounded-xl">
            {CaldamTopics.map((val, index) =>
              index % 5 === 0 ? (
                <div
                  key={index}
                  className=" min-md:flex-col justify-center gap-x-4 gap-y-3 overflow-y-auto p-3 text-center text-black lg:flex "
                >
                  {CaldamTopics.slice(index, index + 3).map((topic, i) => (
                    <div
                      key={i}
                      className="flex justify-center rounded-3xl bg-white p-3 font-semibold"
                      style={{ flex: 1 }}
                    >
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              ) : index % 5 === 3 ? (
                <div className="justify-center gap-x-4 text-center max-md:flex max-sm:flex-col max-sm:items-center max-sm:gap-y-3 md:flex lg:flex">
                  {CaldamTopics.slice(index, index + 2).map((topic, i) => (
                    <div
                      key={i}
                      className=" flex flex-1 items-center justify-center rounded-3xl bg-white p-3 font-semibold"
                    >
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              ) : null,
            )}
          </ul>
          <ul className="flex flex-col gap-y-3 overflow-y-auto text-black max-lg:h-[50vh]  max-lg:rounded-xl lg:hidden">
            {CaldamTopics.map((val, index) =>
              index % 5 === 0 ? (
                <div
                  key={index}
                  className="min-md:flex-col justify-center gap-x-4 text-center max-md:flex max-sm:flex-col max-sm:items-center max-sm:gap-y-3 md:flex lg:flex"
                >
                  <div className="flex w-[19vw] justify-center rounded-3xl bg-white p-3 font-semibold max-md:w-[40%] max-sm:w-[76vw]">
                    <span>{CaldamTopics[index]}</span>
                  </div>
                  <div className="flex w-[19vw] justify-center rounded-3xl bg-white p-3 font-semibold max-md:w-[40%] max-sm:w-[76vw]">
                    <span>{CaldamTopics[index + 1]}</span>
                  </div>
                  <div className="flex w-[19vw] justify-center rounded-3xl bg-white p-3 font-semibold max-md:w-[40%] max-sm:w-[76vw]">
                    <span>{CaldamTopics[index + 2]}</span>
                  </div>
                  {/* <div className="flex w-[19vw] justify-center rounded-3xl bg-white p-3 font-semibold max-md:w-[40vw] max-sm:w-[76vw]">
                    <span>{CaldamTopics[index + 3]}</span>
                  </div> */}
                </div>
              ) : index % 5 === 3 ? (
                <div className="justify-center gap-x-4 text-center max-md:flex max-sm:flex-col max-sm:items-center max-sm:gap-y-3 md:flex lg:flex">
                  <div className="flex items-center justify-center rounded-3xl bg-white  p-3 font-semibold max-md:w-[40vw] max-sm:w-[76vw]">
                    <span>{CaldamTopics[index]}</span>
                  </div>
                  <div className="flex w-[19vw] items-center justify-center rounded-3xl bg-white p-3 font-semibold max-md:w-[40vw]  max-sm:w-[76vw]">
                    <span>{CaldamTopics[index + 1]}</span>
                  </div>
                  {/* <div className="flex w-[19vw] items-center justify-center rounded-3xl bg-white p-3 font-semibold max-md:w-[40vw] max-sm:w-[76vw]">
                    <span>{CaldamTopics[index + 2]}</span>
                  </div> */}
                </div>
              ) : null,
            )}{" "}
          </ul>
        </div>
      </div>
    </main>
  );
}
