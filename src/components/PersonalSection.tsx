import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PersonalSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="personal" className="personal-section" ref={ref}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag" style={{ color: "var(--red)" }}>Beyond Engineering</div>
          <h2 className="section-heading" style={{ color: "var(--white)" }}>
            The Person<br />
            <span style={{ color: "rgba(255,255,255,0.25)", fontWeight: 200 }}>Behind the Code</span>
          </h2>
        </div>

        <div className="personal-grid">
          {/* Single High Quality Gym Photo - No Cropping */}
          <div className="personal-img-col reveal-left delay-1">
            <div style={{
              width: "100%",
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "#050505",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}>
              <img
                src="/lovable-uploads/gym-bench-press.jpeg"
                alt="Lian Mollick Nehal — Bench Press Training"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "650px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="personal-content reveal-right delay-2">
            <h3>
              Discipline Builds<br />
              <span>Greatness</span>
            </h3>

            <p>
              Engineering is not just what I do — it is how I think. The same systems-level
              discipline I apply to designing control algorithms, I bring to every challenge in life:
              identify the variable, measure the error, correct the trajectory.
            </p>
            <p>
              Outside the lab, I train consistently — because physical discipline sharpens mental
              discipline. Every hour of structured training teaches me what every good controller
              must embody: patience, consistency, and the relentless pursuit of stability under
              disturbance.
            </p>
            <p>
              I believe that the greatest engineers are not just technically brilliant — they are
              resilient, self-driven, and willing to fail forward. Growth is never linear.
              The simulation rarely matches reality on the first run. That's not a bug —
              that's the process.
            </p>

            <div className="personal-quote">
              <blockquote>
                "The rocket doesn't care how you feel. It only cares if the math is right
                and the system is tuned. So tune yourself first."
              </blockquote>
              <cite>— Lian Mollick Nehal</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
