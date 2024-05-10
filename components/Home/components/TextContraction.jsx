"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";

const TextContraction = ({
  className,
  contentStart,
  contentRemaining,
  contentLinks,
  contentAfterLink,
}) => {
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
      <Link
        className=" max-lg:hidden "
        target="_blank"
        prefetch
        href={"http://acsdm.in/acsdm/index.html"}
      >
        {contentLinks}
      </Link>{" "}
      <span className=" max-lg:hidden ">{contentAfterLink} </span>
      {!removeExpandButton && (
        <>
          <button
            className="relative"
            onClick={(e) => {
              e.preventDefault();
              setExpand(true);
              setTimeout(() => {
                setRemoveExpandButton(true);
              }, 1000);
            }}
          >
            <IoMdArrowDroprightCircle
              className={`${expand && "translate-x-10  opacity-0"} absolute -top-4 left-0 text-xl transition-all`}
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
            <span className=" lg:hidden ">{contentAfterLink} </span>
            <Link
              className=" lg:hidden "
              target="_blank"
              prefetch
              href={"http://acsdm.in/acsdm/index.html"}
            >
              {contentLinks}
            </Link>{" "}
            {contentRemaining}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TextContraction;
