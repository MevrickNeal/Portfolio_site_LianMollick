import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    date: "Jan 2026 – Present",
    title: "Tech Coordinator & Acting Technical Manager",
    company: "UrbanGaz Limited & Maestro Tech Ltd. (Sister Concern) — Khilkhet, Dhaka",
    tags: ["Team Building", "LPG Systems", "IoT", "Software", "Hardware"],
    bullets: [
      "Building and leading cross-functional tech teams across software, hardware, and field operations.",
      "Driving technical advancements in IoT-based LPG gas monitoring, pipeline management, and safety systems.",
      "Overseeing LPG reticulated system installation, commissioning, and day-to-day operations.",
      "Managing hardware-software integration for smart gas metering, leak detection, and automated shut-off.",
      "Acting as Technical Manager for Maestro Tech Ltd., a sister concern handling tech product development and partnerships.",
      "Negotiating contracts and building relationships with principal software & hardware partner firms.",
    ],
    link: "https://mevrickneal.github.io/UrbanGaz-websiteforthem/",
    linkLabel: "Live Product →",
    accentColor: "#ff4500",
  },
  {
    date: "Jun 2025 – Dec 2025",
    title: "Assistant to CEO",
    company: "Cloud Company — Dhaka, Bangladesh",
    tags: ["Strategy", "Project Management", "Freelance", "Client Relations"],
    bullets: [
      "Assisted CEO in strategic planning and operational decision-making.",
      "Managed client communications and coordinated freelance project delivery — graphic design, web development, and video editing.",
      "Coordinated with creative and development teams to meet client deliverables.",
    ],
    link: "https://www.cloudcompany.cc/",
    linkLabel: "cloudcompany.cc →",
    accentColor: "#0f0f0f",
  },
  {
    date: "2021 – 2023",
    title: "Jr. Embedded Engineer (Part-time)",
    company: "Dhumketu Exploration Technologies Ltd. — Mymensingh",
    tags: ["Avionics", "Telemetry", "Rocketry", "Embedded C"],
    bullets: [
      "Amateur rocket avionics development and testing — sounding rockets and weather payload integration.",
      "Research and development on telemetry and tracking systems including ground station software.",
      "Avionics bay assembly, integration testing, and live data broadcasting during static and flight tests.",
    ],
    link: null,
    linkLabel: null,
    accentColor: "#c8102e",
  },
];

const Experience = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">Timeline</div>
          <h2 className="section-heading">
            Professional<br />
            <span className="section-heading-light">Experience</span>
          </h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((e, i) => (
            <div className={`exp-item reveal delay-${i + 1}`} key={e.title}>
              <div className="exp-date">{e.date}</div>
              <div className="exp-title">{e.title}</div>
              <div className="exp-company">{e.company}</div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "10px 0 14px" }}>
                {e.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: e.accentColor,
                    background: `${e.accentColor}12`,
                    border: `1px solid ${e.accentColor}30`,
                    padding: "3px 10px",
                  }}>{t}</span>
                ))}
              </div>

              {/* Bullet points */}
              <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                {e.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "var(--dark-grey)",
                    marginBottom: 6,
                    paddingLeft: 16,
                    position: "relative",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      top: "0.6em",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: e.accentColor,
                      display: "inline-block",
                    }} />
                    {b}
                  </li>
                ))}
              </ul>

              {e.link && (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 14,
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: e.accentColor,
                    textDecoration: "none",
                    borderBottom: `1px solid ${e.accentColor}`,
                    paddingBottom: 2,
                  }}
                >
                  {e.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
