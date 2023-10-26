import { useEffect, useState } from "react";
import { Icon } from "astro-icon";
import { AnimatePresence, motion } from "framer-motion";
export const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
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

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
    }
  }, [theme]);
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

  return isMounted ? (
    <label
      htmlFor="theme"
      className={`text-2xl flex items-center ml-4 border p-[6px] border-text rounded-full  cursor-pointer `}
    >
      {theme == "dark" && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <AnimatePresence>
            <Icon pack="bi" name="sun-fill" />
          </AnimatePresence>
        </motion.div>
      )}
      {theme == "light" && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <AnimatePresence>
            <Icon pack="bi" name="moon-fill" />
          </AnimatePresence>
        </motion.div>
      )}
      <input
        data-theme-toggle
        type="checkbox"
        checked={theme == "dark"}
        onChange={toggleTheme}
        className="hidden "
        id="theme"
      />
    </label>
  ) : (
    <div />
  );
};
