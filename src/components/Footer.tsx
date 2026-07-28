import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      Lian<span>.</span>Mollick
    </div>
    <div className="footer-copy">
      © {new Date().getFullYear()} · All Rights Reserved
    </div>
    <div className="footer-links">
      <a href="https://github.com/MevrickNeal" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://mevrickneal.github.io/UrbanGaz-websiteforthem/" target="_blank" rel="noopener noreferrer">UrbanGaz</a>
      <a href="mailto:mevrickneal@gmail.com">Email</a>
    </div>
  </footer>
);

export default Footer;
