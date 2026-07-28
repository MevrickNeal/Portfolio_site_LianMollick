import React from "react";
import { Dumbbell, Brain, Zap, TrendingUp, Target, Cpu } from "lucide-react";

const quotes = [
  {
    text: "The body is just another system to engineer. Train it with data, push it past its limits, and iterate — there is no convergence point, only the next version of yourself.",
    attr: "— Lian Mollick Nehal",
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    text: "An engineer who only thinks in circuits will miss half the world. Discipline forged in the gym is the same feedback loop that keeps a PID controller stable under load.",
    attr: "— Personal Philosophy",
    icon: <TrendingUp className="w-4 h-4" />,
  },
];

const pillars = [
  {
    icon: <Brain className="w-5 h-5 text-portfolio-accent" />,
    title: "Mental Discipline",
    desc: "Engineering demands precision under pressure. The mental toughness built through consistent training directly maps to debugging code at 2 AM before a rocket test.",
  },
  {
    icon: <Dumbbell className="w-5 h-5 text-amber-500" />,
    title: "Physical Consistency",
    desc: "Every rep is a commit. Every set is a sprint. Progressive overload in the gym mirrors iterative design — small improvements compounded over months produce extraordinary results.",
  },
  {
    icon: <Target className="w-5 h-5 text-emerald-500" />,
    title: "Goal Architecture",
    desc: "I structure personal growth with the same rigor as system requirements: define success metrics, track deviations, and correct course. Personal KPIs matter as much as technical ones.",
  },
  {
    icon: <Zap className="w-5 h-5 text-violet-500" />,
    title: "Energy & Focus",
    desc: "A well-maintained body outputs a clearer mind. Physical training is not separate from professional performance — it IS part of the engineering stack.",
  },
];

export default function PersonalSection() {
  return (
    <section id="personal" className="relative py-24 overflow-hidden">
      {/* Dark engineering background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 -z-10" />

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(92,151,171,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(92,151,171,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-portfolio-teal/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-portfolio-accent/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-portfolio-teal mb-4">
            <Dumbbell className="w-3.5 h-3.5" />
            Beyond the Circuit Board
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Professional & Personal <span className="text-portfolio-teal">Growth System</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-sm leading-relaxed">
            Engineering is not just what I do at the lab bench. Every system I build — whether it's a TVC flight controller or my own discipline — runs on the same architecture: clear goals, feedback loops, and relentless iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Photos in engineering-frame layout */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary gym photo — engineering sensor-frame */}
            <div className="relative group">
              {/* Outer measurement frame */}
              <div className="absolute -inset-px rounded-2xl border border-slate-700/60 z-0" />
              {/* Animated corner brackets */}
              <span className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-portfolio-teal rounded-tl-lg z-20 transition-all group-hover:w-7 group-hover:h-7 duration-300" />
              <span className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-portfolio-teal rounded-tr-lg z-20 transition-all group-hover:w-7 group-hover:h-7 duration-300" />
              <span className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-portfolio-teal rounded-bl-lg z-20 transition-all group-hover:w-7 group-hover:h-7 duration-300" />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-portfolio-teal rounded-br-lg z-20 transition-all group-hover:w-7 group-hover:h-7 duration-300" />

              {/* Scan line header */}
              <div className="relative z-10 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-t-xl px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">SENSOR_CAM_01 // LIVE_FEED</span>
                </div>
                <span className="text-[10px] font-mono text-portfolio-teal">SUBJECT: LMN</span>
              </div>

              {/* Image */}
              <div className="relative z-10 overflow-hidden rounded-b-xl border border-t-0 border-slate-700">
                <img
                  src="/lovable-uploads/Messenger_creation_50AB924C-9EAD-4A5C-9BC9-18A51DA7E21D.png"
                  alt="Lian Mollick — Gym training, discipline and physical growth"
                  className="w-full object-cover max-h-[420px] group-hover:scale-105 transition-transform duration-700 saturate-90 hover:saturate-100"
                  style={{ filter: "contrast(1.05) brightness(0.95)" }}
                />
                {/* Overlay: data readout bottom strip */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white font-black text-sm">Physical Training Protocol</p>
                      <p className="text-slate-400 text-[11px] font-mono">PROGRESSIVE_OVERLOAD · DISCIPLINE_LOOP</p>
                    </div>
                    <div className="text-right">
                      <div className="text-portfolio-teal font-mono text-[11px]">LOAD: MAX</div>
                      <div className="text-emerald-400 font-mono text-[11px]">STATUS: ACTIVE</div>
                    </div>
                  </div>
                </div>

                {/* Top-right crosshair */}
                <div className="absolute top-3 right-3 text-portfolio-teal/60 font-mono text-[9px]">
                  <div className="flex flex-col items-center">
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivational quote card 1 */}
            <div className="relative bg-slate-900/80 border border-slate-700/60 rounded-2xl p-5 backdrop-blur-sm">
              <div className="absolute top-0 left-6 w-12 h-0.5 bg-gradient-to-r from-portfolio-teal to-transparent -translate-y-0.5" />
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-portfolio-teal/10 border border-portfolio-teal/20 flex items-center justify-center text-portfolio-teal">
                  {quotes[0].icon}
                </div>
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">"{quotes[0].text}"</p>
                  <p className="text-portfolio-teal text-[11px] font-mono mt-2">{quotes[0].attr}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Four pillars + second quote */}
          <div className="lg:col-span-7 space-y-5">

            {/* Second quote — large pull quote */}
            <blockquote className="relative border-l-2 border-portfolio-accent pl-5 pr-4 py-3">
              <div className="absolute -left-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-accent via-amber-400 to-transparent" />
              <p className="text-slate-200 text-base md:text-lg font-medium leading-relaxed italic">
                "{quotes[1].text}"
              </p>
              <footer className="mt-2 text-portfolio-accent text-[11px] font-mono">{quotes[1].attr}</footer>
            </blockquote>

            {/* 4 Growth pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-900/60 border border-slate-700/50 rounded-2xl p-5 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-300"
                >
                  {/* Corner accent that animates on hover */}
                  <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-600 group-hover:border-portfolio-teal rounded-tr-2xl transition-colors duration-300" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {p.icon}
                    </div>
                    <h3 className="text-white font-bold text-sm">{p.title}</h3>
                  </div>
                  <p className="text-slate-400 text-[12px] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Progress terminal card */}
            <div className="bg-slate-950/80 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="bg-slate-900/90 border-b border-slate-700 px-4 py-2.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-2 text-[10px] font-mono text-slate-500 tracking-widest">growth_metrics.log</span>
              </div>
              <div className="p-4 font-mono text-[12px] space-y-1.5">
                {[
                  { k: "discipline_score", v: "98.7 / 100", c: "text-emerald-400" },
                  { k: "professional.projects_completed", v: "15+", c: "text-portfolio-teal" },
                  { k: "personal.gym_sessions_ytd", v: "200+", c: "text-amber-400" },
                  { k: "mindset.growth_mode", v: "ENABLED", c: "text-violet-400" },
                  { k: "convergence_reached", v: "false // never stop", c: "text-slate-500" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-slate-600">$</span>
                    <span className="text-slate-400">{row.k}</span>
                    <span className="text-slate-600">=</span>
                    <span className={row.c}>{row.v}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-slate-600">$</span>
                  <span className="text-portfolio-teal animate-pulse">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
