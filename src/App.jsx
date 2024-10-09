import React from 'react';
import { SimpleCounter } from './SimpleCounter';
import { StarRating } from './StarRating';
import { Heart } from './Heart';
import { ProgressRing } from './ProgressRing';
import { ThumbsUp } from './ThumbsUp';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Animated Counters</h1>
      <SimpleCounter />
      <StarRating />
      <Heart />
      <ProgressRing />
      <ThumbsUp />
    </div>
  );
}

export default App;
