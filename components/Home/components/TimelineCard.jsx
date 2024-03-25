"use client";

import { useIntersection } from "@/components/context/useIntersection";
import { useEffect, useRef, useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const TimelineCard = ({
  isDesktop,
  time,
  title,
  isExpandable,
  expandHTMLContent,
  index,
  isTrigger,
  triggerCallback,
}) => {
  const [expanded, setExpanded] = useState(false);

  const element = useRef(null);
  const isVisible = useIntersection(element, "0px");

  useEffect(() => {
    if (isVisible && isTrigger) {
      triggerCallback();
    }
  }, [isVisible, isTrigger, triggerCallback]);

  return (
    <div
      ref={element}
      className={`flex flex-col -space-y-2 ${index != 0 && (isDesktop ? "mt-20" : "mt-10")}`}
    >
      <div className="bg-orange rounded-lg px-4 py-2 w-fit ml-3 z-10 text-black">
        <p className="text-sm lg:text-base">{time}</p>
      </div>
      <div className="bg-bluecolor rounded-md p-4">
        <div className="flex justify-between space-x-10">
          <p className="text-xl lg:text-2xl">{title}</p>
          {isExpandable && (
            <button
              onClick={(e) => {
                setExpanded(!expanded);
              }}
            >
              <BsChevronExpand className="text-white" />
            </button>
          )}
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  scaleY: 0,
                },
                animate: {
                  opacity: 1,
                  scaleY: 1,
                },
              }}
              initial="initial"
              animate="animate"
              exit="initial"
              className="mt-5 whitespace-pre-line origin-top text-base lg:text-lg"
            >
              {expandHTMLContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimelineCard;
