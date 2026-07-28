import React from "react";
import { Calendar, Globe, Mail, MapPin, Phone, User, Rocket, BookOpen, ShieldCheck } from "lucide-react";

const skills = [
  { label: "Embedded Systems & Avionics", pct: 92 },
  { label: "C/C++ Firmware Development", pct: 88 },
  { label: "PID / GNC Control Systems", pct: 85 },
  { label: "MATLAB / Simulink Modeling", pct: 82 },
  { label: "PCB Design & Hardware (KiCad)", pct: 80 },
  { label: "Python & Quantum ML", pct: 75 },
  { label: "LoRa / RF Telemetry Systems", pct: 78 },
  { label: "OpenRocket / Aerodynamics", pct: 84 },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <span className="section-subtitle">BACKGROUND & OBJECTIVE</span>
      <h2 className="section-title mb-3">About Me</h2>
      <p className="text-slate-400 mb-12 max-w-2xl text-sm sm:text-base leading-relaxed">
        Electrical & Electronic Engineering graduate with a focus on embedded rocket avionics, guidance systems, and flight stabilization control loops.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Bio + Skill Bars */}
        <div className="lg:col-span-7 space-y-6">
          <div className="tech-card space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Rocket className="w-5 h-5 text-cyan-400" />
              Engineering Mission
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              I am a B.Sc. EEE candidate at <strong>Mymensingh Engineering College (University of Dhaka)</strong>, specializing in rocket avionics, embedded GNC systems, and attitude stabilization. At DhumketuX, I design PCBs, assemble avionics bays, and build telemetry systems for active propulsion research programs.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              My thesis — <em>"Design, Simulation & Implementation of TVC and Engine Telemetry for a Small-Scale Rocket Using PID"</em> — covers OpenRocket aerodynamic modeling, MATLAB/Simulink control system design, STM32-based hardware, and bi-directional LoRa telemetry links.
            </p>
          </div>

          {/* Skill Bars */}
          <div className="tech-card space-y-4">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
              TECHNICAL PROFICIENCY METRICS
            </h3>
            <div className="space-y-3.5">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-semibold text-slate-200">{s.label}</span>
                    <span className="text-cyan-400 font-bold">{s.pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Personal Info Card + Project NEAL Logo in Crisp White Container */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Info Card */}
          <div className="tech-card">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-5">
              PERSONAL DOSSIER
            </h3>
            <div className="space-y-4">
              {[
                { icon: User, label: "Full Name", value: "Lian Mollick Nehal" },
                { icon: BookOpen, label: "Institution", value: "Mymensingh Eng. College (Uni. of Dhaka)" },
                { icon: Globe, label: "Nationality", value: "Bangladeshi" },
                { icon: Mail, label: "Email", value: "lianmollik@gmail.com" },
                { icon: Phone, label: "Phone", value: "+880 1518 664917" },
                { icon: MapPin, label: "Location", value: "Mymensingh, Bangladesh" },
              ].map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">{row.label}</p>
                      <p className="text-xs text-slate-200 font-semibold mt-0.5">{row.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project NEAL Logo Backdrop Card — Crisp White Card so Black Logo Text "PROJECT NEAL TVC & GUIDANCE" is 100% Sharp & Visible */}
          <div className="tech-card border border-cyan-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                OFFICIAL THESIS BRANDING
              </span>
            </div>

            {/* WHITE CARD BACKDROP FOR LOGO — Solves blending issue completely */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xl flex items-center justify-center">
              <img
                src="/lovable-uploads/project-neal-logo.png"
                alt="Project NEAL TVC & Guidance Official Logo"
                className="w-full max-h-24 object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-white font-extrabold text-sm">Project NEAL-1.2</p>
              <p className="text-slate-400 text-xs font-mono mt-0.5">Thrust Vector Control · Guidance & Telemetry</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
