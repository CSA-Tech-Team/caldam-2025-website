"use client";

import { motion } from "framer-motion";
import { FileUpIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => {
        router.push("/call-for-papers");
      }}
      className="relative overflow-hidden rounded-[100px] bg-gradient-to-r from-blue-500 via-bluecolor to-bluecolor px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
      whileHover={{ boxShadow: "0 0 15px rgba(138, 43, 226, 0.5)" }}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative flex items-center justify-center space-x-2">
        <FileUpIcon className="h-6 w-6" />
        <motion.span
          className="text-xl"
          animate={{ opacity: [1, 0.5, 1] }} // Blink effect
          transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
        >
          Paper Submission deadline extended
        </motion.span>
      </div>
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Falling Stars Animation */}
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-yellow-400 rounded-full"
          style={{
            height: `${Math.random() * 8 + 4}px`,
            width: `${Math.random() * 8 + 4}px`,
            top: `${Math.random() * -50}px`, // Start above the button
            left: `${Math.random() * 100}%`,  // Random horizontal position
          }}
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: [0, 300], // Fall downwards
            opacity: [1, 0], // Fade out
          }}
          transition={{
            duration: Math.random() * 1 + 1, // Random fall duration
            repeat: Infinity,
            repeatType: "loop",
            delay: index * 0.2, // Stagger the start of each falling star
            ease: "easeIn",
          }}
        />
      ))}
    </motion.button>
  );
}
