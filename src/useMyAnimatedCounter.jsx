import { useState } from "react";

export const useMyAnimatedCounter = (min, max, initial, step) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) setCount((prev) => prev + step);
  };

  const reset = () => {
    setCount(initial);
  };

  return {
    count,
    incrementProps: {
      onClick: increment,
      "aria-label": "Increment counter",
    },
    resetProps: {
      onClick: reset,
      "aria-label": "Reset counter",
    },
    countDisplayProps: {
      "aria-live": "polite",
      children: count,
    },
  };
};
