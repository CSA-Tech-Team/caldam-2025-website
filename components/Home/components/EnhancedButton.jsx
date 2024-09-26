"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Sparkles = () => (
  <svg
    className="absolute h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    {[...Array(10)].map((_, i) => (
      <circle
        key={i}
        className={`animate-sparkle-${i + 1}`}
        cx={`${Math.random() * 100}%`}
        cy={`${Math.random() * 100}%`}
        r="1"
        fill="currentColor"
      />
    ))}
  </svg>
);

export default function EnhancedSparkleButton() {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      scale: 1.05,
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      scale: 1,
      transition: { duration: 0.3 },
    });
  };

  const handleTap = () => {
    controls.start({
      scale: 0.95,
      transition: { duration: 0.1 },
    });
  };

  return (
    <motion.div
      className="relative inline-block max-lg:mt-5 lg:ml-10 "
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTapStart={handleTap}
      onTapEnd={handleHoverStart}
    >
      <button className="group relative z-10  overflow-hidden rounded-md bg-gradient-to-r from-indigo-600 to-orange px-2 py-2 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <span className="relative z-10 flex items-center">
          Paper Submission
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 via-indigo-500 to-orange"
          animate={{
            x: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />
      </button>
      <div className="pointer-events-none absolute inset-0 text-yellow-200 opacity-70">
        <Sparkles />
      </div>
      <motion.div
        className="absolute -right-1 -top-1 text-yellow-300"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Star className="h-6 w-6 fill-current" />
      </motion.div>
    </motion.div>
  );
}
