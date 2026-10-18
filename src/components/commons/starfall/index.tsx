'use client';

import { useEffect, useState } from 'react';
import './index.css';

type Star = { left: number; size: number; delay: number; duration: number };

const STAR_COUNT = 40;

export default function StarFall() {
  const [stars, setStars] = useState<Star[]>([]);

  // Generate on the client only → avoids hydration mismatch from Math.random()
  useEffect(() => {
    setStars(
      Array.from({ length: STAR_COUNT }, () => {
        const duration = 15 + Math.random() * 5;
        return {
          left: Math.random() * 100, // %
          size: 12 + Math.random() * 14, // px
          duration,
          delay: -Math.random() * duration, // negative = already mid-fall on load
        };
      }),
    );
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-1 overflow-hidden"
    >
      {stars.map((s, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-star-fill star"
          viewBox="0 0 16 16"
          style={
            {
              '--star-left': `${s.left}%`,
              '--star-size': `${s.size}px`,
              '--star-delay': `${s.delay}s`,
              '--star-duration': `${s.duration}s`,
            } as React.CSSProperties
          }
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ))}
    </div>
  );
}
