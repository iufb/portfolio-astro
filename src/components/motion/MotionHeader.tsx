import { motion } from "framer-motion";

import { useState, useEffect, type PropsWithChildren, useRef } from "react";
export const MotionHeader = ({ children }: PropsWithChildren) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const headerRef = useRef(null);
  let prevScrollY = 0;
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      setScrollDirection("down");
    }
    if (currentScrollY < prevScrollY) {
      setScrollDirection("up");
    }
    prevScrollY = currentScrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.header
      ref={headerRef}
      className={`w-full sticky left-0 top-4 bg-primary  flex rounded-md py-2 lg:px-32 md:px-20 sm:px-10 px-2 z-50 justify-between text-lg`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: scrollDirection == "up" ? 1 : 0,
      }}
    >
      {children}
    </motion.header>
  );
};
