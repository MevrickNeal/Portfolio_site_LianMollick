import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    num: "01",
    title: "Project NEAL — TVC Digital Twin",
    short: "University Thesis · B.Sc. EEE · IEEE Research Paper",
    desc: "Full-stack Thrust Vector Control system: OpenRocket aerodynamics → 6-DOF MATLAB Simulink flight simulation → PID/MRAC/ADRC controller comparison under Monte Carlo uncertainty analysis.",
    tags: ["Rocketry", "GNC", "MATLAB", "IEEE"],
    logo: "/lovable-uploads/project-neal-logo.png",
    images: [
      "/lovable-uploads/thesis-image67.png",
      "/lovable-uploads/thesis-image58.png",
      "/lovable-uploads/thesis-image59.png",
      "/lovable-uploads/thesis-image82.png",
    ],
    plots: [
      "/lovable-uploads/fig-controller-comparison.png",
      "/lovable-uploads/fig-mrac-adaptation.png",
      "/lovable-uploads/fig-adrc-eso.png",
    ],
    metrics: [
      { val: "6", unit: "-DOF", label: "Physics Simulation" },
      { val: "3", unit: "×", label: "Controllers Compared" },
      { val: "500", unit: "+", label: "Monte Carlo Runs" },
    ],
    color: "#c8102e",
    isThesis: true,
  },
  {
    num: "02",
    title: "TVC & GNC — Open Source Research",
    short: "Open Source · Community Research · GitHub",
    desc: "Advanced Guidance, Navigation & Control algorithms for experimental rocketry. Features MRAC adaptive control, ADRC with Extended State Observer, and real-time 6-DOF trajectory simulation for amateur high-power rockets.",
    tags: ["Open Source", "GNC", "Python", "Control Theory"],
    logo: "/lovable-uploads/tvc-gnc-logo.png",
    images: [
      "/lovable-uploads/fig-controller-comparison.png",
      "/lovable-uploads/fig-adrc-eso.png",
    ],
    plots: [
      "/lovable-uploads/fig-mrac-adaptation.png",
    ],
    metrics: [
      { val: "MRAC", unit: "", label: "Adaptive Control" },
      { val: "ADRC", unit: "", label: "Active Disturbance Rejection" },
      { val: "ESO", unit: "", label: "Extended State Observer" },
    ],
    color: "#0f0f0f",
    isThesis: false,
  },
  {
    num: "03",
    title: "UrbanGaz — Smart IoT LPG Dashboard",
    short: "Professional · SaaS · IoT Safety System",
    desc: "Industrial-grade Smart LPG IoT safety monitoring platform with real-time sensor telemetry, automated shut-off valves, and a React dashboard with multi-zone alert management.",
    tags: ["IoT", "React", "Firebase", "Embedded"],
    logo: "/lovable-uploads/ugl-logo.png",
    images: [],
    plots: [],
    metrics: [
      { val: "RT", unit: "", label: "Real-Time Monitoring" },
      { val: "IoT", unit: "", label: "Sensor Network" },
      { val: "Auto", unit: "", label: "Shut-off Control" },
    ],
    color: "#ff4500",
    isThesis: false,
  },
];

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <>
      {/* Black project listing */}
      <section id="projects" className="project-section" ref={ref}>
        <div className="section-inner">
          <div className="reveal">
            <div className="section-tag">My Work</div>
            <h2 className="section-heading">
              Projects<br />
              <span className="section-heading-light">&amp; Research</span>
            </h2>
          </div>

          <div className="projects-listing">
            {projects.map((p, i) => (
              <div key={p.num} className={`project-row reveal delay-${i + 1}`}>
                <div className="project-num">{p.num}</div>
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project detail panels on white background */}
      {projects.map((p, idx) => (
        <ProjectDetail key={p.num} project={p} reversed={idx % 2 === 1} />
      ))}
    </>
  );
};

const ProjectDetail = ({ project: p, reversed }: { project: typeof projects[0], reversed: boolean }) => {
  const ref = useScrollReveal();

  return (
    <section className="project-detail-section" ref={ref}>
      <div className="section-inner">
        <div className={`project-detail-grid${reversed ? " reversed" : ""}`}>
          {/* Content column */}
          <div className="project-detail-content">
            <div className="reveal">
              <div className="section-tag">{p.short}</div>
            </div>

            <div className="project-logo-banner reveal delay-1">
              {p.logo && (
                <img src={p.logo} alt={`${p.title} logo`} />
              )}
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: p.color,
              }}>
                {p.num === "01" ? "IEEE Research" : p.num === "02" ? "Open Source" : "Professional"}
              </span>
            </div>

            <h3 className="reveal delay-1">{p.title}</h3>
            <p className="reveal delay-2">{p.desc}</p>

            {p.metrics.length > 0 && (
              <div className="project-metrics reveal delay-3">
                {p.metrics.map((m) => (
                  <div className="project-metric" key={m.label}>
                    <div className="project-metric-val">
                      {m.val}<span>{m.unit}</span>
                    </div>
                    <div className="project-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="hero-cta-row reveal delay-4" style={{ marginTop: 24 }}>
              {p.num === "03" ? (
                <>
                  <a
                    href="https://mevrickneal.github.io/UrbanGaz-websiteforthem/"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/MevrickNeal/UrbanGaz-websiteforthem"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>
                </>
              ) : p.num === "01" ? (
                <a href="#tvc-simulator" className="btn-primary">
                  Live Simulator
                </a>
              ) : (
                <a href="https://github.com/MevrickNeal" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  GitHub Repo
                </a>
              )}
            </div>
          </div>

          {/* Gallery column */}
          <div className="project-gallery reveal-right delay-2">
            {p.images.length > 0 && (
              <>
                <img
                  src={p.images[0]}
                  alt={`${p.title} — image 1`}
                  className="gallery-large"
                />
                {p.images.slice(1, 3).map((img, i) => (
                  <img key={i} src={img} alt={`${p.title} — image ${i + 2}`} />
                ))}
                {p.plots.slice(0, 1).map((img, i) => (
                  <img key={`plot-${i}`} src={img} alt={`${p.title} — plot ${i + 1}`} />
                ))}
              </>
            )}
            {p.images.length === 0 && p.num === "03" && (
              <img
                src="/lovable-uploads/fig-controller-comparison.png"
                alt="UrbanGaz Dashboard"
                className="gallery-large"
                style={{ filter: "hue-rotate(20deg)" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
