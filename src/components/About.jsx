import React, { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-new" ref={sectionRef}>
      <div className="about-container-new">
        <div className={`about-header ${isVisible ? "fade-in" : ""}`}>
          <span className="about-subtitle">Who I Am ?</span>
          <h2 className="about-title">
            Transforming Data Into{" "}
            <span className="gradient-text">Insights</span>
          </h2>
        </div>

        <div className="about-grid-new">
          {/* Left - Main Content */}
          <div className={`about-main ${isVisible ? "slide-left" : ""}`}>
            <p className="about-lead">
              Data Science Enthusiast with a passion for building intelligent,
              data-driven solutions and AI-powered applications.
            </p>

            <p className="about-desc">
              Currently pursuing B.Tech in Computer Science & Engineering at
              Lovely Professional University with a CGPA of 8.2/10. I specialize
              in data analysis, machine learning, and creating impactful
              visualizations using Python, Power BI, and cloud technologies.
            </p>

            <p className="about-desc">
              My expertise spans from performing exploratory data analysis to
              developing AI-powered chatbots and environmental data
              visualization projects. I focus on extracting meaningful insights
              from data while ensuring accuracy, efficiency, and actionable
              outcomes.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Data Analyst</h4>
                  <p>Extracting meaningful insights from complex datasets</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>260+ coding problems solved across platforms</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>AI Enthusiast</h4>
                  <p>Building intelligent solutions with ML and AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats & Education */}
          <div className={`about-sidebar ${isVisible ? "slide-right" : ""}`}>
            <div className="stats-grid-new">
              <div className="stat-item-new">
                <div className="stat-icon">💼</div>
                <div className="stat-content">
                  <span className="stat-num">5+</span>
                  <span className="stat-text">Projects</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <span className="stat-num">5+</span>
                  <span className="stat-text">Certs</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">⚙️</div>
                <div className="stat-content">
                  <span className="stat-num">15+</span>
                  <span className="stat-text">Tech</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">💻</div>
                <div className="stat-content">
                  <span className="stat-num">260+</span>
                  <span className="stat-text">Problems</span>
                </div>
              </div>
            </div>

            <div className="education-box-new">
              <div className="edu-icon">🎓</div>
              <div className="edu-content">
                <h3>Education</h3>
                <h4>Lovely Professional University</h4>
                <p>B.Tech CSE</p>
                <span className="edu-year">2023 – 2027</span>
                <div className="edu-gpa">
                  <span>CGPA</span>
                  <strong>8.2/10</strong>
                </div>
              </div>
            </div>

            <div className="objective-box-new">
              <div className="obj-icon">🎯</div>
              <div className="obj-content">
                <h3>Career Objective</h3>
                <p>
                  Seeking opportunities to leverage my data science, machine
                  learning, and analytical skills to build impactful solutions
                  that drive business decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
