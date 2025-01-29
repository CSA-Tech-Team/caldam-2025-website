"use client"

import React from "react"
import Image from "next/image"

const CondolenceMeeting = () => {
    return (
        <div className="flex justify-center items-center py-10 p-4 bg-gray-50">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden sm:p-8 p-4">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-200">
                            <Image src="/ajit-diwan.webp" alt="Ajit Arvind Diwan" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                        <header className="text-center md:text-left border-b pb-4 md:border-none md:pb-0">
                            <div className="flex justify-center md:justify-start mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-8 w-8 text-gray-600"
                                >
                                    <path d="M8 19v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1" />
                                    <path d="M12 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
                                    <path d="M12 12a3 3 0 0 0 0 6" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-serif text-gray-800 mb-2">Condolence Meeting</h1>
                            <p className="text-lg text-gray-600 mb-1">In Memory of</p>
                            <h2 className="text-2xl font-serif text-gray-800">Ajit Arvind Diwan</h2>
                        </header>
                    </div>
                </div>
                <main className="mt-8 px-4 sm:px-8">
                    <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                        A condolence meeting will be held at PSG College of Technology, Coimbatore. The meeting is scheduled
                        during CALDAM 2025, on February 13, 2025, at 6:45 PM.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                        You are requested to attend the meeting in person, but you may also join virtually using the link provided
                        below.
                    </p>
                    <p className="text-gray-700 mb-6 text-base md:text-lg">All are welcome.</p>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm md:text-base text-gray-600 mb-2">
                            For more information about Ajit Arvind Diwan, please visit:
                        </p>
                        <a
                            href="https://www.cse.iitb.ac.in/~aad/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline break-words text-sm md:text-base"
                        >
                            https://www.cse.iitb.ac.in/~aad/
                        </a>
                    </div>
                </main>
                <footer className="flex justify-center border-t mt-6 pt-4 pb-6">
                    <button
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => window.open("https://meet.google.com/fbh-fiqj-xfb", "_blank")}
                    >
                        Join Virtual Meeting
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default CondolenceMeeting

