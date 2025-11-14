import { useEffect, useState } from "react";
import AutumnLeaves from "../animations/AutumnLeaves";
import WinterSnow from "../animations/WinterSnow";
import HeatWaves from "../animations/HeatWaves";

function getSeason() {
  const month = new Date().getMonth() + 1;

  if (month === 12 || month === 1 || month === 2) return "winter";
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  return "winter";
}

export default function SeasonalWrapper({ children }) {
  const [season, setSeason] = useState(null);

  useEffect(() => {
    setSeason(getSeason());
  }, []);

 const bgColors = {
    autumn: "linear-gradient(to bottom, #FFF7EB, #FFEEDD)", 
    winter: "linear-gradient(to bottom, #DCEBFF, #F0F8FF)", 
    spring: "linear-gradient(to bottom, #F5FFF0, #FFFDF5)", 
    summer: "linear-gradient(to bottom, #FFFBEA, #FFF4CC)", 
  };

  return (
    
    <div
      className="relative w-full h-full min-h-screen overflow-hidden"
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
