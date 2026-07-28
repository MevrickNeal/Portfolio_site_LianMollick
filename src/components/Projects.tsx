import React, { useState } from "react";
import { ExternalLink, Youtube, Rocket, Bot, Smartphone, Cpu, Satellite, ChevronRight, ZoomIn, BarChart2, Atom, Wifi } from "lucide-react";
import LightboxModal from "./LightboxModal";

interface Project {
  id: string;
  tag: string;
  tagBadge: string;
  title: string;
  subtitle?: string;
  description: string;
  images: { src: string; caption: string }[];
  logo?: string;
  links?: { href: string; label: string; icon: React.ReactNode }[];
  badges: string[];
  featured?: boolean;
  nealProject?: boolean;
  benchmarkTable?: { headers: string[]; rows: string[][] };
}

const projects: Project[] = [
  // ─── PROJECT NEAL TVC DIGITAL TWIN ──────────────────────────────────────────
  {
    id: "neal-tvc-digital-twin",
    tag: "Open-Source Research",
    tagBadge: "badge-orange",
    title: "TVC Digital Twin — 6-DOF Benchmark Framework",
    subtitle: "Project NEAL · github.com/MevrickNeal/TVC-DigitalTwin-Simulation",
    description:
      "High-fidelity 6-DOF non-linear Digital Twin for Thrust Vector Controlled rockets, built on physical parameters extracted from OpenRocket telemetry of Project NEAL-1.2. Benchmarks four distinct attitude control algorithms — Cascaded PID, Time-Varying LQR, MRAC (Model Reference Adaptive Control), and ADRC (Active Disturbance Rejection Control) — under dynamic mass decay, time-varying pitch moment of inertia, CG shift, and aerodynamic restoring forces. Includes a 200-run Monte Carlo uncertainty quantification framework and generates publication-ready IEEE vector figures.",
    logo: "/lovable-uploads/project-neal-logo.png",
    images: [
      { src: "/lovable-uploads/tvc-gnc-banner.png", caption: "Project NEAL TVC & GNC system diagram" },
      { src: "/lovable-uploads/tvc-flight-sim.png", caption: "Flight simulation — altitude, velocity & trajectory vs time" },
      { src: "/lovable-uploads/tvc-openrocket.png", caption: "OpenRocket aerodynamic simulation — NEAL-1.2 design file" },
      { src: "/lovable-uploads/tvc-monte-carlo.png", caption: "Monte Carlo stochastic verification — 200-run robustness envelope" },
      { src: "/lovable-uploads/tvc-mc-top.png", caption: "Multi-controller attitude response benchmark (nominal scenario)" },
      { src: "/lovable-uploads/tvc-mc-bottom.png", caption: "Gimbal deflection comparison — PID vs LQR vs MRAC vs ADRC" },
    ],
    links: [
      { href: "https://github.com/MevrickNeal/TVC-DigitalTwin-Simulation", label: "GitHub Repository", icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { href: "https://www.linkedin.com/posts/lianmollick_rocketry-thesisdefense-thrustvectorcontrol-activity-7290674776816173056-7DhU", label: "LinkedIn Post", icon: <ExternalLink className="w-3.5 h-3.5" /> },
    ],
    badges: ["MATLAB/Simulink", "6-DOF Non-Linear EOM", "PID", "LQR", "MRAC", "ADRC", "Monte Carlo UQ", "OpenRocket", "IEEE Paper"],
    featured: true,
    nealProject: true,
    benchmarkTable: {
      headers: ["Controller", "RMSE (°)", "Overshoot", "Settling Time", "Control Effort"],
      rows: [
        ["Cascaded PID", "2.214", "2.0%", "—", "0.0107"],
        ["LQR", "2.974", "25.9%", "—", "0.0193"],
        ["MRAC (Adaptive) ★", "1.999", "0.0%", "1.170 s", "0.0141"],
        ["ADRC (ESO)", "2.646", "0.0%", "—", "0.0161"],
      ],
    },
  },

  // ─── PROJECT NEAL THESIS HARDWARE ──────────────────────────────────────────
  {
    id: "neal-tvc",
    tag: "B.Sc. Thesis",
    tagBadge: "badge-red",
    title: "Project NEAL — TVC Rocket Hardware",
    subtitle: "Design, Simulation & Implementation · STM32 + 3D-Printed Gimbal",
    description:
      "Physical implementation of the Project NEAL-1.2 TVC rocket — from MATLAB/Simulink digital twin to real-hardware STM32 flight controller, 3D-printed servo-actuated gimbal nozzle, and bi-directional LoRa telemetry. Thesis covers OpenRocket aerodynamic modeling, PID closed-loop attitude control, custom IMU filtering, and live ground station WebGUI.",
    logo: "/lovable-uploads/project-neal-logo.png",
    images: [
      { src: "/lovable-uploads/9bb0f2d1-6f94-4e8c-8f1b-d67358fe2989.png", caption: "NEAL-1.2 flight simulation — velocity, altitude & trajectory (OpenRocket)" },
      { src: "/lovable-uploads/f76e9520-627b-496b-b2ad-6c3ad9625331.png", caption: "MATLAB/Simulink PID TVC block diagram & LTI control system" },
      { src: "/lovable-uploads/9276d9c7-e271-46ce-93a0-3812a467b57b.png", caption: "Angular stabilization response — angle vs time (PID closed-loop)" },
      { src: "/lovable-uploads/2af70cce-1601-40a8-a6c5-fe74bc9d42a5.png", caption: "Orientation/TVC output — setpoint tracking vs actual gimbal deflection" },
    ],
    links: [
      { href: "https://www.linkedin.com/posts/lianmollick_rocketry-thesisdefense-thrustvectorcontrol-activity-7290674776816173056-7DhU", label: "LinkedIn Post", icon: <ExternalLink className="w-3.5 h-3.5" /> },
    ],
    badges: ["STM32", "PID Control", "MATLAB/Simulink", "OpenRocket", "LoRa", "3D Gimbal", "IMU"],
    nealProject: true,
  },

  // ─── IOT DASHBOARD FOR UGL ───────────────────────────────────────────────────
  {
    id: "ugl-iot",
    tag: "IoT · Embedded · Web Dashboard",
    tagBadge: "badge-orange",
    title: "UrbanGaz (UGL) — Smart LPG IoT Dashboard",
    subtitle: "Real-Time Gas Distribution Management System",
    description:
      "Full-stack IoT gas distribution monitoring system for UrbanGaz Limited (UGL). Features an Arduino-based TFT LCD + Bluetooth smart manifold controller (Iteaduino BT 1.1 with UGL logo bitmap embedded in PROGMEM), a Python backend server for live data updates, and a comprehensive web dashboard with billing, refill analytics, inventory tracking, project location maps, and cylinder forecast charts. Ingests real June 2026 gas distribution Excel data.",
    logo: "/lovable-uploads/ugl-logo.png",
    images: [
      { src: "/lovable-uploads/56392b97-45a5-4722-a185-5c4d1221044c.png", caption: "UGL IoT Dashboard — real-time gas distribution & inventory analytics" },
    ],
    badges: ["Arduino C++", "TFT LCD", "Bluetooth UART", "Python Flask", "HTML Dashboard", "Recharts", "Excel Data Pipeline", "LoRa"],
  },

  // ─── QUANTUM MULTIMODAL ONCOLOGY ─────────────────────────────────────────────
  {
    id: "quantum-oncology",
    tag: "Quantum ML · AI Research",
    tagBadge: "badge-black",
    title: "Quantum Multimodal Leukemia Classification",
    subtitle: "Hybrid QML Framework — PennyLane · Qiskit · PyTorch",
    description:
      "Research-grade hybrid Quantum-Classical Machine Learning framework for multimodal leukemia classification. Integrates variational quantum circuits (PennyLane/Qiskit) with PyTorch deep learning encoders and multimodal data fusion (imaging + tabular + genomic). Includes SHAP/Captum explainability, LightGBM and CatBoost classical baselines, and a full ablation study comparing quantum advantage against purely classical models.",
    images: [],
    badges: ["PennyLane", "Qiskit", "PyTorch", "Variational QCircuits", "Multimodal Fusion", "SHAP Explainability", "LightGBM", "CatBoost", "Medical AI"],
  },

  // ─── DETS ───────────────────────────────────────────────────────────────────
  {
    id: "dets",
    tag: "Ground Control System",
    tagBadge: "badge-grey",
    title: "DETS — Engine Telemetry System",
    subtitle: "DhumketuX Propulsion Research Program",
    description:
      "High-reliability bi-directional telemetry and ignition-control system for static fire engine testing. Features custom WebGUI mission control (thrust graph, temperature/humidity telemetry, video feed), safety-first remote arming, two-way LoRa data link, and rugged field ground station hardware.",
    images: [
      { src: "/lovable-uploads/dhumketux-ground-station.jpg", caption: "DETS ground station unit — rugged field hardware with LoRa module" },
      { src: "/lovable-uploads/dhumketux-gui.png", caption: "DETS Mission Control WebGUI — real-time thrust graph, video & arming panel" },
    ],
    badges: ["LoRa 915MHz", "WebSocket", "Real-time Telemetry", "Remote Ignition", "React Dashboard"],
  },

  // ─── PUTIMACH ────────────────────────────────────────────────────────────────
  {
    id: "putimach",
    tag: "Sounding Rocket",
    tagBadge: "badge-orange",
    title: "PUTIMACH Sounding Rocket",
    subtitle: "Bangladesh's First Sounding Rocket",
    description:
      "Contributed avionics circuitry, sensor payload integration, and live telemetry for Bangladesh's first sounding rocket test flight. Designed the flight computer PCB, recovery system, and data logging modules.",
    images: [
      { src: "/lovable-uploads/3bdf51d8-1122-46a2-82ca-48f6ffc98de1.png", caption: "PUTIMACH launch — Bangladesh's first sounding rocket test flight" },
      { src: "/lovable-uploads/a7b917fd-f5c0-4add-b4bc-28c1906dc326.png", caption: "Avionics bay and telemetry hardware integration" },
    ],
    links: [
      { href: "https://www.youtube.com/watch?v=CuOzP50KKY4", label: "Watch Launch Video", icon: <Youtube className="w-3.5 h-3.5" /> },
    ],
    badges: ["Avionics", "Recovery System", "Data Logger", "Payload Integration"],
  },

  // ─── COMBAT ROBOT ────────────────────────────────────────────────────────────
  {
    id: "combat-robot",
    tag: "Robotics",
    tagBadge: "badge-red",
    title: "15kg Combat Robot (Battle Bot)",
    subtitle: "Technoxian WRC 2024 — National Finalist",
    description:
      "Designed and built a 15kg full-combat battle bot featuring high-torque brushless drivetrain, weapon spinner, and custom ESC tuning. National Finalist at Technoxian World Robotics Championship 2024.",
    images: [
      { src: "/lovable-uploads/428710431_3357967617837500_4496798535136347615_n.jpg", caption: "15kg Combat Robot — heavy-duty welded chassis & spinning weapon" },
      { src: "/lovable-uploads/cacaca86-a46b-419a-bec9-5777b25a91a1.png", caption: "Team Alpha Science Lab at Technoxian WRC 2024" },
    ],
    links: [
      { href: "https://www.facebook.com/photo/?fbid=122153093834048239", label: "View on Facebook", icon: <ExternalLink className="w-3.5 h-3.5" /> },
    ],
    badges: ["Brushless DC", "Weapon System", "Combat Robotics", "National Finalist"],
  },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", title: "", caption: "" });
  const [expanded, setExpanded] = useState<string | null>("neal-tvc-digital-twin");

  const openLightbox = (src: string, title: string, caption: string) =>
    setLightbox({ isOpen: true, src, title, caption });

  return (
    <>
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox(p => ({ ...p, isOpen: false }))}
        imageSrc={lightbox.src}
        title={lightbox.title}
        caption={lightbox.caption}
      />

      <section id="projects" className="section-container">
        <span className="section-subtitle">ENGINEERING PORTFOLIO</span>
        <h2 className="section-title mb-3">Projects & Research</h2>
        <p className="text-slate-600 mb-10 max-w-2xl text-sm sm:text-base leading-relaxed">
          6-DOF rocket control digital twins, industrial IoT dashboards, and quantum ML algorithms — built end-to-end with high precision.
        </p>

        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = expanded === project.id;
            return (
              <div
                key={project.id}
                className={`aero-card ${
                  project.nealProject
                    ? "border-orange-300/80 shadow-orange-500/10"
                    : "border-slate-200/80"
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : project.id)}
                  className="w-full text-left flex items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                    
                    {/* PNG Logos floating seamlessly directly on white backdrop */}
                    {project.logo ? (
                      <div className="h-10 w-auto flex items-center justify-center flex-shrink-0">
                        <img src={project.logo} alt={project.title} className="h-7 w-auto object-contain" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 text-orange-600">
                        {project.id === "quantum-oncology" ? <Atom className="w-5 h-5 text-slate-950" /> : <Rocket className="w-5 h-5" />}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={project.tagBadge}>{project.tag}</span>
                        {project.nealProject && (
                          <span className="badge-red text-[10px]">⭐ THESIS</span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight">{project.title}</h3>
                      {project.subtitle && (
                        <p className="text-xs text-slate-500 font-mono mt-0.5">{project.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-90 text-orange-600" : ""}`}
                  />
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-6 pt-5 border-t border-slate-100 animate-fade-in space-y-6">
                    <p className="text-slate-700 text-sm leading-relaxed">{project.description}</p>

                    {/* Benchmark Table (TVC Digital Twin) */}
                    {project.benchmarkTable && (
                      <div className="bg-slate-900 text-white rounded-2xl p-5 overflow-x-auto shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <BarChart2 className="w-4 h-4 text-orange-500" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                            IEEE Benchmark Performance (+5° Step Response, N=200 Monte Carlo)
                          </span>
                        </div>
                        <table className="w-full text-xs font-mono text-left border-collapse">
                          <thead>
                            <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                              {project.benchmarkTable.headers.map(h => (
                                <th key={h} className="pb-2 px-3">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {project.benchmarkTable.rows.map((row, i) => (
                              <tr
                                key={i}
                                className={`border-b border-slate-800/60 ${row[0].includes("★") ? "text-orange-400 font-bold bg-orange-950/40" : "text-slate-300"}`}
                              >
                                {row.map((cell, j) => (
                                  <td key={j} className="py-2.5 px-3">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Project Images Gallery */}
                    {project.images.length > 0 && (
                      <div className={`grid gap-3 ${
                        project.images.length === 1 ? "grid-cols-1 max-w-xl" :
                        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      }`}>
                        {project.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 cursor-zoom-in shadow-sm hover:shadow-md"
                            onClick={() => openLightbox(img.src, project.title, img.caption)}
                          >
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute bottom-0 inset-x-0 bg-white/95 border-t border-slate-200 p-2 text-[11px] font-mono text-slate-800 font-bold">
                              {img.caption}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.badges.map(b => (
                        <span key={b} className="badge-grey text-[10px]">
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-4 pt-2">
                        {project.links.map(l => (
                          <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs font-mono font-bold text-orange-600 hover:text-red-600 transition-colors">
                            {l.icon}
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
