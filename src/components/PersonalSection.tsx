import React from "react";
import { Dumbbell, Brain, Zap, TrendingUp, Target, Cpu } from "lucide-react";

const quotes = [
  {
    text: "The body is just another system to engineer. Train it with data, push it past its limits, and iterate — there is no convergence point, only the next version of yourself.",
    attr: "— Lian Mollick Nehal",
    icon: <Cpu className="w-4 h-4 text-orange-600" />,
  },
  {
    text: "An engineer who only thinks in circuits will miss half the world. Discipline forged in the gym is the same feedback loop that keeps a PID controller stable under load.",
    attr: "— Personal Philosophy",
    icon: <TrendingUp className="w-4 h-4 text-red-600" />,
  },
];

const pillars = [
  {
    icon: <Brain className="w-5 h-5 text-orange-600" />,
    title: "Mental Discipline",
    desc: "Engineering demands precision under pressure. The mental toughness built through consistent physical training directly maps to debugging complex firmware at 2 AM before a test launch.",
  },
  {
    icon: <Dumbbell className="w-5 h-5 text-red-600" />,
    title: "Physical Consistency",
    desc: "Every rep is a commit. Every set is a sprint. Progressive overload in the gym mirrors iterative design — small improvements compounded over months produce extraordinary results.",
  },
  {
    icon: <Target className="w-5 h-5 text-slate-950" />,
    title: "Goal Architecture",
    desc: "I structure personal growth with the same rigor as system requirements: define success metrics, track deviations, and correct course. Personal KPIs matter as much as technical ones.",
  },
  {
    icon: <Zap className="w-5 h-5 text-orange-600" />,
    title: "Energy & Focus",
    desc: "A well-maintained body outputs a clearer mind. Physical training is not separate from professional performance — it IS part of the engineering stack.",
  },
];

export default function PersonalSection() {
  return (
    <section id="personal" className="section-container">
      {/* Subtitle */}
      <span className="section-subtitle">BEYOND THE CIRCUIT BOARD</span>
      <h2 className="section-title mb-3">
        Personal & Professional <span className="gradient-text-orange">Growth</span>
      </h2>
      <p className="text-slate-600 mb-12 max-w-2xl text-sm sm:text-base leading-relaxed">
        Engineering is a mindset that extends beyond the lab bench. Physical discipline, continuous learning, and mental toughness run on the exact same feedback loop.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">

        {/* Left: Gym Photo in Framed Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="aero-card border-orange-200 p-4">
            
            {/* Header bar */}
            <div className="bg-slate-900 text-white rounded-t-xl px-4 py-2 flex items-center justify-between font-mono text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300 font-bold">SENSOR_FEED // DISCIPLINE_LOOP</span>
              </div>
              <span className="text-orange-400 font-bold">LMN // GYM</span>
            </div>

            {/* Gym Mirror Photo */}
            <div className="overflow-hidden rounded-b-xl border border-t-0 border-slate-200">
              <img
                src="/lovable-uploads/Messenger_creation_50AB924C-9EAD-4A5C-9BC9-18A51DA7E21D.png"
                alt="Lian Mollick — Gym training, physical discipline & growth"
                className="w-full object-cover max-h-[420px] hover:scale-105 transition-transform duration-700"
              />
              <div className="bg-slate-900 text-white p-3 font-mono">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-orange-400">PHYSICAL TRAINING PROTOCOL</span>
                  <span className="text-emerald-400 text-[10px] font-bold">ACTIVE</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">PROGRESSIVE OVERLOAD · DISCIPLINE LOOP</p>
              </div>
            </div>

          </div>

          {/* Quote Card */}
          <div className="aero-card bg-orange-50/50 border-orange-200 p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-orange-200 flex items-center justify-center flex-shrink-0">
                {quotes[0].icon}
              </div>
              <div>
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed italic font-medium">"{quotes[0].text}"</p>
                <p className="text-orange-600 text-[11px] font-mono font-bold mt-2">{quotes[0].attr}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 4 Pillars & Terminal Metrics */}
        <div className="lg:col-span-7 space-y-6">

          {/* Quote 2 */}
          <blockquote className="border-l-4 border-orange-600 pl-4 py-2">
            <p className="text-slate-900 text-base md:text-lg font-bold leading-relaxed italic">
              "{quotes[1].text}"
            </p>
            <footer className="mt-1.5 text-orange-600 text-xs font-mono font-bold">{quotes[1].attr}</footer>
          </blockquote>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div key={i} className="aero-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h3 className="text-slate-950 font-extrabold text-sm">{p.title}</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Dark Growth Metrics Terminal */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl text-white">
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 text-[10px] font-mono text-slate-400 font-bold">growth_metrics.log</span>
            </div>
            <div className="p-4 font-mono text-[12px] space-y-2">
              {[
                { k: "discipline_score", v: "98.7 / 100", c: "text-emerald-400" },
                { k: "professional.projects_completed", v: "15+", c: "text-orange-400" },
                { k: "personal.gym_sessions_ytd", v: "200+", c: "text-red-400" },
                { k: "mindset.growth_mode", v: "ENABLED", c: "text-cyan-400" },
                { k: "convergence_reached", v: "false // never stop", c: "text-slate-400" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-slate-500">$</span>
                  <span className="text-slate-300">{row.k}</span>
                  <span className="text-slate-500">=</span>
                  <span className={`font-bold ${row.c}`}>{row.v}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-slate-500">$</span>
                <span className="text-orange-500 animate-pulse">█</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
