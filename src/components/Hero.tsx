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
          ⚡ Multi-Disciplinary Systems &amp; Control Engineer · Tech Coordinator
        </div>

        <h1 className="hero-name" style={{ fontSize: "clamp(42px, 6.5vw, 84px)", lineHeight: 1.05 }}>
          Hi, I am<br />
          <span className="hero-name-accent">Lian Mollick</span><br />
          <span style={{ fontSize: "0.55em", fontWeight: 400, opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.05em" }}>Problem Solver &amp; Systems Engineer</span>
        </h1>

        <div className="hero-title-line" style={{ marginTop: 16 }}>
          Hardware · Software · Control Systems · Operations
        </div>

        <p className="hero-desc" style={{ fontSize: "clamp(15px, 1.2vw, 18px)", lineHeight: 1.7, color: "var(--dark-grey)", marginTop: 16, maxWidth: 580 }}>
          I love to solve complex engineering problems using clean design, robust architecture, and systematic methodology. <strong>Throw me in a mess — I know how to fix it, follow a rigorous process, and make exceptional documentation out of it.</strong> My lifelong goal is simple: to become a truly outstanding engineer.
        </p>

        <div className="hero-cta-row" style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#about" className="btn-primary">Explore My Process</a>
          <a href="#projects" className="btn-secondary">View Projects</a>
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
          src="/lovable-uploads/97da3591-aa27-464b-b81c-c8d2f868ba6e.png"
          alt="Lian Mollick Nehal"
          className="hero-img"
        />
        <div className="hero-img-overlay" />
      </div>

      {/* Stats */}
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">10+</div>
          <div className="hero-stat-label">Full-Stack Projects</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">Tech Lead</div>
          <div className="hero-stat-label">UrbanGaz &amp; Maestro Tech</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">IEEE</div>
          <div className="hero-stat-label">Published Research</div>
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
