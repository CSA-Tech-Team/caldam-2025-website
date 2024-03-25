"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const TextContraction = ({ className, contentStart, contentRemaining }) => {
  const [expand, setExpand] = useState(false);
  const [removeExpandButton, setRemoveExpandButton] = useState(false);

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`${className}`}
    >
      {contentStart}{" "}
      {!removeExpandButton && (
        <>
          <button
            className="relative"
            onClick={(e) => {
              setExpand(true);
              setTimeout(() => {
                setRemoveExpandButton(true);
              }, 1000);
            }}
          >
            <IoMdArrowDroprightCircle
              className={`${expand && "translate-x-10  opacity-0"} transition-all text-xl absolute -top-4 left-0`}
            />
          </button>
        </>
      )}
      <AnimatePresence>
        {expand && (
          <motion.span
            className="origin-top"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {contentRemaining}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TextContraction;
