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
              Engineering candidate at Ahsanullah University of Science &amp; Technology, Dhaka.
              My work sits at the intersection of rocketry, avionics, and intelligent control
              systems.
            </p>
            <p>
              My flagship project — <strong>Project NEAL</strong> — is a full-stack Thrust
              Vector Control (TVC) system built from scratch: from OpenRocket aerodynamics
              modeling to 6-DOF MATLAB Simulink flight simulation, comparing PID, MRAC, and ADRC
              controllers under Monte Carlo uncertainty analysis. It's been developed as an IEEE
              research paper.
            </p>
            <p>
              Beyond rocketry, I built <strong>UrbanGaz</strong> — a smart IoT LPG safety
              dashboard — and contribute to quantum multimodal oncology research. I believe
              every system, from a rocket nozzle to a hospital sensor network, deserves
              precision engineering.
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
                  B.Sc. EEE · Ahsanullah University of Science &amp; Technology<br />
                  Rocketry · GNC · Embedded Systems · Biomedical AI
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
