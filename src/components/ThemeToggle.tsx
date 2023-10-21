import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
export const ThemeToggle = () => {
  const [darkMode, setMode] = useState<boolean>(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const toggle = (theme: string) => {
    setMode(theme == "dark");
    const root = document.documentElement;
    if (theme == "dark") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    toggle(theme ? theme : "light");
  }, [darkMode]);
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
        onChange={() => setMode((prev) => !prev)}
        className="hidden "
        id="theme"
      />
    </label>
  );
};
