import NavElements from "@/constants/navbar-elements.json";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const MobileNavElement = ({ className, name, link }) => {
  return (
    <div className={`p-3 ${className}`}>
      <Link href={link}>{name}</Link>
    </div>
  );
};

export const MobileNavbar = ({ showNavbar }) => {
  const menuVariants = {
    initial: {
      scaleY: 0,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
    },
    exit: {
      scaleY: 0,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:hidden absolute w-full flex flex-col origin-top top-0 left-0 rounded-lg bg-[rbga(0,0,0,0.6)] p-3 z-10"
        >
          {NavElements &&
            NavElements.map((element, k) => (
              <div key={k} className="overflow-hidden">
                <MobileNavElement {...element} />
              </div>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const DesktopNavbar = ({ showNavbar }) => {
  const menuVariants = {
    initial: {
      scaleX: 0,
      opacity: 0,
    },
    animate: {
      scaleX: 1,
      opacity: 1,
    },
    exit: {
      scaleX: 0,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="hidden lg:flex absolute flex-row origin-right top-0 right-0 rounded-full bg-magenta p-3 px-10 pr-20 z-10"
        >
          {NavElements &&
            NavElements.map((element, k) => (
              <div key={k} className="overflow-hidden">
                <MobileNavElement {...element} />
              </div>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
