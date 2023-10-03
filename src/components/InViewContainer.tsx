import { useRef, type PropsWithChildren } from "react";
import { motion, useInView } from "framer-motion";
export const InViewContainer = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: inView ? "none" : "translateX(-200px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ",
      }}
    >
      {children}
    </motion.div>
  );
};
