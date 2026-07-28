import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Marquee = () => {
  const items = [
    "Thrust Vector Control",
    "6-DOF Flight Simulation",
    "PID / MRAC / ADRC",
    "Embedded Systems",
    "Rocket Avionics",
    "MATLAB Simulink",
    "Python / C++",
    "IoT & SCADA",
    "Biomedical AI",
    "IEEE Research",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
