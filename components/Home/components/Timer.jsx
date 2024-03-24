"use client";
import React, { useState, useEffect } from "react";

const Timer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
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
    <div className="bg-black text-white px-8 py-2 text-4xl lg:text-7xl  lg:py-4 xl:text-9xl lg:px-14 font-bold">
      {days > 0 && <span className="mr-2">{`${days}  :`}</span>}
      <span>{`${addLeadingZero(hours)} : ${addLeadingZero(minutes)}`}</span>
    </div>
  );
};

export default Timer;
