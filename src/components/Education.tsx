import React from "react";
import { BookOpen, ExternalLink, GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <span className="section-subtitle">ACADEMIC BACKGROUND</span>
      <h2 className="section-title mb-8">Education</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* B.Sc. EEE */}
        <div className="aero-card border-orange-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="badge-orange">
                2020 – PRESENT
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-950 mb-1">
              B.Sc. in Electrical & Electronic Engineering
            </h3>
            <p className="text-xs font-mono text-orange-600 font-bold mb-4 flex items-center gap-1.5">
              Mymensingh Engineering College (University of Dhaka)
              <a href="http://mec.ac.bd" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-950">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              Specializing in embedded systems, control engineering, and rocket avionics. Senior thesis focused on 6-DOF TVC Digital Twin and closed-loop PID attitude control.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
              KEY COURSEWORK:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {["Control Systems", "Embedded Avionics", "DSP", "VLSI Circuits", "Digital Electronics", "Optical Communication"].map(c => (
                <span key={c} className="badge-grey text-[10px]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* HSC */}
        <div className="aero-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="badge-grey">
                2017 – 2019
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-950 mb-1">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-xs font-mono text-slate-600 font-bold mb-4 flex items-center gap-1.5">
              Shaheed Police Smrity College
              <a href="https://www.spsc.edu.bd" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-950">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              Completed Higher Secondary Certificate with focus on Higher Mathematics, Physics, and Chemistry.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
              RESULT:
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="badge-black text-[11px]">
                GPA: 4.75 / 5.00
              </span>
              <span className="badge-grey text-[11px]">
                Science Group
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
