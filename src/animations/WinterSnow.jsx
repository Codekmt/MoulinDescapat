import React from "react";
import snowflakeImg from "../assets/img/snowflake.png";

export default function Snowfall() {
  const snowflakes = new Array(20).fill(0); 

  return (
    <div className="snow-container fixed inset-0 overflow-hidden z-15 pointer-events-none">
      {snowflakes.map((_, i) => {
        const size = Math.random() * 30 + 15; 
        const left = Math.random() * 100; 
        const duration = Math.random() * 5 + 5; 

        return (
          <div
            key={i}
            className="snowflake z-15"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: "-10%",
              position: "absolute",
              backgroundImage: `url(${snowflakeImg})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.7,
              animation: `snow-fall ${duration}s linear infinite`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
