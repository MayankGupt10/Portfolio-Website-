import React from "react";


function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              Mayank<span className="gradient-text">.</span>
            </h3>
            <p className="footer-tagline">
              Transforming data into actionable insights through analytics and
              machine learning.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a onClick={() => scrollToSection("home")}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("about")}>About</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("experience")}>Experience</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("projects")}>Projects</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("skills")}>Skills</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/MayankGupt10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mayank8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:mayankgupta0619@gmail.com">Email</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <p>Chandigarh, India</p>
            <p className="footer-education">B.Tech in Computer Science</p>
            <p>Lovely Professional University</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mayank Gupta. All rights reserved.</p>
          <p className="footer-note">
            Designed & Built with React & Passion 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
