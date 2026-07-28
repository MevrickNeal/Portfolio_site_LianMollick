import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    date: "Jan 2026 – Present",
    title: "Tech Coordinator",
    company: "UrbanGaz Limited — Khilkhet, Dhaka",
    desc: "Developing and implementing strategies to achieve tech development goals. Building and maintaining strong relationships with principal partnership firms in software & hardware. Identifying potential working opportunities and negotiating contracts. Live product: mevrickneal.github.io/UrbanGaz-websiteforthem/",
    link: "https://mevrickneal.github.io/UrbanGaz-websiteforthem/",
  },
  {
    date: "Jun 2025 – Dec 2025",
    title: "Assistant to CEO",
    company: "Cloud Company — Dhaka, Bangladesh",
    desc: "Assisted in strategic planning and operations. Managed client communications and project coordination for freelance services including graphic design, web development, and video editing. cloudcompany.cc",
    link: "https://www.cloudcompany.cc/",
  },
  {
    date: "2021 – 2023",
    title: "Jr. Embedded Engineer (Part-time)",
    company: "Dhumketu Exploration Technologies Ltd. — Mymensingh",
    desc: "Amateur rocket avionics development and testing — weather parameter and sounding rocket testing. Research and development on telemetry and tracking systems. Avionics bay assembly and testing with live broadcasting.",
    link: null,
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
              <p className="exp-desc">{e.desc}</p>
              {e.link && (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    fontFamily: "var(--font-display)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--red)",
                    paddingBottom: 2,
                  }}
                >
                  Visit →
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
