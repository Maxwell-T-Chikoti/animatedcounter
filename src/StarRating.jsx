import React from "react";
import { motion } from "framer-motion";
import { useMyAnimatedCounter } from "./useMyAnimatedCounter";

export const StarRating = () => {
  const { count, incrementProps, resetProps } = useMyAnimatedCounter(0, 5, 0, 1);

  return (
    <div>
      <motion.div whileTap={{ scale: 1.2 }}>
        <button {...incrementProps}>★</button>
      </motion.div>
      <div>Rating: {count} stars</div>
      <button {...resetProps}>Reset</button>
    </div>
  );
};
