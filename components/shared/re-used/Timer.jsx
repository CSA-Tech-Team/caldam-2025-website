"use client"
import React, { useState, useEffect } from 'react';
import {Oswald} from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"]
})
function Timer() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-02-10') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const { days, hours, minutes } = timeLeft;

  return (
    <div className={`bg-[#102133] ${oswald.className} w-full z-50 relative text-white text-center py-4 text-6xl pt-6 font-bold`}>
      <div className="flex justify-center">
        {days > 0 && <span className="mr-2">{`${days}  :`}</span>}
        <span>{`${addLeadingZero(hours)} : ${addLeadingZero(minutes)}`}</span>
      </div>
    </div>
  );
}

export default Timer;
