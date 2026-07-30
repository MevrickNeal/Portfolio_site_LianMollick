import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    icon: "🔧",
    name: "Industrial & LPG Operations",
    tags: ["LPG Reticulated Systems", "Gas Pressure Regulators", "SOP Documentation", "Pipeline Safety", "Technical Team Leadership"],
  },
  {
    icon: "🚀",
    name: "Rocketry & GNC",
    tags: ["Thrust Vector Control", "6-DOF Simulation", "OpenRocket", "Trajectory Optimization", "Monte Carlo"],
  },
  {
    icon: "⚡",
    name: "Embedded Systems & Hardware",
    tags: ["C/C++", "STM32", "ESP32", "Arduino", "Circuit PCB Design", "Sensor Fusion"],
  },
  {
    icon: "🧠",
    name: "Control Systems",
    tags: ["PID", "MRAC", "ADRC", "LQR", "Extended State Observer (ESO)", "State-Space"],
  },
  {
    icon: "💻",
    name: "Software Engineering",
    tags: ["Python", "MATLAB", "Simulink", "React / TypeScript", "Node.js", "Git & CI/CD"],
  },
  {
    icon: "📡",
    name: "IoT & Telemetry",
    tags: ["Pressure Transducers", "MQTT Cloud", "Modbus RS485", "Franchise Mapping", "Real-Time Dashboards"],
  },
  {
    icon: "📄",
    name: "Process & Documentation",
    tags: ["Standard Operating Procedures (SOP)", "IEEE Papers", "System Architecture Specs", "LaTeX", "Root-Cause Analysis"],
  },
  {
    icon: "🏥",
    name: "Biomedical & Vision AI",
    tags: ["Quantum ML", "OpenCV Vision", "Oncology Classification", "Assistive Robotics"],
  },
];

const Skills = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section" style={{ background: "var(--off-white)" }} ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">05 / Technical Arsenal</div>
          <h2 className="section-heading">
            Skills &amp;<br />
            <span className="section-heading-light">Engineering Expertise</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <div className={`skill-card reveal delay-${(i % 5) + 1}`} key={g.name}>
              <div className="skill-card-icon">{g.icon}</div>
              <div className="skill-card-name">{g.name}</div>
              <div className="skill-card-tags">
                {g.tags.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
