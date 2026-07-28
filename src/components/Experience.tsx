import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    date: "2025 – Present",
    title: "Founder & Lead Engineer",
    company: "UrbanGaz — Smart LPG Safety Platform",
    desc: "Designed and deployed a full-stack IoT safety monitoring system for LPG gas management. Built the React dashboard, embedded sensor firmware (ESP32), and automated shut-off relay logic. Live at mevrickneal.github.io/UrbanGaz-websiteforthem/",
  },
  {
    date: "2024 – Present",
    title: "Lead Researcher — TVC & GNC Systems",
    company: "Project NEAL — University Thesis",
    desc: "Architected a complete Thrust Vector Control digital twin: OpenRocket mass model → 6-DOF MATLAB/Simulink plant → PID, MRAC, ADRC controller design → Monte Carlo robustness analysis. Manuscript submitted as IEEE-format research paper.",
  },
  {
    date: "2024",
    title: "Open Source GNC Contributor",
    company: "TVC & GNC — Community Research",
    desc: "Released open-source GNC algorithms for experimental rocketry including MRAC adaptive pitch stabilization and ADRC with Extended State Observer. Benchmarked against PID across wind disturbance scenarios.",
  },
  {
    date: "2023 – 2024",
    title: "Researcher — Quantum Multimodal Oncology",
    company: "AI Research Initiative",
    desc: "Investigating quantum-classical hybrid machine learning for multimodal cancer classification. Combines medical imaging, genomic markers, and clinical metadata through quantum kernel methods.",
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
            Experience &<br />
            <span className="section-heading-light">Research</span>
          </h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((e, i) => (
            <div className={`exp-item reveal delay-${i + 1}`} key={e.title}>
              <div className="exp-date">{e.date}</div>
              <div className="exp-title">{e.title}</div>
              <div className="exp-company">{e.company}</div>
              <p className="exp-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
