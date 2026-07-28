import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onMouse = (e: MouseEvent) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${e.clientX}px`;
        cursorRingRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMouse);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo">
          Lian<span>.</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          Hire Me
        </a>
      </nav>
    </>
  );
};

export default Navbar;
