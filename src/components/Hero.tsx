import React from "react";
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, Rocket, ChevronRight, Cpu, Award, Zap, ShieldCheck } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Rocketry Award", value: "1st Place", color: "text-amber-400" },
    { label: "NASA Missions", value: "3+", color: "text-cyan-400" },
    { label: "Research Papers", value: "4+", color: "text-emerald-400" },
    { label: "Projects Built", value: "15+", color: "text-orange-400" },
  ];

  const tags = [
    "Thrust Vector Control", "GNC Systems", "Embedded Avionics",
    "PID Flight Control", "LoRa Telemetry", "Rocket Propulsion",
    "STM32 / ARM", "MATLAB/Simulink", "Analog IC Design"
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden py-12 md:py-20">
      {/* High-tech radial background */}
      <div className="absolute inset-0 bg-[#080C14] -z-10" />
      <div className="absolute inset-0 -z-10 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 50% 30%, rgba(0,240,255,0.15) 0%, transparent 60%),
                          radial-gradient(circle at 80% 70%, rgba(255,85,0,0.1) 0%, transparent 50%),
                          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-7 animate-fade-in">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/30 rounded-full px-3.5 py-1.5 mb-6">
              <span className="live-dot" />
              <span className="text-emerald-400 text-xs font-mono font-bold tracking-wide">
                Available for GNC / Avionics Research & Industry Collaboration
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4">
              Lian Mollick <span className="gradient-text-cyan">Nehal</span>
            </h1>

            <p className="text-base sm:text-lg font-mono font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-orange-400 animate-rocket" />
              Rocketry Avionics · Thrust Vector Control · GNC Engineer
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              B.Sc. EEE candidate at <strong>Mymensingh Engineering College (University of Dhaka)</strong>.
              Specializing in low-altitude rocket stabilization, 6-DOF trajectory simulation, STM32 embedded flight software, and real-time LoRa telemetry.
              Winner of <strong>Rocketry Innovation Challenge 2022</strong> · <strong>NASA Space Apps 2023 1st Runner-Up</strong>.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <span key={tag} className="badge-pill bg-slate-900/90 text-slate-300 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#tvc-simulator"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5">
                <Cpu className="w-4 h-4" />
                LAUNCH TVC SIMULATOR
                <ChevronRight className="w-4 h-4" />
              </a>

              <a href="#projects"
                className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-mono text-xs font-bold px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all hover:-translate-y-0.5">
                EXPLORE PROJECTS
                <ChevronRight className="w-4 h-4" />
              </a>

              <a href="mailto:lianmollik@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 font-mono text-xs font-semibold px-2 py-3 transition-colors">
                <MailIcon className="w-4 h-4" />
                lianmollik@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-8 pt-6 border-t border-slate-800/80">
              <a href="https://linkedin.com/in/lianmollick" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-xs font-mono font-semibold">
                <LinkedinIcon className="h-4 w-4" />
                LINKEDIN
              </a>
              <a href="https://github.com/MevrickNeal" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-mono font-semibold">
                <GithubIcon className="h-4 w-4" />
                GITHUB
              </a>
              <span className="text-slate-700">|</span>
              <span className="text-slate-400 font-mono text-xs">+880 1518 664917</span>
            </div>
          </div>

          {/* Right Column: Formal Suit Portrait & HUD Stats */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* Formal Suit Portrait with Aerospace Reticle Frame */}
            <div className="relative group">
              {/* Outer HUD Corner Reticles */}
              <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg z-20" />
              <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg z-20" />
              <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg z-20" />
              <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-lg z-20" />

              {/* Photo Frame Container */}
              <div className="w-72 h-[350px] sm:w-80 sm:h-[390px] rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl relative z-10 animate-border-glow">
                <img
                  src="/lovable-uploads/97da3591-aa27-464b-b81c-c8d2f868ba6e.png"
                  alt="Lian Mollick Nehal — Formal Suit Portrait"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
                
                {/* ID Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg">
                  <div>
                    <span className="text-white text-xs font-bold block leading-none">Lian Mollick Nehal</span>
                    <span className="text-[10px] font-mono text-cyan-400">EEE / Avionics Engineer</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Floating Award Badges */}
              <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-950 text-[11px] font-mono font-extrabold px-3 py-1 rounded-xl shadow-xl rotate-3 z-30 flex items-center gap-1">
                🏆 1ST PLACE ROCKETRY
              </div>
              <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-700 text-cyan-400 text-[11px] font-mono font-bold px-3 py-1 rounded-xl shadow-xl -rotate-2 z-30 flex items-center gap-1">
                <Rocket className="w-3.5 h-3.5 text-orange-400" />
                PROJECT NEAL-1.2
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {stats.map((s) => (
                <div key={s.label}
                  className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-center shadow-lg hover:border-slate-700 transition-colors">
                  <div className={`text-2xl font-black font-mono ${s.color} mb-0.5`}>{s.value}</div>
                  <div className="text-[11px] text-slate-400 font-mono font-semibold">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Project NEAL Badge Card — White Container for Logo to POP */}
            <a href="#projects"
              className="w-full flex items-center justify-between bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-3.5 transition-all group shadow-xl">
              <div className="flex items-center gap-3">
                {/* White Container ensures black text on Project NEAL logo pops cleanly */}
                <div className="bg-white rounded-lg p-1.5 border border-slate-200 shadow-sm flex items-center justify-center">
                  <img
                    src="/lovable-uploads/project-neal-logo.png"
                    alt="Project NEAL Logo"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Project NEAL Thesis</div>
                  <div className="text-[10px] font-mono text-slate-400">TVC Rocket · GNC · STM32</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
