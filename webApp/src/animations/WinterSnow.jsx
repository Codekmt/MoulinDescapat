export default function WinterSnow() {
  const flakes = new Array(20).fill(0);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-15">
      {flakes.map((_, i) => (
        <span
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}
