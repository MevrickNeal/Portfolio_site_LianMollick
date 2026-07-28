import React, { useState } from "react";
import { ExternalLink, Youtube, Rocket, Bot, Smartphone, Cpu, Satellite, ChevronRight, ZoomIn, BarChart2, Atom, Wifi } from "lucide-react";
import LightboxModal from "./LightboxModal";

interface Project {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle?: string;
  description: string;
  images: { src: string; caption: string }[];
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
    tagColor: "bg-amber-100 text-amber-800 border-amber-200",
    title: "TVC Digital Twin — 6-DOF Benchmark Framework",
    subtitle: "Project NEAL · github.com/MevrickNeal/TVC-DigitalTwin-Simulation",
    description:
      "High-fidelity 6-DOF non-linear Digital Twin for Thrust Vector Controlled rockets, built on physical parameters extracted from OpenRocket telemetry of Project NEAL-1.2. Benchmarks four distinct attitude control algorithms — Cascaded PID, Time-Varying LQR, MRAC (Model Reference Adaptive Control), and ADRC (Active Disturbance Rejection Control) — under dynamic mass decay, time-varying pitch moment of inertia, CG shift, and aerodynamic restoring forces. Includes a 200-run Monte Carlo uncertainty quantification framework and generates publication-ready IEEE vector figures.",
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

  // ─── PROJECT NEAL THESIS ─────────────────────────────────────────────────────
  {
    id: "neal-tvc",
    tag: "B.Sc. Thesis",
    tagColor: "bg-amber-100 text-amber-800 border-amber-200",
    title: "Project NEAL — TVC Rocket Hardware",
    subtitle: "Design, Simulation & Implementation · STM32 + 3D-Printed Gimbal",
    description:
      "Physical implementation of the Project NEAL-1.2 TVC rocket — from MATLAB/Simulink digital twin to real-hardware STM32 flight controller, 3D-printed servo-actuated gimbal nozzle, and bi-directional LoRa telemetry. Thesis covers OpenRocket aerodynamic modeling, PID closed-loop attitude control, custom IMU filtering, and live ground station WebGUI.",
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
    tagColor: "bg-orange-100 text-orange-800 border-orange-200",
    title: "UrbanGaz (UGL) — Smart LPG IoT Dashboard",
    subtitle: "Real-Time Gas Distribution Management System",
    description:
      "Full-stack IoT gas distribution monitoring system for UrbanGaz Limited (UGL). Features an Arduino-based TFT LCD + Bluetooth smart manifold controller (Iteaduino BT 1.1 with UGL logo bitmap embedded in PROGMEM), a Python backend server for live data updates, and a comprehensive web dashboard with billing, refill analytics, inventory tracking, project location maps, and cylinder forecast charts. Ingests real June 2026 gas distribution Excel data.",
    images: [
      { src: "/lovable-uploads/ugl-logo.png", caption: "UrbanGaz (UGL) — company branding" },
      { src: "/lovable-uploads/56392b97-45a5-4722-a185-5c4d1221044c.png", caption: "IoT dashboard example — real-time monitoring interface" },
    ],
    badges: ["Arduino C++", "TFT LCD", "Bluetooth UART", "Python Flask", "HTML Dashboard", "Recharts", "Excel Data Pipeline", "LoRa"],
  },

  // ─── QUANTUM MULTIMODAL ONCOLOGY ─────────────────────────────────────────────
  {
    id: "quantum-oncology",
    tag: "Quantum ML · AI Research",
    tagColor: "bg-violet-100 text-violet-800 border-violet-200",
    title: "Quantum Multimodal Leukemia Classification",
    subtitle: "Hybrid QML Framework — PennyLane · Qiskit · PyTorch",
    description:
      "Research-grade hybrid Quantum-Classical Machine Learning framework for multimodal leukemia classification. Integrates variational quantum circuits (PennyLane/Qiskit) with PyTorch deep learning encoders and multimodal data fusion (imaging + tabular + genomic). Includes SHAP/Captum explainability, LightGBM and CatBoost classical baselines, and a full ablation study comparing quantum advantage against purely classical models. Targeted at the TCGA-ALL and BALL-seq datasets.",
    images: [],
    links: [],
    badges: ["PennyLane", "Qiskit", "PyTorch", "Variational QCircuits", "Multimodal Fusion", "SHAP Explainability", "LightGBM", "CatBoost", "Medical AI"],
  },

  // ─── DETS ───────────────────────────────────────────────────────────────────
  {
    id: "dets",
    tag: "Ground Control System",
    tagColor: "bg-sky-100 text-sky-800 border-sky-200",
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
    tagColor: "bg-orange-100 text-orange-800 border-orange-200",
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

  // ─── GROUND STATION ──────────────────────────────────────────────────────────
  {
    id: "ground-station",
    tag: "Telemetry & GCS",
    tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    title: "Rocket Ground Control Station",
    subtitle: "LoRa-based Real-time GCS",
    description:
      "Custom ground station with LoRa communication module and WebApp showing live altitude, velocity, acceleration, GPS tracking, and 3D trajectory visualization for small-scale rocket flights.",
    images: [
      { src: "/lovable-uploads/8fe81e8c-3d39-45f9-8ea2-3707ad4088e2.png", caption: "Ground station WebGUI — real-time altitude, velocity & GPS tracking" },
    ],
    badges: ["LoRa", "GPS Tracking", "3D Trajectory", "WebApp"],
  },

  // ─── SPACE WEATHER ───────────────────────────────────────────────────────────
  {
    id: "space-weather",
    tag: "AI / Satellite",
    tagColor: "bg-violet-100 text-violet-800 border-violet-200",
    title: "DSCOVR Space Weather AI",
    subtitle: "NASA Space Apps Challenge 2023 — 1st Runner-Up",
    description:
      "ML model detecting anomalies in NOAA DSCOVR satellite (Lagrange L1 point) telemetry to predict geomagnetic storms and prevent power grid blackouts. Team SolarSentinel dashboard with live solar wind & magnetic field data.",
    images: [
      { src: "/lovable-uploads/b9d2c90a-71e6-4f1c-accd-de40b7a9b806.png", caption: "SolarSentinel dashboard — DSCOVR satellite fault prediction & solar wind data" },
    ],
    badges: ["Machine Learning", "DSCOVR API", "Anomaly Detection", "Space Weather"],
  },

  // ─── COMBAT ROBOT ────────────────────────────────────────────────────────────
  {
    id: "combat-robot",
    tag: "Robotics",
    tagColor: "bg-red-100 text-red-800 border-red-200",
    title: "15kg Combat Robot (Battle Bot)",
    subtitle: "Technoxian WRC 2024 — National Finalist",
    description:
      "Designed and built a 15kg full-combat battle bot featuring high-torque brushless drivetrain, weapon spinner, and custom ESC tuning. National Finalist at Technoxian World Robotics Championship 2024.",
    images: [
      { src: "/lovable-uploads/cacaca86-a46b-419a-bec9-5777b25a91a1.png", caption: "Alpha Science Lab team with the 15kg battle bot — Technoxian WRC 2024" },
    ],
    links: [
      { href: "https://www.facebook.com/photo/?fbid=122153093834048239", label: "View on Facebook", icon: <ExternalLink className="w-3.5 h-3.5" /> },
    ],
    badges: ["Brushless DC", "Weapon System", "Combat Robotics", "National Finalist"],
  },
];

const ProjectIcon = ({ id }: { id: string }) => {
  const cls = "w-5 h-5";
  if (id.startsWith("neal")) return <Rocket className={`${cls} text-amber-600`} />;
  if (id === "ugl-iot") return <Wifi className={`${cls} text-orange-600`} />;
  if (id === "quantum-oncology") return <Atom className={`${cls} text-violet-600`} />;
  if (id === "dets") return <Satellite className={`${cls} text-sky-600`} />;
  if (id === "putimach") return <Rocket className={`${cls} text-orange-600`} />;
  if (id === "ground-station") return <Satellite className={`${cls} text-indigo-600`} />;
  if (id === "space-weather") return <Satellite className={`${cls} text-violet-600`} />;
  if (id === "combat-robot") return <Bot className={`${cls} text-red-600`} />;
  return <Cpu className={cls} />;
};

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
        <span className="section-subtitle">Engineering Portfolio</span>
        <h2 className="section-title mb-2">Projects & Research</h2>
        <p className="text-slate-500 mb-10 max-w-2xl">
          From rocket GNC digital twins and quantum ML research to IoT industrial dashboards — built end-to-end from hardware to software.
        </p>

        <div className="space-y-4">
          {projects.map((project) => {
            const isExpanded = expanded === project.id;
            return (
              <div
                key={project.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                  project.nealProject
                    ? "border-amber-300 shadow-lg glow-amber"
                    : "border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : project.id)}
                  className="w-full text-left p-5 md:p-6 flex items-start md:items-center gap-4"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                    project.nealProject ? "bg-amber-100" :
                    project.id === "quantum-oncology" ? "bg-violet-100" :
                    project.id === "ugl-iot" ? "bg-orange-100" : "bg-slate-100"
                  }`}>
                    <ProjectIcon id={project.id} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`badge-pill border ${project.tagColor} text-[10px]`}>{project.tag}</span>
                      {project.nealProject && (
                        <span className="badge-pill bg-amber-500 text-white text-[10px] font-black">⭐ THESIS</span>
                      )}
                      {project.id === "quantum-oncology" && (
                        <span className="badge-pill bg-violet-600 text-white text-[10px] font-black">⚛ QML RESEARCH</span>
                      )}
                      {project.id === "ugl-iot" && (
                        <span className="badge-pill bg-orange-500 text-white text-[10px] font-black">🏭 INDUSTRY</span>
                      )}
                      {project.id === "neal-tvc-digital-twin" && (
                        <span className="badge-pill bg-blue-600 text-white text-[10px] font-black">📄 IEEE PAPER</span>
                      )}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">{project.subtitle}</p>
                    )}
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                  />
                </button>

                {/* Expanded body */}
                {isExpanded && (
                  <div className="px-5 md:px-6 pb-6 border-t border-slate-100 pt-5 animate-fade-in">
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>

                    {/* Benchmark table (TVC Digital Twin) */}
                    {project.benchmarkTable && (
                      <div className="mb-5 overflow-x-auto">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart2 className="w-4 h-4 text-portfolio-accent" />
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                            Benchmark Results — +5° Step Response (N=200 Monte Carlo)
                          </span>
                        </div>
                        <table className="w-full text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-900 text-white">
                              {project.benchmarkTable.headers.map(h => (
                                <th key={h} className="px-3 py-2 text-left font-bold tracking-wide">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {project.benchmarkTable.rows.map((row, i) => (
                              <tr
                                key={i}
                                className={`border-b border-slate-100 ${row[0].includes("★") ? "bg-amber-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                              >
                                {row.map((cell, j) => (
                                  <td key={j} className={`px-3 py-2 font-mono ${j === 0 ? "font-semibold text-slate-800" : "text-slate-600"}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <p className="text-[10px] text-slate-400 mt-1.5 font-mono">★ Best RMSE and fastest settling time · ADRC shows highest parametric consistency (σ=0.007°)</p>
                      </div>
                    )}

                    {/* Images */}
                    {project.images.length > 0 && (
                      <div className={`grid gap-3 mb-5 ${
                        project.images.length === 1 ? "grid-cols-1 max-w-lg" :
                        project.images.length === 2 ? "grid-cols-1 sm:grid-cols-2" :
                        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      }`}>
                        {project.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="lightbox-trigger group rounded-xl overflow-hidden border border-slate-200 relative cursor-zoom-in"
                            onClick={() => openLightbox(img.src, project.title, img.caption)}
                          >
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="lightbox-overlay rounded-xl" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 rounded-b-xl">
                              <p className="text-white text-[10px] font-medium leading-tight">{img.caption}</p>
                            </div>
                            <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                              <ZoomIn className="w-3.5 h-3.5 text-white" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.badges.map(b => (
                        <span key={b} className="badge-pill bg-slate-100 text-slate-600 border border-slate-200 text-[10px]">
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map(l => (
                          <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 text-portfolio-accent hover:text-portfolio-navy text-sm font-semibold transition-colors">
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
