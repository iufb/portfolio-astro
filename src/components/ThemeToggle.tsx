import { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
export const ThemeToggle = () => {
  const [darkMode, setMode] = useState<boolean>(false);
  const toggle = () => {
    setMode((prev) => !prev);
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  };
  const transition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const variants = {
    visible: {
      opacity: 1,
      rotate: 360,
      scale: 1,
      transition,
    },
    hidden: {
      opacity: 0,
      rotate: -360,
      scale: 0,
      transition,
    },
  };

  return (
    <label
      htmlFor="theme"
      className={`text-2xl flex items-center ml-4 border p-[6px] border-text rounded-full  cursor-pointer `}
    >
      {darkMode && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <AnimatePresence>
            <BsSunFill />
          </AnimatePresence>
        </motion.div>
      )}
      {!darkMode && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <AnimatePresence>
            <BsMoonFill />
          </AnimatePresence>
        </motion.div>
      )}
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggle}
        className="hidden "
        id="theme"
      />
    </label>
  );
};
