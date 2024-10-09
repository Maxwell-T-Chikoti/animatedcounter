import React from 'react';
import { motion } from 'framer-motion';
import { useMyAnimatedCounter } from './useMyAnimatedCounter';

export const Heart = () => {
  const { count, incrementProps, resetProps } = useMyAnimatedCounter(
    0,
    1,
    0,
    1
  );

  return (
    <motion.div
      whileTap={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 0.5 }}
    >
      <button {...incrementProps}>❤️</button>
      <button {...resetProps}>Reset</button>
      <div>Likes: {count}</div>
    </motion.div>
  );
};
