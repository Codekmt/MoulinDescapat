import { useEffect, useState } from "react";
import AutumnLeaves from "../animations/AutumnLeaves";
import WinterSnow from "../animations/WinterSnow";
import HeatWaves from "../animations/HeatWaves";

function getSeason() {
  const month = new Date().getMonth() + 1;

  if (month === 12 || month === 1 || month === 2) return "winter";
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  return "spring";
}

export default function SeasonalWrapper({ children }) {
  const [season, setSeason] = useState(null);

  useEffect(() => {
    setSeason(getSeason());
  }, []);

  const bgColors = {
    autumn: "#FFF7EB",   
    winter: "#D7E9FF",   
    spring: "#FFFDF5",  
    summer: "#FFFBEA",   
  };

  return (
    
    <div
      className="relative w-full h-full"
      style={{ backgroundColor: bgColors[season] }}
    >
      {season === "autumn" && <AutumnLeaves />}
      {season === "winter" && <WinterSnow />}
      {(season === "spring" || season === "summer") && <HeatWaves />}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
