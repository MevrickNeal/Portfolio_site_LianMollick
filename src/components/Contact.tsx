import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const ref = useScrollReveal();

  const links = [
    {
      label: "Email",
      val: "mevrickneal@gmail.com",
      href: "mailto:mevrickneal@gmail.com",
      arrow: "→",
    },
    {
      label: "GitHub",
      val: "github.com/MevrickNeal",
      href: "https://github.com/MevrickNeal",
      arrow: "→",
    },
    {
      label: "LinkedIn",
      val: "Lian Mollick Nehal",
      href: "#",
      arrow: "→",
    },
    {
      label: "Portfolio",
      val: "mevrickneal.github.io",
      href: "https://mevrickneal.github.io/Portfolio_site_LianMollick/",
      arrow: "→",
    },
  ];

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="section-inner">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="reveal">
              <div className="section-tag">Get In Touch</div>
              <h2 className="section-heading">
                Let's Build<br />
                <span className="section-heading-light">Something</span>
              </h2>
            </div>
            <p className="reveal delay-1">
              Whether you're looking to collaborate on aerospace research, embedded systems,
              or need a rigorous engineer who codes, simulates, and ships — I'd love to hear
              from you.
            </p>
          </div>

          <div className="contact-links reveal-right delay-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">{l.label}</span>
                <span className="contact-link-val">{l.val}</span>
                <span className="contact-link-arrow">{l.arrow}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
