"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileUpIcon, SparklesIcon } from "lucide-react"

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className="relative overflow-hidden bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-bold py-6 px-12 rounded-xl shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative flex items-center justify-center space-x-2"
        animate={isHovered ? { y: -30 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <AnimatePresence>
          {!isHovered && (
            <motion.span
              className="absolute text-2xl font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              Ready to Share?
            </motion.span>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FileUpIcon className="w-6 h-6" />
              <span className="text-xl">Submit Your Paper</span>
              <SparklesIcon className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-0"
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full"
          animate={{
            x: [0, (index + 1) * 30 * (index % 2 === 0 ? 1 : -1)],
            y: [0, -30, 0],
            opacity: [1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.button>
  )
}