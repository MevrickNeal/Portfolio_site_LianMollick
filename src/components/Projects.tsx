import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// All projects grouped by category with rich image previews
const projectGroups = [
  {
    category: "🔥 UrbanGaz — Industrial IoT Platform",
    categoryColor: "#ff4500",
    projects: [
      {
        num: "01",
        title: "UrbanGaz Company Website",
        short: "React · Firebase · Live Product",
        desc: "Full company website for UrbanGaz Limited — a smart LPG safety and gas reticulation company. Built with React and deployed on GitHub Pages. Showcases IoT products, services, and company identity.",
        tags: ["React", "Firebase", "UI/UX", "Web Dev"],
        github: "https://github.com/MevrickNeal/UrbanGaz-websiteforthem",
        live: "https://mevrickneal.github.io/UrbanGaz-websiteforthem/",
        preview: "/lovable-uploads/preview-urbangaz-website.png",
      },
      {
        num: "02",
        title: "Jamuna Cylinder Tracking System",
        short: "IoT · QR / RFID · Fleet Management",
        desc: "End-to-end LPG cylinder tracking and fleet management solution for UrbanGaz. Tracks cylinder location, fill status, delivery routing, and customer assignment across Jamuna distribution zones.",
        tags: ["IoT", "Tracking", "QR/RFID", "Dashboard"],
        github: "https://github.com/MevrickNeal/UrbanGaz-JamunaCylinderTrackingSystem",
        live: null,
        preview: "/lovable-uploads/preview-jamuna-tracking.png",
      },
      {
        num: "03",
        title: "Delivery & Franchise Map",
        short: "Geo · Route Optimization · SaaS",
        desc: "Interactive delivery and franchise zone management system for UrbanGaz gas supply operations. Maps franchise territories, optimizes delivery routes, and manages fleet dispatch for LPG cylinder delivery.",
        tags: ["Maps", "React", "Geospatial", "Logistics"],
        github: "https://github.com/MevrickNeal/UrbanGaz-DeliveryFranchizeMap",
        live: null,
        preview: "/lovable-uploads/preview-franchise-map.jpg",
      },
    ],
  },
  {
    category: "🚀 Aerospace & Rocketry",
    categoryColor: "#c8102e",
    projects: [
      {
        num: "04",
        title: "Project NEAL — TVC Digital Twin",
        short: "B.Sc. Thesis · IEEE Research · MATLAB Simulink",
        desc: "Full-stack Thrust Vector Control system: OpenRocket aerodynamics → 6-DOF MATLAB/Simulink flight simulation → PID, MRAC, and ADRC controller design → Monte Carlo robustness verification under uncertainty.",
        tags: ["Rocketry", "GNC", "MATLAB", "IEEE"],
        github: "https://github.com/MevrickNeal",
        live: null,
        preview: "/lovable-uploads/fig-controller-comparison.png",
        plots: ["/lovable-uploads/fig-mrac-adaptation.png", "/lovable-uploads/fig-adrc-eso.png"],
        thesis: true,
      },
      {
        num: "05",
        title: "DhumketuX Static Engine Test",
        short: "Solid Rocket · Thrust Measurement · Arduino",
        desc: "Static thrust test stand for solid rocket motor characterization. Measures real-time thrust curves, specific impulse (Isp), and burn uniformity using load cell + Arduino DAQ. Built at Dhumketu Exploration Technologies.",
        tags: ["Rocketry", "Embedded", "Arduino", "Data Acquisition"],
        github: "https://github.com/MevrickNeal/DhumketuX_EngineTest",
        live: null,
        preview: "/lovable-uploads/dhumketux-ground-station.jpg",
      },
    ],
  },
  {
    category: "🤖 Robotics & Biomedical",
    categoryColor: "#7c3aed",
    projects: [
      {
        num: "06",
        title: "Cyber ProstheticOS",
        short: "Computer Vision · Robotic Arm · Python",
        desc: "Robotic arm controller using camera based computer vision. The prosthetic OS interprets hand gestures and finger positions from a live camera feed and maps them to servo motor commands for a 5 DOF robotic arm.",
        tags: ["OpenCV", "Python", "Servo Control", "Prosthetics"],
        github: "https://github.com/MevrickNeal/Cyber_ProstheticOS",
        live: null,
        preview: "/lovable-uploads/preview-cyber-prosthetic.jpg",
      },
      {
        num: "07",
        title: "Quantum ML Cancer Cell Detection",
        short: "Quantum Computing · Oncology · Research",
        desc: "Quantum classical hybrid machine learning for multimodal cancer cell detection and classification. Combines quantum kernel methods with classical neural networks for histopathology image analysis.",
        tags: ["Quantum ML", "TensorFlow", "Oncology", "Research"],
        github: "https://github.com/MevrickNeal/Quantum-Machine-Learning-Based-Cancer-Cell-Detection",
        live: null,
        preview: "/lovable-uploads/preview-quantum-cancer.jpg",
      },
    ],
  },
  {
    category: "💧 IoT & Smart Devices",
    categoryColor: "#0284c7",
    projects: [
      {
        num: "08",
        title: "DrWater Smart Filter Counter",
        short: "IoT · ESP32 · Smart Home",
        desc: "IoT based smart water purifier filter cartridge change notifier. Monitors water flow accumulation using a flow sensor and ESP32, then sends push notifications when the filter cartridge needs replacement to prevent degraded water quality.",
        tags: ["IoT", "ESP32", "Smart Home", "Water Safety"],
        github: "https://github.com/MevrickNeal/DrWaterSmartCounter",
        live: null,
        preview: "/lovable-uploads/preview-drwater-iot.jpg",
      },
    ],
  },
];

const cardStyle = {
  background: "var(--white)",
  border: "1px solid var(--light-grey)",
  padding: "32px",
  transition: "border-color 0.3s, transform 0.3s",
  cursor: "default",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
};

const Projects = () => {
  const ref = useScrollReveal();
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

  return (
    <section id="projects" className="section" style={{ background: "var(--off-white)" }} ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">02 / Multi-Disciplinary Builds</div>
          <h2 className="section-heading">
            Projects &amp;<br />
            <span className="section-heading-light">Engineering Solutions</span>
          </h2>
        </div>

        {projectGroups.map((group, gi) => (
          <div key={group.category} style={{ marginTop: gi === 0 ? 64 : 80 }}>
            {/* Category header */}
            <div className={`reveal`} style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 32,
              paddingBottom: 16,
              borderBottom: `2px solid ${group.categoryColor}`,
            }}>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(18px, 2.5vw, 28px)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: "var(--black)",
              }}>{group.category}</h3>
            </div>

            {/* Project cards grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}>
              {group.projects.map((p, pi) => (
                <div
                  key={p.num}
                  className={`reveal delay-${(pi % 3) + 1}`}
                  style={{ ...cardStyle, position: "relative" }}
                >
                  <div>
                    {/* Number */}
                    <div style={{
                      position: "absolute",
                      top: 24, right: 24,
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 13,
                      color: group.categoryColor,
                      letterSpacing: "0.1em",
                    }}>{p.num}</div>

                    {/* Preview image with click-to-expand */}
                    {p.preview && (
                      <div
                        onClick={() => setActiveModalImg(p.preview)}
                        style={{
                          width: "100%",
                          height: 180,
                          overflow: "hidden",
                          marginBottom: 20,
                          border: "1px solid var(--light-grey)",
                          cursor: "pointer",
                          background: "#fff",
                        }}
                      >
                        <img
                          src={p.preview}
                          alt={`${p.title} preview`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            transition: "transform 0.4s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
                        />
                      </div>
                    )}

                    {/* Tag */}
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: group.categoryColor,
                      marginBottom: 8,
                    }}>{p.short}</div>

                    {/* Title */}
                    <h4 style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(16px, 1.8vw, 22px)",
                      textTransform: "uppercase",
                      color: "var(--black)",
                      marginBottom: 12,
                      lineHeight: 1.15,
                      letterSpacing: "0.02em",
                    }}>{p.title}</h4>

                    <p style={{
                      fontSize: 13,
                      lineHeight: 1.75,
                      color: "var(--dark-grey)",
                      marginBottom: 16,
                    }}>{p.desc}</p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                      {p.tags.map((t) => (
                        <span key={t} style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--mid-grey)",
                          border: "1px solid var(--light-grey)",
                          background: "var(--off-white)",
                          padding: "3px 10px",
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* TVC plots if present */}
                    {(p as any).plots && (
                      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                        {(p as any).plots.map((img: string, j: number) => (
                          <img
                            key={j}
                            src={img}
                            alt={`plot ${j + 1}`}
                            onClick={() => setActiveModalImg(img)}
                            style={{
                              flex: 1, height: 75, objectFit: "cover",
                              border: "1px solid var(--light-grey)",
                              cursor: "pointer",
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* CTA row */}
                    <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 11,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--black)",
                            textDecoration: "none",
                            border: "1px solid var(--light-grey)",
                            padding: "9px 18px",
                            transition: "all 0.3s",
                            background: "var(--off-white)",
                          }}
                        >
                          GitHub Repo →
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 11,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--white)",
                            textDecoration: "none",
                            border: `1px solid ${group.categoryColor}`,
                            background: group.categoryColor,
                            padding: "9px 18px",
                            transition: "all 0.3s",
                          }}
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Project Image Modal Lightbox */}
        {activeModalImg && (
          <div
            onClick={() => setActiveModalImg(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999999,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              cursor: "pointer",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                background: "#fff",
                padding: 12,
                borderRadius: 4,
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
            >
              <button
                onClick={() => setActiveModalImg(null)}
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--red)",
                  color: "#fff",
                  border: "none",
                  fontSize: 18,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
              <img
                src={activeModalImg}
                alt="Project Preview Full"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
