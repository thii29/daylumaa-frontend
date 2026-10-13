import './index.css';
const STARS = [
  { top: '-5%', left: '70%', delay: 0, duration: 10 },
  { top: '5%', left: '90%', delay: 3, duration: 12 },
  { top: '20%', left: '100%', delay: 6, duration: 11 },
  { top: '-10%', left: '55%', delay: 9, duration: 13 },
  { top: '10%', left: '80%', delay: 12, duration: 9 },
  { top: '30%', left: '95%', delay: 15, duration: 12 },
];

export default function StarFall() {
  return (
    <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden">
      {STARS.map((star, i) => (
        <span
          key={i}
          className="star"
          style={
            {
              top: star.top,
              left: star.left,
              '--star-delay': `${star.delay}s`,
              '--star-duration': `${star.duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
