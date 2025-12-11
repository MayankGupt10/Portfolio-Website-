import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      title: "Real-Time Process Monitoring Dashboard",
      period: "July 2025",
      description:
        "Built a real-time process monitoring dashboard that tracks key operational metrics, detects anomalies, and provides automated alerts using Python, Pandas, and visualization tools. The dashboard continuously reads and processes live data streams, enabling faster decision-making and improved process efficiency",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Real-Time Monitoring", "Data Processing"],
      icon: "📊",
      link: "https://github.com/MayankGupt10/Real-Time-Process-Monitoring",
      highlights: [
       "Real-time tracking of critical process KPIs",
    "Automated anomaly detection based on statistical thresholds",
    "Dynamic visualizations updating with live data",
    "End-to-end data pipeline: ingestion → processing → visualization",
    "Improves operational transparency and decision-making"
      ],
      color: "#0066FF",
    },
    {
      title: "Startup Vision AI",
      period: "June 2025 – July 2025",
      description:
        "AI-powered chatbot that evaluates startup ideas using market data with responsive interface and structured feedback features to assess feasibility and risks.",
      tech: ["React", "TypeScript", "Tailwind CSS", "OpenAI API"],
      icon: "🤖",
      link: "https://github.com/MayankGupt10/Startup-Vision",
      highlights: [
        "AI-powered validation",
        "Market data analysis",
        "Risk assessment",
      ],
      color: "#00BFFF",
    },
    {
      title: "Air Quality Index (AQI) Visualization",
      period: "May 2025 – July 2025",
      description:
        "AQI data visualization analyzing PM2.5, PM10, NO₂, and O₃ levels across regions to identify pollution trends and critical hotspots with data-driven insights.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
      icon: "🌍",
      link: "https://github.com/MayankGupt10/Data-Visualization-on-AQI",
      highlights: [
        "Pollution trend analysis",
        "Multi-region insights",
        "Data preprocessing",
      ],
      color: "#0099FF",
    },
  ];

  return (
    <section id="projects" className="projects-new" ref={sectionRef}>
      <div className="projects-container-new">
        <div className={`projects-header ${isVisible ? "fade-in" : ""}`}>
          <span className="projects-subtitle">My Work!</span>
          <h2 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-desc">
            Transforming data into actionable insights with modern analytics
            tools
          </p>
        </div>

        <div className="projects-grid-new">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card-new ${isVisible ? "slide-up" : ""} ${
                activeProject === index ? "active" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="project-top">
                <div
                  className="project-icon-new"
                  style={{ color: project.color }}
                >
                  {project.icon}
                </div>
                <span className="project-period-new">{project.period}</span>
              </div>

              <h3 className="project-title-new">{project.title}</h3>
              <p className="project-description-new">{project.description}</p>

              <div className="project-highlights-new">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="project-tech-new">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="tech-badge-new"
                    style={{ borderColor: project.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-new"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, rgba(255,255,255,0.1))`,
                }}
              >
                <span>View Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
