import React from "react";
import { Briefcase, Calendar, ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <span className="section-subtitle">WORK & INDUSTRIAL TRAINING</span>
      <h2 className="section-title mb-8">Experience & Training</h2>
      
      <Tabs defaultValue="work" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-10 bg-slate-100 border border-slate-200 p-1 rounded-full shadow-inner">
          <TabsTrigger value="work" className="text-xs font-mono font-bold uppercase data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-full">
            Work Experience
          </TabsTrigger>
          <TabsTrigger value="training" className="text-xs font-mono font-bold uppercase data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-full">
            Industrial Training
          </TabsTrigger>
        </TabsList>
        
        {/* Work Experience Tab */}
        <TabsContent value="work" className="animate-fade-in space-y-6">
          
          <div className="aero-card border-orange-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <span className="badge-orange text-[10px] mb-1">
                  ROCKETRY AVIONICS
                </span>
                <h3 className="text-xl font-black text-slate-950">Embedded System Intern</h3>
                <h4 className="text-sm font-mono text-orange-600 font-bold">DhumketuX · Mymensingh, Bangladesh</h4>
              </div>
              <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                FEB 2021 – JAN 2025
              </span>
            </div>
            <ul className="space-y-2 text-slate-700 text-sm mt-4">
              {[
                "Designed and assembled rocket avionics PCB circuits for multiple active flight tests.",
                "Integrated IMU sensors (accelerometers, gyroscopes) and GPS modules for high-G launch environments.",
                "Developed LoRa-based telemetry ground station software and real-time WebGUI data visualization.",
                "Coordinated live telemetry feedback and safety remote arming systems during rocket static fire tests.",
                "Performed hardware troubleshooting and environmental stress testing for mission-critical flight boards."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aero-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <span className="badge-red text-[10px] mb-1">
                  ROBOTICS LEADERSHIP
                </span>
                <h3 className="text-xl font-black text-slate-950">Robotics Lead</h3>
                <h4 className="text-sm font-mono text-slate-600 font-bold">Alpha Science Lab</h4>
              </div>
              <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                2022 – PRESENT
              </span>
            </div>
            <ul className="space-y-2 text-slate-700 text-sm mt-4">
              {[
                "Led engineering team for 15kg combat battle robot, competing at Technoxian WRC 2024 National Finals.",
                "Mentored student engineers in PCB routing, ESC tuning, high-torque brushless drive systems, and CAD design.",
                "Organized technical workshops on embedded systems, robotics control loops, and microcontrollers."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </TabsContent>

        {/* Training Tab */}
        <TabsContent value="training" className="animate-fade-in space-y-6">
          
          <div className="aero-card border-orange-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-black text-slate-950">7 Days Industrial Training on Analog Design</h3>
                <h4 className="text-sm font-mono text-orange-600 font-bold">ULKASEMI PVT Limited · 2024</h4>
              </div>
              <a href="https://drive.google.com/file/d/1I2O84TAIzwUc64hMu_hTgsM5hklZjBLS/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-1 text-xs font-mono font-bold text-orange-600 hover:text-red-600">
                VIEW CERTIFICATE <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Intensive industrial training on Analog Circuit Design, IC Mask Design (Mixed-Signal Layout), and IC Physical Design using industry EDA suites.
            </p>
            <div className="rounded-xl overflow-hidden border border-slate-200 max-w-xl shadow-md">
              <img src="/lovable-uploads/34415cf9-ffa7-445e-ac9e-d7c51cbbc77c.png" alt="ULKASEMI Certificate" className="w-full object-cover" />
            </div>
          </div>

          <div className="aero-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-black text-slate-950">Semiconductor Fabrication 101</h3>
                <h4 className="text-sm font-mono text-slate-600 font-bold">Purdue University Texas (Intel Sponsored) · 2023</h4>
              </div>
              <a href="https://drive.google.com/file/d/14ia5I0FDjxTf5xi-Km52sgq4yWEfW-DS/view?usp=drive_link"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-1 text-xs font-mono font-bold text-orange-600 hover:text-red-600">
                VIEW CERTIFICATE <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Comprehensive training on semiconductor fabrication processes, silicon wafer processing, lithography, and chip manufacturing fundamentals.
            </p>
            <div className="rounded-xl overflow-hidden border border-slate-200 max-w-xl shadow-md">
              <img src="/lovable-uploads/3517d79a-d999-4d53-9657-4b63294aff2c.png" alt="Purdue Certificate" className="w-full object-cover" />
            </div>
          </div>

        </TabsContent>
      </Tabs>
    </section>
  );
}
