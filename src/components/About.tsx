import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const disciplines = [
  { name: "Thrust Vector Control", pct: 92 },
  { name: "6-DOF Flight Simulation", pct: 88 },
  { name: "Embedded C / Python", pct: 85 },
  { name: "Control Systems (PID/MRAC/ADRC)", pct: 90 },
  { name: "MATLAB / Simulink", pct: 87 },
  { name: "Biomedical AI Research", pct: 78 },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">About Me</div>
          <h2 className="section-heading">
            Engineer<br />
            <span className="section-heading-light">By Nature</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text-block reveal-left delay-1">
            <p>
              I'm <strong>Lian Mollick Nehal</strong> — a B.Sc. Electrical &amp; Electronic
              Engineering graduate from Technology Unit, University of Dhaka (Mymensingh Engineering College).
              My work sits at the intersection of rocketry, avionics, industrial IoT, and intelligent control
              systems.
            </p>
            <p>
              My flagship academic research — <strong>Project NEAL</strong> — is a full-stack Thrust
              Vector Control (TVC) system built from scratch: from OpenRocket aerodynamics
              modeling to 6-DOF MATLAB Simulink flight simulation, comparing PID, MRAC, and ADRC
              controllers under Monte Carlo uncertainty analysis.
            </p>
            <p>
              Professionally, I serve as <strong>Tech Coordinator at UrbanGaz Limited</strong> and
              <strong>Technical Manager at Maestro Tech Ltd.</strong> (its sister concern), leading software,
              hardware, team building, and LPG reticulated system operations.
            </p>

            <div className="about-disciplines">
              {disciplines.map((d) => (
                <div className="discipline-item" key={d.name}>
                  <span className="discipline-name">{d.name}</span>
                  <div className="discipline-bar">
                    <div
                      className="discipline-fill"
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="about-img-block reveal-right delay-2">
            <div className="about-img-frame">
              <img
                src="/lovable-uploads/lian-formal.png"
                alt="Lian Mollick Nehal — Professional Portrait"
              />
              <div className="about-img-caption">
                <p>
                  B.Sc. EEE · Technology Unit, University of Dhaka (MEC)<br />
                  Rocketry · GNC · Embedded Systems · Industrial IoT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
