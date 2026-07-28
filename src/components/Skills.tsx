import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    icon: "🚀",
    name: "Rocketry & GNC",
    tags: ["Thrust Vector Control", "6-DOF Simulation", "OpenRocket", "Trajectory Optimization", "Monte Carlo"],
  },
  {
    icon: "⚡",
    name: "Embedded Systems",
    tags: ["C/C++", "STM32", "Arduino", "ESP32", "RTOS", "Sensor Fusion"],
  },
  {
    icon: "🧠",
    name: "Control Theory",
    tags: ["PID", "MRAC", "ADRC", "LQR", "ESO", "State Space"],
  },
  {
    icon: "💻",
    name: "Software & Tools",
    tags: ["Python", "MATLAB", "Simulink", "React", "Firebase", "Git"],
  },
  {
    icon: "📡",
    name: "IoT & Instrumentation",
    tags: ["SCADA", "Modbus", "RS485", "LoRa", "Real-Time Monitoring"],
  },
  {
    icon: "🔬",
    name: "Research & Writing",
    tags: ["IEEE Papers", "LaTeX", "Technical Writing", "Data Analysis", "Signal Processing"],
  },
  {
    icon: "🏥",
    name: "Biomedical AI",
    tags: ["Quantum ML", "Oncology Classification", "TensorFlow", "PyTorch"],
  },
  {
    icon: "🎨",
    name: "Design & Web",
    tags: ["React / TypeScript", "Tailwind CSS", "Figma", "UI/UX", "Dashboard Design"],
  },
];

const Skills = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section" style={{ background: "var(--off-white)" }} ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">Technical Arsenal</div>
          <h2 className="section-heading">
            Skills &<br />
            <span className="section-heading-light">Expertise</span>
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
