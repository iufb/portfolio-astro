import { useEffect, type FC } from "react";
import { motion, useAnimate } from "framer-motion";
interface SparkleProps {
  position: string;
}
export const Sparkle: FC<SparkleProps> = ({ position }): JSX.Element => {
  const [scope, animate] = useAnimate();
  const ref = document.getElementById("skills");
  const handleAnimate = async () => {
    console.log("move");
    await animate(scope.current, { scale: 5 });
  };
  useEffect(() => {
    if (ref) {
      ref.addEventListener("mouseenter", handleAnimate);
    }
    return () => removeEventListener("mouseenter", handleAnimate);
  }, []);

  return (
    <motion.img
      src="/sparkles.webp"
      alt="sparkle"
      onClick={handleAnimate}
      className={`${position} absolute -z-10 w-10 h-10`}
      ref={scope}
    />
  );
};
