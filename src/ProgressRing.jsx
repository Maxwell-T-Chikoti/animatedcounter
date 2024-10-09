import React from 'react';
import { motion } from 'framer-motion';
import { useMyAnimatedCounter } from './useMyAnimatedCounter';

export const ProgressRing = () => {
  const { count, incrementProps, resetProps } = useMyAnimatedCounter(
    0,
    100,
    0,
    10
  );

  return (
    <div>
      <motion.div
        animate={{ strokeDashoffset: 100 - count }}
        transition={{ duration: 0.5 }}
        style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
      >
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="5"
            fill="none"
          />
        </svg>
      </motion.div>
      <button {...incrementProps}>Progress</button>
      <button {...resetProps}>Reset</button>
      <div>{count}%</div>
    </div>
  );
};
