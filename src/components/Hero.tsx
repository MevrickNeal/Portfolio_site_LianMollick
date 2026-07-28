import React, { useEffect, useState, useRef } from "react";
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, Rocket, ChevronRight, Cpu, ShieldCheck, Activity, Radio } from "lucide-react";

export default function Hero() {
  const [scrollPitch, setScrollPitch] = useState(0);
  const ticking = useRef(false);

  // Hardware-accelerated rAF scroll listener for 60fps smooth animation
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const pitch = Math.sin(scrollY * 0.005) * 12;
          setScrollPitch(pitch);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { label: "Rocketry Award", value: "1st Place", color: "text-orange-600" },
    { label: "NASA Missions", value: "3+", color: "text-red-600" },
    { label: "Research Papers", value: "4+", color: "text-slate-950" },
    { label: "Projects Built", value: "15+", color: "text-orange-600" },
  ];

  const tags = [
    "Thrust Vector Control", "GNC Systems", "Embedded Avionics",
    "PID Closed-Loop Control", "LoRa Telemetry", "Rocket Propulsion",
    "STM32 Firmware", "MATLAB/Simulink", "Analog IC Design"
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden py-10 md:py-16 aerospace-grid-bg">
      
      {/* Background Vector Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-slate-200/60 rounded-full pointer-events-none -z-10 animate-float transform-gpu" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-orange-300/40 rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 animate-fade-in">
            
            {/* Live Telemetry Radar Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/90 shadow-md rounded-full px-4 py-1.5 mb-6">
              <span className="live-dot" />
              <span className="text-slate-900 font-mono text-xs font-bold tracking-wide flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
                STATUS: AVIONICS ONLINE · PITCH: {scrollPitch.toFixed(1)}°
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.08] tracking-tight mb-4">
              Lian Mollick <span className="gradient-text-orange">Nehal</span>
            </h1>

            <p className="text-base sm:text-lg font-mono font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-orange-600 animate-rocket" />
              Rocketry Avionics · Thrust Vector Control · GNC Systems Engineer
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-xl">
              B.Sc. EEE candidate at <strong>Mymensingh Engineering College (University of Dhaka)</strong>.
              Specializing in rocket attitude stabilization, 6-DOF trajectory simulation, STM32 flight software, and real-time LoRa ground station telemetry.
              Winner of <strong>Rocketry Innovation Challenge 2022</strong> · <strong>NASA Space Apps 2023 1st Runner-Up</strong>.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <span key={tag} className="badge-grey hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#tvc-simulator"
                className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-mono font-bold text-xs px-6 py-3.5 rounded-full transition-all shadow-xl shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0">
                <Cpu className="w-4 h-4" />
                LAUNCH TVC SIMULATOR
                <ChevronRight className="w-4 h-4" />
              </a>

              <a href="#projects"
                className="flex items-center gap-2 bg-white hover:bg-slate-900 text-slate-900 hover:text-white font-mono text-xs font-bold px-6 py-3.5 rounded-full border border-slate-200 shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0">
                EXPLORE PROJECTS
                <ChevronRight className="w-4 h-4" />
              </a>

              <a href="mailto:lianmollik@gmail.com"
                className="flex items-center gap-2 text-slate-600 hover:text-orange-600 font-mono text-xs font-bold px-2 py-3 transition-colors">
                <MailIcon className="w-4 h-4" />
                lianmollik@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-8 pt-6 border-t border-slate-200">
              <a href="https://linkedin.com/in/lianmollick" target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-600 hover:text-orange-600 transition-colors text-xs font-mono font-bold">
                <LinkedinIcon className="h-4 w-4" />
                LINKEDIN
              </a>
              <a href="https://github.com/MevrickNeal" target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition-colors text-xs font-mono font-bold">
                <GithubIcon className="h-4 w-4" />
                GITHUB
              </a>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-mono text-xs font-medium">+880 1518 664917</span>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* Suit Portrait */}
            <div className="relative group">
              
              {/* Flight Path Ring (Scrollymation) */}
              <div 
                className="absolute -inset-4 rounded-3xl border-2 border-dashed border-orange-500/40 z-0 transition-transform duration-150 ease-out transform-gpu"
                style={{ transform: `rotate(${scrollPitch * 2}deg)` }}
              />

              {/* White Card Frame */}
              <div className="w-72 h-[350px] sm:w-80 sm:h-[390px] rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl relative z-10 hover:shadow-orange-500/20 transition-all">
                <img
                  src="/lovable-uploads/97da3591-aa27-464b-b81c-c8d2f868ba6e.png"
                  alt="Lian Mollick Nehal — Formal Suit Portrait"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* HUD Overlay Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-xl shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-slate-950 text-xs font-extrabold block leading-none">Lian Mollick Nehal</span>
                    <span className="text-[10px] font-mono text-orange-600 font-bold">EEE / Avionics Engineer</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              {/* Floating Award Badges */}
              <div className="absolute -top-3 -right-3 bg-orange-600 text-white text-[10px] font-mono font-extrabold px-3 py-1.5 rounded-xl shadow-xl rotate-3 z-30">
                🏆 1ST PLACE ROCKETRY
              </div>
              <div className="absolute -bottom-3 -left-3 bg-slate-950 text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-xl shadow-xl -rotate-2 z-30 flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5 text-orange-500" />
                PROJECT NEAL-1.2
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {stats.map((s) => (
                <div key={s.label}
                  className="bg-white border border-slate-200/80 rounded-xl p-3.5 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className={`text-2xl font-black font-mono ${s.color} mb-0.5`}>{s.value}</div>
                  <div className="text-[11px] text-slate-600 font-mono font-bold">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Seamless Floating Logo Card */}
            <a href="#projects"
              className="w-full flex items-center justify-between bg-white border border-slate-200 hover:border-orange-500/50 rounded-xl p-3.5 transition-all group shadow-md hover:shadow-xl">
              <div className="flex items-center gap-3">
                <img
                  src="/lovable-uploads/project-neal-logo.png"
                  alt="Project NEAL Logo"
                  loading="eager"
                  decoding="async"
                  className="h-6 w-auto object-contain"
                />
                <div className="border-l border-slate-200 pl-3">
                  <div className="font-extrabold text-slate-950 text-xs">Project NEAL Thesis</div>
                  <div className="text-[10px] font-mono text-slate-500">TVC Rocket · GNC · STM32</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
