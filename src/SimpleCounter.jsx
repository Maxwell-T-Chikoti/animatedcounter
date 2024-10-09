import React from "react";
import { motion } from "framer-motion";
import { useMyAnimatedCounter } from "./useMyAnimatedCounter";

export const SimpleCounter = () => {
  const { count, incrementProps, resetProps, countDisplayProps } = useMyAnimatedCounter(0, 10, 0, 1);

  return (
    <div>
      <motion.div whileTap={{ scale: 1.2 }}>
        <button {...incrementProps}>Increment</button>
        <button {...resetProps}>Reset</button>
      </motion.div>
      <div {...countDisplayProps}></div>
    </div>
  );
};
