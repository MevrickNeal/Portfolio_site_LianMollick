import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const awards = [
  {
    year: "2022",
    title: "Winner — Rocketry Innovation Challenge",
    org: "a2i Aspire to Innovation, Ministry of ICT, Bangladesh · Aviation and Aerospace University",
    desc: "National-level rocketry challenge awarded by the Ministry of ICT Bangladesh for innovative amateur rocket design and avionics development.",
    badge: "🥇 Winner",
    color: "#c8a000",
  },
  {
    year: "2023",
    title: "Regional 1st Runner-Up — NASA Space Apps Challenge",
    org: "NASA · Team: Solar Sentinel",
    desc: "Built a machine learning model using NOAA satellite data from the Lagrange point to predict severe solar weather events and issue early warnings via Twitter integration — preventing large-scale power blackouts.",
    badge: "🥈 Runner-Up",
    color: "#c8102e",
  },
  {
    year: "2023",
    title: "1st Runner-Up — 3rd National Science Fest",
    org: "Walton Laptop · Senior Segment",
    desc: "Project: Wireless energy transmission — demonstrated high-frequency resonant inductive coupling for practical wireless power delivery.",
    badge: "🥈 Runner-Up",
    color: "#c8102e",
  },
  {
    year: "2022",
    title: "1st Runner-Up — Poster Presentation at Brainiac 2022",
    org: "Brainiac National Competition",
    desc: "Presented an automobile anti-theft system using GPS tracking, RFID authentication, and GSM-based owner alerts.",
    badge: "🥈 Runner-Up",
    color: "#c8102e",
  },
  {
    year: "2020",
    title: "1st Runner-Up — Robo Race",
    org: "CSE Carnival 2020 · Mymensingh Engineering College",
    desc: "High-speed autonomous robot racing competition. Designed and built a line-following robot with optimized PID speed control.",
    badge: "🥈 Runner-Up",
    color: "#c8102e",
  },
];

const certifications = [
  {
    title: "Semiconductor Fabrication 101",
    org: "Intel · Purdue University · Texas University",
    date: "Jan 2025",
    desc: "Comprehensive training on semiconductor fabrication processes, wafer processing, and chip design fundamentals. Intel-sponsored industry program.",
  },
  {
    title: "IC Mask Design & Analog Layout",
    org: "ULKASEMI PVT Limited — Industrial Training",
    date: "Dec 2024",
    desc: "Intensive training on Analog Design, IC Mask Design (Mixed-Signal Layout), and IC Physical Design using industry-standard tools.",
  },
  {
    title: "Industrial Electrical Engineering",
    org: "Training Institute for Chemical Industries (TICI)",
    date: "Apr–May 2025",
    desc: "Specialized training on industrial electrical systems — implementation and maintenance in chemical and manufacturing environments.",
  },
];

const Awards = () => {
  const ref = useScrollReveal();

  return (
    <section id="awards" className="section" style={{ background: "var(--off-white)" }} ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">Recognition</div>
          <h2 className="section-heading">
            Awards &<br />
            <span className="section-heading-light">Achievements</span>
          </h2>
        </div>

        {/* Awards listing */}
        <div style={{ marginTop: 64 }}>
          {awards.map((a, i) => (
            <div
              key={a.title}
              className={`reveal delay-${i + 1}`}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr auto",
                gap: "32px",
                alignItems: "start",
                padding: "32px 0",
                borderBottom: "1px solid var(--light-grey)",
              }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 13,
                color: "var(--mid-grey)",
                letterSpacing: "0.1em",
                paddingTop: 4,
              }}>{a.year}</div>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(16px, 2vw, 22px)",
                  textTransform: "uppercase",
                  color: "var(--black)",
                  marginBottom: 6,
                  letterSpacing: "0.02em",
                }}>{a.title}</div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mid-grey)",
                  marginBottom: 12,
                }}>{a.org}</div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--dark-grey)" }}>{a.desc}</p>
              </div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: a.color,
                background: `${a.color}15`,
                border: `1px solid ${a.color}40`,
                padding: "6px 14px",
                whiteSpace: "nowrap",
                alignSelf: "flex-start",
              }}>{a.badge}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: 80 }}>
          <div className="reveal">
            <div className="section-tag">Credentials</div>
            <h2 className="section-heading" style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
              Certifications &<br />
              <span className="section-heading-light">Training</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 1,
            background: "var(--light-grey)",
            marginTop: 40,
          }}>
            {certifications.map((c, i) => (
              <div
                key={c.title}
                className={`skill-card reveal delay-${i + 1}`}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  marginBottom: 12,
                }}>{c.date}</div>
                <div className="skill-card-name" style={{ marginBottom: 8 }}>{c.title}</div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--mid-grey)",
                  marginBottom: 12,
                }}>{c.org}</div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--dark-grey)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginTop: 80 }}>
          <div className="reveal">
            <div className="section-tag">Education</div>
            <h2 className="section-heading" style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
              Academic<br />
              <span className="section-heading-light">Background</span>
            </h2>
          </div>

          <div className={`reveal delay-1`} style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
          }}>
            <div style={{ borderLeft: "3px solid var(--red)", paddingLeft: 24 }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--red)",
                marginBottom: 8,
              }}>Jan 2020 – Jun 2025</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(16px, 2vw, 22px)",
                textTransform: "uppercase",
                color: "var(--black)",
                marginBottom: 6,
              }}>B.Sc. Electrical & Electronic Engineering</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--mid-grey)",
                marginBottom: 12,
              }}>Mymensingh Engineering College · University of Dhaka Technology Unit</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--dark-grey)" }}>
                Specialization in control systems, embedded electronics, power systems, and digital signal processing.
                Thesis: TVC-based flight controller design with MATLAB/Simulink 6-DOF simulation.
              </p>
            </div>

            {/* Leadership */}
            <div style={{ borderLeft: "3px solid var(--dark-grey)", paddingLeft: 24 }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--dark-grey)",
                marginBottom: 8,
              }}>Leadership</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 18,
                textTransform: "uppercase",
                color: "var(--black)",
                marginBottom: 6,
              }}>EEE Coordinator</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--mid-grey)",
                marginBottom: 12,
              }}>Alpha Science Lab · Head of Robotics</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--dark-grey)" }}>
                Led the Alpha Science Lab robotics department — robot design, building, and competition strategy.
                Mentored teams to competition success across national-level events.
                Also served as Co-Publicity Editor at Bangladesh Human Rights Commission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
