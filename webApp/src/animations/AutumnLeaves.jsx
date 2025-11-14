import react from 'react';

export default function AutumnLeaves() {
  const leaves = new Array(10).fill(0);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-11">
      {leaves.map((_, i) => (
        <span
          key={i}


          className="leaf"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}
