import React from "react";
import { Code, Cpu, Server, Wrench, Rocket, Shield, Activity, Radio } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Embedded & Control Hardware",
      icon: <Cpu className="h-5 w-5 text-cyan-400" />,
      skills: ["STM32 (ARM Cortex)", "Embedded C/C++", "Arduino", "PID Controllers", "KiCad PCB Layout", "IMU Fusion (MPU6050/BNO055)", "Servo Actuation"]
    },
    {
      title: "Simulation & Modeling",
      icon: <Activity className="h-5 w-5 text-orange-400" />,
      skills: ["MATLAB / Simulink", "OpenRocket EOM", "6-DOF Flight Dynamics", "Monte Carlo UQ", "LQR / MRAC / ADRC", "Simscape"]
    },
    {
      title: "Telemetry & RF Communications",
      icon: <Radio className="h-5 w-5 text-emerald-400" />,
      skills: ["LoRa 915MHz / 433MHz", "WebSocket Telemetry", "Ground Station WebGUI", "GPS NMEA Parsing", "Serial UART/SPI/I2C"]
    },
    {
      title: "Programming & Scientific ML",
      icon: <Code className="h-5 w-5 text-violet-400" />,
      skills: ["Python", "C++", "PyTorch", "PennyLane QML", "Qiskit", "Bash Scripting", "Recharts Data Viz"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <span className="section-subtitle">CAPABILITIES & TOOLSTACK</span>
      <h2 className="section-title mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="tech-card border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="badge-pill bg-slate-800/80 text-slate-200 border border-slate-700 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
