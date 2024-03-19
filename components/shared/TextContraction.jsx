"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Triangle } from "react-feather";

const TextContraction = ({ className, contentStart, contentRemaining }) => {
  const [expand, setExpand] = useState(false);

  const variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  return (
    <div className={`${className}`}>
      {contentStart}{" "}
      {!expand && (
        <>
          ...{" "}
          <button
            className="rotate-90 focus:rotate-180 transition-all"
            onClick={(e) => {
              setTimeout(() => {
                setExpand(!expand);
              }, 200);
            }}
          >
            <Triangle size={15} />
          </button>
        </>
      )}
      <AnimatePresence>
        {expand && (
          <motion.div
            className="inline"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {contentRemaining}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextContraction;
