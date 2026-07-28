import React, { useState } from "react";
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, Rocket, ChevronRight, Star, Award, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const stats = [
    { label: "Rocketry Award", value: "1st Place", color: "text-amber-600" },
    { label: "NASA Missions", value: "3+", color: "text-blue-600" },
    { label: "Research Papers", value: "4+", color: "text-emerald-600" },
    { label: "Projects Built", value: "15+", color: "text-portfolio-accent" },
  ];

  const tags = [
    "Thrust Vector Control", "GNC Systems", "Embedded Avionics",
    "PID Flight Control", "LoRa Telemetry", "Rocket Propulsion",
    "STM32 / Arduino", "MATLAB/Simulink", "Analog IC Design"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg -z-10" />
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(92,151,171,0.08) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(236,108,76,0.06) 0%, transparent 50%),
                          radial-gradient(circle at 60% 80%, rgba(51,65,92,0.05) 0%, transparent 40%)`
      }} />

      {/* Floating particles */}
      <div className="absolute top-16 left-8 w-2 h-2 bg-portfolio-teal/40 rounded-full animate-float" style={{animationDelay:'0s'}} />
      <div className="absolute top-32 right-16 w-3 h-3 bg-portfolio-accent/30 rounded-full animate-float" style={{animationDelay:'1.5s'}} />
      <div className="absolute bottom-24 left-24 w-2 h-2 bg-portfolio-navy/20 rounded-full animate-float" style={{animationDelay:'3s'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-7 animate-slide-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6">
              <span className="live-dot" />
              <span className="text-emerald-700 text-xs font-bold">Open to Research Collaboration & Internships</span>
            </div>

            {/* Name & title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-4">
              Lian Mollick<br />
              <span className="gradient-text">Nehal</span>
            </h1>

            <p className="text-lg font-semibold text-portfolio-navy mb-2 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-portfolio-accent animate-rocket" />
              Rocketry Avionics · Thrust Vector Control · Embedded Systems Engineer
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-6 max-w-xl">
              B.Sc. EEE candidate at <strong>Mymensingh Engineering College</strong> (University of Dhaka).
              Building Bangladesh's next-generation rocket avionics, GNC algorithms, and mission control systems.
              Winner of <strong>Rocketry Innovation Challenge 2022</strong> · <strong>NASA Space Apps 2023 1st Runner-Up</strong> · <strong>NASA Planetary Defender</strong>.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <span key={tag} className="badge-pill bg-slate-100 text-slate-700 border border-slate-200 hover:bg-portfolio-navy hover:text-white hover:border-portfolio-navy transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#tvc-simulator"
                className="flex items-center gap-2 bg-portfolio-navy hover:bg-portfolio-dark-accent text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-portfolio-navy/30 hover:-translate-y-0.5">
                <Cpu className="w-4 h-4" />
                Launch TVC Simulator
                <ChevronRight className="w-4 h-4" />
              </a>

              <a href="#projects"
                className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 rounded-xl border border-slate-200 transition-all hover:border-portfolio-teal hover:-translate-y-0.5">
                View Projects
                <ChevronRight className="w-4 h-4" />
              </a>

              <a href="mailto:lianmollik@gmail.com"
                className="flex items-center gap-2 text-slate-600 hover:text-portfolio-accent font-medium px-4 py-3 transition-colors">
                <MailIcon className="w-4 h-4" />
                lianmollik@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://linkedin.com/in/lianmollick" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </a>
              <a href="https://github.com/MevrickNeal" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
                <GithubIcon className="h-5 w-5" />
                GitHub
              </a>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 text-sm">+880 1518 664917</span>
            </div>
          </div>

          {/* Right: Photo + Stats */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 animate-slide-right">
            {/* Profile photo */}
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl animate-border-glow">
                <img
                  src="/lovable-uploads/Lian-Mollick-3cee.png"
                  alt="Lian Mollick Nehal"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/lovable-uploads/97da3591-aa27-464b-b81c-c8d2f868ba6e.png";
                  }}
                />
              </div>

              {/* Floating badges on photo */}
              <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-[10px] font-black px-2.5 py-1.5 rounded-xl shadow-lg rotate-3">
                🏆 1st Place
              </div>
              <div className="absolute -bottom-3 -left-3 bg-portfolio-navy text-white text-[10px] font-bold px-2.5 py-1.5 rounded-xl shadow-lg -rotate-2 flex items-center gap-1">
                <Rocket className="w-3 h-3" />
                NEAL-1.2
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {stats.map((s) => (
                <div key={s.label}
                  className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className={`text-2xl font-black ${s.color} mb-1`}>{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            {/* NEAL Project badge */}
            <a href="#projects"
              className="w-full flex items-center justify-between bg-gradient-to-br from-portfolio-navy to-slate-800 text-white rounded-2xl p-4 hover:shadow-xl transition-all hover:-translate-y-0.5 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Project NEAL</div>
                  <div className="text-[11px] text-slate-300">B.Sc. Thesis · TVC Rocket</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-1 text-slate-400 hover:text-portfolio-accent transition-colors">
          <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDownIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
