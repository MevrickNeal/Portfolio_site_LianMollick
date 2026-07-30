import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const disciplines = [
  { name: "Software & Hardware Integration", pct: 95 },
  { name: "Control Systems (PID / MRAC / ADRC)", pct: 92 },
  { name: "Thrust Vector Control & 6-DOF Sim", pct: 90 },
  { name: "LPG Reticulated Gas & Industrial IoT", pct: 88 },
  { name: "Technical Documentation & Standard Operating Procedures", pct: 95 },
  { name: "Biomedical & Computer Vision AI", pct: 82 },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">01 / Engineering Core</div>
          <h2 className="section-heading">
            Problem Solver<br />
            <span className="section-heading-light">By Nature &amp; Process</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text-block reveal-left delay-1">
            <div style={{
              background: "var(--light-grey)",
              borderLeft: "4px solid var(--red)",
              padding: "20px 24px",
              marginBottom: 24,
              borderRadius: "0 6px 6px 0",
            }}>
              <p style={{
                fontSize: "clamp(15px, 1.2vw, 19px)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                color: "var(--black)",
                lineHeight: 1.6,
                margin: 0,
              }}>
                "Hi, I am Lian Mollick. I love to solve problems using my engineering knowledge. Throw me in a mess — I know how to fix it, follow process, and make good documentation out of it. I wish to become a very good engineer."
              </p>
            </div>

            <p>
              I am a <strong>B.Sc. Electrical &amp; Electronic Engineering</strong> graduate from Technology Unit, University of Dhaka (Mymensingh Engineering College).
              My work focuses on practical problem solving across software, hardware, control systems, and technical documentation.
            </p>
            <p>
              Currently, I serve as <strong>Tech Coordinator at UrbanGaz Limited</strong> and <strong>Technical Manager at Maestro Tech Ltd.</strong>, leading multi-disciplinary engineering teams, software hardware solutions, and LPG reticulated gas system operations.
            </p>
            <p>
              In research, my flagship work — <strong>Project NEAL</strong> — is a Thrust Vector Control (TVC) flight simulation digital twin built in MATLAB Simulink, evaluating PID, MRAC, and ADRC controllers under disturbance models.
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
