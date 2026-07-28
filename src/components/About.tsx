import React from "react";
import { Calendar, Globe, Mail, MapPin, Phone, User, Rocket, BookOpen, Cpu, ShieldCheck } from "lucide-react";

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
      <p className="text-slate-600 mb-12 max-w-2xl text-sm sm:text-base leading-relaxed">
        Electrical & Electronic Engineering graduate specializing in embedded rocket avionics, guidance systems, and attitude control loops.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        
        {/* Left: Bio + Skill Bars */}
        <div className="lg:col-span-7 space-y-6">
          <div className="aero-card space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-slate-950">Engineering Mission</h3>
            </div>
            
            <p className="text-slate-700 text-sm leading-relaxed">
              I am a B.Sc. EEE candidate at <strong>Mymensingh Engineering College (University of Dhaka)</strong>, specializing in rocket avionics, embedded GNC systems, and attitude stabilization. At DhumketuX, I design PCBs, assemble avionics bays, and build telemetry systems for active propulsion research programs.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              My thesis — <em>"Design, Simulation & Implementation of TVC and Engine Telemetry for a Small-Scale Rocket Using PID"</em> — covers OpenRocket aerodynamic modeling, MATLAB/Simulink control system design, STM32-based hardware, and bi-directional LoRa telemetry links.
            </p>
          </div>

          {/* Skill Bars */}
          <div className="aero-card space-y-4">
            <h3 className="text-xs font-mono font-extrabold text-orange-600 uppercase tracking-widest mb-4">
              TECHNICAL PROFICIENCY METRICS
            </h3>
            <div className="space-y-4">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="font-bold text-slate-900">{s.label}</span>
                    <span className="text-orange-600 font-extrabold">{s.pct}%</span>
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

        {/* Right: Personal Dossier + Floating Transparent Logo */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Dossier Card */}
          <div className="aero-card">
            <h3 className="text-xs font-mono font-extrabold text-orange-600 uppercase tracking-widest mb-5">
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
                    <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-orange-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">{row.label}</p>
                      <p className="text-xs text-slate-900 font-extrabold mt-0.5">{row.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project NEAL Official Branding — Seamless floating logo directly on whitish card */}
          <div className="aero-card border-orange-200">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                OFFICIAL THESIS BRANDING
              </span>
            </div>

            {/* Seamless PNG Logo floating with ZERO dark box */}
            <div className="p-4 flex items-center justify-center">
              <img
                src="/lovable-uploads/project-neal-logo.png"
                alt="Project NEAL TVC & Guidance Official Logo"
                className="w-full max-h-24 object-contain"
              />
            </div>

            <div className="mt-4 text-center border-t border-slate-100 pt-3">
              <p className="text-slate-950 font-black text-sm">Project NEAL-1.2</p>
              <p className="text-slate-500 text-xs font-mono mt-0.5">Thrust Vector Control · Guidance & Telemetry</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
