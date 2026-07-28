import React, { useEffect, useRef } from "react";

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-driven parallax on hero image
    const onScroll = () => {
      const y = window.scrollY;
      const hero = document.querySelector(".hero-img") as HTMLImageElement;
      if (hero) {
        hero.style.transform = `translateY(${y * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Grid lines bg decoration */}
      <div className="hero-grid-lines">
        {[16.6, 33.3, 50, 66.6, 83.3].map((p, i) => (
          <div key={i} className="hero-grid-line" style={{ left: `${p}%` }} />
        ))}
      </div>

      {/* Left: text */}
      <div className="hero-left" ref={nameRef}>
        <div className="hero-tagline">
          B.Sc. Electrical &amp; Electronic Engineering · AUST
        </div>

        <h1 className="hero-name">
          Lian<br />
          <span className="hero-name-accent">Mollick</span><br />
          Nehal
        </h1>

        <div className="hero-title-line">
          Rocketry · Avionics · GNC
        </div>

        <p className="hero-desc">
          Designing, simulating, and launching the future of aerospace guidance.
          B.Sc. EEE candidate specializing in Thrust Vector Control, 6-DOF flight
          simulation, embedded control systems, and biomedical AI research.
        </p>

        <div className="hero-cta-row">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a
            href="https://github.com/MevrickNeal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right: portrait */}
      <div className="hero-right">
        <img
          src="/lovable-uploads/lian-formal.png"
          alt="Lian Mollick Nehal"
          className="hero-img"
        />
        <div className="hero-img-overlay" />
      </div>

      {/* Stats */}
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">3+</div>
          <div className="hero-stat-label">Major Projects</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">IEEE</div>
          <div className="hero-stat-label">Published Research</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">6-DOF</div>
          <div className="hero-stat-label">Simulation</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <div className="scroll-text">Scroll</div>
      </div>
    </section>
  );
};

export default Hero;
