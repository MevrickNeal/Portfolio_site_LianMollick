import React from "react";
import { Calendar, Globe, Mail, MapPin, Phone, User, Cpu, Rocket, Zap, BookOpen } from "lucide-react";

const skills = [
  { label: "Embedded Systems & Avionics", pct: 92 },
  { label: "C/C++ Firmware Development", pct: 88 },
  { label: "PID / GNC Control Systems", pct: 85 },
  { label: "MATLAB / Simulink Modeling", pct: 82 },
  { label: "PCB Design & Hardware", pct: 80 },
  { label: "Python / Data Science", pct: 75 },
  { label: "LoRa / RF Telemetry", pct: 78 },
  { label: "SolidWorks / CAD", pct: 65 },
];

export default function About() {
  return (
    <section id="about" className="section-container bg-white">
      <span className="section-subtitle">Background</span>
      <h2 className="section-title mb-2">About Me</h2>
      <p className="text-slate-500 mb-10 max-w-2xl">
        EEE engineer with a mission: build rockets that fly straight.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: bio + skills */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-slate-700 text-base leading-relaxed">
            I'm a B.Sc. EEE candidate at <strong>Mymensingh Engineering College (University of Dhaka)</strong>,
            specializing in rocket avionics, embedded GNC systems, and flight stabilization. At DhumketuX, I design
            PCBs, assemble avionics bays, and build telemetry systems for active propulsion research programs.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            My thesis — <em>"Design, Simulation & Implementation of TVC and Engine Telemetry for a Small-Scale Rocket Using PID"</em> —
            covers OpenRocket aerodynamic modeling, MATLAB/Simulink control system design, STM32-based hardware,
            and LoRa bi-directional data links. I want to push Bangladesh's amateur rocketry to the next level.
          </p>

          {/* Skill bars */}
          <div className="space-y-3 mt-4">
            <h3 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Technical Proficiency</h3>
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-slate-700">{s.label}</span>
                  <span className="font-mono text-slate-400">{s.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill animate-fade-in"
                    style={{ width: `${s.pct}%`, animationDelay: `${i * 0.08}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: info card + NEAL logo */}
        <div className="lg:col-span-5 space-y-5">
          {/* Info card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Personal Info</h3>
            <div className="space-y-3">
              {[
                { icon: User, label: "Full Name", value: "Lian Mollick Nehal" },
                { icon: BookOpen, label: "Institution", value: "Mymensingh Engineering College (Uni. of Dhaka)" },
                { icon: Globe, label: "Nationality", value: "Bangladeshi" },
                { icon: Mail, label: "Email", value: "lianmollik@gmail.com" },
                { icon: Phone, label: "Phone", value: "+880 1518 664917" },
                { icon: MapPin, label: "Location", value: "Mymensingh, Bangladesh" },
              ].map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-portfolio-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-portfolio-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{row.label}</p>
                      <p className="text-sm text-slate-700 font-medium">{row.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project NEAL Logo */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 border border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <Rocket className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-[11px] font-bold uppercase tracking-widest">Thesis Project</span>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="/lovable-uploads/5e9aa584-e39f-426c-b9fe-dc65ce0f79da.png"
                alt="Project NEAL TVC & GNC Logo"
                className="w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-white font-black text-base">Project NEAL-1.2</p>
              <p className="text-slate-400 text-xs">TVC · GNC · Embedded Avionics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
