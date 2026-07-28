import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const publications = [
  {
    tag: "B.Sc. Thesis · IEEE Format",
    title: "Design, Simulation & Implementation of a Thrust Vector Control System for Small-Scale Rockets",
    authors: "Lian Mollick Nehal",
    desc: "Full-stack TVC digital twin: OpenRocket aerodynamics → 6-DOF MATLAB/Simulink flight model → PID, MRAC, and ADRC controller design → Monte Carlo robustness verification. Simulated with OpenRocket, OpenFOAM, and MATLAB Simulink.",
    status: "In Preparation for Submission",
    color: "#c8102e",
    logo: "/lovable-uploads/project-neal-logo.png",
    images: ["/lovable-uploads/fig-controller-comparison.png", "/lovable-uploads/fig-mrac-adaptation.png", "/lovable-uploads/fig-adrc-eso.png"],
  },
  {
    tag: "Journal Paper — Under Review",
    title: "Forecasting the Urban Heat Island Effect in Dhaka City: A Scenario-Based Predictive Modeling Approach Using Machine Learning",
    authors: "Lian Mollick Nehal et al.",
    desc: "Scenario-based predictive modeling of urban heat island dynamics in Dhaka using satellite LST data and ML regression models. Proposes green infrastructure interventions using simulated projections.",
    status: "Under Review",
    color: "#1a56db",
    logo: null,
    images: [],
  },
  {
    tag: "Published — ICMEbuet2025",
    title: "A Data-Driven Framework for Optimal Solar PV Siting at International Airports: A Techno-Economic Case Study of HSIA",
    authors: "Lian Mollick Nehal et al.",
    desc: "GIS + ML framework for optimal solar panel placement at Hazrat Shahjalal International Airport, analyzing irradiance, shading, grid proximity, and ROI for maximum techno-economic yield.",
    status: "Published · ICMEbuet2025",
    color: "#059669",
    logo: null,
    images: [],
  },
  {
    tag: "Research Paper",
    title: "Data-Driven Adversarial Over-Sizing Detection in Campus Microgrids via Sinkhorn DRO",
    authors: "Lian Mollick Nehal et al.",
    desc: "Distributionally robust optimization framework using Sinkhorn divergence for detecting adversarial over-sizing vulnerabilities in campus microgrid planning under demand uncertainty.",
    status: "In Progress",
    color: "#7c3aed",
    logo: null,
    images: [],
  },
];

const Research = () => {
  const ref = useScrollReveal();

  return (
    <section id="research" className="section" style={{ background: "var(--white)" }} ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">Publications</div>
          <h2 className="section-heading">
            Research &<br />
            <span className="section-heading-light">Publications</span>
          </h2>
        </div>

        <div style={{ marginTop: 64 }}>
          {publications.map((p, i) => (
            <div
              key={p.title}
              className={`reveal delay-${(i % 4) + 1}`}
              style={{
                padding: "40px 0",
                borderBottom: "1px solid var(--light-grey)",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 32,
                alignItems: "start",
              }}
            >
              <div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: p.color,
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}40`,
                    padding: "4px 12px",
                  }}>{p.tag}</span>
                  {p.logo && (
                    <img src={p.logo} alt="Project Logo" style={{ height: 28, width: "auto" }} />
                  )}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(16px, 2vw, 22px)",
                  textTransform: "uppercase",
                  color: "var(--black)",
                  marginBottom: 8,
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}>{p.title}</h3>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--mid-grey)",
                  marginBottom: 14,
                  fontStyle: "italic",
                }}>{p.authors}</div>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--dark-grey)", maxWidth: 720 }}>{p.desc}</p>

                {/* Plots preview */}
                {p.images.length > 0 && (
                  <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                    {p.images.map((img, j) => (
                      <img
                        key={j}
                        src={img}
                        alt={`Research plot ${j + 1}`}
                        style={{
                          height: 100,
                          width: "auto",
                          objectFit: "cover",
                          border: "1px solid var(--light-grey)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: p.color,
                whiteSpace: "nowrap",
                paddingTop: 4,
              }}>{p.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
