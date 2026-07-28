import React, { useState } from "react";
import { ExternalLink, Youtube, Rocket, Bot, Smartphone, Cpu, Satellite, ChevronRight, Eye, ZoomIn } from "lucide-react";
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
}

const projects: Project[] = [
  {
    id: "neal-tvc",
    tag: "B.Sc. Thesis",
    tagColor: "bg-amber-100 text-amber-800 border-amber-200",
    title: "Project NEAL — TVC Rocket",
    subtitle: "Guidance, Navigation & Control (GNC) System",
    description: "Design, Simulation & Implementation of a Thrust Vector Control (TVC) system and Engine Telemetry system for a small-scale rocket using PID control. Covers OpenRocket aerodynamic simulation, MATLAB/Simulink digital twin, STM32-based flight controller, 3D-printed gimbal nozzle actuated by servos, and live LoRa telemetry.",
    images: [
      { src: "/lovable-uploads/9bb0f2d1-6f94-4e8c-8f1b-d67358fe2989.png", caption: "NEAL-1.2 flight simulation — velocity, altitude & trajectory (OpenRocket)" },
      { src: "/lovable-uploads/f76e9520-627b-496b-b2ad-6c3ad9625331.png", caption: "MATLAB/Simulink PID TVC block diagram & LTI control system" },
      { src: "/lovable-uploads/9276d9c7-e271-46ce-93a0-3812a467b57b.png", caption: "Angular stabilization response — angle vs time (PID closed-loop)" },
      { src: "/lovable-uploads/2af70cce-1601-40a8-a6c5-fe74bc9d42a5.png", caption: "Orientation/TVC output — setpoint tracking vs actual gimbal deflection" },
    ],
    links: [
      { href: "https://www.linkedin.com/posts/lianmollick_rocketry-thesisdefense-thrustvectorcontrol-activity-7290674776816173056-7DhU", label: "LinkedIn Post", icon: <ExternalLink className="w-3.5 h-3.5" /> },
    ],
    badges: ["STM32", "PID Control", "MATLAB/Simulink", "OpenRocket", "OpenFOAM CFD", "LoRa", "3D Gimbal"],
    featured: true,
    nealProject: true,
  },
  {
    id: "dets",
    tag: "Ground Control System",
    tagColor: "bg-sky-100 text-sky-800 border-sky-200",
    title: "DETS — Engine Telemetry System",
    subtitle: "DhumketuX Propulsion Research Program",
    description: "High-reliability bi-directional telemetry and ignition-control system for static fire engine testing. Features custom WebGUI mission control (thrust graph, temperature/humidity telemetry, video feed), safety-first remote arming, two-way LoRa data link, and rugged field ground station hardware.",
    images: [
      { src: "/lovable-uploads/dhumketux-ground-station.jpg", caption: "DETS ground station unit — rugged field hardware with LoRa module" },
      { src: "/lovable-uploads/dhumketux-gui.png", caption: "DETS Mission Control WebGUI — real-time thrust graph, video & arming panel" },
    ],
    badges: ["LoRa 915MHz", "WebSocket", "Real-time Telemetry", "Remote Ignition", "React Dashboard"],
    featured: true,
  },
  {
    id: "putimach",
    tag: "Sounding Rocket",
    tagColor: "bg-orange-100 text-orange-800 border-orange-200",
    title: "PUTIMACH Sounding Rocket",
    subtitle: "Bangladesh's First Sounding Rocket",
    description: "Contributed avionics circuitry, sensor payload integration, and live telemetry for Bangladesh's first sounding rocket test flight. Designed the flight computer PCB, recovery system, and data logging modules.",
    images: [
      { src: "/lovable-uploads/3bdf51d8-1122-46a2-82ca-48f6ffc98de1.png", caption: "PUTIMACH launch — Bangladesh's first sounding rocket test flight" },
      { src: "/lovable-uploads/a7b917fd-f5c0-4add-b4bc-28c1906dc326.png", caption: "Avionics bay and telemetry hardware integration" },
    ],
    links: [
      { href: "https://www.youtube.com/watch?v=CuOzP50KKY4", label: "Watch Launch Video", icon: <Youtube className="w-3.5 h-3.5" /> },
    ],
    badges: ["Avionics", "Recovery System", "Data Logger", "Payload Integration"],
  },
  {
    id: "ground-station",
    tag: "Telemetry & GCS",
    tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    title: "Rocket Ground Control Station",
    subtitle: "LoRa-based Real-time GCS",
    description: "Custom ground station with LoRa communication module and WebApp showing live altitude, velocity, acceleration, GPS tracking, and 3D trajectory visualization for small-scale rocket flights.",
    images: [
      { src: "/lovable-uploads/8fe81e8c-3d39-45f9-8ea2-3707ad4088e2.png", caption: "Ground station WebGUI — real-time altitude, velocity & GPS tracking" },
    ],
    badges: ["LoRa", "GPS Tracking", "3D Trajectory", "WebApp"],
  },
  {
    id: "space-weather",
    tag: "AI / Satellite",
    tagColor: "bg-violet-100 text-violet-800 border-violet-200",
    title: "DSCOVR Space Weather AI",
    subtitle: "NASA Space Apps Challenge 2023 — 1st Runner-Up",
    description: "ML model detecting anomalies in NOAA DSCOVR satellite (Lagrange L1 point) telemetry to predict geomagnetic storms and prevent power grid blackouts. Team SolarSentinel dashboard with live solar wind & magnetic field data.",
    images: [
      { src: "/lovable-uploads/b9d2c90a-71e6-4f1c-accd-de40b7a9b806.png", caption: "SolarSentinel dashboard — DSCOVR satellite fault prediction & solar wind data" },
    ],
    badges: ["Machine Learning", "DSCOVR API", "Anomaly Detection", "Space Weather"],
  },
  {
    id: "combat-robot",
    tag: "Robotics",
    tagColor: "bg-red-100 text-red-800 border-red-200",
    title: "15kg Combat Robot (Battle Bot)",
    subtitle: "Technoxian WRC 2024 — National Finalist",
    description: "Designed and built a 15kg full-combat battle bot featuring high-torque brushless drivetrain, weapon spinner, and custom ESC tuning. Competed at Technoxian World Robotics Championship 2024 (National Finalist), IIT Techfest, and Technoxian 2023.",
    images: [
      { src: "/lovable-uploads/cacaca86-a46b-419a-bec9-5777b25a91a1.png", caption: "Alpha Science Lab team with the 15kg battle bot — Technoxian WRC 2024" },
    ],
    links: [
      { href: "https://www.facebook.com/photo/?fbid=122153093834048239", label: "View on Facebook", icon: <ExternalLink className="w-3.5 h-3.5" /> },
    ],
    badges: ["Brushless DC", "Weapon System", "Combat Robotics", "National Finalist"],
  },
  {
    id: "dr-water",
    tag: "IoT / Embedded",
    tagColor: "bg-teal-100 text-teal-800 border-teal-200",
    title: "Dr. Water — Smart IoT Purifier",
    subtitle: "Admin Dashboard & Embedded Controller",
    description: "Smart water purifier controller with IoT flow metering and cartridge replacement alerts. Features web admin panel (HTML/CSS/JS), separate per-cartridge counter, direct console control, and real-time water flow monitoring dashboard.",
    images: [
      { src: "/lovable-uploads/56392b97-45a5-4722-a185-5c4d1221044c.png", caption: "Dr. Water Live Monitor — real-time flow dashboard & cartridge management" },
    ],
    badges: ["ESP8266", "IoT", "Admin Panel", "Flow Sensor", "MQTT"],
  },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; src: string; title: string; caption: string }>({
    isOpen: false, src: "", title: "", caption: ""
  });
  const [expanded, setExpanded] = useState<string | null>("neal-tvc");

  const openLightbox = (src: string, title: string, caption: string) => {
    setLightbox({ isOpen: true, src, title, caption });
  };

  return (
    <>
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
        imageSrc={lightbox.src}
        title={lightbox.title}
        caption={lightbox.caption}
      />

      <section id="projects" className="section-container">
        <span className="section-subtitle">Engineering Portfolio</span>
        <h2 className="section-title mb-2">Projects & Systems</h2>
        <p className="text-slate-500 mb-10 max-w-2xl">
          From rocket avionics and GNC systems to IoT embedded solutions and AI satellite telemetry — every project built from hardware to software.
        </p>

        <div className="space-y-5">
          {projects.map((project) => {
            const isExpanded = expanded === project.id;
            return (
              <div
                key={project.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  project.nealProject
                    ? "border-amber-300 shadow-lg glow-amber"
                    : "border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                } bg-white`}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : project.id)}
                  className="w-full text-left p-5 md:p-6 flex items-start md:items-center gap-4"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                    project.nealProject ? "bg-amber-100" : "bg-slate-100"
                  }`}>
                    {project.id === "neal-tvc" && <Rocket className="w-5 h-5 text-amber-600" />}
                    {project.id === "dets" && <Satellite className="w-5 h-5 text-sky-600" />}
                    {project.id === "putimach" && <Rocket className="w-5 h-5 text-orange-600" />}
                    {project.id === "ground-station" && <Satellite className="w-5 h-5 text-indigo-600" />}
                    {project.id === "space-weather" && <Satellite className="w-5 h-5 text-violet-600" />}
                    {project.id === "combat-robot" && <Bot className="w-5 h-5 text-red-600" />}
                    {project.id === "dr-water" && <Smartphone className="w-5 h-5 text-teal-600" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`badge-pill border ${project.tagColor} text-[10px]`}>{project.tag}</span>
                      {project.nealProject && (
                        <span className="badge-pill bg-amber-500 text-white text-[10px] font-black">
                          ⭐ FEATURED THESIS PROJECT
                        </span>
                      )}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
                    )}
                  </div>

                  <ChevronRight className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-5 md:px-6 pb-6 border-t border-slate-100 pt-5 animate-fade-in">
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>

                    {/* Images grid */}
                    {project.images.length > 0 && (
                      <div className={`grid gap-3 mb-5 ${project.images.length === 1 ? "grid-cols-1 max-w-lg" : "grid-cols-1 sm:grid-cols-2"}`}>
                        {project.images.map((img, idx) => (
                          <div key={idx}
                            className="lightbox-trigger group rounded-xl overflow-hidden border border-slate-200 relative cursor-zoom-in"
                            onClick={() => openLightbox(img.src, project.title, img.caption)}
                          >
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="lightbox-overlay rounded-xl" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2.5 rounded-b-xl">
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
                    {project.links && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map(l => (
                          <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 text-portfolio-accent hover:text-portfolio-navy text-sm font-semibold transition-colors">
                            {l.icon}
                            {l.label}
                            <ExternalLink className="w-3 h-3" />
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
