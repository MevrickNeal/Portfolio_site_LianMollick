import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const ref = useScrollReveal();

  const links = [
    {
      label: "Email",
      val: "lianmollik@gmail.com",
      href: "mailto:lianmollik@gmail.com",
    },
    {
      label: "Phone",
      val: "+880 1518 664917",
      href: "tel:+8801518664917",
    },
    {
      label: "GitHub",
      val: "github.com/MevrickNeal",
      href: "https://github.com/MevrickNeal",
    },
    {
      label: "LinkedIn",
      val: "linkedin.com/in/lianmollick",
      href: "https://www.linkedin.com/in/lianmollick",
    },
    {
      label: "UrbanGaz Live",
      val: "mevrickneal.github.io/UrbanGaz-websiteforthem/",
      href: "https://mevrickneal.github.io/UrbanGaz-websiteforthem/",
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
            <p className="reveal delay-1" style={{ marginTop: 24 }}>
              Whether you're looking to collaborate on aerospace research, embedded systems,
              or need a rigorous engineer who codes, simulates, and ships — I'd love to hear
              from you.
            </p>
            <p className="reveal delay-2" style={{ marginTop: 0, fontSize: 13, color: "var(--mid-grey)" }}>
              Based in Dhaka, Bangladesh · Available for remote research collaboration &amp; full-time roles.
            </p>
          </div>

          <div className="reveal-right delay-2">
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
                <span className="contact-link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
