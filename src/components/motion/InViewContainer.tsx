import { useRef, type PropsWithChildren } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export const InViewContainer = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.7, 1],
    ["0%", "20%", "-10%", "-10%"],
  );
  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ",
        y,
      }}
    >
      {children}
    </motion.div>
  );
};
